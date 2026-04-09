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

export default function BrushlessPage() {
  const { t } = useTranslation();
  const { category } = useParams<{ category?: string }>();
  const [activeCategory, setActiveCategory] = useState<string>('drill');
  const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const isScrollingRef = useRef(false);

  const categories: Category[] = [
    {
      id: 'drill',
      name: t('products.brushless.categories.drill'),
      slug: 'drill',
      products: [
        {
          id: 'drill-001',
          model: t('products.brushless.drill.001.model'),
          description: t('products.brushless.drill.001.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20drill%20driver%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20ergonomic%20grip%20design&width=280&height=280&seq=brushless-drill-001&orientation=squarish'
        },
        {
          id: 'id-001',
          model: 'LK-BL-ID-20V-001',
          description: t('product_id_001_description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20impact%20drill%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20chuck%20visible&width=280&height=280&seq=brushless-id-001&orientation=squarish'
        },
        {
          id: 'id-002',
          model: 'LK-BL-ID-20V-002',
          description: t('product_id_002_description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20hammer%20drill%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20heavy-duty%20design&width=280&height=280&seq=brushless-id-002&orientation=squarish'
        },
        {
          id: 'id-003',
          model: 'LK-BL-IW-20V-003',
          description: t('product_id_003_description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20impact%20wrench%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20socket%20drive&width=280&height=280&seq=brushless-id-003&orientation=squarish'
        },
        {
          id: 'id-004',
          model: 'LK-BL-RH-20V-004',
          description: t('product_id_004_description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20rotary%20hammer%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20SDS%20chuck&width=280&height=280&seq=brushless-id-004&orientation=squarish'
        },
        {
          id: 'id-005',
          model: 'LK-BL-DD-20V-005',
          description: t('product_id_005_description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20drill%20driver%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20compact%20design&width=280&height=280&seq=brushless-id-005&orientation=squarish'
        },
        {
          id: 'id-006',
          model: 'LK-BL-RA-20V-006',
          description: t('product_id_006_description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20right%20angle%20drill%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%2090-degree%20head&width=280&height=280&seq=brushless-id-006&orientation=squarish'
        },
        {
          id: 'id-007',
          model: 'LK-BL-MD-20V-007',
          description: t('product_id_007_description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20magnetic%20drill%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20magnetic%20base&width=280&height=280&seq=brushless-id-007&orientation=squarish'
        },
        {
          id: 'id-008',
          model: 'LK-BL-CD-20V-008',
          description: t('product_id_008_description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20core%20drill%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20core%20bit&width=280&height=280&seq=brushless-id-008&orientation=squarish'
        },
        {
          id: 'id-009',
          model: 'LK-BL-MX-20V-009',
          description: t('product_id_009_description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20mixer%20drill%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20mixing%20paddle&width=280&height=280&seq=brushless-id-009&orientation=squarish'
        }
      ]
    },
    {
      id: 'impact-driver',
      name: t('cat_brushless_impact_driver'),
      slug: 'impact-driver',
      products: [
        {
          id: 'idr-001',
          model: 'LK-BL-IDR-20V-001',
          description: t('product_idr_001_description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20impact%20driver%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20hex%20chuck&width=280&height=280&seq=brushless-idr-001&orientation=squarish'
        },
        {
          id: 'idr-002',
          model: 'LK-BL-IDR-20V-002',
          description: t('product_idr_002_description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20compact%20impact%20driver%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20small%20form%20factor&width=280&height=280&seq=brushless-idr-002&orientation=squarish'
        },
        {
          id: 'idr-003',
          model: 'LK-BL-IDR-20V-003',
          description: t('product_idr_003_description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20heavy-duty%20impact%20driver%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20robust%20construction&width=280&height=280&seq=brushless-idr-003&orientation=squarish'
        },
        {
          id: 'idr-004',
          model: 'LK-BL-IDR-20V-004',
          description: t('product_idr_004_description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20precision%20impact%20driver%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20precision%20control&width=280&height=280&seq=brushless-idr-004&orientation=squarish'
        },
        {
          id: 'idr-005',
          model: 'LK-BL-IDR-20V-005',
          description: t('product_idr_005_description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20multi-speed%20impact%20driver%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20speed%20selector&width=280&height=280&seq=brushless-idr-005&orientation=squarish'
        },
        {
          id: 'idr-006',
          model: 'LK-BL-IDR-20V-006',
          description: t('product_idr_006_description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20right%20angle%20impact%20driver%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20angled%20head&width=280&height=280&seq=brushless-idr-006&orientation=squarish'
        },
        {
          id: 'idr-007',
          model: 'LK-BL-IDR-20V-007',
          description: t('product_idr_007_description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20long%20reach%20impact%20driver%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20extended%20shaft&width=280&height=280&seq=brushless-idr-007&orientation=squarish'
        },
        {
          id: 'idr-008',
          model: 'LK-BL-IDR-20V-008',
          description: t('product_idr_008_description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20smart%20impact%20driver%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20digital%20display&width=280&height=280&seq=brushless-idr-008&orientation=squarish'
        },
        {
          id: 'idr-009',
          model: 'LK-BL-IDR-20V-009',
          description: t('product_idr_009_description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20quiet%20impact%20driver%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20noise%20reduction&width=280&height=280&seq=brushless-idr-009&orientation=squarish'
        },
        {
          id: 'idr-010',
          model: 'LK-BL-IDR-20V-010',
          description: t('product_idr_010_description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20professional%20impact%20driver%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20pro-grade%20features&width=280&height=280&seq=brushless-idr-010&orientation=squarish'
        }
      ]
    },
    {
      id: 'angle-grinder',
      name: t('cat_brushless_angle_grinder'),
      slug: 'angle-grinder',
      products: [
        {
          id: 'ag-001',
          model: 'LK-BL-AG-100-001',
          description: t('product_ag_001_description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20100mm%20angle%20grinder%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20grinding%20disc&width=280&height=280&seq=brushless-ag-001&orientation=squarish'
        },
        {
          id: 'ag-002',
          model: 'LK-BL-AG-125-002',
          description: t('product_ag_002_description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20125mm%20angle%20grinder%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20compact%20disc&width=280&height=280&seq=brushless-ag-002&orientation=squarish'
        },
        {
          id: 'ag-003',
          model: 'LK-BL-AG-150-003',
          description: t('product_ag_003_description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20150mm%20angle%20grinder%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20large%20disc&width=280&height=280&seq=brushless-ag-003&orientation=squarish'
        },
        {
          id: 'ag-004',
          model: 'LK-BL-AG-VS-004',
          description: t('product_ag_004_description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20variable%20speed%20angle%20grinder%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20speed%20dial&width=280&height=280&seq=brushless-ag-004&orientation=squarish'
        },
        {
          id: 'ag-005',
          model: 'LK-BL-AG-PS-005',
          description: t('product_ag_005_description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20paddle%20switch%20angle%20grinder%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20paddle%20switch&width=280&height=280&seq=brushless-ag-005&orientation=squarish'
        },
        {
          id: 'ag-006',
          model: 'LK-BL-AG-SS-006',
          description: t('product_ag_006_description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20slide%20switch%20angle%20grinder%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20slide%20switch&width=280&height=280&seq=brushless-ag-006&orientation=squarish'
        },
        {
          id: 'ag-007',
          model: 'LK-BL-AG-BK-007',
          description: t('product_ag_007_description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20brake%20angle%20grinder%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20brake%20system&width=280&height=280&seq=brushless-ag-007&orientation=squarish'
        },
        {
          id: 'ag-008',
          model: 'LK-BL-AG-CO-008',
          description: t('product_ag_008_description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20cut-off%20angle%20grinder%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20cutting%20disc&width=280&height=280&seq=brushless-ag-008&orientation=squarish'
        },
        {
          id: 'ag-009',
          model: 'LK-BL-AG-PL-009',
          description: t('product_ag_009_description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20polishing%20angle%20grinder%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20polishing%20pad&width=280&height=280&seq=brushless-ag-009&orientation=squarish'
        },
        {
          id: 'ag-010',
          model: 'LK-BL-AG-MF-010',
          description: t('product_ag_010_description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20multi-function%20angle%20grinder%20power%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20versatile%20accessories&width=280&height=280&seq=brushless-ag-010&orientation=squarish'
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
          src="https://readdy.ai/api/search-image?query=professional%20brushless%20cordless%20power%20tools%20collection%20including%20impact%20drill%20impact%20driver%20angle%20grinder%20on%20industrial%20workbench%20background%2C%20black%20and%20orange%20tools%2C%20clean%20organized%20workspace%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20photography%2C%20modern%20workshop%20environment&width=1920&height=580&seq=brushless-hero-banner-01&orientation=landscape"
          alt={t('brushless_hero_title')}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30"></div>
      </div>

      {/* Page Header */}
      <div className="py-16 px-16 text-center">
        <h2 id="page-title" className="text-4xl font-black mb-4" style={{ color: '#144c90' }}>{t('brushless_page_title')}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {t('brushless_page_desc')}
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
                  to={`/products/brushless/${cat.slug}/${product.id}`}
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
