import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ProductCategory {
  title: string;
  link: string;
  subcategories?: { title: string; link: string }[];
}

interface MegaMenuData {
  categories: ProductCategory[];
}

interface MenuItem {
  title: string;
  type: 'megaMenu' | 'scroll' | 'modal';
  megaMenu?: MegaMenuData;
  scrollTo?: string;
  homeOnly?: boolean;
}

interface Language {
  code: string;
  name: string;
  flag: string;
}

const LANGUAGES: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
];

const isMaintenanceMode = () => localStorage.getItem('i18n_maintenance_mode') === 'true';

const getInitialLanguage = (): Language => {
  const saved = localStorage.getItem('i18n_lang');
  return LANGUAGES.find(l => l.code === saved) || LANGUAGES[0];
};

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuState, setMenuState] = useState<'closed' | 'open' | 'closing'>('closed');
  const [activeTitle, setActiveTitle] = useState<string | null>(null);
  const [hoveredCatIndex, setHoveredCatIndex] = useState<number>(0);
  const [leftHighlightIndex, setLeftHighlightIndex] = useState<number>(0);
  const [hoveredSubIndex, setHoveredSubIndex] = useState<number>(0);
  const [highlightSubIndex, setHighlightSubIndex] = useState<number>(-1);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(getInitialLanguage);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);
  const [megaMenuOffset, setMegaMenuOffset] = useState<number>(48);
  const productsMenuRef = useRef<HTMLDivElement>(null);

  const navRef = useRef<HTMLDivElement>(null);
  const menuItemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const catMoveTimer = useRef<NodeJS.Timeout | null>(null);
  const subMoveTimer = useRef<NodeJS.Timeout | null>(null);
  const languageDropdownRef = useRef<HTMLDivElement>(null);
  const lockRef = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const CAT_ITEM_HEIGHT = 48;
  const SUB_ITEM_HEIGHT = 48;

  useEffect(() => {
    const lang = LANGUAGES.find(l => l.code === i18n.language);
    if (lang) setSelectedLanguage(lang);
  }, [i18n.language]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setShowLanguageDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    const updateOffset = () => {
      if (productsMenuRef.current) {
        const rect = productsMenuRef.current.getBoundingClientRect();
        setMegaMenuOffset(Math.max(8, rect.left + 70));
      }
    };
    updateOffset();
    window.addEventListener('resize', updateOffset);
    return () => window.removeEventListener('resize', updateOffset);
  }, []);

  const closeMenu = useCallback((delay: number = 150) => {
    setMenuState('closing');
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setMenuState('closed');
      setActiveTitle(null);
      setHighlightSubIndex(-1);
      setHoveredCatIndex(0);
      setLeftHighlightIndex(0);
      setHoveredSubIndex(0);
      timerRef.current = null;
    }, delay);
  }, []);

  const enterMenu = (title: string) => {
    if (lockRef.current) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    if (menuState === 'closing' || menuState === 'closed') setMenuState('open');
    setActiveTitle(title);
  };

  const leaveMenu = () => {
    if (lockRef.current) return;
    closeMenu(300);
  };

  const handleNavMouseLeave = () => {
    if (lockRef.current) return;
    closeMenu(300);
  };

  const handleDropdownEnter = () => {
    if (lockRef.current) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    if (menuState === 'closing' || menuState === 'closed') setMenuState('open');
  };

  const handleCatHover = (index: number) => {
    setHoveredCatIndex(index);
    setLeftHighlightIndex(index);
    if (catMoveTimer.current) clearTimeout(catMoveTimer.current);
    catMoveTimer.current = setTimeout(() => {
      setHighlightSubIndex(-1);
      setHoveredSubIndex(0);
    }, 80);
  };

  const handleSubHover = (index: number) => {
    setHoveredSubIndex(index);
    if (subMoveTimer.current) clearTimeout(subMoveTimer.current);
    subMoveTimer.current = setTimeout(() => {
      setLeftHighlightIndex(hoveredCatIndex);
      setHighlightSubIndex(index);
    }, 80);
  };

  const handleMenuClick = (item: MenuItem) => {
    if (item.type === 'scroll' && item.scrollTo) {
      const element = document.getElementById(item.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (item.type === 'modal') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleLinkClick = (link: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 点击后：立即开始关闭流程，lock 保持 1 秒（0.5s 延迟 + 0.5s 动画）
    lockRef.current = true;
    if (timerRef.current) clearTimeout(timerRef.current);
    setMenuState('closing');
    timerRef.current = setTimeout(() => {
      setMenuState('closed');
      setActiveTitle(null);
      setHighlightSubIndex(-1);
      setHoveredCatIndex(0);
      setLeftHighlightIndex(0);
      setHoveredSubIndex(0);
      timerRef.current = null;
    }, 200);

    // 0.7 秒后动画彻底完成才释放 lock，防止 hover 把菜单重新拉起来
    setTimeout(() => {
      lockRef.current = false;
    }, 700);

    if (location.pathname === link) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    setShowLanguageDropdown(false);
    i18n.changeLanguage(language.code);
    localStorage.setItem('i18n_lang', language.code);
  };

  const menuItems: MenuItem[] = [
    {
      title: t('nav_products'),
      type: 'megaMenu',
      megaMenu: {
        categories: [
          {
            title: t('cat_nail_guns'),
            link: '/products/nail-guns',
            subcategories: [
              { title: t('cat_nail_4v'), link: '/products/nail-guns/4v' },
              { title: t('cat_nail_20v'), link: '/products/nail-guns/20v' },
              { title: t('cat_nail_ac'), link: '/products/nail-guns/ac' },
            ],
          },
          {
            title: t('cat_garden_tools'),
            link: '/products/garden-tools',
            subcategories: [
              { title: t('cat_garden_chainsaw'), link: '/products/garden-tools/hedge-trimmer' },
              { title: t('cat_garden_pole'), link: '/products/garden-tools/pole-pruner' },
              { title: t('cat_garden_maintenance'), link: '/products/garden-tools/lawn-care' },
            ],
          },
          {
            title: t('cat_brushless'),
            link: '/products/brushless',
            subcategories: [
              { title: t('cat_brushless_impact_drill'), link: '/products/brushless/drill' },
              { title: t('cat_brushless_impact_driver'), link: '/products/brushless/impact-driver' },
              { title: t('cat_brushless_angle_grinder'), link: '/products/brushless/angle-grinder' },
            ],
          },
          {
            title: t('cat_workshop'),
            link: '/products/workshop',
            subcategories: [
              { title: t('cat_workshop_glue_gun'), link: '/products/workshop/glue-gun' },
              { title: t('cat_workshop_polisher'), link: '/products/workshop/polisher' },
            ],
          },
          {
            title: t('cat_sharpening'),
            link: '/products/sharpening',
            subcategories: [
              { title: t('cat_sharpening_workbench'), link: '/products/sharpening/workbench' },
              { title: t('cat_sharpening_drill_repair'), link: '/products/sharpening/drill-repair' },
              { title: t('cat_sharpening_engraving'), link: '/products/sharpening/engraving' },
            ],
          },
        ],
      },
    },
    { title: t('nav_production_scale'), type: 'scroll', scrollTo: 'production-scale', homeOnly: true },
    { title: t('nav_brand_strength'), type: 'scroll', scrollTo: 'brand-strength', homeOnly: true },
    { title: t('nav_contact'), type: 'modal' },
  ];

  const categoryImages: Record<string, string> = {
    [t('cat_nail_guns')]: '/img/homefl/dqiang.jpg',
    [t('cat_garden_tools')]: '/img/homefl/ylin.jpg',
    [t('cat_brushless')]: '/img/homefl/wshua.jpg',
    [t('cat_workshop')]: '/img/homefl/gfang.jpg',
    [t('cat_sharpening')]: '/img/homefl/mxue.jpg',
  };

  const isHomePage = location.pathname === '/';
  const visibleMenuItems = menuItems.filter(item => !item.homeOnly || isHomePage);

  const megaMenuData = menuItems.find(m => m.type === 'megaMenu')?.megaMenu;

  const displayCat = megaMenuData?.categories[hoveredCatIndex] || megaMenuData?.categories[0];

  const isMenuOpen = menuState !== 'closed';

  return (
    <>
      <nav
        ref={navRef}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/70 backdrop-blur-md shadow-lg border-b border-white/30'
            : 'bg-white/70 backdrop-blur-md shadow-sm border-b border-white/20'
        }`}
        onMouseLeave={() => {
          handleNavMouseLeave();
        }}
      >
        <div className="w-full px-4 md:px-8">
          <div className="flex items-center h-14 md:h-16 gap-4 md:gap-10">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src="/logo/logo.png"
                alt="Dongwei Tools"
                className="h-9 md:h-10 w-auto object-contain"
              />
            </Link>

            {/* 桌面端主菜单 */}
            <div className="hidden md:flex items-center gap-2 flex-1">
              {visibleMenuItems.map((item) => (
                <div
                  key={item.title}
                  ref={(el) => {
                    menuItemRefs.current[item.title] = el;
                    if (item.type === 'megaMenu') {
                      (productsMenuRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
                    }
                  }}
                  className="relative"
                  onMouseEnter={() => item.type === 'megaMenu' ? enterMenu(item.title) : undefined}
                >
                  {item.type === 'megaMenu' ? (
                    <div className="flex items-center">
                      <Link
                        to="/products/all"
                        onClick={handleLinkClick('/products/all')}
                        className="px-4 py-1.5 font-semibold text-base transition-colors duration-200 whitespace-nowrap cursor-pointer"
                        style={{ color: activeTitle === item.title ? '#144c90' : '#1f2937' }}
                      >
                        {item.title}
                      </Link>
                      <button
                        onClick={() => {
                          if (activeTitle === item.title) {
                            lockRef.current = false;
                            closeMenu();
                          } else {
                            lockRef.current = false;
                            enterMenu(item.title);
                          }
                        }}
                        className="pr-3 py-1.5 transition-colors duration-200 cursor-pointer"
                        style={{ color: activeTitle === item.title ? '#144c90' : '#1f2937' }}
                      >
                        <i
                          className="ri-arrow-down-s-line text-lg transition-transform duration-700"
                          style={{ transform: activeTitle === item.title ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        ></i>
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleMenuClick(item)}
                      className="px-4 py-1.5 font-semibold text-base transition-colors duration-200 whitespace-nowrap cursor-pointer flex items-center gap-1"
                      style={{ color: '#1f2937' }}
                    >
                      {item.title}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* 桌面端语言选择 */}
            {isMaintenanceMode() && (
            <div className="hidden md:flex items-center gap-3 flex-shrink-0">
              <div ref={languageDropdownRef} className="relative">
                <button
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer hover:bg-gray-100"
                >
                  <span className="text-xl">{selectedLanguage.flag}</span>
                  <span className="font-medium text-sm text-gray-700">{selectedLanguage.name}</span>
                  <i className={`ri-arrow-down-s-line text-lg text-gray-600 transition-transform duration-200 ${showLanguageDropdown ? 'rotate-180' : ''}`}></i>
                </button>

                {showLanguageDropdown && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-2xl border border-gray-200 py-2 min-w-[180px] z-[200]">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang)}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 transition-colors duration-200 cursor-pointer ${
                          selectedLanguage.code === lang.code
                            ? 'text-[#144c90] bg-gray-50'
                            : 'text-gray-700 hover:text-[#144c90] hover:bg-gray-50'
                        }`}
                      >
                        <span className="text-xl">{lang.flag}</span>
                        <span className="font-medium text-sm">{lang.name}</span>
                        {selectedLanguage.code === lang.code && (
                          <i className="ri-check-line text-lg ml-auto" style={{ color: '#144c90' }}></i>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            )}

            {/* 手机端右侧：语言 + 汉堡菜单 */}
            <div className="flex md:hidden items-center gap-2 ml-auto">
              {isMaintenanceMode() && (
              <button
                onClick={() => {
                  const currentIndex = LANGUAGES.findIndex(l => l.code === selectedLanguage.code);
                  const nextLang = LANGUAGES[(currentIndex + 1) % LANGUAGES.length];
                  handleLanguageChange(nextLang);
                }}
                className="flex items-center gap-1 px-2 py-1.5 rounded-lg cursor-pointer hover:bg-gray-100"
              >
                <span className="text-lg">{selectedLanguage.flag}</span>
                <span className="text-xs font-medium text-gray-600">{selectedLanguage.name}</span>
              </button>
              )}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer hover:bg-gray-100"
              >
                <i className={`text-2xl text-gray-700 ${mobileOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* 桌面端 Mega Menu */}
        {megaMenuData && (
          <div
            className="absolute left-0 right-0 top-full bg-white shadow-2xl border-t-2 z-50 overflow-hidden hidden md:block"
            style={{
              borderTopColor: '#144c90',
              pointerEvents: isMenuOpen ? 'auto' : 'none',
              opacity: isMenuOpen ? 1 : 0,
              transform: isMenuOpen ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.5s cubic-bezier(0.4,0,0.2,1), transform 0.5s cubic-bezier(0.4,0,0.2,1)',
            }}
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={leaveMenu}
          >
            <div
              className="flex items-stretch"
              style={{
                minHeight: '400px',
                paddingLeft: `${megaMenuOffset}px`,
                paddingRight: '32px',
                transition: 'padding-left 0.15s ease',
              }}
            >
              {/* 左侧分类列表 */}
              <div className="w-60 flex-shrink-0 py-8 pr-6">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{t('nav_products')}</div>
                <div className="relative">
                  {/* 高亮背景条 */}
                  <div
                    className="absolute left-0 right-0 rounded-lg"
                    style={{
                      height: `${CAT_ITEM_HEIGHT}px`,
                      top: `${(leftHighlightIndex + 1) * CAT_ITEM_HEIGHT}px`,
                      backgroundColor: leftHighlightIndex === -1 ? '#fef2f2' : '#eff6ff',
                      transition: 'top 0.22s cubic-bezier(0.4,0,0.2,1), background-color 0.22s ease',
                      pointerEvents: 'none',
                    }}
                  />
                  {/* 所有产品入口 */}
                  <Link
                    to="/products/all"
                    onClick={handleLinkClick('/products/all')}
                    onMouseEnter={() => {
                      setLeftHighlightIndex(-1);
                      setHighlightSubIndex(-1);
                    }}
                    className="relative flex items-center gap-2 px-4 py-3 rounded-lg font-bold text-base cursor-pointer"
                    style={{
                      height: `${CAT_ITEM_HEIGHT}px`,
                      color: leftHighlightIndex === -1 ? '#f6444e' : '#374151',
                      transition: 'color 0.18s ease',
                      zIndex: 1,
                    }}
                  >
                    <i className="ri-apps-2-line text-lg"></i>
                    <span>{t('all_products_nav', '所有产品')}</span>
                  </Link>
                  {/* 分类列表 */}
                  {megaMenuData.categories.map((cat, i) => (
                    <Link
                      key={i}
                      to={cat.link}
                      onClick={handleLinkClick(cat.link)}
                      onMouseEnter={() => handleCatHover(i)}
                      className="relative py-3 px-4 text-base font-medium flex items-center justify-between cursor-pointer rounded-lg"
                      style={{
                        height: `${CAT_ITEM_HEIGHT}px`,
                        color: leftHighlightIndex === i ? '#144c90' : '#374151',
                        transition: 'color 0.18s ease',
                        zIndex: 1,
                      }}
                    >
                      <span>{cat.title}</span>
                      <i
                        className="ri-arrow-right-s-line text-lg"
                        style={{
                          color: leftHighlightIndex === i ? '#144c90' : '#9ca3af',
                          transition: 'color 0.18s ease',
                        }}
                      ></i>
                    </Link>
                  ))}
                </div>
              </div>

              {/* 分隔线 */}
              <div className="w-px bg-gray-200 flex-shrink-0 mx-4 my-8"></div>

              {/* 中间：二级菜单 */}
              <div className="w-80 flex-shrink-0 py-8 px-6">
                <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#144c90' }}>
                  {displayCat?.title}
                </div>
                <div className="relative">
                  {highlightSubIndex >= 0 && (
                    <div
                      className="absolute left-0 right-0 rounded-lg bg-blue-50"
                      style={{
                        height: `${SUB_ITEM_HEIGHT}px`,
                        top: `${highlightSubIndex * SUB_ITEM_HEIGHT}px`,
                        transition: 'top 0.22s cubic-bezier(0.4,0,0.2,1)',
                        pointerEvents: 'none',
                      }}
                    />
                  )}
                  {displayCat?.subcategories?.map((sub, j) => (
                    <Link
                      key={j}
                      to={sub.link}
                      onClick={handleLinkClick(sub.link)}
                      onMouseEnter={() => handleSubHover(j)}
                      className="relative flex items-center gap-3 px-4 text-base rounded-lg cursor-pointer"
                      style={{
                        height: `${SUB_ITEM_HEIGHT}px`,
                        color: highlightSubIndex === j ? '#144c90' : '#374151',
                        transition: 'color 0.18s ease',
                        zIndex: 1,
                      }}
                    >
                      <i
                        className="ri-arrow-right-s-line text-base flex-shrink-0"
                        style={{
                          color: (highlightSubIndex >= 0 && highlightSubIndex === j) ? '#144c90' : '#d1d5db',
                          transition: 'color 0.18s ease',
                        }}
                      ></i>
                      <span>{sub.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* 弹性间距 */}
              <div className="flex-1 min-w-[20px] max-w-[120px]"></div>

              {/* 分类图片 */}
              <div
                className="relative flex-shrink-0 overflow-hidden bg-gray-100"
                style={{ width: '600px', aspectRatio: '3/2', alignSelf: 'center' }}
              >
                {megaMenuData.categories.map((cat, index) => (
                  <div
                    key={cat.title}
                    className="absolute inset-0"
                    style={{
                      opacity: hoveredCatIndex === index ? 1 : 0,
                      transition: 'opacity 0.35s ease',
                      zIndex: hoveredCatIndex === index ? 10 : 0
                    }}
                  >
                    <img
                      src={categoryImages[cat.title]}
                      alt={cat.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581147036324-c17ac41dfa6c?q=80&w=800';
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* 手机端抽屉菜单 */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* 遮罩 */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          ></div>

          {/* 抽屉内容 */}
          <div className="absolute top-0 left-0 bottom-0 w-80 max-w-[90vw] bg-white shadow-2xl flex flex-col overflow-y-auto">
            {/* 抽屉头部 */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <img
                src="/logo/logo.png"
                alt="Dongwei Tools"
                className="h-9 w-auto object-contain"
              />
              <button
                onClick={() => setMobileOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-lg cursor-pointer hover:bg-gray-100"
              >
                <i className="ri-close-line text-xl text-gray-600"></i>
              </button>
            </div>

            {/* 菜单列表 */}
            <div className="flex-1 py-3">
              {/* 产品中心 - 可展开 */}
              <div>
                <div className="flex items-center">
                  <Link
                    to="/products/all"
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 px-5 py-3.5 text-base font-semibold text-gray-800 hover:bg-gray-50 cursor-pointer"
                  >
                    {t('nav_products')}
                  </Link>
                  <button
                    onClick={() => setMobileProductOpen(!mobileProductOpen)}
                    className="px-4 py-3.5 text-gray-500 hover:bg-gray-50 cursor-pointer"
                  >
                    <i className={`ri-arrow-down-s-line text-xl transition-transform duration-200 ${mobileProductOpen ? 'rotate-180' : ''}`}></i>
                  </button>
                </div>

                {mobileProductOpen && megaMenuData && (
                  <div className="bg-gray-50 border-t border-b border-gray-100">
                    {/* 所有产品入口 */}
                    <Link
                      to="/products/all"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 px-6 py-3 text-sm font-bold cursor-pointer hover:bg-gray-100"
                      style={{ color: '#f6444e' }}
                    >
                      <i className="ri-apps-2-line text-base"></i>
                      <span>{t('all_products_nav', '所有产品')}</span>
                    </Link>
                    {megaMenuData.categories.map((cat, i) => (
                      <div key={i}>
                        {/* 一级分类 */}
                        <button
                          onClick={() => setMobileExpandedCat(mobileExpandedCat === cat.title ? null : cat.title)}
                          className="w-full flex items-center justify-between px-6 py-3 text-sm font-semibold cursor-pointer hover:bg-gray-100"
                          style={{ color: mobileExpandedCat === cat.title ? '#144c90' : '#374151' }}
                        >
                          <span>{cat.title}</span>
                          <i className={`ri-arrow-down-s-line text-lg transition-transform duration-200 ${mobileExpandedCat === cat.title ? 'rotate-180' : ''}`}
                            style={{ color: mobileExpandedCat === cat.title ? '#144c90' : '#9ca3af' }}
                          ></i>
                        </button>

                        {/* 二级子分类 */}
                        {mobileExpandedCat === cat.title && cat.subcategories && (
                          <div className="bg-white border-t border-gray-100">
                            {cat.subcategories.map((sub, j) => (
                              <Link
                                key={j}
                                to={sub.link}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-2 px-8 py-2.5 text-sm text-gray-600 hover:text-[#144c90] hover:bg-blue-50 cursor-pointer"
                              >
                                <i className="ri-arrow-right-s-line text-sm text-gray-300"></i>
                                <span>{sub.title}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 其他菜单项 */}
              {visibleMenuItems.filter(item => item.type !== 'megaMenu').map((item) => (
                <button
                  key={item.title}
                  onClick={() => {
                    handleMenuClick(item);
                    setMobileOpen(false);
                  }}
                  className="w-full flex items-center px-5 py-3.5 text-base font-semibold text-gray-800 hover:bg-gray-50 cursor-pointer text-left"
                >
                  {item.title}
                </button>
              ))}
            </div>

            {/* 底部语言切换 */}
            {isMaintenanceMode() && (
            <div className="border-t border-gray-100 px-5 py-4">
              <div className="text-xs text-gray-400 font-medium mb-2 uppercase tracking-wider">{t('nav_language_label')}</div>
              <div className="flex gap-2">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium cursor-pointer transition-colors ${
                      selectedLanguage.code === lang.code
                        ? 'bg-[#144c90] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}