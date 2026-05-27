import { useTranslation } from 'react-i18next';

export interface WorkshopProduct {
  id: string;
  model: string;
  description: string;
  image: string;
}

export interface WorkshopCategory {
  id: string;
  slug: string;
  name: string;
  products: WorkshopProduct[];
}

export function useWorkshopData(): WorkshopCategory[] {
  const { t } = useTranslation();

  return [
    {
      id: 'glue-gun',
      slug: 'glue-gun',
      name: t('products.workshop.categories.glueGun'),
      products: [
        { id: 'glue-001', model: t('products.workshop.glueGun.001.model'), description: t('products.workshop.glueGun.001.name'), image: '/img/CP/gfang/jqiang/Q0A-DW02-4V/1300-Q0A-DW02-4V-01.jpg' },
        { id: 'glue-002', model: t('products.workshop.glueGun.002.model'), description: t('products.workshop.glueGun.002.description'), image: '/img/CP/gfang/jqiang/Q0A-DW02-12V/1300-Q0A-DW02-12V-01.jpg' },
        { id: 'glue-003', model: t('products.workshop.glueGun.003.model'), description: t('products.workshop.glueGun.003.description'), image: '/img/CP/gfang/jqiang/Q0A-DW06-20V/1300-Q0A-DW06-20V-02.jpg' },
      ],
    },
    {
      id: 'polisher',
      slug: 'polisher',
      name: t('products.workshop.categories.polisher'),
      products: [
        { id: 'pol-001', model: t('products.workshop.polisher.001.model'), description: t('products.workshop.polisher.001.name'), image: '/img/CP/gfang/pguang/S0P-DW05-150/1300-S0P-DW05-150-01.jpg' },
        { id: 'pol-002', model: t('products.workshop.polisher.002.model'), description: t('products.workshop.polisher.002.name'), image: '/img/CP/gfang/pguang/S1P-DW01-180/1300-S1P-DW01-180-01.jpg' },
      ],
    },
  ];
}