export interface CategoryAccessoryItem {
  nameKey: string;
  descKey: string;
  name?: string;
  desc?: string;
  image: string;
}

// Helper: standard brushless accessory names/descs by key
// Used inline below for each product

export const brushlessDetailData: Record<string, { mainImages: string[]; featureCount?: number; accessories?: CategoryAccessoryItem[] }> = {
  'drill-001': {featureCount: 3,    //P0L-DW01-4V
    mainImages: [
      '/img/CP/wshua/lsd/P0L-DW01-4V/1300-P0L-DW01-4V-01.jpg',
      '/img/CP/wshua/lsd/P0L-DW01-4V/1300-P0L-DW01-4V-02.jpg',
      '/img/CP/wshua/lsd/P0L-DW01-4V/1300-P0L-DW01-4V-03.jpg',
      '/img/CP/wshua/lsd/P0L-DW01-4V/1300-P0L-DW01-4V-04.jpg',
      '/img/CP/wshua/lsd/P0L-DW01-4V/1300-P0L-DW01-4V-05.jpg',
      '/img/CP/wshua/lsd/P0L-DW01-4V/1300-P0L-DW01-4V-06.jpg',
    ],
    accessories: [
      { nameKey: 'accessory_1_name', descKey: 'accessory_1_desc', name: 'Charging type', desc: 'USB Type-C', image: '/img/public/sjx/sjx1.png' },
    ],
  },
  'id-001': {featureCount: 3,     //P0L-DW01B-4V
    mainImages: [
      '/img/CP/wshua/lsd/P0L-DW01B-4V/1300-P0L-DW01B-4V-01.jpg',
      '/img/CP/wshua/lsd/P0L-DW01B-4V/1300-P0L-DW01B-4V-02.jpg',
      '/img/CP/wshua/lsd/P0L-DW01B-4V/1300-P0L-DW01B-4V-03.jpg',
      '/img/CP/wshua/lsd/P0L-DW01B-4V/1300-P0L-DW01B-4V-04.jpg',
      '/img/CP/wshua/lsd/P0L-DW01B-4V/1300-P0L-DW01B-4V-05.jpg',
      '/img/CP/wshua/lsd/P0L-DW01B-4V/1300-P0L-DW01B-4V-06.jpg',
    ],
    accessories: [
      { nameKey: 'accessory_1_name', descKey: 'accessory_1_desc', name: 'Charging type', desc: 'USB Type-C', image: '/img/public/sjx/sjx1.png' },
    ],
  },
  'id-002': {featureCount: 3,     //P0L-DW02-4V
    mainImages: [
      '/img/CP/wshua/lsd/P0L-DW02-4V/1300-P0L-DW02-4V-01.jpg',
      '/img/CP/wshua/lsd/P0L-DW02-4V/1300-P0L-DW02-4V-02.jpg',
      '/img/CP/wshua/lsd/P0L-DW02-4V/1300-P0L-DW02-4V-03.jpg',
      '/img/CP/wshua/lsd/P0L-DW02-4V/1300-P0L-DW02-4V-04.jpg',
      '/img/CP/wshua/lsd/P0L-DW02-4V/1300-P0L-DW02-4V-05.jpg',
    ],
    accessories: [
      { nameKey: 'accessory_1_name', descKey: 'accessory_1_desc', name: 'Charging type', desc: 'USB Type-C', image: '/img/public/sjx/sjx1.png' },
    ],
  },
  'id-003': {featureCount: 4,     //J0Z-DW07-13
    mainImages: [
      '/img/CP/wshua/dz/J0Z-DW07-13/1300-J0Z-DW07-13-01.jpg',
      '/img/CP/wshua/dz/J0Z-DW07-13/1300-J0Z-DW07-13-02.jpg',
      '/img/CP/wshua/dz/J0Z-DW07-13/1300-J0Z-DW07-13-03.jpg',
      '/img/CP/wshua/dz/J0Z-DW07-13/1300-J0Z-DW07-13-04.jpg',
      '/img/CP/wshua/dz/J0Z-DW07-13/1300-J0Z-DW07-13-05.jpg',
    ],
    accessories: [
      { nameKey: 'ht_accessory_1_name', descKey: 'ht_accessory_1_desc', name: 'Battery Pack', desc: '20V2.0Ah', image: '/img/public/dc/20v2a.jpg' },
      { nameKey: 'brushless_accessory_charger', descKey: 'brushless_accessory_charger_desc', name: 'handle', desc: 'multifunctional handle', image: '/img/public/sb/fzsb.jpg' },
    ],
  },
  'id-004': {featureCount: 4,     //J0Z-DW08A-10
    mainImages: [
      '/img/CP/wshua/dz/J0Z-DW08A-10/1300-J0Z-DW08A-10-01.jpg',
      '/img/CP/wshua/dz/J0Z-DW08A-10/1300-J0Z-DW08A-10-02.jpg',
      '/img/CP/wshua/dz/J0Z-DW08A-10/1300-J0Z-DW08A-10-03.jpg',
      '/img/CP/wshua/dz/J0Z-DW08A-10/1300-J0Z-DW08A-10-04.jpg',
      '/img/CP/wshua/dz/J0Z-DW08A-10/1300-J0Z-DW08A-10-05.jpg',
    ],
    accessories: [
      { nameKey: 'brushless_accessory_battery', descKey: 'brushless_accessory_battery_desc', name: 'Battery Pack', desc: '12V2.0Ah', image: '/img/public/dc/12V2a1.jpg' },
    ],
  },
  'id-005': {featureCount: 4,     //J0Z-DW09-13
    mainImages: [
      '/img/CP/wshua/dz/J0Z-DW09-13/1300-J0Z-DW09-13-01.jpg',
      '/img/CP/wshua/dz/J0Z-DW09-13/1300-J0Z-DW09-13-02.jpg',
      '/img/CP/wshua/dz/J0Z-DW09-13/1300-J0Z-DW09-13-03.jpg',
      '/img/CP/wshua/dz/J0Z-DW09-13/1300-J0Z-DW09-13-04.jpg',
      '/img/CP/wshua/dz/J0Z-DW09-13/1300-J0Z-DW09-13-05.jpg',
      '/img/CP/wshua/dz/J0Z-DW09-13/1300-J0Z-DW09-13-06.jpg',
    ],
    accessories: [
      { nameKey: 'ht_accessory_1_name', descKey: 'ht_accessory_1_desc', name: 'Battery Pack', desc: '20V2.0Ah', image: '/img/public/dc/20v2a.jpg' },
      { nameKey: 'ht_accessory_1_name', descKey: 'ht_accessory_1_desc', name: 'Belt Clip', desc: 'A rugged metal accessory for hands-free carrying and instant tool access on the job site.', image: '/img/CP/wshua/dz/J0Z-DW09-13/1300-J0Z-DW09-13-07.jpg' },
    ],
  },
  'id-006': {featureCount: 4,     //P0L-DW08-12V
    mainImages: [
      '/img/CP/wshua/dz/P0L-DW08-12V/1300-P0L-DW08-12V-01.jpg',
      '/img/CP/wshua/dz/P0L-DW08-12V/1300-P0L-DW08-12V-02.jpg',
      '/img/CP/wshua/dz/P0L-DW08-12V/1300-P0L-DW08-12V-03.jpg',
      '/img/CP/wshua/dz/P0L-DW08-12V/1300-P0L-DW08-12V-04.jpg',
      '/img/CP/wshua/dz/P0L-DW08-12V/1300-P0L-DW08-12V-05.jpg',
    ],
    accessories: [
      { nameKey: 'brushless_accessory_battery', descKey: 'brushless_accessory_battery_desc', name: 'Battery Pack', desc: '12V2.0Ah', image: '/img/public/dc/12V2a1.jpg' },
    ],
  },
  'id-007': {
    mainImages: [
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20magnetic%20drill%20press%20annular%20cutter%20magnetic%20base%20black%20orange%20front%20view%20isolated%20white%20background%20industrial%20photography&width=600&height=600&seq=bl-solo-id-007-v1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20magnetic%20drill%20press%20annular%20cutter%20magnetic%20base%20black%20orange%20side%20view%20isolated%20white%20background%20industrial%20photography&width=600&height=600&seq=bl-solo-id-007-v2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20magnetic%20drill%20press%20annular%20cutter%20magnetic%20base%20black%20orange%20top%20view%20isolated%20white%20background%20industrial%20photography&width=600&height=600&seq=bl-solo-id-007-v3&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20magnetic%20drill%20press%20annular%20cutter%20magnetic%20base%20black%20orange%20back%20view%20isolated%20white%20background%20industrial%20photography&width=600&height=600&seq=bl-solo-id-007-v4&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20magnetic%20drill%20press%20annular%20cutter%20magnetic%20base%20black%20orange%20close%20up%20view%20isolated%20white%20background%20industrial%20photography&width=600&height=600&seq=bl-solo-id-007-v5&orientation=squarish',
    ],
    accessories: [
      { nameKey: 'brushless_accessory_battery', descKey: 'brushless_accessory_battery_desc', name: '20V 4Ah 锂电池', desc: '原装20V 4Ah高容量锂电池，长效续航，过充保护，快充兼容', image: 'https://readdy.ai/api/search-image?query=20V%204Ah%20battery%20pack%20magnetic%20drill%20press%20annular%20cutter%20power%20tool%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-id007-1&orientation=squarish' },
      { nameKey: 'brushless_accessory_charger', descKey: 'brushless_accessory_charger_desc', name: '20V快速充电器', desc: '四段式LED充电状态指示，约60分钟充满4Ah电池，智能过充保护', image: 'https://readdy.ai/api/search-image?query=20V%20fast%20charger%20magnetic%20drill%20press%20battery%20charging%20LED%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-id007-2&orientation=squarish' },
      { nameKey: 'brushless_accessory_drill_bits', descKey: 'brushless_accessory_drill_bits_desc', name: '21件HSS钻头套装', desc: '21件高速钢HSS麻花钻头套装，含多种规格，配塑料收纳盒', image: 'https://readdy.ai/api/search-image?query=annular%20cutter%20set%205-piece%20weldon%20shank%20HSS%20magnetic%20drill%20metal%20cutting%20assorted%20diameters%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-id007-3&orientation=squarish' },
      { nameKey: 'brushless_accessory_case', descKey: 'brushless_accessory_case_desc', name: 'EVA成型工具箱', desc: '黑色EVA成型工具箱，泡棉精密切割，快扣锁扣，专业运输防护', image: 'https://readdy.ai/api/search-image?query=magnetic%20drill%20press%20hard%20case%20metal%20frame%20foam%20cutout%20interior%20black%20industrial%20carrying%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-id007-4&orientation=squarish' },
      { nameKey: 'brushless_accessory_side_handle', descKey: 'brushless_accessory_side_handle_desc', name: '360度旋转辅助手柄', desc: '360度可旋转辅助侧手柄，橡胶防滑握把，提升操控稳定性', image: 'https://readdy.ai/api/search-image?query=coolant%20tube%20kit%20magnetic%20drill%20annular%20cutter%20liquid%20cooling%20system%20hose%20nozzle%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-id007-5&orientation=squarish' },
      { nameKey: 'brushless_accessory_depth_gauge', descKey: 'brushless_accessory_depth_gauge_desc', name: '精密深度限位杆', desc: '不锈钢精密深度限位杆，快锁卡环，精准控制钻孔深度', image: 'https://readdy.ai/api/search-image?query=drift%20pin%20centering%20pin%20set%20magnetic%20drill%20press%20annular%20cutter%20locating%20tools%20steel%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-id007-6&orientation=squarish' },
      { nameKey: 'brushless_accessory_belt_clip', descKey: 'brushless_accessory_belt_clip_desc', name: '磁性腰带挂钩', desc: '重型磁性腰带挂钩，快速拆装，方便携带作业', image: 'https://readdy.ai/api/search-image?query=depth%20stop%20attachment%20magnetic%20drill%20press%20precision%20cutting%20depth%20control%20steel%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-id007-7&orientation=squarish' },
      { nameKey: 'brushless_accessory_manual', descKey: 'brushless_accessory_manual_desc', name: '多语言使用说明书', desc: '中英日三语图文操作说明，含安全须知、使用步骤及保养建议', image: 'https://readdy.ai/api/search-image?query=magnetic%20drill%20press%20user%20manual%20operation%20guide%20technical%20diagram%20safety%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-id007-8&orientation=squarish' },
    ],
  },
  'id-008': {
    mainImages: [
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20core%20drill%20hollow%20core%20bit%20concrete%20masonry%20black%20orange%20front%20view%20isolated%20white%20background%20product%20photography&width=600&height=600&seq=bl-solo-id-008-v1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20core%20drill%20hollow%20core%20bit%20concrete%20masonry%20black%20orange%20side%20view%20isolated%20white%20background%20product%20photography&width=600&height=600&seq=bl-solo-id-008-v2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20core%20drill%20hollow%20core%20bit%20concrete%20masonry%20black%20orange%20top%20view%20isolated%20white%20background%20product%20photography&width=600&height=600&seq=bl-solo-id-008-v3&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20core%20drill%20hollow%20core%20bit%20concrete%20masonry%20black%20orange%20back%20view%20isolated%20white%20background%20product%20photography&width=600&height=600&seq=bl-solo-id-008-v4&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20core%20drill%20hollow%20core%20bit%20concrete%20masonry%20black%20orange%20angle%20view%20isolated%20white%20background%20product%20photography&width=600&height=600&seq=bl-solo-id-008-v5&orientation=squarish',
    ],
    accessories: [
      { nameKey: 'brushless_accessory_battery', descKey: 'brushless_accessory_battery_desc', name: '20V 4Ah 锂电池', desc: '原装20V 4Ah高容量锂电池，长效续航，过充保护，快充兼容', image: 'https://readdy.ai/api/search-image?query=20V%205Ah%20battery%20pack%20core%20drill%20hollow%20core%20bit%20concrete%20masonry%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-id008-1&orientation=squarish' },
      { nameKey: 'brushless_accessory_charger', descKey: 'brushless_accessory_charger_desc', name: '20V快速充电器', desc: '四段式LED充电状态指示，约60分钟充满4Ah电池，智能过充保护', image: 'https://readdy.ai/api/search-image?query=20V%20rapid%20charger%20core%20drill%20battery%20high%20power%20fast%20charging%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-id008-2&orientation=squarish' },
      { nameKey: 'brushless_accessory_drill_bits', descKey: 'brushless_accessory_drill_bits_desc', name: '21件HSS钻头套装', desc: '21件高速钢HSS麻花钻头套装，含多种规格，配塑料收纳盒', image: 'https://readdy.ai/api/search-image?query=diamond%20core%20drill%20bit%20set%204-piece%20wet%20dry%20concrete%20masonry%20assorted%20diameters%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-id008-3&orientation=squarish' },
      { nameKey: 'brushless_accessory_case', descKey: 'brushless_accessory_case_desc', name: 'EVA成型工具箱', desc: '黑色EVA成型工具箱，泡棉精密切割，快扣锁扣，专业运输防护', image: 'https://readdy.ai/api/search-image?query=core%20drill%20hard%20transport%20case%20rugged%20shell%20foam%20padded%20black%20heavy%20duty%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-id008-4&orientation=squarish' },
      { nameKey: 'brushless_accessory_side_handle', descKey: 'brushless_accessory_side_handle_desc', name: '360度旋转辅助手柄', desc: '360度可旋转辅助侧手柄，橡胶防滑握把，提升操控稳定性', image: 'https://readdy.ai/api/search-image?query=SDS%20max%20adapter%20to%20SDS%20plus%20converter%20for%20core%20drill%20bits%20steel%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-id008-5&orientation=squarish' },
      { nameKey: 'brushless_accessory_depth_gauge', descKey: 'brushless_accessory_depth_gauge_desc', name: '精密深度限位杆', desc: '不锈钢精密深度限位杆，快锁卡环，精准控制钻孔深度', image: 'https://readdy.ai/api/search-image?query=water%20cooling%20tube%20core%20drill%20diamond%20bit%20wet%20cutting%20water%20feed%20hose%20nozzle%20black%20rubber%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-id008-6&orientation=squarish' },
      { nameKey: 'brushless_accessory_belt_clip', descKey: 'brushless_accessory_belt_clip_desc', name: '磁性腰带挂钩', desc: '重型磁性腰带挂钩，快速拆装，方便携带作业', image: 'https://readdy.ai/api/search-image?query=core%20bit%20removal%20wrench%20spanner%20tool%20steel%20chrome%20plated%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-id008-7&orientation=squarish' },
      { nameKey: 'brushless_accessory_manual', descKey: 'brushless_accessory_manual_desc', name: '多语言使用说明书', desc: '中英日三语图文操作说明，含安全须知、使用步骤及保养建议', image: 'https://readdy.ai/api/search-image?query=core%20drill%20instruction%20manual%20booklet%20safety%20guide%20color%20diagram%20multilingual%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-id008-8&orientation=squarish' },
    ],
  },
  'id-009': {
    mainImages: [
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20mixing%20drill%20paddle%20mixer%20mortar%20plaster%20black%20orange%20front%20view%20isolated%20white%20background%20studio%20lighting&width=600&height=600&seq=bl-solo-id-009-v1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20mixing%20drill%20paddle%20mixer%20mortar%20plaster%20black%20orange%20side%20view%20isolated%20white%20background%20studio%20lighting&width=600&height=600&seq=bl-solo-id-009-v2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20mixing%20drill%20paddle%20mixer%20mortar%20plaster%20black%20orange%20top%20view%20isolated%20white%20background%20studio%20lighting&width=600&height=600&seq=bl-solo-id-009-v3&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20mixing%20drill%20paddle%20mixer%20mortar%20plaster%20black%20orange%20back%20view%20isolated%20white%20background%20studio%20lighting&width=600&height=600&seq=bl-solo-id-009-v4&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20mixing%20drill%20paddle%20mixer%20mortar%20plaster%20black%20orange%20detail%20view%20isolated%20white%20background%20studio%20lighting&width=600&height=600&seq=bl-solo-id-009-v5&orientation=squarish',
    ],
    accessories: [
      { nameKey: 'brushless_accessory_battery', descKey: 'brushless_accessory_battery_desc', name: '20V 4Ah 锂电池', desc: '原装20V 4Ah高容量锂电池，长效续航，过充保护，快充兼容', image: 'https://readdy.ai/api/search-image?query=20V%204Ah%20battery%20mixing%20drill%20paddle%20mixer%20mortar%20plaster%20cordless%20power%20tool%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-id009-1&orientation=squarish' },
      { nameKey: 'brushless_accessory_charger', descKey: 'brushless_accessory_charger_desc', name: '20V快速充电器', desc: '四段式LED充电状态指示，约60分钟充满4Ah电池，智能过充保护', image: 'https://readdy.ai/api/search-image?query=20V%20fast%20charger%20mixing%20drill%20battery%20LED%20status%20indicator%20black%20plastic%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-id009-2&orientation=squarish' },
      { nameKey: 'brushless_accessory_drill_bits', descKey: 'brushless_accessory_drill_bits_desc', name: '21件HSS钻头套装', desc: '21件高速钢HSS麻花钻头套装，含多种规格，配塑料收纳盒', image: 'https://readdy.ai/api/search-image?query=paddle%20mixing%20attachment%20set%20pair%206%20inch%208%20inch%20mortar%20mixing%20paddle%20steel%20epoxy%20coated%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-id009-3&orientation=squarish' },
      { nameKey: 'brushless_accessory_case', descKey: 'brushless_accessory_case_desc', name: 'EVA成型工具箱', desc: '黑色EVA成型工具箱，泡棉精密切割，快扣锁扣，专业运输防护', image: 'https://readdy.ai/api/search-image?query=mixing%20drill%20carrying%20case%20plastic%20shell%20foam%20padding%20black%20robust%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-id009-4&orientation=squarish' },
      { nameKey: 'brushless_accessory_side_handle', descKey: 'brushless_accessory_side_handle_desc', name: '360度旋转辅助手柄', desc: '360度可旋转辅助侧手柄，橡胶防滑握把，提升操控稳定性', image: 'https://readdy.ai/api/search-image?query=side%20auxiliary%20handle%20mixing%20drill%20heavy%20grip%20anti-torque%20rubber%20coated%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-id009-5&orientation=squarish' },
      { nameKey: 'brushless_accessory_depth_gauge', descKey: 'brushless_accessory_depth_gauge_desc', name: '精密深度限位杆', desc: '不锈钢精密深度限位杆，快锁卡环，精准控制钻孔深度', image: 'https://readdy.ai/api/search-image?query=paddle%20mixer%20storage%20holder%20rack%20wall%20mount%20mixing%20paddle%20black%20steel%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-id009-6&orientation=squarish' },
      { nameKey: 'brushless_accessory_belt_clip', descKey: 'brushless_accessory_belt_clip_desc', name: '磁性腰带挂钩', desc: '重型磁性腰带挂钩，快速拆装，方便携带作业', image: 'https://readdy.ai/api/search-image?query=rubber%20grip%20sleeve%20handle%20cover%20mixing%20drill%20ergonomic%20comfort%20anti-slip%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-id009-7&orientation=squarish' },
      { nameKey: 'brushless_accessory_manual', descKey: 'brushless_accessory_manual_desc', name: '多语言使用说明书', desc: '中英日三语图文操作说明，含安全须知、使用步骤及保养建议', image: 'https://readdy.ai/api/search-image?query=mixing%20drill%20user%20manual%20instruction%20booklet%20operation%20guide%20multilingual%20color%20print%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-id009-8&orientation=squarish' },
    ],
  },
  'idr-001': { featureCount: 4,     //P0L-DW05-12V
    mainImages: [
     '/img/CP/wshua/qzbs/P0L-DW05-12V/1300-P0L-DW05-12V-01.jpg',
     '/img/CP/wshua/qzbs/P0L-DW05-12V/1300-P0L-DW05-12V-02.jpg',
     '/img/CP/wshua/qzbs/P0L-DW05-12V/1300-P0L-DW05-12V-03.jpg',
     '/img/CP/wshua/qzbs/P0L-DW05-12V/1300-P0L-DW05-12V-04.jpg',
     '/img/CP/wshua/qzbs/P0L-DW05-12V/1300-P0L-DW05-12V-05.jpg',
    ],
    accessories: [
      { nameKey: 'brushless_accessory_battery', descKey: 'brushless_accessory_battery_desc', name: 'Battery Pack', desc: '12V2.0Ah', image: '/img/public/dc/12V2a1.jpg' },
      { nameKey: 'brushless_pt_name', descKey: 'brushless_pt_desc', name: '可拆卸批头收纳夹', desc: '具备 3 个标准六角孔位，可稳固收纳 3 枚常用批头，确保作业时随取随用，告别寻找配件的烦恼。', image: '/img/CP/wshua/qzbs/P0L-DW05-12V/1300-P0L-DW05-12V-06.jpg' },
    ]
  },
  'idr-002': {featureCount: 4,      //P0L-DW07-20V
    mainImages: [
      '/img/CP/wshua/qzbs/P0L-DW07-20V/1300-P0L-DW07-20V-01.jpg',
      '/img/CP/wshua/qzbs/P0L-DW07-20V/1300-P0L-DW07-20V-02.jpg',
      '/img/CP/wshua/qzbs/P0L-DW07-20V/1300-P0L-DW07-20V-03.jpg',
      '/img/CP/wshua/qzbs/P0L-DW07-20V/1300-P0L-DW07-20V-04.jpg',
      '/img/CP/wshua/qzbs/P0L-DW07-20V/1300-P0L-DW07-20V-05.jpg',
    ],
    accessories: [
      { nameKey: 'accessory_1_name', descKey: 'accessory_1_desc',name: 'Battery Pack', desc: '20V2.0Ah', image: '/img/public/dc/20v2a.jpg' },
      //{ nameKey: 'brushless_accessory_battery', descKey: 'brushless_accessory_battery_desc', name: '20V 4Ah 锂电池', desc: '原装20V 4Ah高容量锂电池，长效续航，过充保护，快充兼容', image: 'https://readdy.ai/api/search-image?query=20V%202Ah%20compact%20battery%20for%20small%20impact%20driver%20mini%20form%20factor%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr002-1&orientation=squarish' },
      //{ nameKey: 'brushless_accessory_charger', descKey: 'brushless_accessory_charger_desc', name: '20V快速充电器', desc: '四段式LED充电状态指示，约60分钟充满4Ah电池，智能过充保护', image: 'https://readdy.ai/api/search-image?query=compact%201-hour%20fast%20charger%2020V%20mini%20impact%20driver%20LED%20indicator%20small%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr002-2&orientation=squarish' },
    ],
  },
  'idr-003': {featureCount: 4,   //POL-DW04M-280
    mainImages: [
      '/img/CP/wshua/qzbs/POL-DW04M-280/1300-POL-DW04M-280-01.jpg',
      '/img/CP/wshua/qzbs/POL-DW04M-280/1300-POL-DW04M-280-02.jpg',
      '/img/CP/wshua/qzbs/POL-DW04M-280/1300-POL-DW04M-280-03.jpg',
      '/img/CP/wshua/qzbs/POL-DW04M-280/1300-POL-DW04M-280-04.jpg',
      '/img/CP/wshua/qzbs/POL-DW04M-280/1300-POL-DW04M-280-05.jpg',
    ],
    accessories: [
      { nameKey: 'accessory_1_name', descKey: 'accessory_1_desc',name: 'Battery Pack', desc: '20V2.0Ah', image: '/img/public/dc/20v2a.jpg' },
    ],
  },
  'idr-004': {      //P0B-DW02BL-500
    mainImages: [
      '/img/CP/wshua/qzbs/P0B-DW02BL-500/1300-P0B-DW02BL-500-01.jpg',
      '/img/CP/wshua/qzbs/P0B-DW02BL-500/1300-P0B-DW02BL-500-02.jpg',
      '/img/CP/wshua/qzbs/P0B-DW02BL-500/1300-P0B-DW02BL-500-03.jpg',
      '/img/CP/wshua/qzbs/P0B-DW02BL-500/1300-P0B-DW02BL-500-04.jpg',
      '/img/CP/wshua/qzbs/P0B-DW02BL-500/1300-P0B-DW02BL-500-05.jpg',
    ],
    accessories: [
      { nameKey: 'accessory_1_name', descKey: 'accessory_1_desc',name: 'Battery Pack', desc: '20V2.0Ah', image: '/img/public/dc/20v2a.jpg' },
    ],
  },
  'idr-005': {
    mainImages: [
      '/img/CP/wshua/qzbs/P0B-DW03BL-800/1300-P0B-DW03BL-800-01.jpg',
      '/img/CP/wshua/qzbs/P0B-DW03BL-800/1300-P0B-DW03BL-800-02.jpg',
      '/img/CP/wshua/qzbs/P0B-DW03BL-800/1300-P0B-DW03BL-800-03.jpg',
      '/img/CP/wshua/qzbs/P0B-DW03BL-800/1300-P0B-DW03BL-800-04.jpg',
      '/img/CP/wshua/qzbs/P0B-DW03BL-800/1300-P0B-DW03BL-800-05.jpg',
    ],
    accessories: [
      { nameKey: 'accessory_1_name', descKey: 'accessory_1_desc',name: 'Battery Pack', desc: '20V2.0Ah', image: '/img/public/dc/20v2a.jpg' },
    ],
  },
  'idr-006': {
    mainImages: [
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20right%20angle%20cordless%20impact%20driver%2090%20degree%20angled%20head%20black%20orange%20front%20view%20isolated%20white%20background%20studio&width=600&height=600&seq=bl-solo-idr-006-v1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20right%20angle%20cordless%20impact%20driver%2090%20degree%20angled%20head%20black%20orange%20side%20view%20isolated%20white%20background%20studio&width=600&height=600&seq=bl-solo-idr-006-v2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20right%20angle%20cordless%20impact%20driver%2090%20degree%20angled%20head%20black%20orange%20top%20view%20isolated%20white%20background%20studio&width=600&height=600&seq=bl-solo-idr-006-v3&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20right%20angle%20cordless%20impact%20driver%2090%20degree%20angled%20head%20black%20orange%20back%20view%20isolated%20white%20background%20studio&width=600&height=600&seq=bl-solo-idr-006-v4&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20right%20angle%20cordless%20impact%20driver%2090%20degree%20angled%20head%20black%20orange%20detail%20view%20isolated%20white%20background%20studio&width=600&height=600&seq=bl-solo-idr-006-v5&orientation=squarish',
    ],
    accessories: [
      { nameKey: 'brushless_accessory_battery', descKey: 'brushless_accessory_battery_desc', name: '20V 4Ah 锂电池', desc: '原装20V 4Ah高容量锂电池，长效续航，过充保护，快充兼容', image: 'https://readdy.ai/api/search-image?query=20V%204Ah%20battery%20right%20angle%20impact%20driver%2090%20degree%20cordless%20tool%20black%20orange%20label%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr006-1&orientation=squarish' },
      { nameKey: 'brushless_accessory_charger', descKey: 'brushless_accessory_charger_desc', name: '20V快速充电器', desc: '四段式LED充电状态指示，约60分钟充满4Ah电池，智能过充保护', image: 'https://readdy.ai/api/search-image?query=20V%20charger%20right%20angle%20impact%20driver%20LED%20charge%20status%20wall%20plug%20compact%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr006-2&orientation=squarish' },
      { nameKey: 'brushless_accessory_drill_bits', descKey: 'brushless_accessory_drill_bits_desc', name: '21件HSS钻头套装', desc: '21件高速钢HSS麻花钻头套装，含多种规格，配塑料收纳盒', image: 'https://readdy.ai/api/search-image?query=right%20angle%20impact%20driver%20bit%20set%2025-piece%20short%20stub%20hex%20shank%20philips%20torx%20tight%20space%20access%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr006-3&orientation=squarish' },
      { nameKey: 'brushless_accessory_case', descKey: 'brushless_accessory_case_desc', name: 'EVA成型工具箱', desc: '黑色EVA成型工具箱，泡棉精密切割，快扣锁扣，专业运输防护', image: 'https://readdy.ai/api/search-image?query=right%20angle%20impact%20driver%20custom%20case%20hard%20shell%20foam%20padded%20black%20orange%20compartments%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr006-4&orientation=squarish' },
      { nameKey: 'brushless_accessory_belt_clip', descKey: 'brushless_accessory_belt_clip_desc', name: '磁性腰带挂钩', desc: '重型磁性腰带挂钩，快速拆装，方便携带作业', image: 'https://readdy.ai/api/search-image?query=right%20angle%20impact%20driver%20belt%20clip%20spring%20hook%20black%20compact%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr006-5&orientation=squarish' },
      { nameKey: 'brushless_accessory_side_handle', descKey: 'brushless_accessory_side_handle_desc', name: '360度旋转辅助手柄', desc: '360度可旋转辅助侧手柄，橡胶防滑握把，提升操控稳定性', image: 'https://readdy.ai/api/search-image?query=90%20degree%20right%20angle%20drill%20adapter%20hex%20chuck%20attachment%20offset%20screwdriver%20black%20metal%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr006-6&orientation=squarish' },
      { nameKey: 'brushless_accessory_depth_gauge', descKey: 'brushless_accessory_depth_gauge_desc', name: '精密深度限位杆', desc: '不锈钢精密深度限位杆，快锁卡环，精准控制钻孔深度', image: 'https://readdy.ai/api/search-image?query=short%20stub%20screwdriver%20bit%20set%2050mm%20hex%20shank%2010-piece%20impact%20rated%20tight%20space%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr006-7&orientation=squarish' },
      { nameKey: 'brushless_accessory_manual', descKey: 'brushless_accessory_manual_desc', name: '多语言使用说明书', desc: '中英日三语图文操作说明，含安全须知、使用步骤及保养建议', image: 'https://readdy.ai/api/search-image?query=right%20angle%20impact%20driver%20user%20manual%20booklet%20safety%20guide%20operation%20instructions%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr006-8&orientation=squarish' },
    ],
  },
  'idr-007': {
    mainImages: [
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20long%20reach%20extended%20shaft%20cordless%20impact%20driver%20reach%20tight%20spaces%20black%20orange%20front%20view%20isolated%20white%20background&width=600&height=600&seq=bl-solo-idr-007-v1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20long%20reach%20extended%20shaft%20cordless%20impact%20driver%20reach%20tight%20spaces%20black%20orange%20side%20view%20isolated%20white%20background&width=600&height=600&seq=bl-solo-idr-007-v2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20long%20reach%20extended%20shaft%20cordless%20impact%20driver%20reach%20tight%20spaces%20black%20orange%20top%20view%20isolated%20white%20background&width=600&height=600&seq=bl-solo-idr-007-v3&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20long%20reach%20extended%20shaft%20cordless%20impact%20driver%20reach%20tight%20spaces%20black%20orange%20back%20view%20isolated%20white%20background&width=600&height=600&seq=bl-solo-idr-007-v4&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20long%20reach%20extended%20shaft%20cordless%20impact%20driver%20reach%20tight%20spaces%20black%20orange%20angle%20view%20isolated%20white%20background&width=600&height=600&seq=bl-solo-idr-007-v5&orientation=squarish',
    ],
    accessories: [
      { nameKey: 'brushless_accessory_battery', descKey: 'brushless_accessory_battery_desc', name: '20V 4Ah 锂电池', desc: '原装20V 4Ah高容量锂电池，长效续航，过充保护，快充兼容', image: 'https://readdy.ai/api/search-image?query=20V%204Ah%20battery%20long%20reach%20extended%20shaft%20impact%20driver%20cordless%20tool%20black%20orange%20label%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr007-1&orientation=squarish' },
      { nameKey: 'brushless_accessory_charger', descKey: 'brushless_accessory_charger_desc', name: '20V快速充电器', desc: '四段式LED充电状态指示，约60分钟充满4Ah电池，智能过充保护', image: 'https://readdy.ai/api/search-image?query=20V%20fast%20charger%20long%20reach%20impact%20driver%20battery%20LED%20indicator%20compact%20wall%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr007-2&orientation=squarish' },
      { nameKey: 'brushless_accessory_drill_bits', descKey: 'brushless_accessory_drill_bits_desc', name: '21件HSS钻头套装', desc: '21件高速钢HSS麻花钻头套装，含多种规格，配塑料收纳盒', image: 'https://readdy.ai/api/search-image?query=long%20reach%20screwdriver%20bit%20extension%20set%20150mm%20300mm%20hex%20shank%20S2%20steel%20impact%20driver%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr007-3&orientation=squarish' },
      { nameKey: 'brushless_accessory_case', descKey: 'brushless_accessory_case_desc', name: 'EVA成型工具箱', desc: '黑色EVA成型工具箱，泡棉精密切割，快扣锁扣，专业运输防护', image: 'https://readdy.ai/api/search-image?query=long%20reach%20impact%20driver%20elongated%20tool%20case%20hard%20shell%20foam%20custom%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr007-4&orientation=squarish' },
      { nameKey: 'brushless_accessory_belt_clip', descKey: 'brushless_accessory_belt_clip_desc', name: '磁性腰带挂钩', desc: '重型磁性腰带挂钩，快速拆装，方便携带作业', image: 'https://readdy.ai/api/search-image?query=long%20reach%20impact%20driver%20heavy%20belt%20hook%20clip%20black%20spring%20steel%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr007-5&orientation=squarish' },
      { nameKey: 'brushless_accessory_side_handle', descKey: 'brushless_accessory_side_handle_desc', name: '360度旋转辅助手柄', desc: '360度可旋转辅助侧手柄，橡胶防滑握把，提升操控稳定性', image: 'https://readdy.ai/api/search-image?query=flexible%20extension%20drive%20shaft%20600mm%20hex%20shank%20coil%20spring%20impact%20driver%20reach%20deep%20recessed%20screw%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr007-6&orientation=squarish' },
      { nameKey: 'brushless_accessory_depth_gauge', descKey: 'brushless_accessory_depth_gauge_desc', name: '精密深度限位杆', desc: '不锈钢精密深度限位杆，快锁卡环，精准控制钻孔深度', image: 'https://readdy.ai/api/search-image?query=magnetic%20bit%20holder%20telescoping%20extension%201%2F4%20hex%20shank%20adjustable%20length%20lockable%20steel%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr007-7&orientation=squarish' },
      { nameKey: 'brushless_accessory_manual', descKey: 'brushless_accessory_manual_desc', name: '多语言使用说明书', desc: '中英日三语图文操作说明，含安全须知、使用步骤及保养建议', image: 'https://readdy.ai/api/search-image?query=long%20reach%20impact%20driver%20instruction%20manual%20booklet%20operation%20guide%20multilingual%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr007-8&orientation=squarish' },
    ],
  },
  'idr-008': {
    mainImages: [
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20smart%20digital%20cordless%20impact%20driver%20LED%20display%20torque%20settings%20black%20orange%20front%20view%20isolated%20white%20background&width=600&height=600&seq=bl-solo-idr-008-v1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20smart%20digital%20cordless%20impact%20driver%20LED%20display%20torque%20settings%20black%20orange%20side%20view%20isolated%20white%20background&width=600&height=600&seq=bl-solo-idr-008-v2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20smart%20digital%20cordless%20impact%20driver%20LED%20display%20torque%20settings%20black%20orange%20top%20view%20isolated%20white%20background&width=600&height=600&seq=bl-solo-idr-008-v3&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20smart%20digital%20cordless%20impact%20driver%20LED%20display%20torque%20settings%20black%20orange%20back%20view%20isolated%20white%20background&width=600&height=600&seq=bl-solo-idr-008-v4&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20smart%20digital%20cordless%20impact%20driver%20LED%20display%20torque%20settings%20black%20orange%20close%20up%20view%20isolated%20white%20background&width=600&height=600&seq=bl-solo-idr-008-v5&orientation=squarish',
    ],
    accessories: [
      { nameKey: 'brushless_accessory_battery', descKey: 'brushless_accessory_battery_desc', name: '20V 4Ah 锂电池', desc: '原装20V 4Ah高容量锂电池，长效续航，过充保护，快充兼容', image: 'https://readdy.ai/api/search-image?query=20V%204Ah%20smart%20battery%20smart%20digital%20impact%20driver%20LED%20power%20display%20cordless%20tool%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr008-1&orientation=squarish' },
      { nameKey: 'brushless_accessory_charger', descKey: 'brushless_accessory_charger_desc', name: '20V快速充电器', desc: '四段式LED充电状态指示，约60分钟充满4Ah电池，智能过充保护', image: 'https://readdy.ai/api/search-image?query=20V%20smart%20charger%20digital%20impact%20driver%20battery%20LCD%20charge%20display%20overcharge%20protection%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr008-2&orientation=squarish' },
      { nameKey: 'brushless_accessory_drill_bits', descKey: 'brushless_accessory_drill_bits_desc', name: '21件HSS钻头套装', desc: '21件高速钢HSS麻花钻头套装，含多种规格，配塑料收纳盒', image: 'https://readdy.ai/api/search-image?query=smart%20torque%20bit%20set%2030-piece%20color%20coded%20hex%20shank%20S2%20steel%20precision%20tips%20impact%20driver%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr008-3&orientation=squarish' },
      { nameKey: 'brushless_accessory_case', descKey: 'brushless_accessory_case_desc', name: 'EVA成型工具箱', desc: '黑色EVA成型工具箱，泡棉精密切割，快扣锁扣，专业运输防护', image: 'https://readdy.ai/api/search-image?query=digital%20impact%20driver%20protective%20carrying%20case%20hard%20shell%20foam%20padded%20black%20orange%20trim%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr008-4&orientation=squarish' },
      { nameKey: 'brushless_accessory_belt_clip', descKey: 'brushless_accessory_belt_clip_desc', name: '磁性腰带挂钩', desc: '重型磁性腰带挂钩，快速拆装，方便携带作业', image: 'https://readdy.ai/api/search-image?query=smart%20digital%20impact%20driver%20belt%20clip%20hook%20black%20steel%20quick%20detach%20spring%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr008-5&orientation=squarish' },
      { nameKey: 'brushless_accessory_side_handle', descKey: 'brushless_accessory_side_handle_desc', name: '360度旋转辅助手柄', desc: '360度可旋转辅助侧手柄，橡胶防滑握把，提升操控稳定性', image: 'https://readdy.ai/api/search-image?query=USB%20charging%20cable%20connector%20for%20smart%20digital%20impact%20driver%20battery%20management%20system%20port%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr008-6&orientation=squarish' },
      { nameKey: 'brushless_accessory_depth_gauge', descKey: 'brushless_accessory_depth_gauge_desc', name: '精密深度限位杆', desc: '不锈钢精密深度限位杆，快锁卡环，精准控制钻孔深度', image: 'https://readdy.ai/api/search-image?query=quick%20release%20magnetic%20bit%20holder%201%2F4%20hex%20shank%20screw%20counter%20attachment%20impact%20driver%20digital%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr008-7&orientation=squarish' },
      { nameKey: 'brushless_accessory_manual', descKey: 'brushless_accessory_manual_desc', name: '多语言使用说明书', desc: '中英日三语图文操作说明，含安全须知、使用步骤及保养建议', image: 'https://readdy.ai/api/search-image?query=smart%20digital%20impact%20driver%20user%20manual%20technical%20spec%20booklet%20color%20print%20multilingual%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr008-8&orientation=squarish' },
    ],
  },
  'idr-009': {
    mainImages: [
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20quiet%20low%20noise%20cordless%20impact%20driver%20noise%20reduction%20housing%20black%20orange%20front%20view%20isolated%20white%20background%20photography&width=600&height=600&seq=bl-solo-idr-009-v1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20quiet%20low%20noise%20cordless%20impact%20driver%20noise%20reduction%20housing%20black%20orange%20side%20view%20isolated%20white%20background%20photography&width=600&height=600&seq=bl-solo-idr-009-v2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20quiet%20low%20noise%20cordless%20impact%20driver%20noise%20reduction%20housing%20black%20orange%20top%20view%20isolated%20white%20background%20photography&width=600&height=600&seq=bl-solo-idr-009-v3&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20quiet%20low%20noise%20cordless%20impact%20driver%20noise%20reduction%20housing%20black%20orange%20back%20view%20isolated%20white%20background%20photography&width=600&height=600&seq=bl-solo-idr-009-v4&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20quiet%20low%20noise%20cordless%20impact%20driver%20noise%20reduction%20housing%20black%20orange%20angle%20view%20isolated%20white%20background%20photography&width=600&height=600&seq=bl-solo-idr-009-v5&orientation=squarish',
    ],
    accessories: [
      { nameKey: 'brushless_accessory_battery', descKey: 'brushless_accessory_battery_desc', name: '20V 4Ah 锂电池', desc: '原装20V 4Ah高容量锂电池，长效续航，过充保护，快充兼容', image: 'https://readdy.ai/api/search-image?query=20V%204Ah%20battery%20quiet%20low%20noise%20impact%20driver%20cordless%20power%20tool%20black%20label%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr009-1&orientation=squarish' },
      { nameKey: 'brushless_accessory_charger', descKey: 'brushless_accessory_charger_desc', name: '20V快速充电器', desc: '四段式LED充电状态指示，约60分钟充满4Ah电池，智能过充保护', image: 'https://readdy.ai/api/search-image?query=20V%20silent%20charge%20charger%20quiet%20impact%20driver%20battery%20LED%20status%20black%20compact%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr009-2&orientation=squarish' },
      { nameKey: 'brushless_accessory_drill_bits', descKey: 'brushless_accessory_drill_bits_desc', name: '21件HSS钻头套装', desc: '21件高速钢HSS麻花钻头套装，含多种规格，配塑料收纳盒', image: 'https://readdy.ai/api/search-image?query=anti-vibration%20dampened%20bit%20set%2025-piece%20hex%20shank%20rubber%20sleeve%20grip%20quiet%20screwdriving%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr009-3&orientation=squarish' },
      { nameKey: 'brushless_accessory_case', descKey: 'brushless_accessory_case_desc', name: 'EVA成型工具箱', desc: '黑色EVA成型工具箱，泡棉精密切割，快扣锁扣，专业运输防护', image: 'https://readdy.ai/api/search-image?query=quiet%20impact%20driver%20padded%20tool%20case%20soft%20EVA%20foam%20interior%20sound%20dampening%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr009-4&orientation=squarish' },
      { nameKey: 'brushless_accessory_belt_clip', descKey: 'brushless_accessory_belt_clip_desc', name: '磁性腰带挂钩', desc: '重型磁性腰带挂钩，快速拆装，方便携带作业', image: 'https://readdy.ai/api/search-image?query=rubber%20coated%20belt%20clip%20hook%20quiet%20impact%20driver%20black%20anti-rattle%20spring%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr009-5&orientation=squarish' },
      { nameKey: 'brushless_accessory_side_handle', descKey: 'brushless_accessory_side_handle_desc', name: '360度旋转辅助手柄', desc: '360度可旋转辅助侧手柄，橡胶防滑握把，提升操控稳定性', image: 'https://readdy.ai/api/search-image?query=noise%20reduction%20sleeve%20housing%20cover%20quiet%20impact%20driver%20rubber%20damping%20material%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr009-6&orientation=squarish' },
      { nameKey: 'brushless_accessory_depth_gauge', descKey: 'brushless_accessory_depth_gauge_desc', name: '精密深度限位杆', desc: '不锈钢精密深度限位杆，快锁卡环，精准控制钻孔深度', image: 'https://readdy.ai/api/search-image?query=soft%20grip%20magnetic%20bit%20holder%201%2F4%20hex%20quiet%20operation%20impact%20driver%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr009-7&orientation=squarish' },
      { nameKey: 'brushless_accessory_manual', descKey: 'brushless_accessory_manual_desc', name: '多语言使用说明书', desc: '中英日三语图文操作说明，含安全须知、使用步骤及保养建议', image: 'https://readdy.ai/api/search-image?query=quiet%20low%20noise%20impact%20driver%20manual%20booklet%20operation%20guide%20multilingual%20color%20print%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr009-8&orientation=squarish' },
    ],
  },
  'idr-010': {
    mainImages: [
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20pro%20grade%20cordless%20impact%20driver%20premium%20features%20ergonomic%20design%20black%20orange%20front%20view%20isolated%20white%20background&width=600&height=600&seq=bl-solo-idr-010-v1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20pro%20grade%20cordless%20impact%20driver%20premium%20features%20ergonomic%20design%20black%20orange%20side%20view%20isolated%20white%20background&width=600&height=600&seq=bl-solo-idr-010-v2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20pro%20grade%20cordless%20impact%20driver%20premium%20features%20ergonomic%20design%20black%20orange%20top%20view%20isolated%20white%20background&width=600&height=600&seq=bl-solo-idr-010-v3&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20pro%20grade%20cordless%20impact%20driver%20premium%20features%20ergonomic%20design%20black%20orange%20back%20view%20isolated%20white%20background&width=600&height=600&seq=bl-solo-idr-010-v4&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20pro%20grade%20cordless%20impact%20driver%20premium%20features%20ergonomic%20design%20black%20orange%20detail%20view%20isolated%20white%20background&width=600&height=600&seq=bl-solo-idr-010-v5&orientation=squarish',
    ],
    accessories: [
      { nameKey: 'brushless_accessory_battery', descKey: 'brushless_accessory_battery_desc', name: '20V 4Ah 锂电池', desc: '原装20V 4Ah高容量锂电池，长效续航，过充保护，快充兼容', image: 'https://readdy.ai/api/search-image?query=20V%205Ah%20premium%20battery%20pro%20grade%20impact%20driver%20high%20performance%20cordless%20tool%20black%20gold%20label%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr010-1&orientation=squarish' },
      { nameKey: 'brushless_accessory_charger', descKey: 'brushless_accessory_charger_desc', name: '20V快速充电器', desc: '四段式LED充电状态指示，约60分钟充满4Ah电池，智能过充保护', image: 'https://readdy.ai/api/search-image?query=20V%20professional%20rapid%20charger%20pro%20grade%20impact%20driver%204-LED%20bar%20charge%20status%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr010-2&orientation=squarish' },
      { nameKey: 'brushless_accessory_drill_bits', descKey: 'brushless_accessory_drill_bits_desc', name: '21件HSS钻头套装', desc: '21件高速钢HSS麻花钻头套装，含多种规格，配塑料收纳盒', image: 'https://readdy.ai/api/search-image?query=professional%20grade%20impact%20bit%20set%2060-piece%20titanium%20S2%20steel%20hex%20shank%20philips%20torx%20pozidriv%20hex%20star%20drawer%20case%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr010-3&orientation=squarish' },
      { nameKey: 'brushless_accessory_case', descKey: 'brushless_accessory_case_desc', name: 'EVA成型工具箱', desc: '黑色EVA成型工具箱，泡棉精密切割，快扣锁扣，专业运输防护', image: 'https://readdy.ai/api/search-image?query=pro%20grade%20impact%20driver%20premium%20Tstak%20case%20modular%20stackable%20black%20foam%20insert%20orange%20latches%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr010-4&orientation=squarish' },
      { nameKey: 'brushless_accessory_belt_clip', descKey: 'brushless_accessory_belt_clip_desc', name: '磁性腰带挂钩', desc: '重型磁性腰带挂钩，快速拆装，方便携带作业', image: 'https://readdy.ai/api/search-image?query=professional%20belt%20clip%20hook%20pro%20impact%20driver%20forged%20steel%20wide%20spring%20strong%20grip%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr010-5&orientation=squarish' },
      { nameKey: 'brushless_accessory_side_handle', descKey: 'brushless_accessory_side_handle_desc', name: '360度旋转辅助手柄', desc: '360度可旋转辅助侧手柄，橡胶防滑握把，提升操控稳定性', image: 'https://readdy.ai/api/search-image?query=pro%20rubber%20over-mold%20grip%20sleeve%20pro%20impact%20driver%20ergonomic%20comfort%20anti-slip%20soft%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr010-6&orientation=squarish' },
      { nameKey: 'brushless_accessory_depth_gauge', descKey: 'brushless_accessory_depth_gauge_desc', name: '精密深度限位杆', desc: '不锈钢精密深度限位杆，快锁卡环，精准控制钻孔深度', image: 'https://readdy.ai/api/search-image?query=professional%20quick%20change%20bit%20holder%201%2F4%20hex%20shank%20screw%20lock%20magnetic%20tip%20pro%20impact%20driver%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr010-7&orientation=squarish' },
      { nameKey: 'brushless_accessory_manual', descKey: 'brushless_accessory_manual_desc', name: '多语言使用说明书', desc: '中英日三语图文操作说明，含安全须知、使用步骤及保养建议', image: 'https://readdy.ai/api/search-image?query=pro%20grade%20impact%20driver%20premium%20user%20manual%20full%20color%20technical%20diagrams%20multilingual%20safety%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-idr010-8&orientation=squarish' },
    ],
  },
  'ag-001': {featureCount: 4,     //S0M-DW01-100
    mainImages: [
     '/img/CP/wshua/jmj/S0M-DW01-100/1300-S0M-DW01-100-01.jpg',
     '/img/CP/wshua/jmj/S0M-DW01-100/1300-S0M-DW01-100-02.jpg',
     '/img/CP/wshua/jmj/S0M-DW01-100/1300-S0M-DW01-100-03.jpg',
     '/img/CP/wshua/jmj/S0M-DW01-100/1300-S0M-DW01-100-04.jpg',
     '/img/CP/wshua/jmj/S0M-DW01-100/1300-S0M-DW01-100-05.jpg',
     '/img/CP/wshua/jmj/S0M-DW01-100/1300-S0M-DW01-100-06.jpg',
    ],
    accessories: [
      //{ nameKey: 'A', descKey: 'B', image: '/img/public/dc/20v2a.jpg' },
      { nameKey: 'accessory_1_name', descKey: 'accessory_1_desc',name: 'Battery Pack', desc: '20V2.0Ah', image: '/img/public/dc/20v2a.jpg' },
      { nameKey: 'accessory_2_name', descKey: 'accessory_2_desc',name: 'Side Handle', desc: 'An essential accessory for safety and precision, providing steady auxiliary support for lighter, more accurate angle grinder operation.', image: '/img/CP/wshua/jmj/S0M-DW01-100/1300-S0M-DW01-100-07.jpg' },
    ],
  },
  'ag-002': {
    mainImages: [
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20125mm%20angle%20grinder%20medium%20disc%20compact%20design%20black%20orange%20front%20view%20isolated%20white%20background%20product%20photography&width=600&height=600&seq=bl-solo-ag-002-v1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20125mm%20angle%20grinder%20medium%20disc%20compact%20design%20black%20orange%20side%20view%20isolated%20white%20background%20product%20photography&width=600&height=600&seq=bl-solo-ag-002-v2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20125mm%20angle%20grinder%20medium%20disc%20compact%20design%20black%20orange%20top%20view%20isolated%20white%20background%20product%20photography&width=600&height=600&seq=bl-solo-ag-002-v3&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20125mm%20angle%20grinder%20medium%20disc%20compact%20design%20black%20orange%20back%20view%20isolated%20white%20background%20product%20photography&width=600&height=600&seq=bl-solo-ag-002-v4&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20125mm%20angle%20grinder%20medium%20disc%20compact%20design%20black%20orange%20close%20up%20view%20isolated%20white%20background%20product%20photography&width=600&height=600&seq=bl-solo-ag-002-v5&orientation=squarish',
    ],
    accessories: [
      { nameKey: 'brushless_accessory_battery', descKey: 'brushless_accessory_battery_desc', name: '20V 4Ah 锂电池', desc: '原装20V 4Ah高容量锂电池，长效续航，过充保护，快充兼容', image: 'https://readdy.ai/api/search-image?query=20V%204Ah%20battery%20125mm%20angle%20grinder%20medium%20disc%20cordless%20power%20tool%20black%20label%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag002-1&orientation=squarish' },
      { nameKey: 'brushless_accessory_charger', descKey: 'brushless_accessory_charger_desc', name: '20V快速充电器', desc: '四段式LED充电状态指示，约60分钟充满4Ah电池，智能过充保护', image: 'https://readdy.ai/api/search-image?query=20V%20fast%20charger%20125mm%20angle%20grinder%20battery%20LED%20indicator%20black%20compact%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag002-2&orientation=squarish' },
      { nameKey: 'brushless_accessory_drill_bits', descKey: 'brushless_accessory_drill_bits_desc', name: '21件HSS钻头套装', desc: '21件高速钢HSS麻花钻头套装，含多种规格，配塑料收纳盒', image: 'https://readdy.ai/api/search-image?query=125mm%20flap%20disc%20grinding%20disc%20set%208-piece%20zirconia%20alumina%2040%2080%20120%20grit%20metal%20wood%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag002-3&orientation=squarish' },
      { nameKey: 'brushless_accessory_case', descKey: 'brushless_accessory_case_desc', name: 'EVA成型工具箱', desc: '黑色EVA成型工具箱，泡棉精密切割，快扣锁扣，专业运输防护', image: 'https://readdy.ai/api/search-image?query=125mm%20angle%20grinder%20tool%20case%20hard%20plastic%20foam%20padded%20black%20orange%20latch%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag002-4&orientation=squarish' },
      { nameKey: 'brushless_accessory_side_handle', descKey: 'brushless_accessory_side_handle_desc', name: '360度旋转辅助手柄', desc: '360度可旋转辅助侧手柄，橡胶防滑握把，提升操控稳定性', image: 'https://readdy.ai/api/search-image?query=125mm%20angle%20grinder%20side%20auxiliary%20handle%20rubber%20grip%20anti-vibration%20adjustable%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag002-5&orientation=squarish' },
      { nameKey: 'brushless_accessory_belt_clip', descKey: 'brushless_accessory_belt_clip_desc', name: '磁性腰带挂钩', desc: '重型磁性腰带挂钩，快速拆装，方便携带作业', image: 'https://readdy.ai/api/search-image?query=125mm%20diamond%20cutting%20disc%20set%20tile%20ceramic%20stone%20concrete%203-piece%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag002-6&orientation=squarish' },
      { nameKey: 'brushless_accessory_depth_gauge', descKey: 'brushless_accessory_depth_gauge_desc', name: '精密深度限位杆', desc: '不锈钢精密深度限位杆，快锁卡环，精准控制钻孔深度', image: 'https://readdy.ai/api/search-image?query=125mm%20backing%20pad%20velcro%20sanding%20disc%20holder%20rubber%20angle%20grinder%20polishing%20attachment%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag002-7&orientation=squarish' },
      { nameKey: 'brushless_accessory_manual', descKey: 'brushless_accessory_manual_desc', name: '多语言使用说明书', desc: '中英日三语图文操作说明，含安全须知、使用步骤及保养建议', image: 'https://readdy.ai/api/search-image?query=125mm%20angle%20grinder%20user%20instruction%20manual%20booklet%20safety%20color%20print%20multilingual%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag002-8&orientation=squarish' },
    ],
  },
  'ag-003': {
    mainImages: [
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20150mm%20large%20disc%20angle%20grinder%20heavy%20cutting%20black%20orange%20front%20view%20isolated%20white%20background%20industrial%20photography&width=600&height=600&seq=bl-solo-ag-003-v1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20150mm%20large%20disc%20angle%20grinder%20heavy%20cutting%20black%20orange%20side%20view%20isolated%20white%20background%20industrial%20photography&width=600&height=600&seq=bl-solo-ag-003-v2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20150mm%20large%20disc%20angle%20grinder%20heavy%20cutting%20black%20orange%20top%20view%20isolated%20white%20background%20industrial%20photography&width=600&height=600&seq=bl-solo-ag-003-v3&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20150mm%20large%20disc%20angle%20grinder%20heavy%20cutting%20black%20orange%20back%20view%20isolated%20white%20background%20industrial%20photography&width=600&height=600&seq=bl-solo-ag-003-v4&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20150mm%20large%20disc%20angle%20grinder%20heavy%20cutting%20black%20orange%20angle%20view%20isolated%20white%20background%20industrial%20photography&width=600&height=600&seq=bl-solo-ag-003-v5&orientation=squarish',
    ],
    accessories: [
      { nameKey: 'brushless_accessory_battery', descKey: 'brushless_accessory_battery_desc', name: '20V 4Ah 锂电池', desc: '原装20V 4Ah高容量锂电池，长效续航，过充保护，快充兼容', image: 'https://readdy.ai/api/search-image?query=20V%205Ah%20battery%20150mm%20large%20disc%20angle%20grinder%20heavy%20cutting%20cordless%20tool%20black%20label%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag003-1&orientation=squarish' },
      { nameKey: 'brushless_accessory_charger', descKey: 'brushless_accessory_charger_desc', name: '20V快速充电器', desc: '四段式LED充电状态指示，约60分钟充满4Ah电池，智能过充保护', image: 'https://readdy.ai/api/search-image?query=20V%20high%20power%20charger%20150mm%20angle%20grinder%20battery%20fast%20charge%204-LED%20bar%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag003-2&orientation=squarish' },
      { nameKey: 'brushless_accessory_drill_bits', descKey: 'brushless_accessory_drill_bits_desc', name: '21件HSS钻头套装', desc: '21件高速钢HSS麻花钻头套装，含多种规格，配塑料收纳盒', image: 'https://readdy.ai/api/search-image?query=150mm%20grinding%20disc%20set%206-piece%20aluminium%20oxide%20heavy%20duty%20metal%20grinding%2024%2040%2060%20grit%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag003-3&orientation=squarish' },
      { nameKey: 'brushless_accessory_case', descKey: 'brushless_accessory_case_desc', name: 'EVA成型工具箱', desc: '黑色EVA成型工具箱，泡棉精密切割，快扣锁扣，专业运输防护', image: 'https://readdy.ai/api/search-image?query=150mm%20large%20angle%20grinder%20tool%20case%20reinforced%20hard%20shell%20foam%20padded%20black%20robust%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag003-4&orientation=squarish' },
      { nameKey: 'brushless_accessory_side_handle', descKey: 'brushless_accessory_side_handle_desc', name: '360度旋转辅助手柄', desc: '360度可旋转辅助侧手柄，橡胶防滑握把，提升操控稳定性', image: 'https://readdy.ai/api/search-image?query=150mm%20angle%20grinder%20heavy%20side%20handle%20D-grip%20anti-vibration%20rubber%20coated%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag003-5&orientation=squarish' },
      { nameKey: 'brushless_accessory_belt_clip', descKey: 'brushless_accessory_belt_clip_desc', name: '磁性腰带挂钩', desc: '重型磁性腰带挂钩，快速拆装，方便携带作业', image: 'https://readdy.ai/api/search-image?query=150mm%20diamond%20cutting%20wheel%20set%20stone%20concrete%20tile%203-piece%20wet%20dry%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag003-6&orientation=squarish' },
      { nameKey: 'brushless_accessory_depth_gauge', descKey: 'brushless_accessory_depth_gauge_desc', name: '精密深度限位杆', desc: '不锈钢精密深度限位杆，快锁卡环，精准控制钻孔深度', image: 'https://readdy.ai/api/search-image?query=150mm%20angle%20grinder%20guard%20wheel%20cover%20adjustable%20metal%20protection%20shield%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag003-7&orientation=squarish' },
      { nameKey: 'brushless_accessory_manual', descKey: 'brushless_accessory_manual_desc', name: '多语言使用说明书', desc: '中英日三语图文操作说明，含安全须知、使用步骤及保养建议', image: 'https://readdy.ai/api/search-image?query=150mm%20heavy%20duty%20angle%20grinder%20safety%20manual%20booklet%20multilingual%20color%20diagram%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag003-8&orientation=squarish' },
    ],
  },
  'ag-004': {
    mainImages: [
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20variable%20speed%20angle%20grinder%20dial%20control%20adjustable%20RPM%20black%20orange%20front%20view%20isolated%20white%20background&width=600&height=600&seq=bl-solo-ag-004-v1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20variable%20speed%20angle%20grinder%20dial%20control%20adjustable%20RPM%20black%20orange%20side%20view%20isolated%20white%20background&width=600&height=600&seq=bl-solo-ag-004-v2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20variable%20speed%20angle%20grinder%20dial%20control%20adjustable%20RPM%20black%20orange%20top%20view%20isolated%20white%20background&width=600&height=600&seq=bl-solo-ag-004-v3&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20variable%20speed%20angle%20grinder%20dial%20control%20adjustable%20RPM%20black%20orange%20back%20view%20isolated%20white%20background&width=600&height=600&seq=bl-solo-ag-004-v4&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20variable%20speed%20angle%20grinder%20dial%20control%20adjustable%20RPM%20black%20orange%20detail%20view%20isolated%20white%20background&width=600&height=600&seq=bl-solo-ag-004-v5&orientation=squarish',
    ],
    accessories: [
      { nameKey: 'brushless_accessory_battery', descKey: 'brushless_accessory_battery_desc', name: '20V 4Ah 锂电池', desc: '原装20V 4Ah高容量锂电池，长效续航，过充保护，快充兼容', image: 'https://readdy.ai/api/search-image?query=20V%204Ah%20battery%20variable%20speed%20angle%20grinder%20dial%20control%20cordless%20tool%20black%20label%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag004-1&orientation=squarish' },
      { nameKey: 'brushless_accessory_charger', descKey: 'brushless_accessory_charger_desc', name: '20V快速充电器', desc: '四段式LED充电状态指示，约60分钟充满4Ah电池，智能过充保护', image: 'https://readdy.ai/api/search-image?query=20V%20fast%20charger%20variable%20speed%20angle%20grinder%20LED%20indicator%20black%20compact%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag004-2&orientation=squarish' },
      { nameKey: 'brushless_accessory_drill_bits', descKey: 'brushless_accessory_drill_bits_desc', name: '21件HSS钻头套装', desc: '21件高速钢HSS麻花钻头套装，含多种规格，配塑料收纳盒', image: 'https://readdy.ai/api/search-image?query=variable%20speed%20grinder%20disc%20set%208-piece%20mixed%20grit%20flap%20disc%20grinding%20wheel%20cutting%20disc%20assorted%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag004-3&orientation=squarish' },
      { nameKey: 'brushless_accessory_case', descKey: 'brushless_accessory_case_desc', name: 'EVA成型工具箱', desc: '黑色EVA成型工具箱，泡棉精密切割，快扣锁扣，专业运输防护', image: 'https://readdy.ai/api/search-image?query=variable%20speed%20angle%20grinder%20case%20hard%20shell%20foam%20insert%20black%20orange%20latch%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag004-4&orientation=squarish' },
      { nameKey: 'brushless_accessory_side_handle', descKey: 'brushless_accessory_side_handle_desc', name: '360度旋转辅助手柄', desc: '360度可旋转辅助侧手柄，橡胶防滑握把，提升操控稳定性', image: 'https://readdy.ai/api/search-image?query=angle%20grinder%20side%20handle%20rubber%20grip%20anti-vibration%20adjustable%20collar%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag004-5&orientation=squarish' },
      { nameKey: 'brushless_accessory_belt_clip', descKey: 'brushless_accessory_belt_clip_desc', name: '磁性腰带挂钩', desc: '重型磁性腰带挂钩，快速拆装，方便携带作业', image: 'https://readdy.ai/api/search-image?query=polishing%20sponge%20pad%20125mm%20backing%20plate%20hook%20loop%20foam%20polisher%20angle%20grinder%20attachment%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag004-6&orientation=squarish' },
      { nameKey: 'brushless_accessory_depth_gauge', descKey: 'brushless_accessory_depth_gauge_desc', name: '精密深度限位杆', desc: '不锈钢精密深度限位杆，快锁卡环，精准控制钻孔深度', image: 'https://readdy.ai/api/search-image?query=wire%20cup%20brush%20100mm%20steel%20wire%20wheel%20rust%20removal%20angle%20grinder%20attachment%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag004-7&orientation=squarish' },
      { nameKey: 'brushless_accessory_manual', descKey: 'brushless_accessory_manual_desc', name: '多语言使用说明书', desc: '中英日三语图文操作说明，含安全须知、使用步骤及保养建议', image: 'https://readdy.ai/api/search-image?query=variable%20speed%20angle%20grinder%20user%20manual%20operation%20guide%20safety%20booklet%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag004-8&orientation=squarish' },
    ],
  },
  'ag-005': {
    mainImages: [
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20paddle%20switch%20angle%20grinder%20safety%20trigger%20anti-restart%20black%20orange%20front%20view%20isolated%20white%20background%20studio&width=600&height=600&seq=bl-solo-ag-005-v1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20paddle%20switch%20angle%20grinder%20safety%20trigger%20anti-restart%20black%20orange%20side%20view%20isolated%20white%20background%20studio&width=600&height=600&seq=bl-solo-ag-005-v2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20paddle%20switch%20angle%20grinder%20safety%20trigger%20anti-restart%20black%20orange%20top%20view%20isolated%20white%20background%20studio&width=600&height=600&seq=bl-solo-ag-005-v3&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20paddle%20switch%20angle%20grinder%20safety%20trigger%20anti-restart%20black%20orange%20back%20view%20isolated%20white%20background%20studio&width=600&height=600&seq=bl-solo-ag-005-v4&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20paddle%20switch%20angle%20grinder%20safety%20trigger%20anti-restart%20black%20orange%20close%20up%20view%20isolated%20white%20background%20studio&width=600&height=600&seq=bl-solo-ag-005-v5&orientation=squarish',
    ],
    accessories: [
      { nameKey: 'brushless_accessory_battery', descKey: 'brushless_accessory_battery_desc', name: '20V 4Ah 锂电池', desc: '原装20V 4Ah高容量锂电池，长效续航，过充保护，快充兼容', image: 'https://readdy.ai/api/search-image?query=20V%204Ah%20battery%20paddle%20switch%20angle%20grinder%20safety%20trigger%20cordless%20tool%20black%20label%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag005-1&orientation=squarish' },
      { nameKey: 'brushless_accessory_charger', descKey: 'brushless_accessory_charger_desc', name: '20V快速充电器', desc: '四段式LED充电状态指示，约60分钟充满4Ah电池，智能过充保护', image: 'https://readdy.ai/api/search-image?query=20V%20fast%20charger%20paddle%20switch%20angle%20grinder%20battery%204-LED%20indicator%20compact%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag005-2&orientation=squarish' },
      { nameKey: 'brushless_accessory_drill_bits', descKey: 'brushless_accessory_drill_bits_desc', name: '21件HSS钻头套装', desc: '21件高速钢HSS麻花钻头套装，含多种规格，配塑料收纳盒', image: 'https://readdy.ai/api/search-image?query=metal%20grinding%20disc%20set%2010-piece%20depressed%20center%20wheel%20100mm%20125mm%20aluminium%20oxide%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag005-3&orientation=squarish' },
      { nameKey: 'brushless_accessory_case', descKey: 'brushless_accessory_case_desc', name: 'EVA成型工具箱', desc: '黑色EVA成型工具箱，泡棉精密切割，快扣锁扣，专业运输防护', image: 'https://readdy.ai/api/search-image?query=paddle%20switch%20angle%20grinder%20hard%20case%20foam%20padded%20black%20orange%20latch%20tool%20storage%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag005-4&orientation=squarish' },
      { nameKey: 'brushless_accessory_side_handle', descKey: 'brushless_accessory_side_handle_desc', name: '360度旋转辅助手柄', desc: '360度可旋转辅助侧手柄，橡胶防滑握把，提升操控稳定性', image: 'https://readdy.ai/api/search-image?query=angle%20grinder%20auxiliary%20side%20handle%20adjustable%20rubber%20coated%20anti-vibration%20steel%20collar%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag005-5&orientation=squarish' },
      { nameKey: 'brushless_accessory_belt_clip', descKey: 'brushless_accessory_belt_clip_desc', name: '磁性腰带挂钩', desc: '重型磁性腰带挂钩，快速拆装，方便携带作业', image: 'https://readdy.ai/api/search-image?query=inox%20stainless%20steel%20thin%20cutting%20disc%205-piece%201mm%20115mm%20angle%20grinder%20metal%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag005-6&orientation=squarish' },
      { nameKey: 'brushless_accessory_depth_gauge', descKey: 'brushless_accessory_depth_gauge_desc', name: '精密深度限位杆', desc: '不锈钢精密深度限位杆，快锁卡环，精准控制钻孔深度', image: 'https://readdy.ai/api/search-image?query=angle%20grinder%20wheel%20flange%20spanner%20wrench%20tool%20steel%20removing%20disc%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag005-7&orientation=squarish' },
      { nameKey: 'brushless_accessory_manual', descKey: 'brushless_accessory_manual_desc', name: '多语言使用说明书', desc: '中英日三语图文操作说明，含安全须知、使用步骤及保养建议', image: 'https://readdy.ai/api/search-image?query=paddle%20switch%20angle%20grinder%20safety%20manual%20booklet%20color%20print%20multilingual%20diagram%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag005-8&orientation=squarish' },
    ],
  },
  'ag-006': {
    mainImages: [
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20slide%20switch%20angle%20grinder%20locking%20switch%20ergonomic%20black%20orange%20front%20view%20isolated%20white%20background%20product%20photography&width=600&height=600&seq=bl-solo-ag-006-v1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20slide%20switch%20angle%20grinder%20locking%20switch%20ergonomic%20black%20orange%20side%20view%20isolated%20white%20background%20product%20photography&width=600&height=600&seq=bl-solo-ag-006-v2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20slide%20switch%20angle%20grinder%20locking%20switch%20ergonomic%20black%20orange%20top%20view%20isolated%20white%20background%20product%20photography&width=600&height=600&seq=bl-solo-ag-006-v3&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20slide%20switch%20angle%20grinder%20locking%20switch%20ergonomic%20black%20orange%20back%20view%20isolated%20white%20background%20product%20photography&width=600&height=600&seq=bl-solo-ag-006-v4&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20slide%20switch%20angle%20grinder%20locking%20switch%20ergonomic%20black%20orange%20angle%20view%20isolated%20white%20background%20product%20photography&width=600&height=600&seq=bl-solo-ag-006-v5&orientation=squarish',
    ],
    accessories: [
      { nameKey: 'brushless_accessory_battery', descKey: 'brushless_accessory_battery_desc', name: '20V 4Ah 锂电池', desc: '原装20V 4Ah高容量锂电池，长效续航，过充保护，快充兼容', image: 'https://readdy.ai/api/search-image?query=20V%204Ah%20battery%20slide%20switch%20angle%20grinder%20locking%20cordless%20tool%20black%20orange%20label%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag006-1&orientation=squarish' },
      { nameKey: 'brushless_accessory_charger', descKey: 'brushless_accessory_charger_desc', name: '20V快速充电器', desc: '四段式LED充电状态指示，约60分钟充满4Ah电池，智能过充保护', image: 'https://readdy.ai/api/search-image?query=20V%20rapid%20charger%20slide%20switch%20angle%20grinder%20battery%20LED%20bar%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag006-2&orientation=squarish' },
      { nameKey: 'brushless_accessory_drill_bits', descKey: 'brushless_accessory_drill_bits_desc', name: '21件HSS钻头套装', desc: '21件高速钢HSS麻花钻头套装，含多种规格，配塑料收纳盒', image: 'https://readdy.ai/api/search-image?query=abrasive%20flap%20disc%20set%208-piece%20125mm%20zirconia%2040%2060%2080%20120%20grit%20angle%20grinder%20metal%20wood%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag006-3&orientation=squarish' },
      { nameKey: 'brushless_accessory_case', descKey: 'brushless_accessory_case_desc', name: 'EVA成型工具箱', desc: '黑色EVA成型工具箱，泡棉精密切割，快扣锁扣，专业运输防护', image: 'https://readdy.ai/api/search-image?query=slide%20switch%20angle%20grinder%20hard%20shell%20tool%20case%20foam%20compartment%20black%20orange%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag006-4&orientation=squarish' },
      { nameKey: 'brushless_accessory_side_handle', descKey: 'brushless_accessory_side_handle_desc', name: '360度旋转辅助手柄', desc: '360度可旋转辅助侧手柄，橡胶防滑握把，提升操控稳定性', image: 'https://readdy.ai/api/search-image?query=angle%20grinder%20side%20handle%20rubber%20overmold%20anti-vibration%20adjustable%20clamp%20ring%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag006-5&orientation=squarish' },
      { nameKey: 'brushless_accessory_belt_clip', descKey: 'brushless_accessory_belt_clip_desc', name: '磁性腰带挂钩', desc: '重型磁性腰带挂钩，快速拆装，方便携带作业', image: 'https://readdy.ai/api/search-image?query=wire%20wheel%20brush%20cup%20100mm%20steel%20knotted%20wire%20rust%20paint%20removal%20angle%20grinder%20attachment%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag006-6&orientation=squarish' },
      { nameKey: 'brushless_accessory_depth_gauge', descKey: 'brushless_accessory_depth_gauge_desc', name: '精密深度限位杆', desc: '不锈钢精密深度限位杆，快锁卡环，精准控制钻孔深度', image: 'https://readdy.ai/api/search-image?query=angle%20grinder%20protective%20face%20shield%20full%20face%20visor%20clear%20polycarbonate%20safety%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag006-7&orientation=squarish' },
      { nameKey: 'brushless_accessory_manual', descKey: 'brushless_accessory_manual_desc', name: '多语言使用说明书', desc: '中英日三语图文操作说明，含安全须知、使用步骤及保养建议', image: 'https://readdy.ai/api/search-image?query=slide%20switch%20angle%20grinder%20instruction%20manual%20booklet%20safety%20guide%20multilingual%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag006-8&orientation=squarish' },
    ],
  },
  'ag-007': {
    mainImages: [
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20brake%20system%20angle%20grinder%20instant%20stop%20safety%20protection%20black%20orange%20front%20view%20isolated%20white%20background&width=600&height=600&seq=bl-solo-ag-007-v1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20brake%20system%20angle%20grinder%20instant%20stop%20safety%20protection%20black%20orange%20side%20view%20isolated%20white%20background&width=600&height=600&seq=bl-solo-ag-007-v2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20brake%20system%20angle%20grinder%20instant%20stop%20safety%20protection%20black%20orange%20top%20view%20isolated%20white%20background&width=600&height=600&seq=bl-solo-ag-007-v3&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20brake%20system%20angle%20grinder%20instant%20stop%20safety%20protection%20black%20orange%20back%20view%20isolated%20white%20background&width=600&height=600&seq=bl-solo-ag-007-v4&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20brake%20system%20angle%20grinder%20instant%20stop%20safety%20protection%20black%20orange%20detail%20view%20isolated%20white%20background&width=600&height=600&seq=bl-solo-ag-007-v5&orientation=squarish',
    ],
    accessories: [
      { nameKey: 'brushless_accessory_battery', descKey: 'brushless_accessory_battery_desc', name: '20V 4Ah 锂电池', desc: '原装20V 4Ah高容量锂电池，长效续航，过充保护，快充兼容', image: 'https://readdy.ai/api/search-image?query=20V%204Ah%20battery%20pack%20brake%20system%20angle%20grinder%20instant%20stop%20safety%20cordless%20power%20tool%20black%20orange%20label%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag007-1&orientation=squarish' },
      { nameKey: 'brushless_accessory_charger', descKey: 'brushless_accessory_charger_desc', name: '20V快速充电器', desc: '四段式LED充电状态指示，约60分钟充满4Ah电池，智能过充保护', image: 'https://readdy.ai/api/search-image?query=20V%20fast%20charger%20brake%20angle%20grinder%20battery%20LED%20charge%20status%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag007-2&orientation=squarish' },
      { nameKey: 'brushless_accessory_drill_bits', descKey: 'brushless_accessory_drill_bits_desc', name: '21件HSS钻头套装', desc: '21件高速钢HSS麻花钻头套装，含多种规格，配塑料收纳盒', image: 'https://readdy.ai/api/search-image?query=brake%20grinder%20disc%20set%208-piece%20aluminium%20oxide%20flap%20disc%2040%2060%2080%20120%20grit%20steel%20metal%20grinding%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag007-3&orientation=squarish' },
      { nameKey: 'brushless_accessory_case', descKey: 'brushless_accessory_case_desc', name: 'EVA成型工具箱', desc: '黑色EVA成型工具箱，泡棉精密切割，快扣锁扣，专业运输防护', image: 'https://readdy.ai/api/search-image?query=brake%20angle%20grinder%20hard%20case%20metal%20frame%20foam%20cutout%20interior%20black%20industrial%20carrying%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag007-4&orientation=squarish' },
      { nameKey: 'brushless_accessory_side_handle', descKey: 'brushless_accessory_side_handle_desc', name: '360度旋转辅助手柄', desc: '360度可旋转辅助侧手柄，橡胶防滑握把，提升操控稳定性', image: 'https://readdy.ai/api/search-image?query=coolant%20tube%20kit%20brake%20angle%20grinder%20annular%20cutter%20liquid%20cooling%20system%20hose%20nozzle%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag007-5&orientation=squarish' },
      { nameKey: 'brushless_accessory_belt_clip', descKey: 'brushless_accessory_belt_clip_desc', name: '磁性腰带挂钩', desc: '重型磁性腰带挂钩，快速拆装，方便携带作业', image: 'https://readdy.ai/api/search-image?query=drift%20pin%20centering%20pin%20set%20brake%20angle%20grinder%20annular%20cutter%20locating%20tools%20steel%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag007-6&orientation=squarish' },
      { nameKey: 'brushless_accessory_depth_gauge', descKey: 'brushless_accessory_depth_gauge_desc', name: '精密深度限位杆', desc: '不锈钢精密深度限位杆，快锁卡环，精准控制钻孔深度', image: 'https://readdy.ai/api/search-image?query=depth%20stop%20attachment%20brake%20angle%20grinder%20precision%20cutting%20depth%20control%20steel%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag007-7&orientation=squarish' },
      { nameKey: 'brushless_accessory_manual', descKey: 'brushless_accessory_manual_desc', name: '多语言使用说明书', desc: '中英日三语图文操作说明，含安全须知、使用步骤及保养建议', image: 'https://readdy.ai/api/search-image?query=brake%20angle%20grinder%20safety%20user%20manual%20booklet%20operation%20guide%20multilingual%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag007-8&orientation=squarish' },
    ],
  },
  'ag-008': {
    mainImages: [
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20cut-off%20wheel%20angle%20grinder%20thin%20cutting%20disc%20tile%20black%20orange%20front%20view%20isolated%20white%20background%20studio%20photography&width=600&height=600&seq=bl-solo-ag-008-v1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20cut-off%20wheel%20angle%20grinder%20thin%20cutting%20disc%20tile%20black%20orange%20side%20view%20isolated%20white%20background%20studio%20photography&width=600&height=600&seq=bl-solo-ag-008-v2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20cut-off%20wheel%20angle%20grinder%20thin%20cutting%20disc%20tile%20black%20orange%20top%20view%20isolated%20white%20background%20studio%20photography&width=600&height=600&seq=bl-solo-ag-008-v3&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20cut-off%20wheel%20angle%20grinder%20thin%20cutting%20disc%20tile%20black%20orange%20back%20view%20isolated%20white%20background%20studio%20photography&width=600&height=600&seq=bl-solo-ag-008-v4&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20cut-off%20wheel%20angle%20grinder%20thin%20cutting%20disc%20tile%20black%20orange%20angle%20view%20isolated%20white%20background%20studio%20photography&width=600&height=600&seq=bl-solo-ag-008-v5&orientation=squarish',
    ],
    accessories: [
      { nameKey: 'brushless_accessory_battery', descKey: 'brushless_accessory_battery_desc', name: '20V 4Ah 锂电池', desc: '原装20V 4Ah高容量锂电池，长效续航，过充保护，快充兼容', image: 'https://readdy.ai/api/search-image?query=20V%204Ah%20battery%20pack%20cut-off%20wheel%20angle%20grinder%20thin%20cutting%20disc%20cordless%20tool%20black%20orange%20label%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag008-1&orientation=squarish' },
      { nameKey: 'brushless_accessory_charger', descKey: 'brushless_accessory_charger_desc', name: '20V快速充电器', desc: '四段式LED充电状态指示，约60分钟充满4Ah电池，智能过充保护', image: 'https://readdy.ai/api/search-image?query=20V%20fast%20charger%20cut-off%20angle%20grinder%20battery%20LED%20indicator%20compact%20wall%20plug%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag008-2&orientation=squarish' },
      { nameKey: 'brushless_accessory_drill_bits', descKey: 'brushless_accessory_drill_bits_desc', name: '21件HSS钻头套装', desc: '21件高速钢HSS麻花钻头套装，含多种规格，配塑料收纳盒', image: 'https://readdy.ai/api/search-image?query=thin%20cut-off%20wheel%20disc%20set%203-piece%20inox%20stainless%20steel%20cutting%20100mm%20125mm%20wet%20dry%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag008-3&orientation=squarish' },
      { nameKey: 'brushless_accessory_case', descKey: 'brushless_accessory_case_desc', name: 'EVA成型工具箱', desc: '黑色EVA成型工具箱，泡棉精密切割，快扣锁扣，专业运输防护', image: 'https://readdy.ai/api/search-image?query=cut-off%20grinder%20tool%20case%20hard%20shell%20foam%20padded%20black%20heavy%20duty%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag008-4&orientation=squarish' },
      { nameKey: 'brushless_accessory_side_handle', descKey: 'brushless_accessory_side_handle_desc', name: '360度旋转辅助手柄', desc: '360度可旋转辅助侧手柄，橡胶防滑握把，提升操控稳定性', image: 'https://readdy.ai/api/search-image?query=angle%20grinder%20cutting%20side%20handle%20rubber%20overmold%20anti-vibration%20steel%20collar%20adjustable%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag008-5&orientation=squarish' },
      { nameKey: 'brushless_accessory_belt_clip', descKey: 'brushless_accessory_belt_clip_desc', name: '磁性腰带挂钩', desc: '重型磁性腰带挂钩，快速拆装，方便携带作业', image: 'https://readdy.ai/api/search-image?query=diamond%20cutting%20disc%20set%203-piece%20tile%20ceramic%20porcelain%20wet%20dry%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag008-6&orientation=squarish' },
      { nameKey: 'brushless_accessory_depth_gauge', descKey: 'brushless_accessory_depth_gauge_desc', name: '精密深度限位杆', desc: '不锈钢精密深度限位杆，快锁卡环，精准控制钻孔深度', image: 'https://readdy.ai/api/search-image?query=angle%20grinder%20cutting%20guide%20fence%20parallel%20attachment%20straight%20line%20cut%20rail%20black%20metal%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag008-7&orientation=squarish' },
      { nameKey: 'brushless_accessory_manual', descKey: 'brushless_accessory_manual_desc', name: '多语言使用说明书', desc: '中英日三语图文操作说明，含安全须知、使用步骤及保养建议', image: 'https://readdy.ai/api/search-image?query=cut-off%20angle%20grinder%20user%20manual%20safety%20booklet%20cutting%20operation%20guide%20multilingual%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag008-8&orientation=squarish' },
    ],
  },
  'ag-009': {
    mainImages: [
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20polishing%20pad%20angle%20grinder%20polisher%20backing%20plate%20black%20orange%20front%20view%20isolated%20white%20background%20photography&width=600&height=600&seq=bl-solo-ag-009-v1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20polishing%20pad%20angle%20grinder%20polisher%20backing%20plate%20black%20orange%20side%20view%20isolated%20white%20background%20photography&width=600&height=600&seq=bl-solo-ag-009-v2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20polishing%20pad%20angle%20grinder%20polisher%20backing%20plate%20black%20orange%20top%20view%20isolated%20white%20background%20photography&width=600&height=600&seq=bl-solo-ag-009-v3&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20polishing%20pad%20angle%20grinder%20polisher%20backing%20plate%20black%20orange%20back%20view%20isolated%20white%20background%20photography&width=600&height=600&seq=bl-solo-ag-009-v4&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20polishing%20pad%20angle%20grinder%20polisher%20backing%20plate%20black%20orange%20detail%20view%20isolated%20white%20background%20photography&width=600&height=600&seq=bl-solo-ag-009-v5&orientation=squarish',
    ],
    accessories: [
      { nameKey: 'brushless_accessory_battery', descKey: 'brushless_accessory_battery_desc', name: '20V 4Ah 锂电池', desc: '原装20V 4Ah高容量锂电池，长效续航，过充保护，快充兼容', image: 'https://readdy.ai/api/search-image?query=20V%204Ah%20battery%20polishing%20angle%20grinder%20backing%20plate%20polisher%20cordless%20tool%20black%20orange%20label%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag009-1&orientation=squarish' },
      { nameKey: 'brushless_accessory_charger', descKey: 'brushless_accessory_charger_desc', name: '20V快速充电器', desc: '四段式LED充电状态指示，约60分钟充满4Ah电池，智能过充保护', image: 'https://readdy.ai/api/search-image?query=20V%20fast%20charger%20polishing%20grinder%20battery%20LED%20status%20black%20compact%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag009-2&orientation=squarish' },
      { nameKey: 'brushless_accessory_drill_bits', descKey: 'brushless_accessory_drill_bits_desc', name: '21件HSS钻头套装', desc: '21件高速钢HSS麻花钻头套装，含多种规格，配塑料收纳盒', image: 'https://readdy.ai/api/search-image?query=polishing%20pad%20set%206-piece%20125mm%20foam%20wool%20microfiber%20backing%20plate%20hook%20loop%20orange%20white%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag009-3&orientation=squarish' },
      { nameKey: 'brushless_accessory_case', descKey: 'brushless_accessory_case_desc', name: 'EVA成型工具箱', desc: '黑色EVA成型工具箱，泡棉精密切割，快扣锁扣，专业运输防护', image: 'https://readdy.ai/api/search-image?query=polishing%20grinder%20tool%20pouch%20bag%20nylon%20zipper%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag009-4&orientation=squarish' },
      { nameKey: 'brushless_accessory_side_handle', descKey: 'brushless_accessory_side_handle_desc', name: '360度旋转辅助手柄', desc: '360度可旋转辅助侧手柄，橡胶防滑握把，提升操控稳定性', image: 'https://readdy.ai/api/search-image?query=angle%20grinder%20polishing%20side%20handle%20soft%20rubber%20grip%20anti-vibration%20low%20speed%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag009-5&orientation=squarish' },
      { nameKey: 'brushless_accessory_belt_clip', descKey: 'brushless_accessory_belt_clip_desc', name: '磁性腰带挂钩', desc: '重型磁性腰带挂钩，快速拆装，方便携带作业', image: 'https://readdy.ai/api/search-image?query=car%20polishing%20compound%20wax%20set%204-piece%20heavy%20cut%20medium%20fine%20finish%20polish%20liquid%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag009-6&orientation=squarish' },
      { nameKey: 'brushless_accessory_depth_gauge', descKey: 'brushless_accessory_depth_gauge_desc', name: '精密深度限位杆', desc: '不锈钢精密深度限位杆，快锁卡环，精准控制钻孔深度', image: 'https://readdy.ai/api/search-image?query=velcro%20backing%20plate%20125mm%205%20inch%20hook%20loop%20pad%20holder%20for%20polishing%20grinder%20M14%20thread%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag009-7&orientation=squarish' },
      { nameKey: 'brushless_accessory_manual', descKey: 'brushless_accessory_manual_desc', name: '多语言使用说明书', desc: '中英日三语图文操作说明，含安全须知、使用步骤及保养建议', image: 'https://readdy.ai/api/search-image?query=polishing%20angle%20grinder%20user%20manual%20booklet%20polishing%20guide%20safety%20color%20print%20multilingual%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag009-8&orientation=squarish' },
    ],
  },
  'ag-010': {
    mainImages: [
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20multi-function%20versatile%20angle%20grinder%20interchangeable%20accessories%20black%20orange%20front%20view%20isolated%20white%20background&width=600&height=600&seq=bl-solo-ag-010-v1&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20multi-function%20versatile%20angle%20grinder%20interchangeable%20accessories%20black%20orange%20side%20view%20isolated%20white%20background&width=600&height=600&seq=bl-solo-ag-010-v2&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20multi-function%20versatile%20angle%20grinder%20interchangeable%20accessories%20black%20orange%20top%20view%20isolated%20white%20background&width=600&height=600&seq=bl-solo-ag-010-v3&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20multi-function%20versatile%20angle%20grinder%20interchangeable%20accessories%20black%20orange%20back%20view%20isolated%20white%20background&width=600&height=600&seq=bl-solo-ag-010-v4&orientation=squarish',
      'https://readdy.ai/api/search-image?query=professional%2020V%20brushless%20cordless%20multi-function%20versatile%20angle%20grinder%20interchangeable%20accessories%20black%20orange%20detail%20view%20isolated%20white%20background&width=600&height=600&seq=bl-solo-ag-010-v5&orientation=squarish',
    ],
    accessories: [
      { nameKey: 'brushless_accessory_battery', descKey: 'brushless_accessory_battery_desc', name: '20V 4Ah 锂电池', desc: '原装20V 4Ah高容量锂电池，长效续航，过充保护，快充兼容', image: 'https://readdy.ai/api/search-image?query=20V%205Ah%20battery%20multi-function%20versatile%20angle%20grinder%20interchangeable%20accessories%20cordless%20tool%20black%20orange%20gold%20label%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag010-1&orientation=squarish' },
      { nameKey: 'brushless_accessory_charger', descKey: 'brushless_accessory_charger_desc', name: '20V快速充电器', desc: '四段式LED充电状态指示，约60分钟充满4Ah电池，智能过充保护', image: 'https://readdy.ai/api/search-image?query=20V%20professional%20rapid%20charger%20multi-function%20angle%20grinder%20battery%204-LED%20bar%20charge%20status%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag010-2&orientation=squarish' },
      { nameKey: 'brushless_accessory_drill_bits', descKey: 'brushless_accessory_drill_bits_desc', name: '21件HSS钻头套装', desc: '21件高速钢HSS麻花钻头套装，含多种规格，配塑料收纳盒', image: 'https://readdy.ai/api/search-image?query=multi-function%20grinder%20accessory%20kit%2012-piece%20flap%20disc%20cutting%20wheel%20wire%20brush%20sanding%20pad%20assorted%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag010-3&orientation=squarish' },
      { nameKey: 'brushless_accessory_case', descKey: 'brushless_accessory_case_desc', name: 'EVA成型工具箱', desc: '黑色EVA成型工具箱，泡棉精密切割，快扣锁扣，专业运输防护', image: 'https://readdy.ai/api/search-image?query=multi-function%20angle%20grinder%20premium%20Tstak%20case%20modular%20stackable%20black%20foam%20insert%20orange%20latches%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag010-4&orientation=squarish' },
      { nameKey: 'brushless_accessory_side_handle', descKey: 'brushless_accessory_side_handle_desc', name: '360度旋转辅助手柄', desc: '360度可旋转辅助侧手柄，橡胶防滑握把，提升操控稳定性', image: 'https://readdy.ai/api/search-image?query=multi-function%20grinder%20side%20handle%20D-grip%20anti-vibration%20rubber%20adjustable%20collar%20heavy%20duty%20black%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag010-5&orientation=squarish' },
      { nameKey: 'brushless_accessory_belt_clip', descKey: 'brushless_accessory_belt_clip_desc', name: '磁性腰带挂钩', desc: '重型磁性腰带挂钩，快速拆装，方便携带作业', image: 'https://readdy.ai/api/search-image?query=universal%20grinder%20hook%20disc%20storage%20organizer%20wall%20rack%2020-slot%20angle%20grinder%20discs%20holder%20metal%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag010-6&orientation=squarish' },
      { nameKey: 'brushless_accessory_depth_gauge', descKey: 'brushless_accessory_depth_gauge_desc', name: '精密深度限位杆', desc: '不锈钢精密深度限位杆，快锁卡环，精准控制钻孔深度', image: 'https://readdy.ai/api/search-image?query=quick%20change%20disc%20system%20adapter%20attachment%20SDS%20angle%20grinder%20fast%20lock%20keyless%20flange%20steel%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag010-7&orientation=squarish' },
      { nameKey: 'brushless_accessory_manual', descKey: 'brushless_accessory_manual_desc', name: '多语言使用说明书', desc: '中英日三语图文操作说明，含安全须知、使用步骤及保养建议', image: 'https://readdy.ai/api/search-image?query=multi-function%20versatile%20angle%20grinder%20user%20manual%20comprehensive%20guide%20color%20print%20multilingual%20safety%20isolated%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-acc-ag010-8&orientation=squarish' },
    ],
  },
};

