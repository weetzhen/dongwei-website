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

export default function WorkshopPage() {
  const { t } = useTranslation();
  const { category } = useParams<{ category?: string }>();
  const [activeCategory, setActiveCategory] = useState<string>('polisher');
  const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const isScrollingRef = useRef(false);

  const categories: Category[] = [
    {
      id: 'polisher',
      name: t('products.workshop.categories.polisher'),
      slug: 'polisher',
      products: [
        {
          id: 'pol-001',
          model: t('products.workshop.polisher.001.model'),
          description: t('products.workshop.polisher.001.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%20180mm%20dual%20action%20car%20polisher%20orbital%20buffer%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20ergonomic%20handle%20design&width=280&height=280&seq=workshop-pol-001&orientation=squarish'
        },
        {
          id: 'pol-002',
          model: t('products.workshop.polisher.002.model'),
          description: t('products.workshop.polisher.002.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%20150mm%20rotary%20car%20polisher%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20powerful%20motor%20design&width=280&height=280&seq=workshop-pol-002&orientation=squarish'
        },
        {
          id: 'pol-003',
          model: t('products.workshop.polisher.003.model'),
          description: t('products.workshop.polisher.003.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%20125mm%20mini%20car%20polisher%20compact%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20lightweight%20design&width=280&height=280&seq=workshop-pol-003&orientation=squarish'
        },
        {
          id: 'pol-004',
          model: t('products.workshop.polisher.004.model'),
          description: t('products.workshop.polisher.004.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%20200mm%20large%20pad%20car%20polisher%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20wide%20coverage%20design&width=280&height=280&seq=workshop-pol-004&orientation=squarish'
        },
        {
          id: 'pol-005',
          model: t('products.workshop.polisher.005.model'),
          description: t('products.workshop.polisher.005.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%20180mm%20variable%20speed%20car%20polisher%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20speed%20control%20dial&width=280&height=280&seq=workshop-pol-005&orientation=squarish'
        },
        {
          id: 'pol-006',
          model: t('products.workshop.polisher.006.model'),
          description: t('products.workshop.polisher.006.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%20150mm%20dual%20mode%20car%20polisher%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20mode%20switch%20button&width=280&height=280&seq=workshop-pol-006&orientation=squarish'
        },
        {
          id: 'pol-007',
          model: t('products.workshop.polisher.007.model'),
          description: t('products.workshop.polisher.007.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%20125mm%20cordless%20car%20polisher%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20battery%20pack%20attached&width=280&height=280&seq=workshop-pol-007&orientation=squarish'
        },
        {
          id: 'pol-008',
          model: t('products.workshop.polisher.008.model'),
          description: t('products.workshop.polisher.008.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%20180mm%20pneumatic%20car%20polisher%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20air%20inlet%20connector&width=280&height=280&seq=workshop-pol-008&orientation=squarish'
        },
        {
          id: 'pol-009',
          model: t('products.workshop.polisher.009.model'),
          description: t('products.workshop.polisher.009.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%20150mm%20wet%20car%20polisher%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20water%20cooling%20system&width=280&height=280&seq=workshop-pol-009&orientation=squarish'
        },
        {
          id: 'pol-010',
          model: t('products.workshop.polisher.010.model'),
          description: t('products.workshop.polisher.010.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%20180mm%20smart%20car%20polisher%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20digital%20display%20screen&width=280&height=280&seq=workshop-pol-010&orientation=squarish'
        }
      ]
    },
    {
      id: 'sander',
      name: t('products.workshop.categories.sander'),
      slug: 'sander',
      products: [
        {
          id: 'san-001',
          model: t('products.workshop.sander.001.model'),
          description: t('products.workshop.sander.001.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%20125mm%20eccentric%20orbital%20sander%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20dust%20collection%20port&width=280&height=280&seq=workshop-san-001&orientation=squarish'
        },
        {
          id: 'san-002',
          model: t('products.workshop.sander.002.model'),
          description: t('products.workshop.sander.002.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%20150mm%20random%20orbital%20sander%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20ergonomic%20grip&width=280&height=280&seq=workshop-san-002&orientation=squarish'
        },
        {
          id: 'san-003',
          model: t('products.workshop.sander.003.model'),
          description: t('products.workshop.sander.003.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%20100mm%20triangular%20detail%20sander%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20pointed%20tip%20design&width=280&height=280&seq=workshop-san-003&orientation=squarish'
        },
        {
          id: 'san-004',
          model: t('products.workshop.sander.004.model'),
          description: t('products.workshop.sander.004.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%20200mm%20wide%20belt%20sander%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20belt%20tracking%20system&width=280&height=280&seq=workshop-san-004&orientation=squarish'
        },
        {
          id: 'san-005',
          model: t('products.workshop.sander.005.model'),
          description: t('products.workshop.sander.005.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%20125mm%20variable%20speed%20sander%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20speed%20dial%20control&width=280&height=280&seq=workshop-san-005&orientation=squarish'
        },
        {
          id: 'san-006',
          model: t('products.workshop.sander.006.model'),
          description: t('products.workshop.sander.006.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%20150mm%20wet%20dry%20sander%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20water%20resistant%20design&width=280&height=280&seq=workshop-san-006&orientation=squarish'
        },
        {
          id: 'san-007',
          model: t('products.workshop.sander.007.model'),
          description: t('products.workshop.sander.007.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%20125mm%20cordless%20orbital%20sander%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20battery%20pack%20mounted&width=280&height=280&seq=workshop-san-007&orientation=squarish'
        },
        {
          id: 'san-008',
          model: t('products.workshop.sander.008.model'),
          description: t('products.workshop.sander.008.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%20100mm%20pneumatic%20palm%20sander%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20air%20connector&width=280&height=280&seq=workshop-san-008&orientation=squarish'
        },
        {
          id: 'san-009',
          model: t('products.workshop.sander.009.model'),
          description: t('products.workshop.sander.009.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%20150mm%20wall%20ceiling%20sander%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20telescopic%20pole&width=280&height=280&seq=workshop-san-009&orientation=squarish'
        },
        {
          id: 'san-010',
          model: t('products.workshop.sander.010.model'),
          description: t('products.workshop.sander.010.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%20125mm%20silent%20orbital%20sander%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20noise%20reduction%20housing&width=280&height=280&seq=workshop-san-010&orientation=squarish'
        }
      ]
    },
    {
      id: 'glue-gun',
      name: t('products.workshop.categories.glueGun'),
      slug: 'glue-gun',
      products: [
        {
          id: 'glue-001',
          model: t('products.workshop.glueGun.001.model'),
          description: t('products.workshop.glueGun.001.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2080W%20hot%20glue%20gun%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20trigger%20grip%20design&width=280&height=280&seq=workshop-glue-001&orientation=squarish'
        },
        {
          id: 'glue-002',
          model: t('products.workshop.glueGun.002.model'),
          description: t('products.workshop.glueGun.002.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%20100W%20high%20temperature%20glue%20gun%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20heavy%20duty%20nozzle&width=280&height=280&seq=workshop-glue-002&orientation=squarish'
        },
        {
          id: 'glue-003',
          model: t('products.workshop.glueGun.003.model'),
          description: t('products.workshop.glueGun.003.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2060W%20mini%20hot%20glue%20gun%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20compact%20size&width=280&height=280&seq=workshop-glue-003&orientation=squarish'
        },
        {
          id: 'glue-004',
          model: t('products.workshop.glueGun.004.model'),
          description: t('products.workshop.glueGun.004.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%20120W%20dual%20temperature%20glue%20gun%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20temperature%20switch&width=280&height=280&seq=workshop-glue-004&orientation=squarish'
        },
        {
          id: 'glue-005',
          model: t('products.workshop.glueGun.005.model'),
          description: t('products.workshop.glueGun.005.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2080W%20cordless%20hot%20glue%20gun%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20battery%20pack%20base&width=280&height=280&seq=workshop-glue-005&orientation=squarish'
        },
        {
          id: 'glue-006',
          model: t('products.workshop.glueGun.006.model'),
          description: t('products.workshop.glueGun.006.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%20100W%20precision%20hot%20glue%20gun%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20fine%20tip%20nozzle&width=280&height=280&seq=workshop-glue-006&orientation=squarish'
        },
        {
          id: 'glue-007',
          model: t('products.workshop.glueGun.007.model'),
          description: t('products.workshop.glueGun.007.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%20150W%20industrial%20hot%20glue%20gun%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20large%20capacity%20chamber&width=280&height=280&seq=workshop-glue-007&orientation=squarish'
        },
        {
          id: 'glue-008',
          model: t('products.workshop.glueGun.008.model'),
          description: t('products.workshop.glueGun.008.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2080W%20smart%20hot%20glue%20gun%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20LED%20indicator%20light&width=280&height=280&seq=workshop-glue-008&orientation=squarish'
        },
        {
          id: 'glue-009',
          model: t('products.workshop.glueGun.009.model'),
          description: t('products.workshop.glueGun.009.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%20100W%20dual%20nozzle%20hot%20glue%20gun%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20interchangeable%20tips&width=280&height=280&seq=workshop-glue-009&orientation=squarish'
        },
        {
          id: 'glue-010',
          model: t('products.workshop.glueGun.010.model'),
          description: t('products.workshop.glueGun.010.description'),
          image: 'https://readdy.ai/api/search-image?query=professional%2080W%20long%20nozzle%20hot%20glue%20gun%20tool%20with%20black%20and%20orange%20color%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20extended%20tip%20design&width=280&height=280&seq=workshop-glue-010&orientation=squarish'
        }
      ]
    }
  ];

  useEffect(() => {
    if (category) {
      const cat = categories.find(c => c.slug === category);
      if (cat) {
        setActiveCategory(cat.id);
        setTimeout(() => {
          scrollToCategory(cat.id);
        }, 100);
      }
    }
  }, [category]);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const scrollPosition = window.scrollY + 200;

      for (const cat of categories) {
        const element = categoryRefs.current[cat.id];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveCategory(cat.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCategory = (categoryId: string) => {
    const element = categoryRefs.current[categoryId];
    if (element) {
      isScrollingRef.current = true;
      const navbarHeight = 80;
      const tabHeight = 64;
      const offset = navbarHeight + tabHeight;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    scrollToCategory(categoryId);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative w-full overflow-hidden aspect-[16/9] md:aspect-auto md:h-[580px]">
        <img
          src="https://readdy.ai/api/search-image?query=professional%20workshop%20power%20tools%20collection%20including%20car%20polisher%20orbital%20sander%20hot%20glue%20gun%20on%20industrial%20workbench%20background%2C%20clean%20organized%20workspace%2C%20black%20and%20orange%20tools%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20photography%2C%20modern%20workshop%20environment&width=1920&height=580&seq=workshop-hero-banner-01&orientation=landscape"
          alt={t('products.workshop.hero.title')}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30"></div>
      </div>

      {/* Page Title */}
      <div className="py-16 px-16 text-center">
        <h2 id="page-title" className="text-4xl font-black mb-4" style={{ color: '#144c90' }}>{t('products.workshop.pageHeader.title')}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {t('products.workshop.pageHeader.description')}
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
                  to={`/products/workshop/${cat.slug}/${product.id}`}
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