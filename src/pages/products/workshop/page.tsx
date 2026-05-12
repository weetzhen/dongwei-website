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

      <SeriesContent categories={mappedCategories} initialCategory={initialCategoryId} productCountLabel={t('workshop_products_count')} />

      <ContactSection />
    </div>
  );
}
