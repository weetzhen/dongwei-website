import { useTranslation } from 'react-i18next';

export interface NailGunProduct {
  id: string;
  name: string;
  descKey: string;
  image: string;
}

export interface NailGunCategory {
  id: string;
  label: string;
  products: NailGunProduct[];
}

export function useNailGunsData(): NailGunCategory[] {
  const { t } = useTranslation();

  return [
    {
      id: '4v',
      label: '4V',
      products: [
        { id: 'J-120', name: 'J-120', descKey: 'nail_4v_f15_desc', image: '/img/CP/dqiang/4V/J-120/1300-J-120-06.jpg' },
        { id: 'J-125', name: 'J-125', descKey: 'nail_4v_f20_desc', image: '/img/CP/dqiang/4V/J-125/1300-J-125-01.jpg' },
        { id: 'J-126', name: 'J-126', descKey: 'nail_4v_j64_desc', image: '/img/CP/dqiang/4V/J-126/1300-J-126-01.jpg' },
        { id: 'J-139', name: 'J-139', descKey: 'nail_4v_t50_desc', image: '/img/CP/dqiang/4V/J-139/1300-J139-01.jpg' },
        { id: 'J-153', name: 'J-153', descKey: 'nail_4v_u22_desc', image: '/img/CP/dqiang/4V/J-153/1300-J153-01.jpg' },
      ],
    },
    {
      id: '20v',
      label: '20V',
      products: [
        { id: 'J-128', name: 'J-128', descKey: 'nail_20v_f30_desc', image: '/img/CP/dqiang/20V/J-128/1300-J-128-01.jpg' },
        { id: 'J-129', name: 'J-129', descKey: 'nail_20v_f50_desc', image: '/img/CP/dqiang/20V/J-129/1300-J129-01.jpg' },
        { id: 'J-133', name: 'J-133', descKey: 'nail_20v_t64_desc', image: '/img/CP/dqiang/20V/J-133/1300-J133-02.jpg' },
        { id: 'J-145', name: 'J-145', descKey: 'nail_20v_j80_desc', image: '/img/CP/dqiang/20V/J-145/1300-J145-02.jpg' },
        { id: 'J-147', name: 'J-147', descKey: 'nail_20v_n90_desc', image: '/img/CP/dqiang/20V/J-147/1300-J147-05.jpg' },
        { id: 'J-150', name: 'J-150', descKey: 'nail_20v_b50_desc', image: '/img/CP/dqiang/20V/J-150/1300-J150-01.jpg' },
        { id: 'J-156', name: 'J-156', descKey: 'nail_20v_c60_desc', image: '/img/CP/dqiang/20V/J-156/1300-J156-05.jpg' },
      ],
    },
    {
      id: 'ac',
      label: 'AC',
      products: [
        { id: 'J-112', name: 'J-112', descKey: 'nail_ac_f30_desc', image: '/img/CP/dqiang/AC/J-112/1300-J112-01.jpg' },
        { id: 'J-115', name: 'J-115', descKey: 'nail_ac_f50_desc', image: '/img/CP/dqiang/AC/J-115/1300-J-115-05.jpg' },
        { id: 'J-118', name: 'J-118', descKey: 'nail_ac_t64_desc', image: '/img/CP/dqiang/AC/J-118/1300-J-118-05.jpg' },
        { id: 'J-119', name: 'J-119', descKey: 'nail_ac_j80_desc', image: '/img/CP/dqiang/AC/J-119/1300-J-119-06.jpg' },
        { id: 'J-123', name: 'J-123', descKey: 'nail_ac_n90_desc', image: '/img/CP/dqiang/AC/J-123/1300-J-123-07.jpg' },
      ],
    },
  ];
}
