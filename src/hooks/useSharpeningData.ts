import { useTranslation } from 'react-i18next';

export interface SharpeningProduct {
  id: string;
  name: string;
  model: string;
  description: string;
  image: string;
  category: string;
}

export interface SharpeningCategory {
  id: string;
  slug: string;
  name: string;
}

export function useSharpeningCategories(): SharpeningCategory[] {
  const { t } = useTranslation();
  return [
    { id: 'workbench', slug: 'workbench', name: t('products.sharpening.categories.workbench') },
    { id: 'drill-repair', slug: 'drill-repair', name: t('products.sharpening.categories.drillRepair') },
    { id: 'engraving', slug: 'engraving', name: t('products.sharpening.categories.engraving') },
  ];
}

export function useSharpeningData(): SharpeningProduct[] {
  const { t } = useTranslation();

  return [
    // 多功能磨削工作台
    { id: 'wb-001', name: t('products.sharpening.workbench.001.name'), model: t('products.sharpening.workbench.001.model'), description: t('products.sharpening.workbench.001.description'), image: '/img/CP/mxue/mxtai/S1B-DW01-220W/1300-S1B-DW01-220W-01.jpg', category: 'workbench' },
    { id: 'wb-002', name: t('products.sharpening.workbench.002.name'), model: t('products.sharpening.workbench.002.model'), description: t('products.sharpening.workbench.002.description'), image: '/img/CP/mxue/mxtai/S1D-DW05-52/1300-S1D-DW05-52-07.jpg', category: 'workbench' },
    { id: 'wb-003', name: t('products.sharpening.workbench.003.name'), model: t('products.sharpening.workbench.003.model'), description: t('products.sharpening.workbench.003.description'), image: '/img/CP/mxue/mxtai/S1J-DW02-160/1300-S1J-DW02-160-01.jpg', category: 'workbench' },
    { id: 'wb-004', name: t('products.sharpening.workbench.004.name'), model: t('products.sharpening.workbench.004.model'), description: t('products.sharpening.workbench.004.description'), image: '/img/CP/mxue/mxtai/S1S-DW03-50DC/1300-S1S-DW03-50DC-03.jpg', category: 'workbench' },
    { id: 'wb-005', name: t('products.sharpening.workbench.005.name'), model: t('products.sharpening.workbench.005.model'), description: t('products.sharpening.workbench.005.description'), image: '/img/CP/mxue/mxtai/S1S-DW07-75/1300-S1S-DW07-75-09.jpg', category: 'workbench' },
    // 钻头修复机
    { id: 'dr-001', name: t('products.sharpening.drillRepair.001.name'), model: t('products.sharpening.drillRepair.001.model'), description: t('products.sharpening.drillRepair.001.description'), image: '/img/CP/mxue/ztxfu/S1D-DW03-58/1300-S1D-DW03-58-01.jpg', category: 'drill-repair' },
    { id: 'dr-002', name: t('products.sharpening.drillRepair.002.name'), model: t('products.sharpening.drillRepair.002.model'), description: t('products.sharpening.drillRepair.002.description'), image: '/img/CP/mxue/ztxfu/S1Z-DW03-75/1300-S1Z-DW03-75-01.jpg', category: 'drill-repair' },
    { id: 'dr-003', name: t('products.sharpening.drillRepair.003.name'), model: t('products.sharpening.drillRepair.003.model'), description: t('products.sharpening.drillRepair.003.description'), image: '/img/CP/mxue/ztxfu/S1Z-DW04-58/1300-S1Z-DW04-58-05.jpg', category: 'drill-repair' },
    { id: 'dr-004', name: t('products.sharpening.drillRepair.004.name'), model: t('products.sharpening.drillRepair.004.model'), description: t('products.sharpening.drillRepair.004.description'), image: '/img/CP/mxue/ztxfu/S1Z-DW08-75/1300-S1Z-DW08-75-01.jpg', category: 'drill-repair' },
    { id: 'dr-005', name: t('products.sharpening.drillRepair.005.name'), model: t('products.sharpening.drillRepair.005.model'), description: t('products.sharpening.drillRepair.005.description'), image: '/img/CP/mxue/ztxfu/S1Z-DW09-92W/1300-S1Z-DW09-92W-01.jpg', category: 'drill-repair' },
    // 雕刻工具
    { id: 'eg-001', name: t('products.sharpening.engraving.001.name'), model: t('products.sharpening.engraving.001.model'), description: t('products.sharpening.engraving.001.description'), image: '/img/CP/mxue/dkgju/Q0K-DW05-4V/1300-Q0K-DW05-4V-02.jpg', category: 'engraving' },
    { id: 'eg-002', name: t('products.sharpening.engraving.002.name'), model: t('products.sharpening.engraving.002.model'), description: t('products.sharpening.engraving.002.description'), image: '/img/CP/mxue/dkgju/Q1K-DW04-13/1300-Q1K-DW04-13-08.jpg', category: 'engraving' },
  ];
}
