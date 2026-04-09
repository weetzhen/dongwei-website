import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

const getInitialLanguage = (): Language => {
  const saved = localStorage.getItem('i18n_lang');
  return LANGUAGES.find(l => l.code === saved) || LANGUAGES[0];
};

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [hoveredCatIndex, setHoveredCatIndex] = useState<number>(0);
  const [highlightCatIndex, setHighlightCatIndex] = useState<number>(0);
  const [hoveredSubIndex, setHoveredSubIndex] = useState<number>(0);
  const [highlightSubIndex, setHighlightSubIndex] = useState<number>(0);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(getInitialLanguage);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);
  const [megaMenuOffset, setMegaMenuOffset] = useState<number>(48);
  const productsMenuRef = useRef<HTMLDivElement>(null);

  const navRef = useRef<HTMLDivElement>(null);
  const menuItemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const menuLeaveTimer = useRef<NodeJS.Timeout | null>(null);
  const catMoveTimer = useRef<NodeJS.Timeout | null>(null);
  const subMoveTimer = useRef<NodeJS.Timeout | null>(null);
  const languageDropdownRef = useRef<HTMLDivElement>(null);

  // 每个一级菜单项高度
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

  // 手机菜单打开时禁止背景滚动
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

  const handleMenuEnter = (title: string) => {
    if (menuLeaveTimer.current) {
      clearTimeout(menuLeaveTimer.current);
      menuLeaveTimer.current = null;
    }
    setActiveMenu(title);
    setActiveSubMenu(null);
  };

  const handleMenuLeave = () => {
    menuLeaveTimer.current = setTimeout(() => {
      setActiveMenu(null);
      setActiveSubMenu(null);
    }, 150);
  };

  const handleDropdownEnter = () => {
    if (menuLeaveTimer.current) {
      clearTimeout(menuLeaveTimer.current);
      menuLeaveTimer.current = null;
    }
  };

  const handleCatHover = (index: number) => {
    setHoveredCatIndex(index);
    if (catMoveTimer.current) clearTimeout(catMoveTimer.current);
    catMoveTimer.current = setTimeout(() => {
      setHighlightCatIndex(index);
      setHighlightSubIndex(0);
      setHoveredSubIndex(0);
    }, 80);
    setActiveSubMenu(megaMenuData?.categories[index]?.title || null);
  };

  const handleSubHover = (index: number) => {
    setHoveredSubIndex(index);
    if (subMoveTimer.current) clearTimeout(subMoveTimer.current);
    subMoveTimer.current = setTimeout(() => {
      setHighlightSubIndex(index);
    }, 800);
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
              { title: t('cat_garden_chainsaw'), link: '/products/garden-tools/chainsaw' },
              { title: t('cat_garden_pole'), link: '/products/garden-tools/pole' },
              { title: t('cat_garden_maintenance'), link: '/products/garden-tools/maintenance' },
            ],
          },
          {
            title: t('cat_brushless'),
            link: '/products/brushless',
            subcategories: [
              { title: t('cat_brushless_impact_drill'), link: '/products/brushless/impact-drill' },
              { title: t('cat_brushless_impact_driver'), link: '/products/brushless/impact-driver' },
              { title: t('cat_brushless_angle_grinder'), link: '/products/brushless/angle-grinder' },
            ],
          },
          {
            title: t('cat_workshop'),
            link: '/products/workshop',
            subcategories: [
              { title: t('cat_workshop_polisher'), link: '/products/workshop/polisher' },
              { title: t('cat_workshop_sander'), link: '/products/workshop/sander' },
              { title: t('cat_workshop_glue_gun'), link: '/products/workshop/glue-gun' },
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
    { title: t('nav_production_scale'), type: 'scroll', scrollTo: 'production-scale' },
    { title: t('nav_brand_strength'), type: 'scroll', scrollTo: 'brand-strength' },
    { title: t('nav_contact'), type: 'modal' },
  ];

  //主页产品中心下拉分类图片
  const categoryImages: Record<string, string> = {
    [t('cat_nail_guns')]: '/img/homefl/dqiang.jpg',
    [t('cat_garden_tools')]: '/img/homefl/ylin.jpg',
    [t('cat_brushless')]: '/img/homefl/qzuan.jpg',
    [t('cat_workshop')]: '/img/homefl/mxue.jpg',
    [t('cat_sharpening')]: '/img/homefl/msha.jpg',
  };

  const megaMenuData = menuItems.find(m => m.type === 'megaMenu')?.megaMenu;

  const currentCatIndex = activeSubMenu
    ? megaMenuData?.categories.findIndex(c => c.title === activeSubMenu) ?? 0
    : 0;
  const displayCat = megaMenuData?.categories[currentCatIndex] || megaMenuData?.categories[0];

  return (
    <>
      <nav
        ref={navRef}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/70 backdrop-blur-md shadow-lg border-b border-white/30'
            : 'bg-white/70 backdrop-blur-md shadow-sm border-b border-white/20'
        }`}
        onMouseLeave={handleMenuLeave}
      >
        <div className="w-full px-4 md:px-8">
          <div className="flex items-center h-16 md:h-20 gap-4 md:gap-10">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src="https://static.readdy.ai/image/56a845be1a5727084d33993c880f54d5/1b380287d61b66cf71a4263d95fcff1b.png"
                alt="Dongwei Tools"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>

            {/* 桌面端主菜单 */}
            <div className="hidden md:flex items-center gap-2 flex-1">
              {menuItems.map((item) => (
                <div
                  key={item.title}
                  ref={(el) => {
                    menuItemRefs.current[item.title] = el;
                    if (item.type === 'megaMenu') {
                      (productsMenuRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
                    }
                  }}
                  className="relative"
                  onMouseEnter={() => item.type === 'megaMenu' ? handleMenuEnter(item.title) : undefined}
                >
                  <button
                    onClick={() => handleMenuClick(item)}
                    className="px-4 py-2 font-semibold text-base transition-colors duration-200 whitespace-nowrap cursor-pointer flex items-center gap-1"
                    style={{ color: activeMenu === item.title ? '#144c90' : '#1f2937' }}
                  >
                    {item.title}
                    {item.type === 'megaMenu' && (
                      <i
                        className="ri-arrow-down-s-line text-lg transition-transform duration-700"
                        style={{ transform: activeMenu === item.title ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      ></i>
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* 桌面端语言选择 */}
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

            {/* 手机端右侧：语言 + 汉堡菜单 */}
            <div className="flex md:hidden items-center gap-2 ml-auto">
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
              pointerEvents: activeMenu ? 'auto' : 'none',
              opacity: activeMenu ? 1 : 0,
              transform: activeMenu ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.28s cubic-bezier(0.4,0,0.2,1), transform 0.28s cubic-bezier(0.4,0,0.2,1)',
            }}
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleMenuLeave}
          >
            <div
              className="flex items-stretch"
              style={{
                minHeight: '360px',
                paddingLeft: `${megaMenuOffset}px`,
                paddingRight: '32px',
                transition: 'padding-left 0.15s ease',
              }}
            >
              {/* 左侧：一级菜单（滑动高亮条） */}
              <div className="w-60 flex-shrink-0 py-8 pr-6">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{t('nav_products')}</div>
                <div className="relative">
                  <div
                    className="absolute left-0 right-0 rounded-lg bg-blue-50"
                    style={{
                      height: `${CAT_ITEM_HEIGHT}px`,
                      top: `${highlightCatIndex * CAT_ITEM_HEIGHT}px`,
                      transition: 'top 0.22s cubic-bezier(0.4,0,0.2,1)',
                      pointerEvents: 'none',
                    }}
                  />
                  {megaMenuData.categories.map((cat, i) => (
                    <div
                      key={i}
                      onMouseEnter={() => handleCatHover(i)}
                      className="relative py-3 px-4 text-base font-medium flex items-center justify-between cursor-default rounded-lg"
                      style={{
                        height: `${CAT_ITEM_HEIGHT}px`,
                        color: highlightCatIndex === i ? '#144c90' : '#374151',
                        transition: 'color 0.18s ease',
                        zIndex: 1,
                      }}
                    >
                      <span>{cat.title}</span>
                      <i
                        className="ri-arrow-right-s-line text-lg"
                        style={{
                          color: highlightCatIndex === i ? '#144c90' : '#9ca3af',
                          transition: 'color 0.18s ease',
                        }}
                      ></i>
                    </div>
                  ))}
                </div>
              </div>

              {/* 分隔线 */}
              <div className="w-px bg-gray-200 flex-shrink-0 mx-4 my-8"></div>

              {/* 中间：二级菜单（滑动高亮条）_英文间距 */}
              <div className="w-80 flex-shrink-0 py-8 px-6">
                <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#144c90' }}>
                  {displayCat?.title}
                </div>
                <div className="relative">
                  <div
                    className="absolute left-0 right-0 rounded-lg bg-blue-50"
                    style={{
                      height: `${SUB_ITEM_HEIGHT}px`,
                      top: `${highlightSubIndex * SUB_ITEM_HEIGHT}px`,
                      transition: 'top 0.22s cubic-bezier(0.4,0,0.2,1)',
                      pointerEvents: 'none',
                    }}
                  />
                  {displayCat?.subcategories?.map((sub, j) => (
                    <Link
                      key={j}
                      to={sub.link}
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
                          color: highlightSubIndex === j ? '#144c90' : '#d1d5db',
                          transition: 'color 0.18s ease',
                        }}
                      ></i>
                      <span>{sub.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* 弹性间距，确保图片不会与文字重叠 */}
              <div className="flex-1 min-w-[20px] max-w-[120px]"></div>

              {/* 首页导航分类对应图片 */}
              <div
                className="relative flex-shrink-0 overflow-hidden bg-gray-100" // 添加背景色方便排查，如果看到灰色块说明容器在，图片没加载
                style={{ 
                  height: '360px',         // 1. 先给一个固定高度确保容器可见（根据你下拉框的实际高度调整，通常 400px 左右）
                  aspectRatio: '3/2',      // 2. 保持正方形
                  alignSelf: 'stretch'     // 3. 尝试拉伸填满
                }}
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
                src="https://static.readdy.ai/image/56a845be1a5727084d33993c880f54d5/1b380287d61b66cf71a4263d95fcff1b.png"
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
                <button
                  onClick={() => setMobileProductOpen(!mobileProductOpen)}
                  className="w-full flex items-center justify-between px-5 py-3.5 text-base font-semibold text-gray-800 hover:bg-gray-50 cursor-pointer"
                >
                  <span>{t('nav_products')}</span>
                  <i className={`ri-arrow-down-s-line text-xl text-gray-500 transition-transform duration-200 ${mobileProductOpen ? 'rotate-180' : ''}`}></i>
                </button>

                {mobileProductOpen && megaMenuData && (
                  <div className="bg-gray-50 border-t border-b border-gray-100">
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
              {menuItems.filter(item => item.type !== 'megaMenu').map((item) => (
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
          </div>
        </div>
      )}
    </>
  );
}
