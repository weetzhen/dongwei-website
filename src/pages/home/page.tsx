import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import ContactSection from '@/components/feature/ContactSection';

function useMaintenanceSwitch() {
  useEffect(() => {
    let passwordBuffer = '';
    let listening = false;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const resetListener = () => {
      listening = false;
      passwordBuffer = '';
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = null;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl + Shift + M 触发密码监听
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'm') {
        e.preventDefault();
        listening = true;
        passwordBuffer = '';
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(resetListener, 10000);
        return;
      }
      if (!listening) return;
      if (e.key >= '0' && e.key <= '9') {
        passwordBuffer += e.key;
        if (passwordBuffer.length >= 4) {
          if (passwordBuffer === '8888') {
            const current = localStorage.getItem('i18n_maintenance_mode');
            const newMode = current === 'true' ? 'false' : 'true';
            localStorage.setItem('i18n_maintenance_mode', newMode);
            window.location.reload();
          } else {
            resetListener();
          }
        }
      } else if (e.key === 'Escape') {
        resetListener();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);
}



// 跳转到产品页并滚动到标题
function useProductNavigation() {
  const navigate = useNavigate();
  const goToProduct = (path: string) => {
    navigate(path);
    setTimeout(() => {
      const el = document.getElementById('page-title');
      if (el) {
        const navbar = document.querySelector('nav') as HTMLElement | null;
        const offset = navbar ? navbar.offsetHeight + 16 : 96;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 400);
  };
  return goToProduct;
}

export default function Home() {
  const { t } = useTranslation();
  useMaintenanceSwitch();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isSwiping, setIsSwiping] = useState(false);
  const [swipeDelta, setSwipeDelta] = useState(0);
  const [isSnapping, setIsSnapping] = useState(false);
  const [swipeNoTransition, setSwipeNoTransition] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const goToProduct = useProductNavigation();
  //首页主图轮播
  const heroSlides = [
    {
      subtitle: t('hero1_subtitle'),
      title: t('hero1_title'),
      description: t('hero1_desc'),
      cta: t('hero1_cta'),
      image: '/img/page/jzi.jpg',
    },
    {
      subtitle: t('hero2_subtitle'),
      title: t('hero2_title'),
      description: t('hero2_desc'),
      cta: t('hero2_cta'),
      image: '/img/page/qzhuan.jpg',
    },
    {
      subtitle: t('hero3_subtitle'),
      title: t('hero3_title'),
      description: t('hero3_desc'),
      cta: t('hero3_cta'),
      image: '/img/page/qjfu.jpg',
    },
    {
      subtitle: t('hero4_subtitle'),
      title: t('hero4_title'),
      description: t('hero4_desc'),
      cta: t('hero4_cta'),
      image: '/img/page/dqiang1.jpg',
    },
    {
      subtitle: t('hero5_subtitle'),
      title: t('hero5_title'),
      description: t('hero5_desc'),
      cta: t('hero5_cta'),
      image: '/img/page/dqiang2.jpg',
    },
  ];

  useEffect(() => {
    if (isHovering || isSwiping) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovering, isSwiping, heroSlides.length]);

  // 阻止横向滑动时页面上下滚动
  useEffect(() => {
    const section = heroRef.current;
    if (!section) return;
    const handler = (e: TouchEvent) => {
      if (isSwiping) e.preventDefault();
    };
    section.addEventListener('touchmove', handler, { passive: false });
    return () => section.removeEventListener('touchmove', handler);
  }, [isSwiping]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  // 触摸滑动支持
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const prevIndex = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
  const nextIndex = (currentSlide + 1) % heroSlides.length;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    setIsSnapping(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    const dy = e.touches[0].clientY - touchStartY.current;
    if (!isSwiping) {
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 8) {
        setIsSwiping(true);
        setSwipeDelta(dx);
      }
      return;
    }
    setSwipeDelta(dx);
  };

  const handleTouchEnd = () => {
    if (!isSwiping || touchStartX.current === null) {
      touchStartX.current = null;
      touchStartY.current = null;
      setIsSwiping(false);
      return;
    }
    const containerW = heroRef.current?.offsetWidth || window.innerWidth;
    // 快照：在任何 state 变更前锁定当前 indices，防止 currentSlide 更新后 overlay 图片重排
    const snapPrev = prevIndex;
    const snapNext = nextIndex;
    setIsSnapping(true);

    if (swipeDelta < -40) {
      // 仅让 overlay 飞出，不动 currentSlide（避免 overlay 图片重排导致混乱动画）
      setSwipeDelta(-containerW);
      setTimeout(() => {
        // overlay 动画结束后，同一帧内：关背景 transition + 切背景图 + 移除 overlay
        setSwipeNoTransition(true);
        setCurrentSlide(snapNext);
        setIsSwiping(false);
        setSwipeDelta(0);
        setIsSnapping(false);
        setTimeout(() => setSwipeNoTransition(false), 50);
      }, 280);
    } else if (swipeDelta > 40) {
      setSwipeDelta(containerW);
      setTimeout(() => {
        setSwipeNoTransition(true);
        setCurrentSlide(snapPrev);
        setIsSwiping(false);
        setSwipeDelta(0);
        setIsSnapping(false);
        setTimeout(() => setSwipeNoTransition(false), 50);
      }, 280);
    } else {
      setSwipeDelta(0);
      setTimeout(() => {
        setIsSwiping(false);
        setIsSnapping(false);
      }, 280);
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const showcaseProducts = [
    {
      image: '/img/homefl/zs_dq2.jpg',
      nameKey: 'cat_nail_guns',
      path: '/products/nail-guns',
    },
    {
      image: '/img/homefl/zs_gz.jpg',
      nameKey: 'cat_garden_tools',
      path: '/products/garden-tools',
    },
    {
      image: '/img/homefl/zs_ld.jpg',
      nameKey: 'cat_brushless',
      path: '/products/brushless',
    },
    {
      image: '/img/homefl/zs_gf.jpg',
      nameKey: 'cat_workshop',
      path: '/products/workshop',
    },
    {
      image: '/img/homefl/zs_md.jpg',
      nameKey: 'cat_sharpening',
      path: '/products/sharpening',
    },
  ];

  return (
    <>

      {/* Hero Slider */}
      <section
        ref={heroRef}
        className="relative overflow-hidden w-full aspect-[16/9] md:aspect-auto md:[height:clamp(320px,60vw,880px)]"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* 自动轮播：渐隐切换 */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 ${swipeNoTransition ? '' : 'transition-opacity duration-700'} ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="absolute inset-0">
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover object-center" />
            </div>
            <div className="relative h-full max-w-[1400px] mx-auto px-6 flex items-center">
            </div>
          </div>
        ))}

        {/* 手指滑动层：跟随手指移动，仅在 touch 时出现 */}
        {isSwiping && (
          <div className="absolute inset-0 z-20" style={{ touchAction: 'none' }}>
            {/* 上一张 */}
            <div
              className="absolute inset-0"
              style={{
                transform: `translateX(calc(-100% + ${swipeDelta}px))`,
                transition: isSnapping ? 'transform 0.28s cubic-bezier(0.25,0.46,0.45,0.94)' : 'none',
                willChange: 'transform',
              }}
            >
              <img src={heroSlides[prevIndex].image} alt={heroSlides[prevIndex].title} className="w-full h-full object-cover object-center" />
            </div>
            {/* 当前张 */}
            <div
              className="absolute inset-0"
              style={{
                transform: `translateX(${swipeDelta}px)`,
                transition: isSnapping ? 'transform 0.28s cubic-bezier(0.25,0.46,0.45,0.94)' : 'none',
                willChange: 'transform',
              }}
            >
              <img src={heroSlides[currentSlide].image} alt={heroSlides[currentSlide].title} className="w-full h-full object-cover object-center" />
            </div>
            {/* 下一张 */}
            <div
              className="absolute inset-0"
              style={{
                transform: `translateX(calc(100% + ${swipeDelta}px))`,
                transition: isSnapping ? 'transform 0.28s cubic-bezier(0.25,0.46,0.45,0.94)' : 'none',
                willChange: 'transform',
              }}
            >
              <img src={heroSlides[nextIndex].image} alt={heroSlides[nextIndex].title} className="w-full h-full object-cover object-center" />
            </div>
          </div>
        )}

        <button onClick={prevSlide} className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-9 h-9 md:w-14 md:h-14 flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-colors cursor-pointer z-10">
          <i className="ri-arrow-left-s-line text-xl md:text-3xl text-white"></i>
        </button>
        <button onClick={nextSlide} className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-9 h-9 md:w-14 md:h-14 flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-colors cursor-pointer z-10">
          <i className="ri-arrow-right-s-line text-xl md:text-3xl text-white"></i>
        </button>
        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-10">
          {heroSlides.map((_, index) => (
            <button key={index} onClick={() => setCurrentSlide(index)} className={`h-2 md:h-3 rounded-full transition-all cursor-pointer ${index === currentSlide ? 'w-6 md:w-8' : 'w-2 md:w-3 bg-white/50'}`} style={index === currentSlide ? { backgroundColor: '#144c90' } : {}} />
          ))}
        </div>
      </section>

      {/* Latest Products Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-black text-gray-900">{t('latest_products')}</h2>
            <div className="w-16 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: '#f6444e' }}></div>
          </div>
          {/*最新产品间距*/}
          <div className="flex flex-col sm:flex-row justify-center" style={{ gap: '100px' }}> 
            {[
              {
                image: '/img/homefl/zs_dq1.jpg',
                nameKey: 'products.gardenTools.polePruner.003.description',
                path: '/products/garden-tools/pole-pruner/pp-003',
              },
              {
                image: '/img/homefl/new2.jpg',
                nameKey: 'new_cordless_nail_gun_home',
                path: '/products/nail-guns/20v/J-150',
              },
            ].map((product, index) => (
              <div
                key={index}
                onClick={() => goToProduct(product.path)}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                style={{ width: '380px', maxWidth: '100%', aspectRatio: '3/4' }}
              >
                <img
                  src={product.image}
                  alt={t(product.nameKey)}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="text-white text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: '#f6444e' }}>{t(product.tagKey)}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3 className="text-white text-base md:text-xl font-bold">{t(product.nameKey)}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-4xl font-black text-gray-900">{t('product_showcase')}</h2>
            <div className="w-16 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: '#f6444e' }}></div>
          </div>
        </div>
        <div className="w-full px-2 md:px-2">
          {/* 桌面端：5列横排 */}
          <div className="hidden md:flex gap-2" data-product-shop>
            {showcaseProducts.map((product, index) => (
              <div
                key={index}
                onClick={() => goToProduct(product.path)}
                className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group flex-1"
                style={{ minWidth: 0, aspectRatio: '3/4' }}
              >
                <img
                  src={product.image}
                  alt={t(product.nameKey)}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-base font-bold">{t(product.nameKey)}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* 手机端：2×2网格 + 中间第5个 */}
          <div className="grid grid-cols-2 gap-2 md:hidden px-0 relative" data-product-shop>
            {/* 四个角产品 */}
            {showcaseProducts.slice(0, 4).map((product, index) => (
              <div
                key={index}
                onClick={() => goToProduct(product.path)}
                className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
                style={{ aspectRatio: '3/4' }}
              >
                <img
                  src={product.image}
                  alt={t(product.nameKey)}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                {/* 左列靠左，右列靠右 */}
                <div className={`absolute bottom-0 p-3 ${index % 2 === 0 ? 'left-0 right-0 text-left' : 'left-0 right-0 text-right'}`}>
                  <h3 className="text-white text-xs font-bold leading-tight">{t(product.nameKey)}</h3>
                </div>
              </div>
            ))}

            {/* 第五个产品：正方形，绝对定位居中，带5px白色边框 */}
            <div
              onClick={() => goToProduct(showcaseProducts[4].path)}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
              style={{
                width: 'calc(50% - 16px)',
                aspectRatio: '1/1',
                border: '5px solid white',
              }}
            >
              <img
                src={showcaseProducts[4].image}
                alt={t(showcaseProducts[4].nameKey)}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              {/* 中间第5个：居中贴近下方 */}
              <div className="absolute bottom-0 left-0 right-0 p-2 flex justify-center">
                <h3 className="text-white text-xs font-bold leading-tight text-center">{t(showcaseProducts[4].nameKey)}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Scale Section */}
      <section id="production-scale" className="py-12 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-black mb-3 md:mb-4">{t('prod_title')}</h2>
            <p className="text-base md:text-xl text-gray-600">{t('prod_subtitle')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-10 md:mb-16">
            {[
              { numKey: 'stat1_num', labelKey: 'stat1_label', icon: 'ri-tools-fill' },
              { numKey: 'stat2_num', labelKey: 'stat2_label', icon: 'ri-building-4-fill' },
              { numKey: 'stat3_num', labelKey: 'stat3_label', icon: 'ri-building-fill' },
              { numKey: 'stat4_num', labelKey: 'stat4_label', icon: 'ri-team-fill' },
            ].map((stat, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-5 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full mx-auto mb-4 md:mb-6" style={{ backgroundColor: '#eef3fa', color: '#144c90' }}>
                  <i className={`${stat.icon} text-2xl md:text-3xl`}></i>
                </div>
                <div className="text-3xl md:text-5xl font-black mb-2 md:mb-3" style={{ color: '#f6444e' }}>{t(stat.numKey)}</div>
                <div className="text-gray-600 font-semibold text-sm md:text-lg">{t(stat.labelKey)}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-black mb-5 md:mb-6">{t('facility_title')}</h3>
              <div className="space-y-4 md:space-y-6">
                {[
                  { titleKey: 'fac1_title', descKey: 'fac1_desc', icon: 'ri-robot-fill' },
                  { titleKey: 'fac2_title', descKey: 'fac2_desc', icon: 'ri-shield-check-fill' },
                  { titleKey: 'fac3_title', descKey: 'fac3_desc', icon: 'ri-lightbulb-fill' },
                  { titleKey: 'fac4_title', descKey: 'fac4_desc', icon: 'ri-truck-fill' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg flex-shrink-0" style={{ backgroundColor: '#144c90' }}>
                      <i className={`${item.icon} text-xl md:text-2xl text-white`}></i>
                    </div>
                    <div>
                      <div className="font-bold text-base md:text-xl mb-1 md:mb-2">{t(item.titleKey)}</div>
                      <div className="text-gray-600 leading-relaxed text-sm md:text-base">{t(item.descKey)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="https://readdy.ai/api/search-image?query=modern%20industrial%20factory%20production%20line%20with%20automated%20machinery%20and%20workers%20in%20safety%20gear%20manufacturing%20power%20tools%20clean%20bright%20facility%20professional%20photography&width=800&height=900&seq=factory1&orientation=portrait" alt="Production Facility" className="w-full h-auto rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Strength Section */}
      <section id="brand-strength" className="py-16 md:py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d3a72 0%, #144c90 50%, #1a5ca8 100%)' }}>
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-sm font-bold tracking-widest uppercase" style={{ backgroundColor: 'rgba(246,68,78,0.15)', color: '#f6444e', border: '1px solid rgba(246,68,78,0.3)' }}>
              <i className="ri-award-fill text-base"></i>
              {t('brand_label')}
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">{t('brand_title')}</h2>
            <p className="text-base md:text-lg" style={{ color: 'rgba(255,255,255,0.7)' }}>{t('brand_subtitle')}</p>
          </div>

          {/* Milestones Timeline */}
          <div className="mb-16 md:mb-24">
            <div className="relative">
              <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), rgba(255,255,255,0.2), rgba(255,255,255,0.2), transparent)' }}></div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {[
                  { yearKey: 'mile1_year', titleKey: 'mile1_title', descKey: 'mile1_desc', icon: 'ri-flag-fill' },
                  { yearKey: 'mile2_year', titleKey: 'mile2_title', descKey: 'mile2_desc', icon: 'ri-global-fill' },
                  { yearKey: 'mile3_year', titleKey: 'mile3_title', descKey: 'mile3_desc', icon: 'ri-lightbulb-fill' },
                  { yearKey: 'mile4_year', titleKey: 'mile4_title', descKey: 'mile4_desc', icon: 'ri-trophy-fill' },
                ].map((milestone, index) => (
                  <div key={index} className="flex flex-col items-center text-center group">
                    <div className="relative z-10 w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-full mb-4 md:mb-6 transition-transform duration-300 group-hover:scale-110" style={{ background: 'linear-gradient(135deg, #f6444e, #d63040)', boxShadow: '0 8px 24px rgba(246,68,78,0.4)' }}>
                      <i className={`${milestone.icon} text-lg md:text-2xl text-white`}></i>
                    </div>
                    <div className="text-2xl md:text-4xl font-black mb-1 md:mb-2" style={{ color: '#f6444e' }}>{t(milestone.yearKey)}</div>
                    <div className="font-bold text-white text-sm md:text-lg mb-1 md:mb-2">{t(milestone.titleKey)}</div>
                    <div className="text-xs leading-relaxed px-1 md:px-2" style={{ color: 'rgba(255,255,255,0.6)' }}>{t(milestone.descKey)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications + Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-stretch mb-16 md:mb-24">
            <div className="rounded-2xl p-5 md:p-8" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)' }}>
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0" style={{ backgroundColor: '#f6444e' }}>
                  <i className="ri-shield-star-fill text-white text-lg"></i>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white">{t('cert_title')}</h3>
              </div>
              <div className="grid grid-cols-1 gap-2 md:gap-3">
                {['cert1', 'cert2', 'cert3', 'cert4', 'cert5', 'cert6', 'cert7', 'cert8'].map((certKey, i) => (
                  <div key={i} className="flex items-center gap-3 px-3 md:px-4 py-2.5 md:py-3 rounded-xl transition-all duration-200 hover:bg-white/10" style={{ background: 'rgba(255,255,255,0.04)' }}>
                    <div className="w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0" style={{ backgroundColor: 'rgba(246,68,78,0.2)', border: '1px solid rgba(246,68,78,0.5)' }}>
                      <i className="ri-check-line text-xs" style={{ color: '#f6444e' }}></i>
                    </div>
                    <span className="text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>{t(certKey)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: '300px' }}>
              <img
                src="/img/homefl/cpjh.jpg"
                alt="Brand Strength"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,58,114,0.5) 0%, rgba(13,58,114,0) 60%, transparent 100%)' }}></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {[
                    { num: '500+', label: t('stat1_label') },
                    { num: '50+', label: t('deep_stat3_label') },
                  ].map((s, i) => (
                    <div key={i} className="text-center rounded-xl py-3 md:py-4 px-3" style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}>
                      <div className="text-2xl md:text-3xl font-black" style={{ color: '#f6444e' }}>{s.num}</div>
                      <div className="text-white text-xs mt-1 font-medium">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Partners */}
          <div>
            <div className="text-center mb-8 md:mb-10">
              <h3 className="text-2xl md:text-3xl font-black text-white">{t('partner_title')}</h3>
              <div className="w-12 h-0.5 mx-auto mt-4 rounded-full" style={{ backgroundColor: '#f6444e' }}></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { nameKey: 'partner1_name', descKey: 'partner1_desc', icon: 'ri-store-3-fill' },
                { nameKey: 'partner2_name', descKey: 'partner2_desc', icon: 'ri-home-4-fill' },
                { nameKey: 'partner3_name', descKey: 'partner3_desc', icon: 'ri-shopping-cart-fill' },
                { nameKey: 'partner4_name', descKey: 'partner4_desc', icon: 'ri-building-4-fill' },
              ].map((partner, index) => (
                <div key={index} className="group relative rounded-2xl p-4 md:p-6 text-center transition-all duration-300 cursor-pointer overflow-hidden hover:-translate-y-1" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, rgba(246,68,78,0.15), rgba(255,255,255,0.05))' }}></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full mx-auto mb-3 md:mb-4" style={{ background: 'rgba(246,68,78,0.15)', border: '1px solid rgba(246,68,78,0.3)' }}>
                      <i className={`${partner.icon} text-xl md:text-2xl`} style={{ color: '#f6444e' }}></i>
                    </div>
                    <div className="text-base md:text-xl font-black text-white mb-1">{t(partner.nameKey)}</div>
                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>{t(partner.descKey)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactSection />

    </>
  );
}