import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ContactSection from '@/components/feature/ContactSection';
import SeriesContent from '@/components/feature/SeriesContent';
import { useSharpeningData, useSharpeningCategories } from '@/hooks/useSharpeningData';
import { useProductScroll } from '@/hooks/useProductScroll';

export default function SharpeningPage() {
  const { t } = useTranslation();
  const { category } = useParams<{ category?: string }>();

  useProductScroll();

  const categories = useSharpeningCategories();
  const products = useSharpeningData();

  const mappedCategories = categories.map((cat) => ({
    id: cat.id,
    name: cat.name,
    products: products
      .filter((p) => p.category === cat.id)
      .map((p) => ({
        id: p.id,
        model: p.model,
        description: p.name,
        image: p.image,
        detailPath: `/products/sharpening/${cat.slug}/${p.id}`,
      })),
  }));

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative w-full overflow-hidden aspect-[16/9] md:aspect-auto md:h-[800px]">
        <img
          src="/img/flpage/dmo.jpg"
          alt={t('products.sharpening.hero.title')}
          className="w-full h-full object-cover object-[center_45%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/0"></div>
      </div>

      {/* Page Title */}
      <div className="py-16 px-8 text-center">
        <h2 id="page-title" className="text-4xl font-black mb-4" style={{ color: '#144c90' }}>{t('products.sharpening.pageHeader.title')}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {t('products.sharpening.pageHeader.description')}
        </p>
      </div>

      <SeriesContent categories={mappedCategories} initialCategory={category} productCountLabel={t('sharpening_products_count')} />

      <ContactSection />
    </div>
  );
}
