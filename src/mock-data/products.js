/*
Data scraped:
- Url: https://www.thegioididong.com/dtdd#i:3
- Script:
 
JSON.stringify(
  Array.from(document.querySelectorAll('.homeproduct .item:not(.feature)')).map((item, id) => {
    const name = item.querySelector('h3').textContent;
    const image = item.querySelector('img').src;
    const price = +item.querySelector('.price strong').textContent.replace(/\.|₫/g, '');
    const crossPriceItem = item.querySelector('.price span');
    const crossPrice = crossPriceItem ? +crossPriceItem.textContent.replace(/\.|₫/g, '') : null;

    return {
      id: `product_${id + 1}`,
      name,
      price,
      crossPrice,
      image,
    };
  }),
  null,
  2,
);

- Steps: Access the url, open the console window (Ctrl + Shift + I), copy and paste the script to the console, run then see the result

*/

export default [
  {
    id: 'product_1',
    name: 'Xiaomi Redmi Note 9S',
    price: 5990000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/214924/xiaomi-redmi-note-9s-4gb-green-400x460-400x400.jpg',
  },
  {
    id: 'product_2',
    name: 'Samsung Galaxy A51 (6GB/128GB)',
    price: 7990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/211570/samsung-galaxy-a51-white-1-400x400.jpg',
  },
  {
    id: 'product_3',
    name: 'iPhone 11 64GB',
    price: 21990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-red-400x400.jpg',
  },
  {
    id: 'product_4',
    name: 'OPPO A91',
    price: 6990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/217287/oppo-a91-trang-600x600-400x400.jpg',
  },
  {
    id: 'product_5',
    name: 'Vsmart Joy 3 (3GB/32GB)',
    price: 2690000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/217920/vsmart-joy-3-tim-600x600-400x400.jpg',
  },
  {
    id: 'product_6',
    name: 'Realme C3',
    price: 2990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/218361/realme-c3-do-600x600-400x400.jpg',
  },
  {
    id: 'product_7',
    name: 'Samsung Galaxy Fold',
    price: 50000000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/198158/samsung-galaxy-fold-black-400x400.jpg',
  },
  {
    id: 'product_8',
    name: 'iPhone 11 Pro Max 512GB',
    price: 40990000,
    crossPrice: 43990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/210654/iphone-11-pro-max-512gb-gold-400x400.jpg',
  },
  {
    id: 'product_9',
    name: 'iPhone 11 Pro Max 256GB',
    price: 37990000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/210653/iphone-11-pro-max-256gb-black-400x400.jpg',
  },
  {
    id: 'product_10',
    name: 'Samsung Galaxy Z Flip',
    price: 36000000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/213022/samsung-galaxy-z-flip-den-600x600-400x400.jpg',
  },
  {
    id: 'product_11',
    name: 'iPhone 11 Pro 256GB',
    price: 34990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/210655/iphone-11-pro-256gb-black-400x400.jpg',
  },
  {
    id: 'product_12',
    name: 'iPhone 11 Pro Max 64GB',
    price: 33990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-400x400.jpg',
  },
  {
    id: 'product_13',
    name: 'iPhone Xs Max 256GB',
    price: 33990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/190322/iphone-xs-max-256gb-white-400x400.jpg',
  },
  {
    id: 'product_14',
    name: 'Samsung Galaxy S20 Ultra',
    price: 27990000,
    crossPrice: 29990000,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/217937/samsung-galaxy-s20-ultra-600x600-1-400x400.jpg',
  },
  {
    id: 'product_15',
    name: 'iPhone Xs Max 64GB',
    price: 27990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-400x400.jpg',
  },
  {
    id: 'product_16',
    name: 'iPhone 11 256GB',
    price: 24990000,
    crossPrice: 25990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/210648/iphone-11-256gb-white-400x400.jpg',
  },
  {
    id: 'product_17',
    name: 'iPhone Xs 256GB',
    price: 24990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/190324/iphone-xs-256gb-white-400x400.jpg',
  },
  {
    id: 'product_18',
    name: 'Samsung Galaxy S20+',
    price: 21990000,
    crossPrice: 23990000,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/217936/samsung-galaxy-s20-plus-600x600-fix-400x400.jpg',
  },
  {
    id: 'product_19',
    name: 'OPPO Find X2',
    price: 23990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/198150/oppo-find-x2-blue-600x600-400x400.jpg',
  },
  {
    id: 'product_20',
    name: 'iPhone 11 128GB',
    price: 23990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/210644/iphone-11-128gb-green-400x400.jpg',
  },
  {
    id: 'product_21',
    name: 'Samsung Galaxy S20',
    price: 19490000,
    crossPrice: 21490000,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/217935/samsung-galaxy-s20-600x600-hong-400x400.jpg',
  },
  {
    id: 'product_22',
    name: 'iPhone Xs 64GB',
    price: 20990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/190323/iphone-xs-gold-400x400.jpg',
  },
  {
    id: 'product_23',
    name: 'Samsung Galaxy S10+',
    price: 19990000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/179530/samsung-galaxy-s10-plus-white-400x400.jpg',
  },
  {
    id: 'product_24',
    name: 'iPhone 8 Plus 64GB',
    price: 13990000,
    crossPrice: 15990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-hh-600x600-400x400.jpg',
  },
  {
    id: 'product_25',
    name: 'BlackBerry KEY2',
    price: 14990000,
    crossPrice: 15990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/171028/blackberry-key2-4-400x400.jpg',
  },
  {
    id: 'product_26',
    name: 'Xiaomi Mi Note 10 Pro',
    price: 13490000,
    crossPrice: 14990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/213590/xiaomi-mi-note-10-pro-black-400x400.jpg',
  },
  {
    id: 'product_27',
    name: 'Samsung Galaxy A80',
    price: 14990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/201228/samsung-galaxy-a80-gold-400x400.jpg',
  },
  {
    id: 'product_28',
    name: 'OPPO Reno2',
    price: 12490000,
    crossPrice: 14990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/209798/oppo-reno-2-pink-400x400.jpg',
  },
  {
    id: 'product_29',
    name: 'Samsung Galaxy Note 10 Lite',
    price: 13990000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/214909/samsung-galaxy-note-10-lite-thumb-400x400.jpg',
  },
  {
    id: 'product_30',
    name: 'iPhone 7 Plus 32GB',
    price: 9990000,
    crossPrice: 12990000,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-32gb-gold-600x600-400x400.jpg',
  },
  {
    id: 'product_31',
    name: 'Samsung Galaxy A71',
    price: 10490000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/210246/samsung-galaxy-a71-blue-600x600-1-400x400.jpg',
  },
  {
    id: 'product_32',
    name: 'iPhone 7 32GB',
    price: 9990000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_33',
    name: 'Vivo V17 Pro',
    price: 8990000,
    crossPrice: 9990000,
    image: '',
  },
  {
    id: 'product_34',
    name: 'BlackBerry KEY2 LE',
    price: 8990000,
    crossPrice: 9990000,
    image: '',
  },
  {
    id: 'product_35',
    name: 'Samsung Galaxy A70',
    price: 9290000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_36',
    name: 'Huawei Nova 5T',
    price: 8490000,
    crossPrice: 8990000,
    image: '',
  },
  {
    id: 'product_37',
    name: 'Realme 6 Pro',
    price: 7990000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_38',
    name: 'BlackBerry KEYone 4GB/64GB',
    price: 6990000,
    crossPrice: 7990000,
    image: '',
  },
  {
    id: 'product_39',
    name: 'Xiaomi Mi 9 SE',
    price: 7490000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_40',
    name: 'Samsung Galaxy A50 128GB',
    price: 7290000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_41',
    name: 'OPPO A9 (2020)',
    price: 5990000,
    crossPrice: 6990000,
    image: '',
  },
  {
    id: 'product_42',
    name: 'Samsung Galaxy A50s',
    price: 6990000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_43',
    name: 'Realme 5 Pro (8GB/128GB)',
    price: 5990000,
    crossPrice: 6990000,
    image: '',
  },
  {
    id: 'product_44',
    name: 'Huawei Nova 7i (Không có Google)',
    price: 6990000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_45',
    name: 'Vivo S1 Pro',
    price: 6490000,
    crossPrice: 6990000,
    image: '',
  },
  {
    id: 'product_46',
    name: 'BlackBerry KEYone 3GB/32GB',
    price: 5990000,
    crossPrice: 6990000,
    image: '',
  },
  {
    id: 'product_47',
    name: 'Realme 6 (8GB/128GB)',
    price: 6990000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_48',
    name: 'Xiaomi Redmi Note 8 Pro (6GB/128GB)',
    price: 5990000,
    crossPrice: 6490000,
    image: '',
  },
  {
    id: 'product_49',
    name: 'Samsung Galaxy A50 64GB',
    price: 6490000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_50',
    name: 'Samsung Galaxy A30s',
    price: 5590000,
    crossPrice: 6290000,
    image: '',
  },
  {
    id: 'product_51',
    name: 'Nokia 7.2',
    price: 4590000,
    crossPrice: 6190000,
    image: '',
  },
  {
    id: 'product_52',
    name: 'Xiaomi Redmi Note 8 Pro (6GB/64GB)',
    price: 5690000,
    crossPrice: 5990000,
    image: '',
  },
  {
    id: 'product_53',
    name: 'Realme 6 (4GB/128GB)',
    price: 5990000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_54',
    name: 'Realme 5 Pro (4GB/128GB)',
    price: 4790000,
    crossPrice: 5990000,
    image: '',
  },
  {
    id: 'product_55',
    name: 'Realme 3 Pro (4GB/64GB)',
    price: 4590000,
    crossPrice: 5990000,
    image: '',
  },
  {
    id: 'product_56',
    name: 'Huawei Nova 3i',
    price: 5990000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_57',
    name: 'Huawei Y9s',
    price: 5990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/214648/huawei-y9sb-blue-400x400.jpg',
  },
  {
    id: 'product_58',
    name: 'Xiaomi Redmi Note 8 (4GB/128GB)',
    price: 5090000,
    crossPrice: 5490000,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/212374/xiaomi-redmi-note-8-128gb-black-400x400.jpg',
  },
  {
    id: 'product_59',
    name: 'Huawei P30 Lite',
    price: 5490000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/198985/huawei-p30-lite-1-400x400.jpg',
  },
  {
    id: 'product_60',
    name: 'Huawei Y9 Prime (2019)',
    price: 5490000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/202268/huawei-y9-prime-2019-blue-2-400x400.jpg',
  },
  {
    id: 'product_61',
    name: 'Samsung Galaxy A20s 64GB',
    price: 5390000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/204404/samsung-galaxy-a20s-black-400x400.jpg',
  },
  {
    id: 'product_62',
    name: 'OPPO A5 (2020) 128GB',
    price: 4790000,
    crossPrice: 5290000,
    image: '',
  },
  {
    id: 'product_63',
    name: 'OPPO A31 (6GB/128GB)',
    price: 5290000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_64',
    name: 'Xiaomi Redmi Note 8 (4GB/64GB)',
    price: 4390000,
    crossPrice: 4990000,
    image: '',
  },
  {
    id: 'product_65',
    name: 'Xiaomi Redmi Note 7 (4GB/64GB)',
    price: 3990000,
    crossPrice: 4990000,
    image: '',
  },
  {
    id: 'product_66',
    name: 'Realme 5s',
    price: 4190000,
    crossPrice: 4990000,
    image: '',
  },
  {
    id: 'product_67',
    name: 'Realme 5 (4GB/128GB)',
    price: 3990000,
    crossPrice: 4990000,
    image: '',
  },
  {
    id: 'product_68',
    name: 'Vivo Y19',
    price: 4690000,
    crossPrice: 4990000,
    image: '',
  },
  {
    id: 'product_69',
    name: 'Samsung Galaxy A30 3GB/32GB',
    price: 4590000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_70',
    name: 'OPPO A31 (4GB/128GB)',
    price: 4490000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_71',
    name: 'Xiaomi Mi A3',
    price: 3790000,
    crossPrice: 4490000,
    image: '',
  },
  {
    id: 'product_72',
    name: 'BlackBerry Evolve',
    price: 4490000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_73',
    name: 'Samsung Galaxy A20s 32GB',
    price: 4390000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_74',
    name: 'Vivo Y17',
    price: 4090000,
    crossPrice: 4390000,
    image: '',
  },
  {
    id: 'product_75',
    name: 'OPPO A5 (2020) 64GB',
    price: 3990000,
    crossPrice: 4290000,
    image: '',
  },
  {
    id: 'product_76',
    name: 'Realme 5i (4GB/64GB)',
    price: 3690000,
    crossPrice: 4290000,
    image: '',
  },
  {
    id: 'product_77',
    name: 'Samsung Galaxy A20',
    price: 4190000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_78',
    name: 'Vsmart Active 3 (6GB/64GB)',
    price: 3990000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_79',
    name: 'Xiaomi Redmi Note 8 (3GB/32GB)',
    price: 3790000,
    crossPrice: 3990000,
    image: '',
  },
  {
    id: 'product_80',
    name: 'Realme 5 (3GB/64GB)',
    price: 3590000,
    crossPrice: 3990000,
    image: '',
  },
  {
    id: 'product_81',
    name: 'Vivo U10',
    price: 3790000,
    crossPrice: 3990000,
    image: '',
  },
  {
    id: 'product_82',
    name: 'Samsung Galaxy A10s',
    price: 3690000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_83',
    name: 'Xiaomi Redmi 7 (3GB/32GB)',
    price: 2990000,
    crossPrice: 3690000,
    image: '',
  },
  {
    id: 'product_84',
    name: 'Xiaomi Redmi 8 (4GB/64GB)',
    price: 3190000,
    crossPrice: 3590000,
    image: '',
  },
  {
    id: 'product_85',
    name: 'Vivo Y12',
    price: 3590000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_86',
    name: 'Vsmart Live (4GB/64GB)',
    price: 3490000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_87',
    name: 'Vsmart Active 3 (4GB/64GB)',
    price: 3490000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/217436/vsmart-active-3-600x600-400x400.jpg',
  },
  {
    id: 'product_88',
    name: 'Huawei Y7 Pro (2019)',
    price: 3490000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/197205/huawei-y7-pro-2019-1-400x400.jpg',
  },
  {
    id: 'product_89',
    name: 'OPPO A5s',
    price: 3290000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/200330/oppo-a5s-do-600x600-1-400x400.jpg',
  },
  {
    id: 'product_90',
    name: 'Vsmart Joy 3 (4GB/64GB)',
    price: 3290000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/219208/vsmart-joy-3-4gb-den-600x600-400x400.jpg',
  },
  {
    id: 'product_91',
    name: 'Realme 5i (3GB/32GB)',
    price: 3290000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/216176/realme-5i-blue-amee-thumb-400x400.jpg',
  },
  {
    id: 'product_92',
    name: 'Xiaomi Redmi 8 (3GB/32GB)',
    price: 2790000,
    crossPrice: 2990000,
    image: '',
  },
  {
    id: 'product_93',
    name: 'OPPO A1K',
    price: 2690000,
    crossPrice: 2990000,
    image: '',
  },
  {
    id: 'product_94',
    name: 'Vivo Y11',
    price: 2990000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_95',
    name: 'Xiaomi Redmi 7 (2GB/16GB)',
    price: 2590000,
    crossPrice: 2990000,
    image: '',
  },
  {
    id: 'product_96',
    name: 'Samsung Galaxy A01',
    price: 2790000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_97',
    name: 'Realme C2 (3GB/32GB)',
    price: 2390000,
    crossPrice: 2690000,
    image: '',
  },
  {
    id: 'product_98',
    name: 'Realme C3i',
    price: 2590000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_99',
    name: 'Nokia 2.3',
    price: 2290000,
    crossPrice: 2590000,
    image: '',
  },
  {
    id: 'product_100',
    name: 'Xiaomi Redmi 8A',
    price: 2590000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_101',
    name: 'Realme C2 (2GB/16GB)',
    price: 1990000,
    crossPrice: 2590000,
    image: '',
  },
  {
    id: 'product_102',
    name: 'Vivo Y91C',
    price: 2390000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_103',
    name: 'Realme C2 (2GB/32GB)',
    price: 2090000,
    crossPrice: 2390000,
    image: '',
  },
  {
    id: 'product_104',
    name: 'Vsmart Joy 3 (2GB/32GB)',
    price: 2290000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_105',
    name: 'Itel S15 Pro',
    price: 1890000,
    crossPrice: 1990000,
    image: '',
  },
  {
    id: 'product_106',
    name: 'Vsmart Star 3',
    price: 1790000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_107',
    name: 'Xiaomi Redmi Go 16GB',
    price: 1790000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_108',
    name: 'Nokia C2',
    price: 1490000,
    crossPrice: 1690000,
    image: '',
  },
  {
    id: 'product_109',
    name: 'Itel P15',
    price: 1400000,
    crossPrice: 1550000,
    image: '',
  },
  {
    id: 'product_110',
    name: 'Vsmart Star',
    price: 1390000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_111',
    name: 'Vsmart Bee 3',
    price: 1390000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_112',
    name: 'Nokia C1',
    price: 1390000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_113',
    name: 'Itel S33',
    price: 1390000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_114',
    name: 'Nokia 230 (không tặng thẻ nhớ)',
    price: 1250000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_115',
    name: 'Mobell S61',
    price: 1250000,
    crossPrice: null,
    image: '',
  },
  {
    id: 'product_116',
    name: 'Mobell Nova P3',
    price: 1190000,
    crossPrice: null,
    image: '',
  },
];