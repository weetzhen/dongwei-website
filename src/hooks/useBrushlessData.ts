import { useTranslation } from 'react-i18next';

export interface BrushlessProduct {
  id: string;
  model: string;
  description: string;
  image: string;
}

export interface BrushlessCategory {
  id: string;
  slug: string;
  name: string;
  products: BrushlessProduct[];
}

export function useBrushlessData(): BrushlessCategory[] {
  const { t } = useTranslation();

  return [
    {
      id: 'drill',
      slug: 'drill',
      name: t('products.brushless.categories.drill'),
      products: [
        { id: 'drill-001', model: t('products.brushless.drill.001.model'), description: t('products.brushless.drill.001.description'), image: '/img/CP/wshua/lsd/P0L-DW01-4V/1300-P0L-DW01-4V-01.jpg' },
        { id: 'id-001', model: t('products.brushless.drill.002.model'), description: t('products.brushless.drill.002.description'), image: '/img/CP/wshua/lsd/P0L-DW01B-4V/1300-P0L-DW01B-4V-01.jpg' },
        { id: 'id-002', model: t('products.brushless.drill.003.model'), description: t('products.brushless.drill.003.description'), image: '/img/CP/wshua/lsd/P0L-DW02-4V/1300-P0L-DW02-4V-00.jpg' },
        { id: 'id-003', model: t('products.brushless.drill.004.model'), description: t('products.brushless.drill.004.description'), image: '/img/CP/wshua/dz/J0Z-DW07-13/1300-J0Z-DW07-13-01.jpg' },
        { id: 'id-005', model: t('products.brushless.drill.006.model'), description: t('products.brushless.drill.006.description'), image: '/img/CP/wshua/dz/J0Z-DW09-13/1300-J0Z-DW09-13-01.jpg' },
        { id: 'id-004', model: t('products.brushless.drill.005.model'), description: t('products.brushless.drill.005.description'), image: '/img/CP/wshua/dz/J0Z-DW08A-10/1300-J0Z-DW08A-10-01.jpg' },
        { id: 'id-006', model: t('products.brushless.drill.007.model'), description: t('products.brushless.drill.007.description'), image: '/img/CP/wshua/dz/P0L-DW08-12V/1300-P0L-DW08-12V-01.jpg' },
      ],
    },
    {
      id: 'impact-driver',
      slug: 'impact-driver',
      name: t('cat_brushless_impact_driver'),
      products: [
        { id: 'idr-001', model: t('products.brushless.driver.001.model'), description: t('products.brushless.driver.001.name'), image: '/img/CP/wshua/qzbs/P0L-DW05-12V/1300-P0L-DW05-12V-01.jpg' },
        { id: 'idr-002', model: t('products.brushless.driver.002.model'), description: t('products.brushless.driver.002.name'), image: '/img/CP/wshua/qzbs/P0L-DW07-20V/1300-P0L-DW07-20V-01.jpg' },
        { id: 'idr-003', model: t('products.brushless.driver.003.model'), description: t('products.brushless.driver.003.name'), image: '/img/CP/wshua/qzbs/POL-DW04M-280/1300-POL-DW04M-280-01.jpg' },
        { id: 'idr-004', model: t('products.brushless.driver.004.model'), description: t('products.brushless.driver.004.name'), image: '/img/CP/wshua/qzbs/P0B-DW02BL-500/1300-P0B-DW02BL-500-01.jpg' },
        { id: 'idr-005', model: t('products.brushless.driver.005.model'), description: t('products.brushless.driver.005.name'), image: '/img/CP/wshua/qzbs/P0B-DW03BL-800/1300-P0B-DW03BL-800-01.jpg' },
      ],
    },
    {
      id: 'angle-grinder',
      slug: 'angle-grinder',
      name: t('cat_brushless_angle_grinder'),
      products: [
        { id: 'ag-001', model: 'S0M-DW01-100', description: t('products.brushless.grinder.001.name'), image: '/img/CP/wshua/jmj/S0M-DW01-100/1300-S0M-DW01-100-03.jpg' },
      ],
    },
  ];
}
