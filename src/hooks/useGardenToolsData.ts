import { useTranslation } from 'react-i18next';

export interface GardenProduct {
  id: string;
  model: string;
  description: string;
  image: string;
}

export interface GardenCategory {
  id: string;
  slug: string;
  name: string;
  products: GardenProduct[];
}

export function useGardenToolsData(): GardenCategory[] {
  const { t } = useTranslation();

  return [
    {
      id: 'hedge-trimmer',
      slug: 'hedge-trimmer',
      name: t('products.gardenTools.categories.hedgeTrimmer'),
      products: [
        { id: 'ht-001', model: t('products.gardenTools.hedgeTrimmer.001.model'), description: t('products.gardenTools.hedgeTrimmer.001.description'), image: '/img/CP/ylin/lg/M0L-DW03-5C/1300-M0L-DW03-5C-02.jpg' },
        { id: 'ht-002', model: t('products.gardenTools.hedgeTrimmer.002.model'), description: t('products.gardenTools.hedgeTrimmer.002.description'), image: '/img/CP/ylin/lg/M0L-DW03-6C/1300-M0L-DW03-6C-01.jpg' },
        { id: 'ht-003', model: t('products.gardenTools.hedgeTrimmer.003.model'), description: t('products.gardenTools.hedgeTrimmer.003.description'), image: '/img/CP/ylin/lg/M0L-DW05-10C/1300-M0L-DW05-10C-04.jpg' },
        { id: 'ht-004', model: t('products.gardenTools.hedgeTrimmer.004.model'), description: t('products.gardenTools.hedgeTrimmer.004.description'), image: '/img/CP/ylin/lg/M0L-DW06-8C/1300-M0L-DW06-8C-08.jpg' },
      ],
    },
    {
      id: 'pole-pruner',
      slug: 'pole-pruner',
      name: t('cat_garden_pole'),
      products: [
        { id: 'pp-001', model: 'N0HX-DW01B-410', description: t('products.gardenTools.polePruner.001.description'), image: '/img/CP/ylin/gzj/N0HX-DW01B-410/1300-N0HX-DW01B-410-06.jpg' },
        { id: 'pp-002', model: 'N0HC-DW01-32', description: t('products.gardenTools.polePruner.002.description'), image: '/img/CP/ylin/gzj/N0HC-DW01-32/1300--N0HC-DW01-32-06.jpg' },
        { id: 'pp-003', model: 'M0HL-DW08-8C', description: t('products.gardenTools.polePruner.003.description'), image: '/img/CP/ylin/gzj/M0HL-DW08-8C/1300-M0HL-DW08-8C-03.jpg' },
      ],
    },
    {
      id: 'lawn-care',
      slug: 'lawn-care',
      name: t('cat_garden_maintenance'),
      products: [
        { id: 'lc-001', model: 'S1L-DW03-104', description: t('products.gardenTools.lawnCare.001.description'), image: '/img/CP/ylin/mlj/S1L-DW03-104/1300-S1L-DW03-104-0.jpg' },
        { id: 'lc-002', model: 'S0L-DW04-108', description: t('products.gardenTools.lawnCare.002.description'), image: '/img/CP/ylin/mlj/S0L-DW04-108/1300-S0L-DW04-108-01.jpg' },
      ],
    },
  ];
}
