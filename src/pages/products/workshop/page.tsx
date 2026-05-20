import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ContactSection from '@/components/feature/ContactSection';
import SeriesContent from '@/components/feature/SeriesContent';
import { useWorkshopData } from '@/hooks/useWorkshopData';
import { useProductScroll } from '@/hooks/useProductScroll';

export default function WorkshopPage() {
  const { t } = useTranslation();
  const { category } = useParams<{ category?: string }>();

  useProductScroll();

  const categories = useWorkshopData();

  const mappedCategories = categories.map((cat) => ({
    id: cat.id,
    name: cat.name,
    products: cat.products.map((p) => ({
      id: p.id,
      model: p.model,
      description: p.description,
      image: p.image,
      detailPath: `/products/workshop/${cat.slug}/${p.id}`,
    })),
  }));

  // 将 URL 中的 slug 映射为 SeriesContent 需要的 id
  const initialCategoryId = category
    ? categories.find((c) => c.slug === category)?.id
    : undefined;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full overflow-hidden aspect-[16/9] md:aspect-auto md:h-[800px]">
        <img
          src="/img/flpage/gfang.jpg"
          alt={t('products.workshop.hero.title')}
          className="absolute inset-0 w-full h-full object-cover object-[center_80%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/0"></div>
      </div>

      {/* Page Title */}
      <div className="py-16 px-16 text-center">
        <h2 id="page-title" className="text-4xl font-black mb-4" style={{ color: '#144c90' }}>{t('products.workshop.pageHeader.title')}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {t('products.workshop.pageHeader.description')}
        </p>
      </div>

      <SeriesContent categories={mappedCategories} initialCategory={initialCategoryId} productCountLabel={t('workshop_products_count')} />

      <ContactSection />
    </div>
  );
}
