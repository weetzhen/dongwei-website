import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ContactSection from '@/components/feature/ContactSection';
import SeriesContent from '@/components/feature/SeriesContent';
import { useNailGunsData } from '@/hooks/useNailGunsData';
import { useProductScroll } from '@/hooks/useProductScroll';

export default function NailGunsPage() {
  const { t } = useTranslation();
  const { category } = useParams<{ category?: string }>();

  useProductScroll();

  const categories = useNailGunsData();

  const mappedCategories = categories.map((cat) => ({
    id: cat.id,
    name: cat.label,
    products: cat.products.map((p) => ({
      id: p.id,
      model: p.name,
      description: t(p.descKey),
      image: p.image,
      detailPath: `/products/nail-guns/${cat.id}/${p.id}`,
    })),
  }));

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="w-full relative overflow-hidden aspect-[16/9] md:aspect-auto md:h-[800px]">
        <img
          src="/img/flpage/dqiang.jpg"
          alt={t('nail_guns_hero_title')}
          className="w-full h-full object-cover object-[center_90%]"
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

      <SeriesContent categories={mappedCategories} initialCategory={category} productCountLabel={t('nail_guns_products_count')} />

      <ContactSection />
    </div>
  );
}
