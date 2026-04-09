import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';
import ContactSection from '../../../components/feature/ContactSection';

export default function NailGunsPage() {
  const { t } = useTranslation();
  const { category } = useParams<{ category?: string }>();
  const location = useLocation();
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const hasScrolled = useRef(false);
  const [activeCategory, setActiveCategory] = useState<string>(category || '4v');

  const CATEGORIES = [
    {
      id: '4v',
      label: '4V',
      products: [
        { id: 'J-120', name: 'J-120', descKey: 'nail_4v_f15_desc', image: '/img/CP/dqiang/4V/J-120/1300-J-120-01.jpg' },
        { id: 'J-125', name: 'J-125', descKey: 'nail_4v_f20_desc', image: '/img/CP/dqiang/4V/J-125/1300-J-125-01.jpg' },
        { id: 'J-126', name: 'J-126', descKey: 'nail_4v_j64_desc', image: '/img/CP/dqiang/4V/J-126/1300-J-126-01.jpg' },       
        { id: 'J-139', name: 'J-139', descKey: 'nail_4v_t50_desc', image: '/img/CP/dqiang/4V/J-139/1300-J139-01.jpg' },
        { id: 'J-153', name: 'J-153', descKey: 'nail_4v_u22_desc', image: '/img/CP/dqiang/4V/J-153/1300-J153-01.jpg' },
        //{ id: 'lk-4v-n50', name: 'LK-4V-N50', descKey: 'nail_4v_n50_desc', image: 'https://readdy.ai/api/search-image?query=professional%204V%20lithium%20cordless%20N-nail%20gun%20compact%20on%20clean%20white%20background%20product%20photography%20studio%20lighting%20high%20quality%20black%20gray&width=400&height=400&seq=4v-p6&orientation=squarish' },
        //{ id: 'lk-4v-b18', name: 'LK-4V-B18', descKey: 'nail_4v_b18_desc', image: 'https://readdy.ai/api/search-image?query=professional%204V%20lithium%20cordless%20B-nail%20gun%20compact%20on%20clean%20white%20background%20product%20photography%20studio%20lighting%20high%20quality%20black%20gray&width=400&height=400&seq=4v-p7&orientation=squarish' },
        //{ id: 'lk-4v-c25', name: 'LK-4V-C25', descKey: 'nail_4v_c25_desc', image: 'https://readdy.ai/api/search-image?query=professional%204V%20lithium%20cordless%20C-nail%20gun%20compact%20on%20clean%20white%20background%20product%20photography%20studio%20lighting%20high%20quality%20black%20gray&width=400&height=400&seq=4v-p8&orientation=squarish' },
        //{ id: 'lk-4v-d30', name: 'LK-4V-D30', descKey: 'nail_4v_d30_desc', image: 'https://readdy.ai/api/search-image?query=professional%204V%20lithium%20cordless%20D-nail%20gun%20compact%20on%20clean%20white%20background%20product%20photography%20studio%20lighting%20high%20quality%20black%20gray&width=400&height=400&seq=4v-p9&orientation=squarish' },
        //{ id: 'lk-4v-e40', name: 'LK-4V-E40', descKey: 'nail_4v_e40_desc', image: 'https://readdy.ai/api/search-image?query=professional%204V%20lithium%20cordless%20E-nail%20gun%20compact%20on%20clean%20white%20background%20product%20photography%20studio%20lighting%20high%20quality%20black%20gray&width=400&height=400&seq=4v-p10&orientation=squarish' },
      ],
    },
    {
      id: '20v',
      label: '20V',
      products: [
        { id: 'J-128', name: 'J-128', descKey: 'nail_20v_f30_desc', image: '/img/CP/dqiang/20V/J-128/1300-J-128-01.jpg' },
        { id: 'J-129', name: 'J-129', descKey: 'nail_20v_f50_desc', image: '/img/CP/dqiang/20V/J-129/1300-J129-01.jpg' },
        { id: 'J-133', name: 'J-133', descKey: 'nail_20v_t64_desc', image: '/img/CP/dqiang/20V/J-133/1300-J133-02.jpg' },
        { id: 'J-145', name: 'J-145', descKey: 'nail_20v_j80_desc', image: '/img/CP/dqiang/20V/J-145/1300-J145-02.jpg' },
        { id: 'J-147', name: 'J-147', descKey: 'nail_20v_n90_desc', image: '/img/CP/dqiang/20V/J-147/1300-J147-05.jpg' },
        { id: 'J_150', name: 'J_150', descKey: 'nail_20v_b50_desc', image: '/img/CP/dqiang/20V/J-150/1300-J150-01.jpg' },
        { id: 'J-156', name: 'J-156', descKey: 'nail_20v_c60_desc', image: 'https://readdy.ai/api/search-image?query=professional%2020V%20lithium%20cordless%20C-nail%20gun%20heavy%20duty%20on%20clean%20white%20background%20product%20photography%20studio%20lighting%20high%20quality%20black%20gray&width=400&height=400&seq=20v-p7&orientation=squarish' },
        //{ id: 'lk-20v-d70', name: 'LK-20V-D70', descKey: 'nail_20v_d70_desc', image: 'https://readdy.ai/api/search-image?query=professional%2020V%20lithium%20cordless%20D-nail%20gun%20heavy%20duty%20on%20clean%20white%20background%20product%20photography%20studio%20lighting%20high%20quality%20black%20gray&width=400&height=400&seq=20v-p8&orientation=squarish' },
        //{ id: 'lk-20v-e80', name: 'LK-20V-E80', descKey: 'nail_20v_e80_desc', image: 'https://readdy.ai/api/search-image?query=professional%2020V%20lithium%20cordless%20E-nail%20gun%20heavy%20duty%20on%20clean%20white%20background%20product%20photography%20studio%20lighting%20high%20quality%20black%20gray&width=400&height=400&seq=20v-p9&orientation=squarish' },
        //{ id: 'lk-20v-g100', name: 'LK-20V-G100', descKey: 'nail_20v_g100_desc', image: 'https://readdy.ai/api/search-image?query=professional%2020V%20lithium%20cordless%20G-nail%20gun%20heavy%20duty%20on%20clean%20white%20background%20product%20photography%20studio%20lighting%20high%20quality%20black%20gray&width=400&height=400&seq=20v-p10&orientation=squarish' },
      ],
    },
    {
      id: 'ac',
      label: 'AC',
      products: [
        { id: 'J-112', name: 'J-112', descKey: 'nail_ac_f30_desc', image: '/img/CP/dqiang/AC/J-112/1300-J112-01.jpg' },
        { id: 'J-115', name: 'J-115', descKey: 'nail_ac_f50_desc', image: '/img/CP/dqiang/AC/J-115/1300-J-115-05.jpg' },
        { id: 'J-118', name: 'J-118', descKey: 'nail_ac_t64_desc', image: '/img/CP/dqiang/AC/J-118/1300-J-118-05.jpg' },
        { id: 'J-119', name: 'J-119', descKey: 'nail_ac_j80_desc', image: '/img/CP/dqiang/AC/J-119/1300-J-119-06.jpg' },
        { id: 'J-123', name: 'J-123', descKey: 'nail_ac_n90_desc', image: '/img/CP/dqiang/AC/J-123/1300-J-123-07.jpg' },
       //{ id: 'lk-ac-b50', name: 'LK-AC-B50', descKey: 'nail_ac_b50_desc', image: 'https://readdy.ai/api/search-image?query=professional%20AC%20electric%20corded%20B-nail%20gun%20on%20clean%20white%20background%20product%20photography%20studio%20lighting%20high%20quality%20black%20gray%20industrial&width=400&height=400&seq=ac-p6&orientation=squarish' },
       //{ id: 'lk-ac-c60', name: 'LK-AC-C60', descKey: 'nail_ac_c60_desc', image: 'https://readdy.ai/api/search-image?query=professional%20AC%20electric%20corded%20C-nail%20gun%20on%20clean%20white%20background%20product%20photography%20studio%20lighting%20high%20quality%20black%20gray%20industrial&width=400&height=400&seq=ac-p7&orientation=squarish' },
       //{ id: 'lk-ac-d70', name: 'LK-AC-D70', descKey: 'nail_ac_d70_desc', image: 'https://readdy.ai/api/search-image?query=professional%20AC%20electric%20corded%20D-nail%20gun%20on%20clean%20white%20background%20product%20photography%20studio%20lighting%20high%20quality%20black%20gray%20industrial&width=400&height=400&seq=ac-p8&orientation=squarish' },
       //{ id: 'lk-ac-e80', name: 'LK-AC-E80', descKey: 'nail_ac_e80_desc', image: 'https://readdy.ai/api/search-image?query=professional%20AC%20electric%20corded%20E-nail%20gun%20on%20clean%20white%20background%20product%20photography%20studio%20lighting%20high%20quality%20black%20gray%20industrial&width=400&height=400&seq=ac-p9&orientation=squarish' },
       //{ id: 'lk-ac-g100', name: 'LK-AC-G100', descKey: 'nail_ac_g100_desc', image: 'https://readdy.ai/api/search-image?query=professional%20AC%20electric%20corded%20G-nail%20gun%20on%20clean%20white%20background%20product%20photography%20studio%20lighting%20high%20quality%20black%20gray%20industrial&width=400&height=400&seq=ac-p10&orientation=squarish' },
      ],
    },
  ];

  const getScrollOffset = () => {
    const navbar = document.querySelector('nav') as HTMLElement | null;
    const stickyTab = document.querySelector('.sticky') as HTMLElement | null;
    const navbarH = navbar ? navbar.offsetHeight : 80;
    const tabH = stickyTab ? stickyTab.offsetHeight : 56;
    return navbarH + tabH + 24;
  };

  const scrollToSection = (id: string) => {
    const el = sectionRefs.current[id];
    if (!el) return;
    const offset = getScrollOffset();
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  useEffect(() => {
    hasScrolled.current = false;
  }, [location.pathname]);

  useEffect(() => {
    if (hasScrolled.current) return;
    const target = category || (location.state as { scrollTo?: string })?.scrollTo;
    if (!target) return;

    const tryScroll = () => {
      const el = sectionRefs.current[target];
      if (el) {
        setTimeout(() => {
          scrollToSection(target);
        }, 150);
        hasScrolled.current = true;
        return true;
      }
      return false;
    };

    if (!tryScroll()) {
      const timer = setTimeout(tryScroll, 300);
      return () => clearTimeout(timer);
    }
  }, [category, location.state]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    CATEGORIES.forEach((cat) => {
      const el = sectionRefs.current[cat.id];
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveCategory(cat.id);
            }
          });
        },
        { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* 各分类顶部图片 */}
      <div className="w-full relative overflow-hidden aspect-[16/9] md:aspect-auto md:h-[800px]">
        <img
          src="/img/flpage/dqiang.jpg"
          alt={t('nail_guns_hero_title')}
          className="w-full h-full object-cover object-[center_90%]"    //各分类图片高度位置
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/0"></div>
      </div>

      {/* Page Header */}
      <div className="py-16 px-16 text-center">
        <h2 id="page-title" className="text-4xl font-black mb-4" style={{ color: '#144c90' }}>{t('nail_guns_page_title')}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {t('nail_guns_page_desc')}
        </p>
      </div>

      {/* Sticky Category Tabs */}
      <div className="sticky top-16 z-30 bg-white/70 backdrop-blur-md border-b border-white/30 shadow-sm">
        <div className="max-w-[1400px] mx-auto overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-1 py-0 px-4 md:px-8 min-w-max">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  scrollToSection(cat.id);
                }}
                className="relative px-4 md:px-6 py-4 text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap"
                style={{ color: activeCategory === cat.id ? '#f6444e' : '#374151' }}
              >
                {cat.label}
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-all duration-200"
                  style={{ backgroundColor: '#f6444e', opacity: activeCategory === cat.id ? 1 : 0 }}
                ></span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Sections */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8 md:py-12">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            ref={(el) => { sectionRefs.current[cat.id] = el; }}
            className="mb-12 md:mb-16"
          >
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="text-2xl md:text-3xl font-black tracking-tight" style={{ color: '#f6444e' }}>
                {cat.label}
              </div>
              <div className="flex-1 h-px bg-gray-100"></div>
              <span className="text-xs md:text-sm text-gray-400 font-medium">{cat.products.length} {t('nail_guns_products_count')}</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5" data-product-shop>
              {cat.products.map((product, idx) => (
                <Link
                  key={idx}
                  to={`/products/nail-guns/${cat.id}/${product.id}`}
                  className="bg-white rounded-lg md:rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden"
                >
                  <div className="w-full aspect-square overflow-hidden bg-gray-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3 md:p-4">
                    <div className="text-xs md:text-sm font-bold text-gray-900 mb-1 group-hover:text-[#f6444e] transition-colors duration-200">
                      {product.name}
                    </div>
                    <div className="text-[10px] md:text-xs text-gray-400 line-clamp-1">{t(`nail_gun_name_${product.id.replace(/-/g, '_')}`)}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <ContactSection />
      <Footer />
    </div>
  );
}