export const brushlessCategoryAccessories: CategoryAccessoryItem[] = [
  {
    nameKey: 'brushless_accessory_battery',
    descKey: 'brushless_accessory_battery_desc',
    image: 'https://readdy.ai/api/search-image?query=20V%204Ah%20large%20capacity%20lithium%20battery%20pack%20for%20brushless%20cordless%20drill%20high%20power%20long%20runtime%20professional%20isolated%20on%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-cat-acc-1&orientation=squarish',
  },
  {
    nameKey: 'brushless_accessory_charger',
    descKey: 'brushless_accessory_charger_desc',
    image: 'https://readdy.ai/api/search-image?query=smart%204-LED%20indicator%20fast%20battery%20charger%20for%2020V%20brushless%20cordless%20drill%20temperature%20protection%20isolated%20on%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-cat-acc-2&orientation=squarish',
  },
  {
    nameKey: 'brushless_accessory_drill_bits',
    descKey: 'brushless_accessory_drill_bits_desc',
    image: 'https://readdy.ai/api/search-image?query=21-piece%20HSS%20drill%20bit%20and%20screwdriver%20bit%20set%20in%20plastic%20storage%20case%20metallic%20silver%20isolated%20on%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-cat-acc-3&orientation=squarish',
  },
  {
    nameKey: 'brushless_accessory_case',
    descKey: 'brushless_accessory_case_desc',
    image: 'https://readdy.ai/api/search-image?query=EVA%20tool%20carrying%20case%20box%20with%20foam%20compartments%20quick-release%20buckle%20for%20cordless%20drill%20black%20isolated%20on%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-cat-acc-4&orientation=squarish',
  },
  {
    nameKey: 'brushless_accessory_belt_clip',
    descKey: 'brushless_accessory_belt_clip_desc',
    image: 'https://readdy.ai/api/search-image?query=magnetic%20tool%20belt%20clip%20holder%20strong%20magnet%20quick%20release%20for%20cordless%20drill%20black%20isolated%20on%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-cat-acc-5&orientation=squarish',
  },
  {
    nameKey: 'brushless_accessory_side_handle',
    descKey: 'brushless_accessory_side_handle_desc',
    image: 'https://readdy.ai/api/search-image?query=360%20degree%20adjustable%20side%20auxiliary%20handle%20rubber%20grip%20for%20cordless%20drill%20anti-slip%20isolated%20on%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-cat-acc-6&orientation=squarish',
  },
  {
    nameKey: 'brushless_accessory_depth_gauge',
    descKey: 'brushless_accessory_depth_gauge_desc',
    image: 'https://readdy.ai/api/search-image?query=precision%20depth%20gauge%20stop%20rod%20ruler%20for%20drill%20accurate%20marking%20quick-lock%20metallic%20isolated%20on%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-cat-acc-7&orientation=squarish',
  },
  {
    nameKey: 'brushless_accessory_manual',
    descKey: 'brushless_accessory_manual_desc',
    image: 'https://readdy.ai/api/search-image?query=user%20operation%20manual%20instruction%20booklet%20for%20brushless%20power%20tool%20trilingual%20color%20print%20isolated%20on%20pure%20white%20background%20product%20photography&width=300&height=300&seq=bl-cat-acc-8&orientation=squarish',
  },
];
