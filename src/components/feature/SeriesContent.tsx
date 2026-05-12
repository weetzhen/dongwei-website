import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export interface SeriesProduct {
  id: string;
  model: string;
  description: string;
  image: string;
  detailPath: string;
}

export interface SeriesSubCategory {
  id: string;
  name: string;
  products: SeriesProduct[];
}

export type SeriesContentVariant = 'default' | 'compact';

export interface SeriesContentProps {
  categories: SeriesSubCategory[];
  seriesTitle?: string;
  productCountLabel?: string;
  /** Sticky tabs 距离顶部的偏移量（默认 56px） */
  topOffset?: number;
  /** 是否启用分类高亮随滚动同步 */
  enableScrollSync?: boolean;
  /** 是否隐藏 sticky tabs（如 all 页面中每个 series 区块不需要自己的 tabs） */
  hideTabs?: boolean;
  /** 样式变体：default 用于分类页面，compact 用于 all 页面聚合展示 */
  variant?: SeriesContentVariant;
  /** 初始激活的分类 ID（用于从 URL 参数传入，自动滚动定位） */
  initialCategory?: string;
}

export default function SeriesContent({
  categories,
  seriesTitle,
  productCountLabel = '\u6B3E',
  topOffset: topOffsetProp = 56,
  enableScrollSync = true,
  hideTabs = false,
  variant = 'default',
  initialCategory,
}: SeriesContentProps) {
  const [activeCategory, setActiveCategory] = useState<string>(
    initialCategory || categories[0]?.id || ''
  );
  const [navHeight, setNavHeight] = useState<number>(56);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const tabsRef = useRef<HTMLDivElement | null>(null);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hasScrolledToInitialRef = useRef(false);

  const activeIndex = categories.findIndex((c) => c.id === activeCategory);
  const isSingleCategory = categories.length === 1;

  // 动态测量 navbar 实际高度
  useEffect(() => {
    const updateNavHeight = () => {
      const nav = document.querySelector('nav');
      if (nav) {
        setNavHeight(nav.offsetHeight);
      }
    };
    updateNavHeight();
    window.addEventListener('resize', updateNavHeight);
    return () => window.removeEventListener('resize', updateNavHeight);
  }, []);

  const effectiveTopOffset = Math.max(navHeight, topOffsetProp);

  // 根据 URL 参数 initialCategory 自动滚动定位
  useEffect(() => {
    hasScrolledToInitialRef.current = false;
    if (!initialCategory) return;

    const cat = categories.find((c) => c.id === initialCategory);
    if (!cat) return;

    const tryScroll = (attempt: number = 0) => {
      const element = sectionRefs.current[initialCategory];
      if (!element) {
        if (attempt < 15) {
          setTimeout(() => tryScroll(attempt + 1), 100);
        }
        return;
      }

      hasScrolledToInitialRef.current = true;
      setActiveCategory(initialCategory);

      const navbar = document.querySelector('nav') as HTMLElement | null;
      const navbarH = navbar ? navbar.offsetHeight : 80;
      const tabsH = tabsRef.current?.offsetHeight || 0;
      const offset = navbarH + tabsH + 8;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      isScrollingRef.current = true;
      window.scrollTo({ top: Math.max(0, offsetPosition), behavior: 'smooth' });

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    };

    const timer = setTimeout(() => tryScroll(), 300);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialCategory]);

  useEffect(() => {
    if (isSingleCategory) return;

    const getOffset = () => {
      const navbar = document.querySelector('nav') as HTMLElement | null;
      const navbarH = navbar ? navbar.offsetHeight : 80;
      const tabsH = tabsRef.current?.offsetHeight || 56;
      return navbarH + tabsH + 24;
    };

    const handleScroll = () => {
      if (!enableScrollSync || isScrollingRef.current) return;
      const scrollPosition = window.scrollY + getOffset();
      for (const cat of categories) {
        const element = sectionRefs.current[cat.id];
        if (element) {
          const elementTop = element.getBoundingClientRect().top + window.scrollY;
          const elementHeight = element.offsetHeight;
          if (scrollPosition >= elementTop && scrollPosition < elementTop + elementHeight) {
            setActiveCategory(cat.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [categories, effectiveTopOffset, enableScrollSync, isSingleCategory]);

  const scrollToCategory = (categoryId: string) => {
    const element = sectionRefs.current[categoryId];
    if (!element) return;

    const navbar = document.querySelector('nav') as HTMLElement | null;
    const navbarH = navbar ? navbar.offsetHeight : 80;
    const tabsH = tabsRef.current?.offsetHeight || 0;
    const offset = navbarH + tabsH + 8;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    isScrollingRef.current = true;
    window.scrollTo({ top: Math.max(0, offsetPosition), behavior: 'smooth' });

    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  };

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    scrollToCategory(categoryId);
  };

  return (
    <>
      {/* Sticky Category Tabs - 仅在多个分类时显示，且未显式隐藏 */}
      {!hideTabs && !isSingleCategory && (
        <div
          ref={tabsRef}
          className="sticky z-30 bg-white/70 backdrop-blur-md border-b border-white/30 shadow-sm"
          style={{ top: `${effectiveTopOffset}px` }}
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="flex items-center justify-center flex-wrap gap-1 py-0 px-4 md:px-8">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className="relative px-4 md:px-6 py-4 text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap"
                  style={{
                    color: activeCategory === cat.id ? '#f6444e' : '#374151',
                  }}
                >
                  {cat.name}
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-all duration-200"
                    style={{
                      backgroundColor: '#f6444e',
                      opacity: activeCategory === cat.id ? 1 : 0,
                    }}
                  ></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8 md:py-12">
        {categories.map((cat, catIdx) => (
          <div
            key={cat.id}
            ref={(el) => { sectionRefs.current[cat.id] = el; }}
            className="mb-12 md:mb-16"
          >
            {/* Category Header */}
            <div className={`flex items-center gap-3 md:gap-4 ${variant === 'compact' ? 'mb-5' : 'mb-6 md:mb-8'}`}>
              {variant === 'compact' ? (
                <>
                  <div
                    className="w-1 h-5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: '#f6444e' }}
                  ></div>
                  <h3 className="text-base md:text-lg font-bold text-gray-800 whitespace-nowrap">
                    {cat.name}
                  </h3>
                </>
              ) : isSingleCategory && seriesTitle ? (
                <h2
                  className="text-2xl md:text-3xl font-bold whitespace-nowrap"
                  style={{ color: '#144c90' }}
                >
                  {seriesTitle}
                </h2>
              ) : (
                <h3
                  className="text-xl md:text-2xl font-bold whitespace-nowrap"
                  style={{ color: '#144c90' }}
                >
                  {cat.name}
                </h3>
              )}
              <div className="flex-1 h-px bg-gray-100"></div>
              <span className="text-xs md:text-sm text-gray-400 font-medium whitespace-nowrap">
                {cat.products.length} {productCountLabel}
              </span>
            </div>

            {/* Product Cards */}
            <div
              className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 ${variant === 'default' ? 'md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5' : ''}`}
              data-product-shop
            >
              {cat.products.map((product) => (
                <Link
                  key={product.id}
                  to={product.detailPath}
                  className="bg-white rounded-lg md:rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden"
                >
                  <div className="w-full aspect-square overflow-hidden bg-gray-50">
                    <img
                      src={product.image}
                      alt={product.model}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3 md:p-4">
                    <div className="text-xs md:text-sm font-bold text-gray-900 mb-1 group-hover:text-[#f6444e] transition-colors duration-200 line-clamp-1">
                      {product.model}
                    </div>
                    <div className="text-[10px] md:text-xs text-gray-400 line-clamp-1">
                      {product.description}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}