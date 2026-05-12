import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ContactSection from '@/components/feature/ContactSection';
import SeriesContent from '@/components/feature/SeriesContent';
import { useNailGunsData } from '@/hooks/useNailGunsData';
import { useBrushlessData } from '@/hooks/useBrushlessData';
import { useGardenToolsData } from '@/hooks/useGardenToolsData';
import { useWorkshopData } from '@/hooks/useWorkshopData';
import { useSharpeningData, useSharpeningCategories } from '@/hooks/useSharpeningData';

interface UnifiedSeries {
  id: string;
  name: string;
  seriesPath: string;
  categories: import('@/components/feature/SeriesContent').SeriesSubCategory[];
}

export default function AllProductsPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const hasScrolled = useRef(false);
  const [activeSection, setActiveSection] = useState<string>('nail-guns');

  const nailGunsCategories = useNailGunsData();
  const brushlessCategories = useBrushlessData();
  const gardenCategories = useGardenToolsData();
  const workshopCategories = useWorkshopData();
  const sharpeningProducts = useSharpeningData();
  const sharpeningCategories = useSharpeningCategories();

  const allSeries: UnifiedSeries[] = [
    {
      id: 'nail-guns',
      name: t('cat_nail_guns'),
      seriesPath: '/products/nail-guns',
      categories: nailGunsCategories.map((cat) => ({
        id: `nail-${cat.id}`,
        name: cat.label,
        products: cat.products.map((p) => ({
          id: p.id,
          model: p.name,
          description: t(p.descKey),
          image: p.image,
          detailPath: `/products/nail-guns/${cat.id}/${p.id}`,
        })),
      })),
    },
    {
      id: 'brushless',
      name: t('cat_brushless'),
      seriesPath: '/products/brushless',
      categories: brushlessCategories.map((cat) => ({
        id: cat.id,
        name: cat.name,
        products: cat.products.map((p) => ({
          id: p.id,
          model: p.model,
          description: p.description,
          image: p.image,
          detailPath: `/products/brushless/${cat.slug}/${p.id}`,
        })),
      })),
    },
    {
      id: 'garden-tools',
      name: t('cat_garden_tools'),
      seriesPath: '/products/garden-tools',
      categories: gardenCategories.map((cat) => ({
        id: cat.id,
        name: cat.name,
        products: cat.products.map((p) => ({
          id: p.id,
          model: p.model,
          description: p.description,
          image: p.image,
          detailPath: `/products/garden-tools/${cat.slug}/${p.id}`,
        })),
      })),
    },
    {
      id: 'workshop',
      name: t('cat_workshop'),
      seriesPath: '/products/workshop',
      categories: workshopCategories.map((cat) => ({
        id: cat.id,
        name: cat.name,
        products: cat.products.map((p) => ({
          id: p.id,
          model: p.model,
          description: p.description,
          image: p.image,
          detailPath: `/products/workshop/${cat.slug}/${p.id}`,
        })),
      })),
    },
    {
      id: 'sharpening',
      name: t('cat_sharpening'),
      seriesPath: '/products/sharpening',
      categories: sharpeningCategories.map((cat) => ({
        id: cat.id,
        name: cat.name,
        products: sharpeningProducts
          .filter((p) => p.category === cat.id)
          .map((p) => ({
            id: p.id,
            model: p.model,
            description: p.name,
            image: p.image,
            detailPath: `/products/sharpening/${cat.slug}/${p.id}`,
          })),
      })),
    },
  ];

  const allSectionIds = allSeries.map((s) => s.id);

  const getScrollOffset = () => {
    const navbar = document.querySelector('nav') as HTMLElement | null;
    const stickyTab = document.querySelector('[data-all-products-tabs]') as HTMLElement | null;
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
    const observers: IntersectionObserver[] = [];
    allSectionIds.forEach((id) => {
      const el = sectionRefs.current[id];
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full overflow-hidden aspect-[16/9] md:aspect-auto md:h-[800px]">
        <img
          src="/img/flpage/all.jpg"
          alt="All Products"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>
      </div>

      {/* Sticky Series Tabs */}
      <div
        className="sticky top-14 md:top-16 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100"
        data-all-products-tabs
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center justify-center flex-wrap gap-1 py-1 px-4 md:px-6">
            {allSeries.map((series) => (
              <button
                key={series.id}
                onClick={() => {
                  setActiveSection(series.id);
                  scrollToSection(series.id);
                }}
                className="relative px-3 md:px-5 py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap"
                style={{ color: activeSection === series.id ? '#144c90' : '#374151' }}
              >
                {series.name}
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-all duration-200"
                  style={{ backgroundColor: '#144c90', opacity: activeSection === series.id ? 1 : 0 }}
                ></span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* All Series Content */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8 md:py-12">
        {allSeries.map((series) => (
          <div
            key={series.id}
            ref={(el) => { sectionRefs.current[series.id] = el; }}
            className="mb-16 md:mb-24"
          >
            {/* Series Header */}
            <div className="flex items-center gap-4 mb-8 pb-4 border-b-2" style={{ borderColor: '#144c90' }}>
              <h2 className="text-2xl md:text-3xl font-black" style={{ color: '#144c90' }}>
                {series.name}
              </h2>
              <div className="flex-1"></div>
              <Link
                to={series.seriesPath}
                className="flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 cursor-pointer whitespace-nowrap"
                style={{ color: '#144c90' }}
              >
                <span>{t('all_view_series', '\u67E5\u770B\u7CFB\u5217\u8BE6\u60C5')}</span>
                <i className="ri-arrow-right-line text-base"></i>
              </Link>
            </div>

            <SeriesContent
              categories={series.categories}
              hideTabs
              variant="compact"
              productCountLabel={t('nail_guns_products_count', '\u6B3E')}
            />
          </div>
        ))}
      </div>

      <ContactSection />
    </div>
  );
}
