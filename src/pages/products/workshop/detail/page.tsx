import { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../../../../components/feature/Navbar';
import ContactSection from '../../../../components/feature/ContactSection';
import Footer from '../../../../components/feature/Footer';
import { workshopDetailData, workshopCategoryAccessories } from '../../../../mocks/workshop-detail';
import { workshopSpecsData } from '../../../../mocks/workshop-specs';

export default function WorkshopDetailPage() {
  const { t, i18n } = useTranslation();
  const { category, productId } = useParams<{ category: string; productId: string }>();
  const pid = productId || 'pol-001';

  // 配件 key 改为按产品独立：product_{productId}_acc_{序号}_{name|desc}
  const getAccessoryKey = (baseKey: string): string => {
    const productPrefix = pid.replace(/-/g, '_');
    return baseKey.replace(/^accessory_(\d+)_(name|desc)$/, `product_${productPrefix}_acc_$1_$2`);
  };

  // 回退 key：按系列级别
  const getCategoryAccessoryKey = (baseKey: string): string => {
    const cat = category === 'sander' ? 'san' : category === 'glue-gun' ? 'glue' : 'pol';
    return baseKey.replace(/^accessory_(\d+)_(name|desc)$/, `workshop_${cat}_acc_$1_$2`);
  };

  const mockEntry = productId ? workshopDetailData[productId] : undefined;

  const getWorkshopSpecs = () => {
    if (category === 'sander') {
      return [
        { label: t('spec_power'), value: '350W' }, { label: t('spec_disc_size'), value: '125mm' },
        { label: t('spec_opm'), value: '4000–12000 OPM' }, { label: t('spec_weight'), value: '1.4 kg' },
        { label: t('spec_voltage'), value: 'AC 220V' }, { label: t('spec_speed'), value: '4000–12000 RPM' },
        { label: t('spec_max_torque'), value: '1.5 N·m' }, { label: t('spec_noise_level'), value: '≤75 dB' },
        { label: t('spec_dimensions'), value: '280×130×180 mm' }, { label: t('spec_color'), value: t('spec_val_color_black_orange') },
        { label: t('spec_certification'), value: 'CE / GS' }, { label: t('spec_warranty'), value: t('spec_val_warranty_24') },
      ];
    }
    if (category === 'glue-gun') {
      return [
        { label: t('spec_power'), value: '80W' }, { label: t('spec_temperature'), value: '180–210°C' },
        { label: t('spec_glue_diameter'), value: '11mm' }, { label: t('spec_weight'), value: '0.4 kg' },
        { label: t('spec_voltage'), value: 'AC 220V' }, { label: t('spec_speed'), value: '≤8 g/min' },
        { label: t('spec_noise_level'), value: '≤45 dB' }, { label: t('spec_max_torque'), value: '—' },
        { label: t('spec_dimensions'), value: '270×60×120 mm' }, { label: t('spec_color'), value: t('spec_val_color_black_red') },
        { label: t('spec_certification'), value: 'CE / RoHS' }, { label: t('spec_warranty'), value: t('spec_val_warranty_12') },
      ];
    }
    return [
      { label: t('spec_power'), value: '500W' }, { label: t('spec_disc_size'), value: '180mm' },
      { label: t('spec_opm'), value: '2500–6800 OPM' }, { label: t('spec_weight'), value: '2.1 kg' },
      { label: t('spec_voltage'), value: 'AC 220V' }, { label: t('spec_speed'), value: '1500–4000 RPM' },
      { label: t('spec_max_torque'), value: '3.5 N·m' }, { label: t('spec_noise_level'), value: '≤80 dB' },
      { label: t('spec_dimensions'), value: '330×160×200 mm' }, { label: t('spec_color'), value: t('spec_val_color_black_orange') },
      { label: t('spec_certification'), value: 'CE / GS / EMC' }, { label: t('spec_warranty'), value: t('spec_val_warranty_24') },
    ];
  };

  const getProductInfo = (): { name: string; model: string } => {
    if (!productId || !category) return { name: productId || '', model: productId || '' };
    if (category === 'polisher') {
      const num = productId.replace('pol-', '').padStart(3, '0');
      const model = t(`products.workshop.polisher.${num}.model`);
      return { name: model, model };
    }
    if (category === 'sander') {
      const num = productId.replace('san-', '').padStart(3, '0');
      const model = t(`products.workshop.sander.${num}.model`);
      return { name: model, model };
    }
    if (category === 'glue-gun') {
      const num = productId.replace('glue-', '').padStart(3, '0');
      const model = t(`products.workshop.glueGun.${num}.model`);
      return { name: model, model };
    }
    return { name: productId.toUpperCase(), model: productId.toUpperCase() };
  };

  const getCategoryName = () => {
    if (category === 'polisher') return t('cat_workshop_polisher');
    if (category === 'sander') return t('cat_workshop_sander');
    if (category === 'glue-gun') return t('cat_workshop_glue_gun');
    return t('cat_workshop');
  };

  const productInfo = getProductInfo();

  const rawSpecItems = workshopSpecsData[pid];
  const resolvedSpecs = rawSpecItems
    ? rawSpecItems.map(s => ({ label: t(s.labelKey), value: s.valueKey ? t(s.valueKey) : s.value }))
    : getWorkshopSpecs();

  const featurePrefix = `product_${pid.replace(/-/g, '_')}`;

  const getFallbackPrefix = (id: string) => {
    if (id.startsWith('san')) return 'workshop_sander';
    if (id.startsWith('glue')) return 'workshop_glue';
    return 'workshop_polisher';
  };
  const fallbackPrefix = getFallbackPrefix(pid);

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

  const productData = {
    id: pid, name: productInfo.name, model: productInfo.model, category: category || 'polisher',
    mainImages: mockEntry?.mainImages ?? [
      `https://readdy.ai/api/search-image?query=professional%20electric%20workshop%20tool%20black%20orange%20color%20on%20clean%20white%20background%20industrial%20product%20photography%20studio%20lighting%20high%20resolution%20front%20view&width=600&height=600&seq=ws-det-${pid}-1&orientation=squarish`,
      `https://readdy.ai/api/search-image?query=professional%20electric%20workshop%20tool%20black%20orange%20color%20on%20clean%20white%20background%20industrial%20product%20photography%20studio%20lighting%20high%20resolution%20side%20view&width=600&height=600&seq=ws-det-${pid}-2&orientation=squarish`,
      `https://readdy.ai/api/search-image?query=professional%20electric%20workshop%20tool%20black%20orange%20color%20on%20clean%20white%20background%20industrial%20product%20photography%20studio%20lighting%20high%20resolution%20top%20view&width=600&height=600&seq=ws-det-${pid}-3&orientation=squarish`,
      `https://readdy.ai/api/search-image?query=professional%20electric%20workshop%20tool%20black%20orange%20color%20on%20clean%20white%20background%20industrial%20product%20photography%20studio%20lighting%20high%20resolution%20back%20view&width=600&height=600&seq=ws-det-${pid}-4&orientation=squarish`,
      `https://readdy.ai/api/search-image?query=professional%20electric%20workshop%20tool%20black%20orange%20color%20on%20clean%20white%20background%20industrial%20product%20photography%20studio%20lighting%20high%20resolution%20detail%20view&width=600&height=600&seq=ws-det-${pid}-5&orientation=squarish`,
      `https://readdy.ai/api/search-image?query=professional%20electric%20workshop%20tool%20black%20orange%20color%20on%20clean%20white%20background%20industrial%20product%20photography%20studio%20lighting%20high%20resolution%20angle%20view&width=600&height=600&seq=ws-det-${pid}-6&orientation=squarish`,
      `https://readdy.ai/api/search-image?query=professional%20electric%20workshop%20tool%20black%20orange%20color%20on%20clean%20white%20background%20industrial%20product%20photography%20studio%20lighting%20high%20resolution%20close%20up%20view&width=600&height=600&seq=ws-det-${pid}-7&orientation=squarish`,
      `https://readdy.ai/api/search-image?query=professional%20electric%20workshop%20tool%20black%20orange%20color%20on%20clean%20white%20background%20industrial%20product%20photography%20studio%20lighting%20high%20resolution%20perspective%20view&width=600&height=600&seq=ws-det-${pid}-8&orientation=squarish`,
    ],
    features: productFeatures, description: description, specs: resolvedSpecs,
    accessories: (mockEntry?.accessories ?? workshopCategoryAccessories).map((a, idx) => {
      const nameKey = getAccessoryKey(a.nameKey ?? `accessory_${idx + 1}_name`);
      const descKey = getAccessoryKey(a.descKey ?? `accessory_${idx + 1}_desc`);
      let name = t(nameKey);
      let desc = t(descKey);
      // 如果产品独立的 key 不存在，回退到系列级别
      if (name === nameKey) {
        name = t(getCategoryAccessoryKey(a.nameKey ?? `accessory_${idx + 1}_name`));
      }
      if (desc === descKey) {
        desc = t(getCategoryAccessoryKey(a.descKey ?? `accessory_${idx + 1}_desc`));
      }
      const isZh = i18n.language.startsWith('zh');
      const catNameKey = getCategoryAccessoryKey(a.nameKey ?? `accessory_${idx + 1}_name`);
      const catDescKey = getCategoryAccessoryKey(a.descKey ?? `accessory_${idx + 1}_desc`);
      const finalName = (isZh && a.name) ? a.name : (name !== nameKey && name !== catNameKey ? name : (a.name || name));
      const finalDesc = (isZh && a.desc) ? a.desc : (desc !== descKey && desc !== catDescKey ? desc : (a.desc || desc));
      return {
        name: finalName,
        desc: finalDesc,
        image: a.image.replace(/seq=[^&]+/, `seq=acc-${productId}-${idx + 1}`),
      };
    }),
  };

  const [currentMainImage, setCurrentMainImage] = useState(0);
  const [currentAccessory, setCurrentAccessory] = useState(0);
  const [isMainHovered, setIsMainHovered] = useState(false);
  const [isAccessoryHovered, setIsAccessoryHovered] = useState(false);
  const [mainAnimKey, setMainAnimKey] = useState(0);
  const [accAnimKey, setAccAnimKey] = useState(0);
  const [accAnimDir, setAccAnimDir] = useState<'right' | 'left'>('right');
  const mainIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const accessoryIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [category, productId]);

  useEffect(() => {
    if (!isMainHovered) { mainIntervalRef.current = setInterval(() => { setCurrentMainImage((prev) => (prev + 1) % productData.mainImages.length); setMainAnimKey((k) => k + 1); }, 3000); }
    return () => { if (mainIntervalRef.current) clearInterval(mainIntervalRef.current); };
  }, [isMainHovered, productData.mainImages.length]);

  useEffect(() => {
    if (!isAccessoryHovered) { accessoryIntervalRef.current = setInterval(() => { setAccAnimDir('right'); setCurrentAccessory((prev) => (prev + 1) % productData.accessories.length); setAccAnimKey((k) => k + 1); }, 3000); }
    return () => { if (accessoryIntervalRef.current) clearInterval(accessoryIntervalRef.current); };
  }, [isAccessoryHovered, productData.accessories.length]);

  const handleMainPrev = () => { setCurrentMainImage((prev) => (prev - 1 + productData.mainImages.length) % productData.mainImages.length); setMainAnimKey((k) => k + 1); };
  const handleMainNext = () => { setCurrentMainImage((prev) => (prev + 1) % productData.mainImages.length); setMainAnimKey((k) => k + 1); };
  const handleAccessoryPrev = () => { setAccAnimDir('left'); setCurrentAccessory((prev) => (prev - 1 + productData.accessories.length) % productData.accessories.length); setAccAnimKey((k) => k + 1); };
  const handleAccessoryNext = () => { setAccAnimDir('right'); setCurrentAccessory((prev) => (prev + 1) % productData.accessories.length); setAccAnimKey((k) => k + 1); };

  const getVisibleThumbnails = () => { const total = productData.mainImages.length; if (total <= 5) return productData.mainImages; const start = Math.max(0, Math.min(currentMainImage - 2, total - 5)); return productData.mainImages.slice(start, start + 5); };
  const getVisibleAccessories = () => { const total = productData.accessories.length; if (total <= 4) return productData.accessories; const start = Math.max(0, Math.min(currentAccessory - 1, total - 4)); return productData.accessories.slice(start, start + 4); };
  const visibleThumbnails = getVisibleThumbnails();
  const startIndex = productData.mainImages.indexOf(visibleThumbnails[0]);
  const visibleAccessories = getVisibleAccessories();
  const accessoryStartIndex = productData.accessories.indexOf(visibleAccessories[0]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4 md:py-6">
        <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500">
          <Link to="/" className="hover:text-[#f6444e] transition-colors cursor-pointer">{t('breadcrumb_home')}</Link>
          <span>&gt;</span>
          <Link to="/products/workshop" className="hover:text-[#f6444e] transition-colors cursor-pointer">{t('cat_workshop')}</Link>
          <span>&gt;</span>
          <span className="text-gray-900 font-medium">{getCategoryName()}</span>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <div className="space-y-4" onMouseEnter={() => setIsMainHovered(true)} onMouseLeave={() => setIsMainHovered(false)}>
            <div className="w-full aspect-square bg-gray-50 rounded-xl overflow-hidden border border-gray-100 relative">
              <img key={mainAnimKey} src={productData.mainImages[currentMainImage]} alt={productData.name} className="w-full h-full object-cover object-center animate-img-fade-zoom" />
              <div className="absolute inset-0 flex items-center justify-between px-3 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button onClick={handleMainPrev} className="hover-arrow-left w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white/80 shadow-lg hover:bg-white hover:scale-110 transition-all cursor-pointer"><i className="ri-arrow-left-s-line text-lg md:text-xl text-gray-700"></i></button>
                <button onClick={handleMainNext} className="hover-arrow-right w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white/80 shadow-lg hover:bg-white hover:scale-110 transition-all cursor-pointer"><i className="ri-arrow-right-s-line text-lg md:text-xl text-gray-700"></i></button>
              </div>
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                {productData.mainImages.map((_, i) => (<button key={i} onClick={() => { setCurrentMainImage(i); setMainAnimKey((k) => k + 1); }} className={`rounded-full transition-all duration-300 cursor-pointer ${i === currentMainImage ? 'w-5 h-2 bg-[#f6444e]' : 'w-2 h-2 bg-white/60 hover:bg-white'}`} />))}
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 md:gap-3">
              <button onClick={handleMainPrev} className="hover-arrow-left w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 hover:scale-110 transition-all cursor-pointer flex-shrink-0"><i className="ri-arrow-left-s-line text-sm md:text-base text-gray-600"></i></button>
              <div className="flex gap-1.5 md:gap-2 overflow-x-auto scrollbar-hide">
                {visibleThumbnails.map((img, idx) => { const actualIndex = startIndex + idx; return (<div key={actualIndex} onClick={() => { setCurrentMainImage(actualIndex); setMainAnimKey((k) => k + 1); }} className={`w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden border-2 transition-all cursor-pointer hover:scale-105 hover:-translate-y-1 flex-shrink-0 ${currentMainImage === actualIndex ? 'border-[#f6444e] animate-thumb-pulse' : 'border-gray-200 hover:border-gray-300'}`}><img src={img} alt={`view ${actualIndex + 1}`} className="w-full h-full object-cover" /></div>); })}
              </div>
              <button onClick={handleMainNext} className="hover-arrow-right w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 hover:scale-110 transition-all cursor-pointer flex-shrink-0"><i className="ri-arrow-right-s-line text-sm md:text-base text-gray-600"></i></button>
            </div>
          </div>
          <div className="space-y-4 md:space-y-6">
            <div>
              <p className="text-xs md:text-sm text-gray-400 mb-2">{t('product_model')}: {productData.model}</p>
              <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 md:mb-6">{productData.name}</h1>
            </div>
            <div className="space-y-2 md:space-y-3">
              <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-3 md:mb-4">{t('product_highlights')}</h2>
              {productData.features.map((feature, idx) => (
                <div key={idx} className="p-3 md:p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-[#f6444e] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                  <div className="flex items-start gap-2 md:gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#f6444e] flex-shrink-0 mt-1.5 md:mt-2"></div>
                    <div><h4 className="font-bold text-sm md:text-base text-gray-900 mb-1">{feature.title}</h4><p className="text-xs md:text-sm text-gray-500">{feature.desc}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4 md:mb-6">{t('product_specs')}</h2>
              <div className="border border-[#f6444e] rounded-lg overflow-hidden">
                <div className="flex items-center justify-center px-4 py-1.5 bg-[#f6444e]"><span className="text-sm text-white font-bold tracking-widest uppercase">{productData.model}</span></div>
                <div className="divide-y divide-gray-100">
                  {productData.specs.map((spec, idx) => (<div key={idx} className={`flex items-center px-4 py-1.5 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}><span className="w-1/2 text-sm text-gray-500 font-medium">{spec.label}</span><span className="w-1/2 text-sm text-gray-900 font-semibold">{spec.value}</span></div>))}
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4 md:mb-6">{t('product_overview')}</h2>
              <div className="prose prose-sm text-sm md:text-base text-gray-600 leading-relaxed"><p>{productData.description}</p></div>
            </div>
          </div>
          <div className="space-y-4" onMouseEnter={() => setIsAccessoryHovered(true)} onMouseLeave={() => setIsAccessoryHovered(false)}>
            <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4 md:mb-6">{t('accessories_title')}</h2>
            <div className="flex flex-col md:flex-row gap-4 md:gap-5 items-stretch">
              <div className="flex md:flex-col items-center justify-center gap-2 flex-shrink-0 order-2 md:order-1">
                <button onClick={handleAccessoryPrev} className="hover-arrow-up w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 hover:scale-110 transition-all cursor-pointer"><i className="ri-arrow-left-s-line md:hidden text-sm text-gray-600"></i><i className="ri-arrow-up-s-line hidden md:inline text-base text-gray-600"></i></button>
                <div className="flex md:flex-col gap-2 flex-1 md:flex-none justify-between overflow-x-auto md:overflow-visible scrollbar-hide">
                  {visibleAccessories.map((acc, idx) => { const actualIndex = accessoryStartIndex + idx; return (<div key={actualIndex} onClick={() => { setAccAnimDir(actualIndex > currentAccessory ? 'right' : 'left'); setCurrentAccessory(actualIndex); setAccAnimKey((k) => k + 1); }} className={`w-16 h-16 md:w-28 md:h-28 rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer flex-shrink-0 hover:scale-105 ${currentAccessory === actualIndex ? 'border-[#f6444e] animate-thumb-pulse' : 'border-gray-200 hover:border-gray-300'}`}><img src={acc.image} alt={acc.name} className="w-full h-full object-cover" /></div>); })}
                </div>
                <button onClick={handleAccessoryNext} className="hover-arrow-down w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 hover:scale-110 transition-all cursor-pointer"><i className="ri-arrow-right-s-line md:hidden text-sm text-gray-600"></i><i className="ri-arrow-down-s-line hidden md:inline text-base text-gray-600"></i></button>
              </div>
              <div className="flex-1 flex flex-col gap-3 order-1 md:order-2">
                <div className="w-full aspect-square bg-gray-50 rounded-xl overflow-hidden border border-gray-100"><img key={accAnimKey} src={productData.accessories[currentAccessory].image} alt={productData.accessories[currentAccessory].name} className={`w-full h-full object-cover object-center ${accAnimDir === 'right' ? 'animate-slide-right' : 'animate-slide-left'}`} /></div>
                <div key={`info-${accAnimKey}`} className="bg-gray-50 rounded-lg border border-gray-100 p-3 md:p-4 animate-slide-bottom">
                  <p className="text-sm md:text-base font-bold text-gray-900 mb-1">{productData.accessories[currentAccessory].name}</p>
                  <p className="text-xs md:text-sm text-gray-500">{productData.accessories[currentAccessory].desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
}
