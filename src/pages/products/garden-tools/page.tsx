import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';
import ContactSection from '../../../components/feature/ContactSection';

interface Product {
  id: string;
  model: string;
  description: string;
  image: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  products: Product[];
}

export default function GardenToolsPage() {
  const { t } = useTranslation();
  const { category } = useParams<{ category?: string }>();
  const [activeCategory, setActiveCategory] = useState<string>('hedge-trimmer');
  const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const isScrollingRef = useRef(false);

  const categories: Category[] = [
    {
      id: 'hedge-trimmer',
      name: t('products.gardenTools.categories.hedgeTrimmer'),
      slug: 'hedge-trimmer',
      products: [
        {
          id: 'ht-001',
          model: t('products.gardenTools.hedgeTrimmer.001.model'),
          description: t('products.gardenTools.hedgeTrimmer.001.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20cordless%20hedge%20trimmer%20with%20dual-action%20blade%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20ergonomic%20handle%20design&width=280&height=280&seq=garden-ht-001&orientation=squarish'
        },
        {
          id: 'ht-002',
          model: t('products.gardenTools.hedgeTrimmer.002.model'),
          description: t('products.gardenTools.hedgeTrimmer.002.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20cordless%20hedge%20trimmer%20with%20adjustable%20head%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20adjustable%20cutting%20angle&width=280&height=280&seq=garden-ht-002&orientation=squarish'
        },
        {
          id: 'ht-003',
          model: t('products.gardenTools.hedgeTrimmer.003.model'),
          description: t('products.gardenTools.hedgeTrimmer.003.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20cordless%20hedge%20trimmer%20with%20telescopic%20arm%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20extendable%20reach&width=280&height=280&seq=garden-ht-003&orientation=squarish'
        },
        {
          id: 'ht-004',
          model: t('products.gardenTools.hedgeTrimmer.004.model'),
          description: t('products.gardenTools.hedgeTrimmer.004.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20cordless%20hedge%20trimmer%20with%20LED%20lights%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20illuminated%20cutting&width=280&height=280&seq=garden-ht-004&orientation=squarish'
        },
        {
          id: 'ht-005',
          model: t('products.gardenTools.hedgeTrimmer.005.model'),
          description: t('products.gardenTools.hedgeTrimmer.005.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20cordless%20hedge%20trimmer%20with%20interchangeable%20blades%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20versatile%20cutting&width=280&height=280&seq=garden-ht-005&orientation=squarish'
        },
        {
          id: 'ht-006',
          model: t('products.gardenTools.hedgeTrimmer.006.model'),
          description: t('products.gardenTools.hedgeTrimmer.006.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20cordless%20hedge%20trimmer%20with%20smart%20features%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20digital%20display&width=280&height=280&seq=garden-ht-006&orientation=squarish'
        },
        {
          id: 'ht-007',
          model: t('products.gardenTools.hedgeTrimmer.007.model'),
          description: t('products.gardenTools.hedgeTrimmer.007.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20cordless%20hedge%20trimmer%20with%20ergonomic%20handle%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20comfortable%20grip&width=280&height=280&seq=garden-ht-007&orientation=squarish'
        },
        {
          id: 'ht-008',
          model: t('products.gardenTools.hedgeTrimmer.008.model'),
          description: t('products.gardenTools.hedgeTrimmer.008.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20cordless%20hedge%20trimmer%20with%20compact%20design%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20lightweight&width=280&height=280&seq=garden-ht-008&orientation=squarish'
        },
        {
          id: 'ht-009',
          model: t('products.gardenTools.hedgeTrimmer.009.model'),
          description: t('products.gardenTools.hedgeTrimmer.009.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20cordless%20hedge%20trimmer%20with%20heavy-duty%20construction%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20durable&width=280&height=280&seq=garden-ht-009&orientation=squarish'
        },
        {
          id: 'ht-010',
          model: t('products.gardenTools.hedgeTrimmer.010.model'),
          description: t('products.gardenTools.hedgeTrimmer.010.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20cordless%20hedge%20trimmer%20with%20adjustable%20height%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20versatile%20height%20adjustment&width=280&height=280&seq=garden-ht-010&orientation=squarish'
        }
      ]
    },
    {
      id: 'pole-pruner',
      name: t('cat_garden_pole'),
      slug: 'pole-pruner',
      products: [
        {
          id: 'pp-001',
          model: 'LK-GT-PP-20V-001',
          description: t('products.gardenTools.polePruner.001.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20cordless%20electric%20telescopic%20pole%20pruner%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20extendable%20pole&width=280&height=280&seq=garden-pp-001&orientation=squarish'
        },
        {
          id: 'pp-002',
          model: 'LK-GT-PP-20V-002',
          description: t('products.gardenTools.polePruner.002.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20cordless%20electric%20high-reach%20pole%20pruner%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20long%20reach%20design&width=280&height=280&seq=garden-pp-002&orientation=squarish'
        },
        {
          id: 'pp-003',
          model: 'LK-GT-PP-20V-003',
          description: t('products.gardenTools.polePruner.003.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20cordless%20electric%20multi-angle%20pole%20pruner%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20adjustable%20head&width=280&height=280&seq=garden-pp-003&orientation=squarish'
        },
        {
          id: 'pp-004',
          model: 'LK-GT-PP-20V-004',
          description: t('products.gardenTools.polePruner.004.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20cordless%20electric%20lightweight%20pole%20pruner%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20lightweight%20construction&width=280&height=280&seq=garden-pp-004&orientation=squarish'
        },
        {
          id: 'pp-005',
          model: 'LK-GT-PP-20V-005',
          description: t('products.gardenTools.polePruner.005.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20cordless%20electric%20heavy-duty%20pole%20pruner%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20robust%20design&width=280&height=280&seq=garden-pp-005&orientation=squarish'
        },
        {
          id: 'pp-006',
          model: 'LK-GT-PP-20V-006',
          description: t('products.gardenTools.polePruner.006.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20cordless%20electric%20compact%20pole%20pruner%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20compact%20size&width=280&height=280&seq=garden-pp-006&orientation=squarish'
        },
        {
          id: 'pp-007',
          model: 'LK-GT-PP-20V-007',
          description: t('products.gardenTools.polePruner.007.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20cordless%20electric%20professional%20pole%20pruner%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20professional%20grade&width=280&height=280&seq=garden-pp-007&orientation=squarish'
        },
        {
          id: 'pp-008',
          model: 'LK-GT-PP-20V-008',
          description: t('products.gardenTools.polePruner.008.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20cordless%20electric%20smart%20pole%20pruner%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20smart%20features&width=280&height=280&seq=garden-pp-008&orientation=squarish'
        },
        {
          id: 'pp-009',
          model: 'LK-GT-PP-20V-009',
          description: t('products.gardenTools.polePruner.009.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20cordless%20electric%20ergonomic%20pole%20pruner%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20ergonomic%20handle&width=280&height=280&seq=garden-pp-009&orientation=squarish'
        },
        {
          id: 'pp-010',
          model: 'LK-GT-PP-20V-010',
          description: t('products.gardenTools.polePruner.010.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20cordless%20electric%20versatile%20pole%20pruner%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20versatile%20attachments&width=280&height=280&seq=garden-pp-010&orientation=squarish'
        }
      ]
    },
    {
      id: 'lawn-care',
      name: t('cat_garden_maintenance'),
      slug: 'lawn-care',
      products: [
        {
          id: 'lc-001',
          model: 'LK-GT-LC-20V-001',
          description: t('products.gardenTools.lawnCare.001.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20cordless%20electric%20lawn%20mower%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20cutting%20deck%20visible&width=280&height=280&seq=garden-lc-001&orientation=squarish'
        },
        {
          id: 'lc-002',
          model: 'LK-GT-LC-20V-002',
          description: t('products.gardenTools.lawnCare.002.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20cordless%20electric%20string%20trimmer%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20trimmer%20head&width=280&height=280&seq=garden-lc-002&orientation=squarish'
        },
        {
          id: 'lc-003',
          model: 'LK-GT-LC-20V-003',
          description: t('products.gardenTools.lawnCare.003.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20cordless%20electric%20hedge%20trimmer%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20dual%20blades&width=280&height=280&seq=garden-lc-003&orientation=squarish'
        },
        {
          id: 'lc-004',
          model: 'LK-GT-LC-20V-004',
          description: t('products.gardenTools.lawnCare.004.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20cordless%20electric%20leaf%20blower%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20air%20nozzle&width=280&height=280&seq=garden-lc-004&orientation=squarish'
        },
        {
          id: 'lc-005',
          model: 'LK-GT-LC-20V-005',
          description: t('products.gardenTools.lawnCare.005.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20cordless%20electric%20edger%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20edging%20blade&width=280&height=280&seq=garden-lc-005&orientation=squarish'
        },
        {
          id: 'lc-006',
          model: 'LK-GT-LC-20V-006',
          description: t('products.gardenTools.lawnCare.006.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20cordless%20electric%20cultivator%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20tilling%20blades&width=280&height=280&seq=garden-lc-006&orientation=squarish'
        },
        {
          id: 'lc-007',
          model: 'LK-GT-LC-20V-007',
          description: t('products.gardenTools.lawnCare.007.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20cordless%20electric%20aerator%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20aeration%20spikes&width=280&height=280&seq=garden-lc-007&orientation=squarish'
        },
        {
          id: 'lc-008',
          model: 'LK-GT-LC-20V-008',
          description: t('products.gardenTools.lawnCare.008.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20cordless%20electric%20dethatcher%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20dethatching%20tines&width=280&height=280&seq=garden-lc-008&orientation=squarish'
        },
        {
          id: 'lc-009',
          model: 'LK-GT-LC-20V-009',
          description: t('products.gardenTools.lawnCare.009.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20cordless%20electric%20sprayer%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20spray%20nozzle&width=280&height=280&seq=garden-lc-009&orientation=squarish'
        },
        {
          id: 'lc-010',
          model: 'LK-GT-LC-20V-010',
          description: t('products.gardenTools.lawnCare.010.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20cordless%20electric%20multi-tool%20garden%20system%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20interchangeable%20heads&width=280&height=280&seq=garden-lc-010&orientation=squarish'
        }
      ]
    }
  ];

  const getScrollOffset = () => {
    const navbar = document.querySelector('nav') as HTMLElement | null;
    const stickyTab = document.querySelector('.sticky') as HTMLElement | null;
    const navbarH = navbar ? navbar.offsetHeight : 80;
    const tabH = stickyTab ? stickyTab.offsetHeight : 56;
    return navbarH + tabH + 24;
  };

  const scrollToSection = (id: string) => {
    const el = categoryRefs.current[id];
    if (!el) return;
    const offset = getScrollOffset();
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const handleCategoryClick = (id: string) => {
    setActiveCategory(id);
    scrollToSection(id);
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    categories.forEach((cat) => {
      const el = categoryRefs.current[cat.id];
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

      {/* Hero Banner */}
      <div className="relative w-full overflow-hidden aspect-[16/9] md:aspect-auto md:h-[580px]">
        <img
          src="https://readdy.ai/api/search-image?query=professional%20garden%20power%20tools%20collection%20including%20chainsaw%20pole%20pruner%20lawn%20mower%20on%20outdoor%20garden%20background%2C%20black%20and%20orange%20tools%2C%20green%20grass%20and%20plants%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20photography%2C%20garden%20maintenance%20scene&width=1920&height=580&seq=garden-hero-banner-01&orientation=landscape"
          alt={t('garden_tools_hero_title')}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30"></div>
      </div>

      {/* Page Header */}
      <div className="py-16 px-16 text-center">
        <h2 id="page-title" className="text-4xl font-black mb-4" style={{ color: '#144c90' }}>{t('garden_tools_page_title')}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {t('garden_tools_page_desc')}
        </p>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-16 z-30 bg-white/70 backdrop-blur-md border-b border-white/30 shadow-sm">
        <div className="max-w-[1400px] mx-auto overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 md:gap-8 min-w-max px-4 md:px-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className="relative py-5 text-sm md:text-base font-semibold transition-colors duration-200 cursor-pointer whitespace-nowrap"
                style={{ color: activeCategory === cat.id ? '#dc2626' : '#4b5563' }}
              >
                {cat.name}
                {activeCategory === cat.id && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-300"
                    style={{ backgroundColor: '#dc2626' }}
                  ></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8 md:py-12">
        {categories.map((cat) => (
          <div
            key={cat.id}
            ref={(el) => { categoryRefs.current[cat.id] = el; }}
            className="mb-16 md:mb-20"
          >
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-bold whitespace-nowrap" style={{ color: '#144c90' }}>{cat.name}</h3>
              <div className="flex-1 h-px bg-gray-100"></div>
              <span className="text-xs md:text-sm text-gray-400 font-medium whitespace-nowrap">{cat.products.length} {t('nail_guns_products_count')}</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {cat.products.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/garden-tools/${cat.slug}/${product.id}`}
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
                    <div className="text-[10px] md:text-xs text-gray-400 line-clamp-1">{product.description}</div>
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
