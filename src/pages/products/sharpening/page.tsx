import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';
import ContactSection from '../../../components/feature/ContactSection';

interface Product {
  id: string;
  name: string;
  model: string;
  description: string;
  image: string;
  category: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

export default function SharpeningPage() {
  const { t } = useTranslation();
  const { category } = useParams<{ category?: string }>();
  const [activeCategory, setActiveCategory] = useState(category || 'workbench');
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const categories: Category[] = [
    { id: 'workbench', name: t('products.sharpening.categories.workbench'), slug: 'workbench' },
    { id: 'drill-repair', name: t('products.sharpening.categories.drillRepair'), slug: 'drill-repair' },
    { id: 'engraving', name: t('products.sharpening.categories.engraving'), slug: 'engraving' },
  ];

  const products: Product[] = [
    // 多功能磨削工作台
    {
      id: 'wb-001',
      name: t('products.sharpening.workbench.001.name'),
      model: t('products.sharpening.workbench.001.model'),
      description: t('products.sharpening.workbench.001.description'),
      image: 'https://readdy.ai/api/search-image?query=professional%20multi-function%20knife%20sharpening%20workbench%20with%20angle%20adjustment%20system%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20metallic%20gray%20and%20black%20finish%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot%2C%20sharp%20detail&width=280&height=280&seq=sharpening-wb-001&orientation=squarish',
      category: 'workbench'
    },
    {
      id: 'wb-002',
      name: t('products.sharpening.workbench.002.name'),
      model: t('products.sharpening.workbench.002.model'),
      description: t('products.sharpening.workbench.002.description'),
      image: 'https://readdy.ai/api/search-image?query=professional%20benchtop%20knife%20sharpener%20with%20water%20cooling%20system%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20silver%20and%20black%20metallic%20finish%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot&width=280&height=280&seq=sharpening-wb-002&orientation=squarish',
      category: 'workbench'
    },
    {
      id: 'wb-003',
      name: t('products.sharpening.workbench.003.name'),
      model: t('products.sharpening.workbench.003.model'),
      description: t('products.sharpening.workbench.003.description'),
      image: 'https://readdy.ai/api/search-image?query=precision%20grinding%20platform%20with%20digital%20angle%20display%20for%20knife%20sharpening%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20metallic%20finish%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot&width=280&height=280&seq=sharpening-wb-003&orientation=squarish',
      category: 'workbench'
    },
    {
      id: 'wb-004',
      name: t('products.sharpening.workbench.004.name'),
      model: t('products.sharpening.workbench.004.model'),
      description: t('products.sharpening.workbench.004.description'),
      image: 'https://readdy.ai/api/search-image?query=multi-angle%20knife%20sharpening%20station%20with%200-90%20degree%20adjustment%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20black%20and%20gray%20finish%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot&width=280&height=280&seq=sharpening-wb-004&orientation=squarish',
      category: 'workbench'
    },
    {
      id: 'wb-005',
      name: t('products.sharpening.workbench.005.name'),
      model: t('products.sharpening.workbench.005.model'),
      description: t('products.sharpening.workbench.005.description'),
      image: 'https://readdy.ai/api/search-image?query=professional%20tool%20grinding%20center%20with%20multiple%20sharpening%20functions%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20metallic%20gray%20finish%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot&width=280&height=280&seq=sharpening-wb-005&orientation=squarish',
      category: 'workbench'
    },
    {
      id: 'wb-006',
      name: t('products.sharpening.workbench.006.name'),
      model: t('products.sharpening.workbench.006.model'),
      description: t('products.sharpening.workbench.006.description'),
      image: 'https://readdy.ai/api/search-image?query=portable%20knife%20sharpening%20workbench%20lightweight%20design%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20black%20and%20silver%20finish%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot&width=280&height=280&seq=sharpening-wb-006&orientation=squarish',
      category: 'workbench'
    },
    {
      id: 'wb-007',
      name: t('products.sharpening.workbench.007.name'),
      model: t('products.sharpening.workbench.007.model'),
      description: t('products.sharpening.workbench.007.description'),
      image: 'https://readdy.ai/api/search-image?query=heavy-duty%20grinding%20workbench%20for%20large%20tools%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20robust%20metallic%20construction%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot&width=280&height=280&seq=sharpening-wb-007&orientation=squarish',
      category: 'workbench'
    },
    {
      id: 'wb-008',
      name: t('products.sharpening.workbench.008.name'),
      model: t('products.sharpening.workbench.008.model'),
      description: t('products.sharpening.workbench.008.description'),
      image: 'https://readdy.ai/api/search-image?query=smart%20knife%20sharpening%20system%20with%20automatic%20angle%20recognition%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20modern%20design%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot&width=280&height=280&seq=sharpening-wb-008&orientation=squarish',
      category: 'workbench'
    },
    {
      id: 'wb-009',
      name: t('products.sharpening.workbench.009.name'),
      model: t('products.sharpening.workbench.009.model'),
      description: t('products.sharpening.workbench.009.description'),
      image: 'https://readdy.ai/api/search-image?query=professional%20kitchen%20knife%20sharpening%20station%20easy%20operation%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20sleek%20design%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot&width=280&height=280&seq=sharpening-wb-009&orientation=squarish',
      category: 'workbench'
    },
    {
      id: 'wb-010',
      name: t('products.sharpening.workbench.010.name'),
      model: t('products.sharpening.workbench.010.model'),
      description: t('products.sharpening.workbench.010.description'),
      image: 'https://readdy.ai/api/search-image?query=industrial-grade%20grinding%20platform%20for%20mass%20production%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20heavy-duty%20construction%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot&width=280&height=280&seq=sharpening-wb-010&orientation=squarish',
      category: 'workbench'
    },
    // 钻头修复机
    {
      id: 'dr-001',
      name: t('products.sharpening.drillRepair.001.name'),
      model: t('products.sharpening.drillRepair.001.model'),
      description: t('products.sharpening.drillRepair.001.description'),
      image: 'https://readdy.ai/api/search-image?query=precision%20drill%20bit%20repair%20machine%20for%20various%20drill%20types%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20metallic%20finish%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot&width=280&height=280&seq=sharpening-dr-001&orientation=squarish',
      category: 'drill-repair'
    },
    {
      id: 'dr-002',
      name: t('products.sharpening.drillRepair.002.name'),
      model: t('products.sharpening.drillRepair.002.model'),
      description: t('products.sharpening.drillRepair.002.description'),
      image: 'https://readdy.ai/api/search-image?query=benchtop%20drill%20bit%20grinder%20with%20high-precision%20fixture%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20gray%20and%20black%20finish%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot&width=280&height=280&seq=sharpening-dr-002&orientation=squarish',
      category: 'drill-repair'
    },
    {
      id: 'dr-003',
      name: t('products.sharpening.drillRepair.003.name'),
      model: t('products.sharpening.drillRepair.003.model'),
      description: t('products.sharpening.drillRepair.003.description'),
      image: 'https://readdy.ai/api/search-image?query=portable%20drill%20bit%20sharpener%20lightweight%20for%20field%20work%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20compact%20design%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot&width=280&height=280&seq=sharpening-dr-003&orientation=squarish',
      category: 'drill-repair'
    },
    {
      id: 'dr-004',
      name: t('products.sharpening.drillRepair.004.name'),
      model: t('products.sharpening.drillRepair.004.model'),
      description: t('products.sharpening.drillRepair.004.description'),
      image: 'https://readdy.ai/api/search-image?query=multi-function%20drill%20bit%20grinding%20machine%20for%20various%20sizes%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20metallic%20construction%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot&width=280&height=280&seq=sharpening-dr-004&orientation=squarish',
      category: 'drill-repair'
    },
    {
      id: 'dr-005',
      name: t('products.sharpening.drillRepair.005.name'),
      model: t('products.sharpening.drillRepair.005.model'),
      description: t('products.sharpening.drillRepair.005.description'),
      image: 'https://readdy.ai/api/search-image?query=professional%20drill%20bit%20repair%20center%20with%20multiple%20functions%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20robust%20design%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot&width=280&height=280&seq=sharpening-dr-005&orientation=squarish',
      category: 'drill-repair'
    },
    {
      id: 'dr-006',
      name: t('products.sharpening.drillRepair.006.name'),
      model: t('products.sharpening.drillRepair.006.model'),
      description: t('products.sharpening.drillRepair.006.description'),
      image: 'https://readdy.ai/api/search-image?query=automatic%20drill%20bit%20grinder%20with%20auto-feed%20system%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20modern%20design%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot&width=280&height=280&seq=sharpening-dr-006&orientation=squarish',
      category: 'drill-repair'
    },
    {
      id: 'dr-007',
      name: t('products.sharpening.drillRepair.007.name'),
      model: t('products.sharpening.drillRepair.007.model'),
      description: t('products.sharpening.drillRepair.007.description'),
      image: 'https://readdy.ai/api/search-image?query=high-speed%20drill%20bit%20repair%20machine%20for%20fast%20production%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20sleek%20metallic%20finish%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot&width=280&height=280&seq=sharpening-dr-007&orientation=squarish',
      category: 'drill-repair'
    },
    {
      id: 'dr-008',
      name: t('products.sharpening.drillRepair.008.name'),
      model: t('products.sharpening.drillRepair.008.model'),
      description: t('products.sharpening.drillRepair.008.description'),
      image: 'https://readdy.ai/api/search-image?query=CNC%20drill%20bit%20grinder%20with%20digital%20control%20system%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20advanced%20technology%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot&width=280&height=280&seq=sharpening-dr-008&orientation=squarish',
      category: 'drill-repair'
    },
    {
      id: 'dr-009',
      name: t('products.sharpening.drillRepair.009.name'),
      model: t('products.sharpening.drillRepair.009.model'),
      description: t('products.sharpening.drillRepair.009.description'),
      image: 'https://readdy.ai/api/search-image?query=small%20drill%20bit%20sharpener%20for%20small%20diameter%20drills%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20compact%20size%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot&width=280&height=280&seq=sharpening-dr-009&orientation=squarish',
      category: 'drill-repair'
    },
    {
      id: 'dr-010',
      name: t('products.sharpening.drillRepair.010.name'),
      model: t('products.sharpening.drillRepair.010.model'),
      description: t('products.sharpening.drillRepair.010.description'),
      image: 'https://readdy.ai/api/search-image?query=industrial-grade%20drill%20bit%20grinder%20for%20mass%20production%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20heavy-duty%20construction%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot&width=280&height=280&seq=sharpening-dr-010&orientation=squarish',
      category: 'drill-repair'
    },
    // 雕刻工具
    {
      id: 'eg-001',
      name: t('products.sharpening.engraving.001.name'),
      model: t('products.sharpening.engraving.001.model'),
      description: t('products.sharpening.engraving.001.description'),
      image: 'https://readdy.ai/api/search-image?query=electric%20engraving%20pen%20for%20fine%20detail%20work%20comfortable%20grip%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20sleek%20design%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot&width=280&height=280&seq=sharpening-eg-001&orientation=squarish',
      category: 'engraving'
    },
    {
      id: 'eg-002',
      name: t('products.sharpening.engraving.002.name'),
      model: t('products.sharpening.engraving.002.model'),
      description: t('products.sharpening.engraving.002.description'),
      image: 'https://readdy.ai/api/search-image?query=multi-function%20engraving%20tool%20with%20various%20bits%20for%20different%20materials%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20versatile%20design%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot&width=280&height=280&seq=sharpening-eg-002&orientation=squarish',
      category: 'engraving'
    },
    {
      id: 'eg-003',
      name: t('products.sharpening.engraving.003.name'),
      model: t('products.sharpening.engraving.003.model'),
      description: t('products.sharpening.engraving.003.description'),
      image: 'https://readdy.ai/api/search-image?query=precision%20engraving%20tool%20set%20with%20multiple%20bits%20and%20accessories%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20complete%20kit%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot&width=280&height=280&seq=sharpening-eg-003&orientation=squarish',
      category: 'engraving'
    },
    {
      id: 'eg-004',
      name: t('products.sharpening.engraving.004.name'),
      model: t('products.sharpening.engraving.004.model'),
      description: t('products.sharpening.engraving.004.description'),
      image: 'https://readdy.ai/api/search-image?query=cordless%20engraving%20pen%20with%20lithium%20battery%20for%20mobile%20work%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20portable%20design%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot&width=280&height=280&seq=sharpening-eg-004&orientation=squarish',
      category: 'engraving'
    },
    {
      id: 'eg-005',
      name: t('products.sharpening.engraving.005.name'),
      model: t('products.sharpening.engraving.005.model'),
      description: t('products.sharpening.engraving.005.description'),
      image: 'https://readdy.ai/api/search-image?query=high-speed%20engraving%20machine%2030000%20RPM%20for%20fast%20work%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20powerful%20motor%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot&width=280&height=280&seq=sharpening-eg-005&orientation=squarish',
      category: 'engraving'
    },
    {
      id: 'eg-006',
      name: t('products.sharpening.engraving.006.name'),
      model: t('products.sharpening.engraving.006.model'),
      description: t('products.sharpening.engraving.006.description'),
      image: 'https://readdy.ai/api/search-image?query=micro%20engraving%20tool%20for%20fine%20detail%20and%20precision%20work%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20miniature%20design%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot&width=280&height=280&seq=sharpening-eg-006&orientation=squarish',
      category: 'engraving'
    },
    {
      id: 'eg-007',
      name: t('products.sharpening.engraving.007.name'),
      model: t('products.sharpening.engraving.007.model'),
      description: t('products.sharpening.engraving.007.description'),
      image: 'https://readdy.ai/api/search-image?query=professional%20engraving%20system%20with%20speed%20control%20and%20multiple%20modes%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20advanced%20features%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot&width=280&height=280&seq=sharpening-eg-007&orientation=squarish',
      category: 'engraving'
    },
    {
      id: 'eg-008',
      name: t('products.sharpening.engraving.008.name'),
      model: t('products.sharpening.engraving.008.model'),
      description: t('products.sharpening.engraving.008.description'),
      image: 'https://readdy.ai/api/search-image?query=woodworking%20engraving%20tool%20designed%20for%20wood%20carving%20sharp%20durable%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20specialized%20design%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot&width=280&height=280&seq=sharpening-eg-008&orientation=squarish',
      category: 'engraving'
    },
    {
      id: 'eg-009',
      name: t('products.sharpening.engraving.009.name'),
      model: t('products.sharpening.engraving.009.model'),
      description: t('products.sharpening.engraving.009.description'),
      image: 'https://readdy.ai/api/search-image?query=metal%20engraving%20machine%20for%20surface%20marking%20and%20carving%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20robust%20construction%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot&width=280&height=280&seq=sharpening-eg-009&orientation=squarish',
      category: 'engraving'
    },
    {
      id: 'eg-010',
      name: t('products.sharpening.engraving.010.name'),
      model: t('products.sharpening.engraving.010.model'),
      description: t('products.sharpening.engraving.010.description'),
      image: 'https://readdy.ai/api/search-image?query=artistic%20engraving%20tool%20set%20with%20professional%20tools%20for%20creative%20work%20on%20clean%20white%20background%2C%20industrial%20product%20photography%2C%20complete%20collection%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20product%20shot&width=280&height=280&seq=sharpening-eg-010&orientation=squarish',
      category: 'engraving'
    },
  ];

  useEffect(() => {
    if (category) {
      setActiveCategory(category);
      setTimeout(() => {
        scrollToCategory(category);
      }, 100);
    }
  }, [category]);

  useEffect(() => {
    updateUnderline(activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const navbar = document.querySelector('nav');
      const tabBar = document.querySelector('[data-tab-bar]');
      const navbarHeight = navbar?.getBoundingClientRect().height || 0;
      const tabBarHeight = tabBar?.getBoundingClientRect().height || 0;
      const offset = navbarHeight + tabBarHeight + 50;

      for (const cat of categories) {
        const section = sectionRefs.current[cat.id];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom > offset) {
            setActiveCategory(cat.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [categories]);

  const updateUnderline = (catId: string) => {
    const el = categoryRefs.current[catId];
    if (el) {
      setUnderlineStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  };

  const scrollToCategory = (catId: string) => {
    const section = sectionRefs.current[catId];
    const navbar = document.querySelector('nav');
    const tabBar = document.querySelector('[data-tab-bar]');
    const navbarHeight = navbar?.getBoundingClientRect().height || 0;
    const tabBarHeight = tabBar?.getBoundingClientRect().height || 0;
    const offset = navbarHeight + tabBarHeight;

    if (section) {
      isScrollingRef.current = true;
      const top = section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  };

  const handleCategoryClick = (catId: string) => {
    setActiveCategory(catId);
    scrollToCategory(catId);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative w-full overflow-hidden aspect-[16/9] md:aspect-auto md:h-[580px]">
        <img
          src="https://readdy.ai/api/search-image?query=professional%20knife%20sharpening%20and%20grinding%20tools%20workshop%20scene%20with%20workbench%20drill%20repair%20machine%20and%20engraving%20tools%20on%20clean%20industrial%20background%2C%20metallic%20equipment%2C%20precision%20machinery%2C%20studio%20lighting%2C%20high%20resolution%2C%20commercial%20photography%2C%20sharp%20detail&width=1920&height=580&seq=sharpening-hero-banner-01&orientation=landscape"
          alt={t('products.sharpening.hero.title')}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30"></div>
      </div>

      {/* Page Title */}
      <div className="py-16 px-8 text-center">
        <h2 id="page-title" className="text-4xl font-black mb-4" style={{ color: '#144c90' }}>{t('products.sharpening.pageHeader.title')}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {t('products.sharpening.pageHeader.description')}
        </p>
      </div>

      {/* Category Tabs */}
      <div className="sticky z-30 bg-white/70 backdrop-blur-md shadow-md border-b border-white/30" style={{ top: '64px' }} data-tab-bar>
        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto scrollbar-hide px-4 md:px-8">
            <div className="relative flex items-center gap-6 md:gap-8 py-4 min-w-max">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  ref={(el) => { categoryRefs.current[cat.id] = el; }}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`text-base md:text-lg font-semibold transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                    activeCategory === cat.id ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
                  }`}
                >
                  {cat.name}
                </div>
              ))}
              <div
                className="absolute bottom-0 h-1 bg-red-600 transition-all duration-300"
                style={{
                  left: `${underlineStyle.left}px`,
                  width: `${underlineStyle.width}px`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Sections */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        {categories.map((cat) => (
          <div
            key={cat.id}
            ref={(el) => { sectionRefs.current[cat.id] = el; }}
            className="mb-12 md:mb-20"
          >
            <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
              <h3 className="text-xl md:text-3xl font-bold whitespace-nowrap" style={{ color: '#144c90' }}>{cat.name}</h3>
              <div className="flex-1 h-px bg-gray-100"></div>
              <span className="text-xs md:text-sm text-gray-400 font-medium whitespace-nowrap">
                {products.filter((p) => p.category === cat.id).length} {t('nail_guns_products_count')}
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6">
              {products
                .filter((p) => p.category === cat.id)
                .map((product) => (
                  <Link
                    key={product.id}
                    to={`/products/sharpening/${cat.slug}/${product.id}`}
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
                      <div className="text-xs md:text-sm font-bold text-gray-900 mb-1 group-hover:text-[#f6444e] transition-colors duration-200 line-clamp-1">
                        {product.model}
                      </div>
                      <div className="text-[10px] md:text-xs text-gray-400 line-clamp-1">{product.name}</div>
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
