import { useState, useEffect, useRef } from 'react';
import { useSwipeCarousel } from '@/hooks/useSwipeCarousel';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ContactSection from '@/components/feature/ContactSection';
import VideoModal from '@/components/base/VideoModal';
import { CarouselMediaItem } from '@/components/base/CarouselMediaItem';
import { isVideoUrl } from '@/utils/media';
import { workshopDetailData, workshopCategoryAccessories } from '@/mocks/workshop-detail';
import { workshopSpecsData } from '@/mocks/workshop-specs';

export default function WorkshopDetailPage() {
  const { t, i18n } = useTranslation();
  const { category, productId } = useParams<{ category: string; productId: string }>();

  const mockEntry = productId ? workshopDetailData[productId] : undefined;

  const pid = productId || 'pol-001';

  const getSubCat = () => {
    if (category === 'glue-gun' || pid.startsWith('glue-')) return 'glueGun';
    if (category === 'polisher' || pid.startsWith('pol-')) return 'polisher';
    if (category === 'sander' || pid.startsWith('san-')) return 'sander';
    return 'workshop';
  };
  const subCat = getSubCat();
  const numStr = pid.replace(/^(glue|pol|san)-/, '').padStart(3, '0');

  const getProductModel = (): string => {
    const modelKey = `products.workshop.${subCat}.${numStr}.model`;
    const translated = t(modelKey);
    return translated !== modelKey ? translated : pid.toUpperCase();
  };

  const getProductName = (): string => {
    const nameKey = `products.workshop.${subCat}.${numStr}.name`;
    const translated = t(nameKey);
    if (translated !== nameKey) return translated;
    const modelKey = `products.workshop.${subCat}.${numStr}.model`;
    const modelTranslated = t(modelKey);
    if (modelTranslated !== modelKey) return modelTranslated;
    return pid.toUpperCase();
  };

  const getCategoryName = () => {
    if (category === 'glue-gun') return t('products.workshop.categories.glueGun');
    if (category === 'polisher') return t('products.workshop.categories.polisher');
    if (category === 'sander') return t('products.workshop.categories.sander');
    return t('products.workshop.pageHeader.title');
  };

  const rawSpecItems = workshopSpecsData[pid];
  const resolvedSpecs = rawSpecItems
    ? rawSpecItems.map(s => ({
      label: s.labelKey ? t(s.labelKey) : (s.label || ''),
      value: s.valueKey ? t(s.valueKey) : s.value,
    }))
    : [];

  const featurePrefix = `product_${pid.replace(/-/g, '_')}`;
  const fallbackPrefix = `workshop_${subCat}`;

  const featureCount = mockEntry?.featureCount ?? 5;
  const productFeatures = Array.from({ length: featureCount }, (_, i) => i + 1).map((i) => {
    const titleKey = `${featurePrefix}_feature_${i}_title`;
    const descKey = `${featurePrefix}_feature_${i}_desc`;
    const title = t(titleKey);
    const desc = t(descKey);
    return {
      title: title === titleKey ? t(`${fallbackPrefix}_feature_${i}_title`) : title,
      desc: desc === descKey ? t(`${fallbackPrefix}_feature_${i}_desc`) : desc,
    };
  });

  const descriptionKey = `${featurePrefix}_description`;
  const rawDesc = t(descriptionKey);
  const description = rawDesc === descriptionKey ? t(`${fallbackPrefix}_description`) : rawDesc;

  const productModel = getProductModel();

  const productData = {
    id: pid,
    name: getProductName(),
    model: productModel,
    category: category || 'workshop',
    mainImages: mockEntry?.mainImages ?? [
      `https://readdy.ai/api/search-image?query=professional%20workshop%20power%20tool%20isolated%20on%20clean%20white%20background%20product%20photography%20studio%20lighting%20high%20resolution%20front%20view&width=600&height=600&seq=ws-det-${pid}-1&orientation=squarish`,
      `https://readdy.ai/api/search-image?query=professional%20workshop%20power%20tool%20isolated%20on%20clean%20white%20background%20product%20photography%20studio%20lighting%20high%20resolution%20side%20view&width=600&height=600&seq=ws-det-${pid}-2&orientation=squarish`,
      `https://readdy.ai/api/search-image?query=professional%20workshop%20power%20tool%20isolated%20on%20clean%20white%20background%20product%20photography%20studio%20lighting%20high%20resolution%20top%20view&width=600&height=600&seq=ws-det-${pid}-3&orientation=squarish`,
      `https://readdy.ai/api/search-image?query=professional%20workshop%20power%20tool%20isolated%20on%20clean%20white%20background%20product%20photography%20studio%20lighting%20high%20resolution%20back%20view&width=600&height=600&seq=ws-det-${pid}-4&orientation=squarish`,
    ],
    features: productFeatures,
    description: description,
    specs: resolvedSpecs,
    accessories: (mockEntry?.accessories ?? workshopCategoryAccessories).map((a, idx) => {
      const nameKey = `product_${pid.replace(/-/g, '_')}_acc_${idx + 1}_name`;
      const descKey = `product_${pid.replace(/-/g, '_')}_acc_${idx + 1}_desc`;
      let name = t(nameKey);
      let desc = t(descKey);
      const catNameKey = `${fallbackPrefix}_acc_${idx + 1}_name`;
      const catDescKey = `${fallbackPrefix}_acc_${idx + 1}_desc`;
      if (name === nameKey) name = t(catNameKey);
      if (desc === descKey) desc = t(catDescKey);
      const isZh = i18n.language.startsWith('zh');
      const finalName = (isZh && a.name) ? a.name : (name !== nameKey && name !== catNameKey ? name : (a.name || name));
      const finalDesc = (isZh && a.desc) ? a.desc : (desc !== descKey && desc !== catDescKey ? desc : (a.desc || desc));
      return {
        name: finalName,
        desc: finalDesc,
        image: a.image.replace(/seq=[^&]+/, `seq=ws-acc-${pid}-${idx + 1}`),
      };
    }),
  };

  const hasAccessories = productData.accessories.length > 0;
  const [currentMainImage, setCurrentMainImage] = useState(0);
  const [currentAccessory, setCurrentAccessory] = useState(0);
  const [isMainHovered, setIsMainHovered] = useState(false);
  const [isAccessoryHovered, setIsAccessoryHovered] = useState(false);
  const [mainAnimKey, setMainAnimKey] = useState(0);
  const [accAnimKey, setAccAnimKey] = useState(0);
  const [accAnimDir, setAccAnimDir] = useState<'right' | 'left'>('right');
  const [mainBgAnim, setMainBgAnim] = useState(true);
  const [accBgAnim, setAccBgAnim] = useState(true);
  const [videoModalUrl, setVideoModalUrl] = useState<string | null>(null);
  const mainIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const accessoryIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const mainCarouselRef = useRef<HTMLDivElement | null>(null);
  const accCarouselRef = useRef<HTMLDivElement | null>(null);
  const mainSwipe = useSwipeCarousel({ imagesLength: productData.mainImages.length, currentIndex: currentMainImage, containerRef: mainCarouselRef, onSwipeCommit: (idx) => { setMainBgAnim(false); setCurrentMainImage(idx); } });
  const accSwipe = useSwipeCarousel({ imagesLength: hasAccessories ? productData.accessories.length : 1, currentIndex: currentAccessory, containerRef: accCarouselRef, onSwipeCommit: (idx) => { setAccBgAnim(false); setCurrentAccessory(idx); } });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setMainBgAnim(true);
    setAccBgAnim(true);
  }, [category, productId]);

  useEffect(() => {
    if (!isMainHovered && !mainSwipe.isSwiping) {
      mainIntervalRef.current = setInterval(() => {
        setMainBgAnim(true);
        setCurrentMainImage((prev) => (prev + 1) % productData.mainImages.length);
        setMainAnimKey((k) => k + 1);
      }, 3000);
    }
    return () => { if (mainIntervalRef.current) clearInterval(mainIntervalRef.current); };
  }, [isMainHovered, mainSwipe.isSwiping, productData.mainImages.length]);

  useEffect(() => {
    if (!hasAccessories || productData.accessories.length <= 1) return;
    if (!isAccessoryHovered && !accSwipe.isSwiping) {
      accessoryIntervalRef.current = setInterval(() => {
        setAccBgAnim(true);
        setAccAnimDir('right');
        setCurrentAccessory((prev) => (prev + 1) % productData.accessories.length);
        setAccAnimKey((k) => k + 1);
      }, 3000);
    }
    return () => { if (accessoryIntervalRef.current) clearInterval(accessoryIntervalRef.current); };
  }, [isAccessoryHovered, accSwipe.isSwiping, productData.accessories.length, hasAccessories]);

  const handleMainPrev = () => {
    setMainBgAnim(true);
    setCurrentMainImage((prev) => (prev - 1 + productData.mainImages.length) % productData.mainImages.length);
    setMainAnimKey((k) => k + 1);
  };
  const handleMainNext = () => {
    setMainBgAnim(true);
    setCurrentMainImage((prev) => (prev + 1) % productData.mainImages.length);
    setMainAnimKey((k) => k + 1);
  };
  const handleAccessoryPrev = () => {
    if (productData.accessories.length <= 1) return;
    setAccBgAnim(true);
    setAccAnimDir('left');
    setCurrentAccessory((prev) => (prev - 1 + productData.accessories.length) % productData.accessories.length);
    setAccAnimKey((k) => k + 1);
  };
  const handleAccessoryNext = () => {
    if (productData.accessories.length <= 1) return;
    setAccBgAnim(true);
    setAccAnimDir('right');
    setCurrentAccessory((prev) => (prev + 1) % productData.accessories.length);
    setAccAnimKey((k) => k + 1);
  };

  const getVisibleThumbnails = () => {
    const total = productData.mainImages.length;
    if (total <= 5) return productData.mainImages;
    const start = Math.max(0, Math.min(currentMainImage - 2, total - 5));
    return productData.mainImages.slice(start, start + 5);
  };
  const getVisibleAccessories = () => {
    const total = productData.accessories.length;
    if (total <= 4) return productData.accessories;
    const start = Math.max(0, Math.min(currentAccessory - 1, total - 4));
    return productData.accessories.slice(start, start + 4);
  };

  const visibleThumbnails = getVisibleThumbnails();
  const startIndex = productData.mainImages.indexOf(visibleThumbnails[0]);
  const visibleAccessories = getVisibleAccessories();
  const accessoryStartIndex = productData.accessories.indexOf(visibleAccessories[0]);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4 md:py-6">
        <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500">
          <Link to="/" className="hover:text-[#f6444e] transition-colors cursor-pointer">{t('breadcrumb_home')}</Link>
          <span>&gt;</span>
          <Link to="/products/workshop" className="hover:text-[#f6444e] transition-colors cursor-pointer">{t('products.workshop.pageHeader.title')}</Link>
          <span>&gt;</span>
          <span className="text-gray-900 font-medium">{getCategoryName()}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {/* Images */}
          <div className="space-y-4" onMouseEnter={() => setIsMainHovered(true)} onMouseLeave={() => setIsMainHovered(false)}>
            <div ref={mainCarouselRef} className="w-full aspect-square bg-gray-50 rounded-xl overflow-hidden border border-gray-100 relative" onTouchStart={mainSwipe.handleTouchStart} onTouchMove={mainSwipe.handleTouchMove} onTouchEnd={mainSwipe.handleTouchEnd}>
              <div className={`absolute inset-0 ${mainSwipe.isSwiping ? 'opacity-0' : ''}`}>
                <CarouselMediaItem
                  url={productData.mainImages[currentMainImage]}
                  alt={productData.name}
                  className={`w-full h-full ${mainBgAnim && !isVideoUrl(productData.mainImages[currentMainImage]) ? 'animate-img-fade-zoom' : ''}`}
                  imageClassName="w-full h-full object-cover object-center"
                  onPlayClick={() => setVideoModalUrl(productData.mainImages[currentMainImage])}
                />
              </div>
              {mainSwipe.isSwiping && (
                <div className="absolute inset-0 z-20" style={{ touchAction: 'none' }}>
                  <div className="absolute inset-0" style={{ transform: `translateX(calc(-100% + ${mainSwipe.swipeDelta}px))`, transition: mainSwipe.isSnapping ? 'transform 0.28s cubic-bezier(0.25,0.46,0.45,0.94)' : 'none', willChange: 'transform' }}>
                    <CarouselMediaItem url={productData.mainImages[mainSwipe.prevIndex]} alt="" className="w-full h-full" imageClassName="w-full h-full object-cover object-center" onPlayClick={() => setVideoModalUrl(productData.mainImages[mainSwipe.prevIndex])} />
                  </div>
                  <div className="absolute inset-0" style={{ transform: `translateX(${mainSwipe.swipeDelta}px)`, transition: mainSwipe.isSnapping ? 'transform 0.28s cubic-bezier(0.25,0.46,0.45,0.94)' : 'none', willChange: 'transform' }}>
                    <CarouselMediaItem url={productData.mainImages[currentMainImage]} alt="" className="w-full h-full" imageClassName="w-full h-full object-cover object-center" onPlayClick={() => setVideoModalUrl(productData.mainImages[currentMainImage])} />
                  </div>
                  <div className="absolute inset-0" style={{ transform: `translateX(calc(100% + ${mainSwipe.swipeDelta}px))`, transition: mainSwipe.isSnapping ? 'transform 0.28s cubic-bezier(0.25,0.46,0.45,0.94)' : 'none', willChange: 'transform' }}>
                    <CarouselMediaItem url={productData.mainImages[mainSwipe.nextIndex]} alt="" className="w-full h-full" imageClassName="w-full h-full object-cover object-center" onPlayClick={() => setVideoModalUrl(productData.mainImages[mainSwipe.nextIndex])} />
                  </div>
                </div>
              )}
              <div className="absolute inset-0 flex items-center justify-between px-3 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button onClick={handleMainPrev} className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white/80 shadow-lg hover:bg-white hover:scale-110 transition-all cursor-pointer">
                  <i className="ri-arrow-left-s-line text-lg md:text-xl text-gray-700"></i>
                </button>
                <button onClick={handleMainNext} className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white/80 shadow-lg hover:bg-white hover:scale-110 transition-all cursor-pointer">
                  <i className="ri-arrow-right-s-line text-lg md:text-xl text-gray-700"></i>
                </button>
              </div>
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                {productData.mainImages.map((img, i) => (
                  <button key={i} onClick={() => { setCurrentMainImage(i); setMainAnimKey((k) => k + 1); }} className={`rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center ${i === currentMainImage ? 'w-5 h-2 bg-[#f6444e]' : 'w-2 h-2 bg-white/60 hover:bg-white'}`}>
                    {isVideoUrl(img) && i !== currentMainImage && (
                      <i className="ri-play-fill text-[8px] text-black/70" />
                    )}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 md:gap-3">
              <button onClick={handleMainPrev} className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 hover:scale-110 transition-all cursor-pointer flex-shrink-0">
                <i className="ri-arrow-left-s-line text-sm md:text-base text-gray-600"></i>
              </button>
              <div className="flex gap-1.5 md:gap-2 overflow-x-auto scrollbar-hide">
                {visibleThumbnails.map((img, idx) => {
                  const actualIndex = startIndex + idx;
                  return (
                    <div key={actualIndex} onClick={() => { setCurrentMainImage(actualIndex); setMainAnimKey((k) => k + 1); }} className={`w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden border-2 transition-all cursor-pointer hover:scale-105 hover:-translate-y-1 flex-shrink-0 ${currentMainImage === actualIndex ? 'border-[#f6444e] animate-thumb-pulse' : 'border-gray-200 hover:border-gray-300'}`}>
                      <CarouselMediaItem url={img} alt={`view ${actualIndex + 1}`} className="w-full h-full" imageClassName="w-full h-full object-cover" onPlayClick={() => setVideoModalUrl(img)} showPlayButton={false} />
                    </div>
                  );
                })}
              </div>
              <button onClick={handleMainNext} className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 hover:scale-110 transition-all cursor-pointer flex-shrink-0">
                <i className="ri-arrow-right-s-line text-sm md:text-base text-gray-600"></i>
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4 md:space-y-6">
            <div>
              <p className="text-xs md:text-sm text-gray-400 mb-2">{t('product_model')}: {productData.model}</p>
              <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">{productData.name}</h1>
            </div>
            <div className="space-y-2 md:space-y-3">
              <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-3 md:mb-4">{t('product_highlights')}</h2>
              {productData.features.map((feature, idx) => (
                <div key={idx} className="p-3 md:p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-[#f6444e] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#f6444e] flex-shrink-0 mt-1.5 md:mt-2"></div>
                    <div>
                      <h4 className="font-bold text-sm md:text-base text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-xs md:text-sm text-gray-500">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Specs + Overview + Accessories */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4 md:mb-6">{t('product_specs')}</h2>
              <div className="border border-[#f6444e] rounded-lg">
                <div className="flex items-center justify-center px-4 py-1.5 bg-[#f6444e] rounded-t-lg">
                  <span className="text-sm text-white font-bold tracking-widest uppercase">{productData.model}</span>
                </div>
                <div className="divide-y divide-gray-100">
                  {productData.specs.map((spec, idx) => (
                    <div key={idx} className={`flex items-start px-4 py-2 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} ${idx === productData.specs.length - 1 ? 'rounded-b-lg' : ''}`}>
                      <span className="w-[45%] flex-shrink-0 text-sm text-gray-500 font-medium leading-relaxed">{spec.label}</span>
                      <span className="flex-1 min-w-0 text-sm text-gray-900 font-semibold break-words leading-relaxed">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4 md:mb-6">{t('product_overview')}</h2>
              <div className="prose prose-sm text-sm md:text-base text-gray-600 leading-relaxed">
                <p>{productData.description}</p>
              </div>
            </div>
          </div>

          {hasAccessories && (
          <div className="space-y-4" onMouseEnter={() => setIsAccessoryHovered(true)} onMouseLeave={() => setIsAccessoryHovered(false)}>
            <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4 md:mb-6">{t('accessories_title')}</h2>
            <div className="flex flex-col md:flex-row gap-4 md:gap-5 items-stretch">
              <div className="flex md:flex-col items-center justify-center gap-2 flex-shrink-0 order-2 md:order-1">
                <button onClick={handleAccessoryPrev} className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 hover:scale-110 transition-all cursor-pointer">
                  <i className="ri-arrow-left-s-line md:hidden text-sm text-gray-600"></i>
                  <i className="ri-arrow-up-s-line hidden md:inline text-base text-gray-600"></i>
                </button>
                <div className="flex md:flex-col gap-2 flex-1 md:flex-none justify-between overflow-x-auto md:overflow-visible scrollbar-hide">
                  {visibleAccessories.map((acc, idx) => {
                    const actualIndex = accessoryStartIndex + idx;
                    return (
                      <div key={actualIndex} onClick={() => { setAccAnimDir(actualIndex > currentAccessory ? 'right' : 'left'); setCurrentAccessory(actualIndex); setAccAnimKey((k) => k + 1); }} className={`w-16 h-16 md:w-28 md:h-28 rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer flex-shrink-0 hover:scale-105 ${currentAccessory === actualIndex ? 'border-[#f6444e] animate-thumb-pulse' : 'border-gray-200 hover:border-gray-300'}`}>
                        <img src={acc.image} alt={acc.name} className="w-full h-full object-cover" />
                      </div>
                    );
                  })}
                </div>
                <button onClick={handleAccessoryNext} className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 hover:scale-110 transition-all cursor-pointer">
                  <i className="ri-arrow-right-s-line md:hidden text-sm text-gray-600"></i>
                  <i className="ri-arrow-down-s-line hidden md:inline text-base text-gray-600"></i>
                </button>
              </div>
              <div className="flex-1 flex flex-col gap-3 order-1 md:order-2">
                <div ref={accCarouselRef} className="w-full aspect-square bg-gray-50 rounded-xl overflow-hidden border border-gray-100 relative" onTouchStart={accSwipe.handleTouchStart} onTouchMove={accSwipe.handleTouchMove} onTouchEnd={accSwipe.handleTouchEnd}>
                  <div className={`absolute inset-0 ${accSwipe.isSwiping ? 'opacity-0' : ''}`}>
                    <img key={accAnimKey} src={productData.accessories[currentAccessory].image} alt={productData.accessories[currentAccessory].name} className={`w-full h-full object-cover object-center ${accBgAnim ? (accAnimDir === 'right' ? 'animate-slide-right' : 'animate-slide-left') : ''}`} />
                  </div>
                  {accSwipe.isSwiping && (
                    <div className="absolute inset-0 z-20" style={{ touchAction: 'none' }}>
                      <div className="absolute inset-0" style={{ transform: `translateX(calc(-100% + ${accSwipe.swipeDelta}px))`, transition: accSwipe.isSnapping ? 'transform 0.28s cubic-bezier(0.25,0.46,0.45,0.94)' : 'none', willChange: 'transform' }}>
                        <img src={productData.accessories[accSwipe.prevIndex].image} alt="" className="w-full h-full object-cover object-center" />
                      </div>
                      <div className="absolute inset-0" style={{ transform: `translateX(${accSwipe.swipeDelta}px)`, transition: accSwipe.isSnapping ? 'transform 0.28s cubic-bezier(0.25,0.46,0.45,0.94)' : 'none', willChange: 'transform' }}>
                        <img src={productData.accessories[currentAccessory].image} alt="" className="w-full h-full object-cover object-center" />
                      </div>
                      <div className="absolute inset-0" style={{ transform: `translateX(calc(100% + ${accSwipe.swipeDelta}px))`, transition: accSwipe.isSnapping ? 'transform 0.28s cubic-bezier(0.25,0.46,0.45,0.94)' : 'none', willChange: 'transform' }}>
                        <img src={productData.accessories[accSwipe.nextIndex].image} alt="" className="w-full h-full object-cover object-center" />
                      </div>
                    </div>
                  )}
                </div>
                <div key={`info-${accAnimKey}`} className="bg-gray-50 rounded-lg border border-gray-100 p-3 md:p-4 animate-slide-bottom">
                  <p className="text-sm md:text-base font-bold text-gray-900 mb-1">{productData.accessories[currentAccessory].name}</p>
                  <p className="text-xs md:text-sm text-gray-500">{productData.accessories[currentAccessory].desc}</p>
                </div>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>

      <ContactSection />
      <VideoModal url={videoModalUrl} onClose={() => setVideoModalUrl(null)} />
    </div>
  );
}