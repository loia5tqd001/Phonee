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

    re'product_': turn {
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

export default {
  product_146: {
    id: 'product_146',
    name: 'Itel it5092',
    price: 390000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/210659/itel-it5092-gold-600x600.jpg',
  },
  product_32: {
    id: 'product_32',
    name: 'Samsung Galaxy A30s',
    price: 5590000,
    crossPrice: 6290000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/204403/samsung-galaxy-a30s-green-600x600.jpg',
  },
  product_68: {
    id: 'product_68',
    name: 'Vivo S1 Pro',
    price: 6990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/202862/vivo-s1-pro-white-600x600.jpg',
  },
  product_1: {
    id: 'product_1',
    name: 'iPhone 11 64GB',
    price: 21990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-red-600x600.jpg',
  },
  product_38: {
    id: 'product_38',
    name: 'Samsung Galaxy A01',
    price: 2790000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/214908/samsung-galaxy-a01-xanh-600x600-600x600.jpg',
  },
  product_16: {
    id: 'product_16',
    name: 'Samsung Galaxy A51 (6GB/128GB)',
    price: 7990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/211570/samsung-galaxy-a51-white-1-600x600.jpg',
  },
  product_28: {
    id: 'product_28',
    name: 'Samsung Galaxy A70',
    price: 9290000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/195012/samsung-galaxy-a70-white-600x600.jpg',
  },
  product_37: {
    id: 'product_37',
    name: 'Samsung Galaxy A10s',
    price: 3690000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/205773/samsung-galaxy-a10s-green-600x600.jpg',
  },
  product_30: {
    id: 'product_30',
    name: 'Samsung Galaxy A50s',
    price: 6990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/207641/samsung-galaxy-a50s-green-600x600.jpg',
  },
  product_24: {
    id: 'product_24',
    name: 'Samsung Galaxy S10+',
    price: 19990000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/179530/samsung-galaxy-s10-plus-white-600x600.jpg',
  },
  product_26: {
    id: 'product_26',
    name: 'Samsung Galaxy Note 10 Lite',
    price: 13990000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/214909/samsung-galaxy-note-10-lite-thumb-600x600.jpg',
  },
  product_21: {
    id: 'product_21',
    name: 'Samsung Galaxy S20+',
    price: 21990000,
    crossPrice: 23990000,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/217936/samsung-galaxy-s20-plus-600x600-fix-600x600.jpg',
  },
  product_7: {
    id: 'product_7',
    name: 'iPhone 11 Pro 64GB',
    price: 30990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/188705/iphone-11-pro-black-600x600.jpg',
  },
  product_12: {
    id: 'product_12',
    name: 'iPhone Xs 64GB',
    price: 20990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/190323/iphone-xs-gold-600x600.jpg',
  },
  product_25: {
    id: 'product_25',
    name: 'Samsung Galaxy A80',
    price: 14990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/201228/samsung-galaxy-a80-gold-600x600.jpg',
  },
  product_74: {
    id: 'product_74',
    name: 'Vivo Y15',
    price: 3790000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/202865/vivo-y15-blue-quanghai-600x600.jpg',
  },
  product_50: {
    id: 'product_50',
    name: 'Xiaomi Redmi Note 9S',
    price: 5990000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/214924/xiaomi-redmi-note-9s-4gb-green-400x460-600x600.jpg',
  },
  product_77: {
    id: 'product_77',
    name: 'Vivo Y93',
    price: 2690000,
    crossPrice: 2990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/202284/vivo-y93-32gb-black-600x600.jpg',
  },
  product_76: {
    id: 'product_76',
    name: 'Vivo Y11',
    price: 2990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/212357/vivo-y11-600-600-600x600.jpg',
  },
  product_61: {
    id: 'product_61',
    name: 'Xiaomi Redmi 8 (4GB/64GB)',
    price: 2990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/212212/xiaomi-redmi-8-64gb-red-600x600.jpg',
  },
  product_67: {
    id: 'product_67',
    name: 'Vivo V19',
    price: 8990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/217859/vivo-v19-xanh-600x600-600x600.jpg',
  },
  product_75: {
    id: 'product_75',
    name: 'Vivo Y12',
    price: 3590000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/203619/vivo-y12-red-600x600.jpg',
  },
  product_20: {
    id: 'product_20',
    name: 'Samsung Galaxy S20 Ultra',
    price: 27990000,
    crossPrice: 29990000,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/217937/samsung-galaxy-s20-ultra-600x600-1-600x600.jpg',
  },
  product_43: {
    id: 'product_43',
    name: 'OPPO A9 (2020)',
    price: 5990000,
    crossPrice: 6990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/202028/oppo-a9-600x600-trang-600x600.jpg',
  },
  product_5: {
    id: 'product_5',
    name: 'iPhone 11 Pro Max 64GB',
    price: 33990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-600x600.jpg',
  },
  product_15: {
    id: 'product_15',
    name: 'iPhone 7 32GB',
    price: 9990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-gold-600x600.jpg',
  },
  product_80: {
    id: 'product_80',
    name: 'Realme 6 Pro',
    price: 7990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/214645/realme-6-pro-600x600-2-600x600.jpg',
  },
  product_81: {
    id: 'product_81',
    name: 'Realme 5 Pro (8GB/128GB)',
    price: 5990000,
    crossPrice: 6990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/211163/realme-5-pro-8gb-purple-600x600.jpg',
  },
  product_23: {
    id: 'product_23',
    name: 'Samsung Galaxy S20',
    price: 19490000,
    crossPrice: 21490000,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/217935/samsung-galaxy-s20-600x600-hong-600x600.jpg',
  },
  product_14: {
    id: 'product_14',
    name: 'iPhone 7 Plus 32GB',
    price: 11490000,
    crossPrice: 12990000,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-32gb-gold-600x600-600x600.jpg',
  },
  product_45: {
    id: 'product_45',
    name: 'OPPO A31 (6GB/128GB)',
    price: 5290000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/218662/oppo-a31-2020-128gb-den-600x600-1-600x600.jpg',
  },
  product_44: {
    id: 'product_44',
    name: 'OPPO A5 (2020) 128GB',
    price: 4790000,
    crossPrice: 5290000,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/212116/oppo-a5-2020-128gb-trang-600x600-600x600.jpg',
  },
  product_27: {
    id: 'product_27',
    name: 'Samsung Galaxy A71',
    price: 10490000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/210246/samsung-galaxy-a71-blue-600x600-1-600x600.jpg',
  },
  product_9: {
    id: 'product_9',
    name: 'iPhone 11 256GB',
    price: 24990000,
    crossPrice: 25990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/210648/iphone-11-256gb-white-600x600.jpg',
  },
  product_47: {
    id: 'product_47',
    name: 'OPPO A5 (2020) 64GB',
    price: 3990000,
    crossPrice: 4290000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/210441/oppo-a5-2020-den-600x600-600x600.jpg',
  },
  product_6: {
    id: 'product_6',
    name: 'iPhone Xs Max 256GB',
    price: 33990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/190322/iphone-xs-max-256gb-white-600x600.jpg',
  },
  product_90: {
    id: 'product_90',
    name: 'Realme 5i (3GB/32GB)',
    price: 3290000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/216176/realme-5i-blue-amee-thumb-600x600.jpg',
  },
  product_94: {
    id: 'product_94',
    name: 'Realme C2 (2GB/32GB)',
    price: 2090000,
    crossPrice: 2390000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/209557/realme-c2-2g-32gb-blue-600x600.jpg',
  },
  product_127: {
    id: 'product_127',
    name: 'Huawei Y7 Pro (2019)',
    price: 3490000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/197205/huawei-y7-pro-2019-1-600x600.jpg',
  },
  product_123: {
    id: 'product_123',
    name: 'Huawei Nova 3i',
    price: 5990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/179673/huawei-nova-3i-600-600-600x600.jpg',
  },
  product_106: {
    id: 'product_106',
    name: 'Nokia 2.3',
    price: 2290000,
    crossPrice: 2590000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/213957/nokia-23-gray-600x600.jpg',
  },
  product_129: {
    id: 'product_129',
    name: 'Mobell Nova P3',
    price: 1190000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/139909/mobell-nova-p3-300-300x300.jpg',
  },
  product_29: {
    id: 'product_29',
    name: 'Samsung Galaxy A50 128GB',
    price: 7290000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/200294/samsung-galaxy-a50-128gb-blue-600x600.jpg',
  },
  product_118: {
    id: 'product_118',
    name: 'Nokia 105 Single SIM (2019)',
    price: 350000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/211934/nokia-105-single-sim-2019-blue-600x600.jpg',
  },
  product_132: {
    id: 'product_132',
    name: 'Mobell S41',
    price: 890000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/195136/mobell-s41-gold-1-600x600.jpg',
  },
  product_148: {
    id: 'product_148',
    name: 'Itel it5025',
    price: 260000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/204423/itel-it5025-blue-2-600x600.jpg',
  },
  product_87: {
    id: 'product_87',
    name: 'Realme 5s',
    price: 4190000,
    crossPrice: 4990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/213588/realme-5s-red-600x600.jpg',
  },
  product_92: {
    id: 'product_92',
    name: 'Realme C3i',
    price: 2590000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/220170/realme-c3i-blue-600x600-600x600.jpg',
  },
  product_36: {
    id: 'product_36',
    name: 'Samsung Galaxy A20',
    price: 4190000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/198792/samsung-galaxy-a20-red-600x600.jpg',
  },
  product_39: {
    id: 'product_39',
    name: 'OPPO Reno2 F',
    price: 7990000,
    crossPrice: 8990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-600x600-600x600.jpg',
  },
  product_130: {
    id: 'product_130',
    name: 'Mobell S60',
    price: 1190000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/193271/mobell-s60-red-1-600x600.jpg',
  },
  product_140: {
    id: 'product_140',
    name: 'MOBELL M228',
    price: 180000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/85984/mobell-m228-9-600x600.jpg',
  },
  product_95: {
    id: 'product_95',
    name: 'Vsmart Joy 3 (3GB/32GB)',
    price: 2690000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/217920/vsmart-joy-3-tim-600x600-600x600.jpg',
  },
  product_105: {
    id: 'product_105',
    name: 'Nokia 7.2',
    price: 4590000,
    crossPrice: 6190000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/207650/nokia-72-black-600x600.jpg',
  },
  product_73: {
    id: 'product_73',
    name: 'Vivo U10',
    price: 3790000,
    crossPrice: 3990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/211156/vivo-u10-1-600x600.jpg',
  },
  product_83: {
    id: 'product_83',
    name: 'Realme 5 Pro (4GB/128GB)',
    price: 4790000,
    crossPrice: 5990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/209564/realme-5-pro-white-thumb-600x600.jpg',
  },
  product_133: {
    id: 'product_133',
    name: 'Mobell Rock 3',
    price: 490000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/112837/mobell-rock-3-2-300x300.jpg',
  },
  product_114: {
    id: 'product_114',
    name: 'Nokia 210',
    price: 780000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/200041/nokia-210-black-600x600.jpg',
  },
  product_65: {
    id: 'product_65',
    name: 'Xiaomi Redmi Go 16GB',
    price: 1790000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/200603/xiaomi-redmi-go-16gb-blue-600x600.jpg',
  },
  product_48: {
    id: 'product_48',
    name: 'OPPO A5s',
    price: 3290000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/200330/oppo-a5s-do-600x600-1-600x600.jpg',
  },
  product_124: {
    id: 'product_124',
    name: 'Huawei Y9s',
    price: 5990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/214648/huawei-y9sb-blue-600x600.jpg',
  },
  product_71: {
    id: 'product_71',
    name: 'Vivo Y19',
    price: 4690000,
    crossPrice: 4990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/204651/vivo-y19-white-quanghai-600x600.jpg',
  },
  product_40: {
    id: 'product_40',
    name: 'OPPO A91',
    price: 6990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/217287/oppo-a91-trang-600x600-600x600.jpg',
  },
  product_60: {
    id: 'product_60',
    name: 'Xiaomi Redmi 7 (3GB/32GB)',
    price: 2990000,
    crossPrice: 3690000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/198167/xiaomi-redmi-7-black-1-600x600.jpg',
  },
  product_98: {
    id: 'product_98',
    name: 'Vsmart Active 3 (4GB/64GB)',
    price: 3490000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/217436/vsmart-active-3-600x600-600x600.jpg',
  },
  product_116: {
    id: 'product_116',
    name: 'Nokia 110 (2019)',
    price: 470000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/209788/nokia-110-2019-green-600x600.jpg',
  },
  product_33: {
    id: 'product_33',
    name: 'Samsung Galaxy A20s 64GB',
    price: 5390000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/204404/samsung-galaxy-a20s-black-600x600.jpg',
  },
  product_66: {
    id: 'product_66',
    name: 'Vivo V17 Pro',
    price: 8990000,
    crossPrice: 9990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/210243/vivo-v17-pro-blue-1-600x600.jpg',
  },
  product_69: {
    id: 'product_69',
    name: 'Vivo V15 128GB',
    price: 5490000,
    crossPrice: 6490000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/199041/vivo-v15-quanghai-600x600.jpg',
  },
  product_54: {
    id: 'product_54',
    name: 'Xiaomi Redmi Note 8 Pro (6GB/64GB)',
    price: 5990000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/209797/xiaomi-redmi-note-8-pro-white-600x600.jpg',
  },
  product_149: {
    id: 'product_149',
    name: 'Itel it2171',
    price: 210000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/204125/itel-it2171-blue-600x600.jpg',
  },
  product_52: {
    id: 'product_52',
    name: 'Xiaomi Mi 9 SE',
    price: 7490000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/198394/xiaomi-mi-9-se-1-600x600.jpg',
  },
  product_2: {
    id: 'product_2',
    name: 'iPhone 11 Pro Max 512GB',
    price: 40990000,
    crossPrice: 43990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/210654/iphone-11-pro-max-512gb-gold-600x600.jpg',
  },
  product_72: {
    id: 'product_72',
    name: 'Vivo Y17',
    price: 4090000,
    crossPrice: 4390000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/201404/vivo-y17-purple-600x600.jpg',
  },
  product_8: {
    id: 'product_8',
    name: 'iPhone Xs Max 64GB',
    price: 27990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-600x600.jpg',
  },
  product_122: {
    id: 'product_122',
    name: 'Huawei Nova 7i (Không có Google)',
    price: 6990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/218363/huawei-nova-7i-pink-600x600-600x600.jpg',
  },
  product_150: {
    id: 'product_150',
    name: 'Itel Value 100',
    price: 170000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/211009/itel-value-100-black-600x600.jpg',
  },
  product_136: {
    id: 'product_136',
    name: 'Mobell M889',
    price: 390000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/149318/mobell-m-889-600-600x600.jpg',
  },
  product_46: {
    id: 'product_46',
    name: 'OPPO A31 (4GB/128GB)',
    price: 4490000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/217856/oppo-a31-2020-trang-600x600-1-600x600.jpg',
  },
  product_19: {
    id: 'product_19',
    name: 'Samsung Galaxy Z Flip',
    price: 36000000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/213022/samsung-galaxy-z-flip-den-600x600-600x600.jpg',
  },
  product_85: {
    id: 'product_85',
    name: 'Realme 3 Pro (4GB/64GB)',
    price: 4590000,
    crossPrice: 5990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/194955/realme-3-pro-purple-1-600x600.jpg',
  },
  product_144: {
    id: 'product_144',
    name: 'Itel Alpha Lite',
    price: 890000,
    crossPrice: 990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/206083/itel-alpha-lite-black-600x600.jpg',
  },
  product_3: {
    id: 'product_3',
    name: 'iPhone 11 Pro Max 256GB',
    price: 37990000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/210653/iphone-11-pro-max-256gb-black-600x600.jpg',
  },
  product_103: {
    id: 'product_103',
    name: 'Vsmart Bee 3',
    price: 1390000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/216800/vsmart-bee-3-white-600x600-600x600.jpg',
  },
  product_22: {
    id: 'product_22',
    name: 'Samsung Galaxy Note 10',
    price: 22990000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/191276/samsung-galaxy-note-10-silver-600x600.jpg',
  },
  product_143: {
    id: 'product_143',
    name: 'Itel S33',
    price: 1390000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/213641/itel-s33-gold-600x600.jpg',
  },
  product_121: {
    id: 'product_121',
    name: 'Huawei Nova 5T',
    price: 8490000,
    crossPrice: 8990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/209795/huawei-nova-5t-blue-600x600-600x600.jpg',
  },
  product_55: {
    id: 'product_55',
    name: 'Xiaomi Redmi Note 8 (4GB/128GB)',
    price: 5490000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/212374/xiaomi-redmi-note-8-128gb-black-600x600.jpg',
  },
  product_169: {
    id: 'product_169',
    name: 'Masstel IZI 200',
    price: 250000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/220181/masstel-izi-200-do-den-600x600-600x600.jpg',
  },
  product_34: {
    id: 'product_34',
    name: 'Samsung Galaxy A30 3GB/32GB',
    price: 4590000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/200388/samsung-galaxy-a30-32gb-600x600.jpg',
  },
  product_97: {
    id: 'product_97',
    name: 'Vsmart Live (4GB/64GB)',
    price: 3490000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/208847/vsmart-live-blue-600x600.jpg',
  },
  product_158: {
    id: 'product_158',
    name: 'BlackBerry KEY2',
    price: 14990000,
    crossPrice: 15990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/171028/blackberry-key2-4-600x600.jpg',
  },
  product_42: {
    id: 'product_42',
    name: 'OPPO Reno2',
    price: 12490000,
    crossPrice: 14990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/209798/oppo-reno-2-pink-600x600.jpg',
  },
  product_165: {
    id: 'product_165',
    name: 'Masstel Fami 12',
    price: 450000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/212188/masstel-fami-12-black-600x600.jpg',
  },
  product_41: {
    id: 'product_41',
    name: 'OPPO Find X2',
    price: 23990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/198150/oppo-find-x2-blue-600x600-600x600.jpg',
  },
  product_167: {
    id: 'product_167',
    name: 'Masstel IZI 280',
    price: 300000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/212191/masstel-izi-280-blue-600x600.jpg',
  },
  product_161: {
    id: 'product_161',
    name: 'BlackBerry KEYone 3GB/32GB',
    price: 5990000,
    crossPrice: 6990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/194834/blackberry-keyone-3gb-600x600.jpg',
  },
  product_56: {
    id: 'product_56',
    name: 'Xiaomi Redmi Note 8 (4GB/64GB)',
    price: 4390000,
    crossPrice: 4990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/209535/xiaomi-redmi-note-8-white-600x600.jpg',
  },
  product_142: {
    id: 'product_142',
    name: 'Itel P15',
    price: 1400000,
    crossPrice: 1550000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/212912/itel-p15-gold-600x600.jpg',
  },
  product_138: {
    id: 'product_138',
    name: 'Mobell M339',
    price: 290000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/139913/mobell-m339-1-300x300.jpg',
  },
  product_159: {
    id: 'product_159',
    name: 'BlackBerry KEY2 LE',
    price: 8990000,
    crossPrice: 9990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/189005/blackberry-key2-le-1-600x600.jpg',
  },
  product_157: {
    id: 'product_157',
    name: 'Coolpad F110',
    price: 190000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/203513/coolpad-f110-blue-1-600x600.jpg',
  },
  product_31: {
    id: 'product_31',
    name: 'Samsung Galaxy A50 64GB',
    price: 6490000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/196963/samsung-galaxy-a50-blue-600x600.jpg',
  },
  product_137: {
    id: 'product_137',
    name: 'MOBELL M389',
    price: 390000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/77857/mobell-m389-1-1-300x300.jpg',
  },
  product_141: {
    id: 'product_141',
    name: 'Itel S15 Pro',
    price: 1890000,
    crossPrice: 1990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/210476/itel-s15-pro-purple-600x600.jpg',
  },
  product_168: {
    id: 'product_168',
    name: 'Masstel IZI 206',
    price: 290000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/212190/masstel-izi-206-blue-600x600.jpg',
  },
  product_170: {
    id: 'product_170',
    name: 'Masstel IZI 112',
    price: 200000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/212189/masstel-izi-112-black-600x600.jpg',
  },
  product_163: {
    id: 'product_163',
    name: 'Masstel X5 Fami',
    price: 990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/212228/masstel-x5-fami-gold-600x600.jpg',
  },
  product_135: {
    id: 'product_135',
    name: 'Mobell M529',
    price: 450000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/142346/mobell-m529-black-600x600.jpg',
  },
  product_164: {
    id: 'product_164',
    name: 'Masstel Fami P20',
    price: 550000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/220171/masstel-fami-p20-xanh-600x600-600x600.jpg',
  },
  product_91: {
    id: 'product_91',
    name: 'Realme C2 (3GB/32GB)',
    price: 2390000,
    crossPrice: 2690000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/201385/realme-c2-new-blue-600x600.jpg',
  },
  product_107: {
    id: 'product_107',
    name: 'Nokia 2.2',
    price: 1640000,
    crossPrice: 1990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/204089/nokia-22-black-600x600.jpg',
  },
  product_88: {
    id: 'product_88',
    name: 'Realme 5i (4GB/64GB)',
    price: 3690000,
    crossPrice: 4290000,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/217331/realme-5i-4gb-green-amee-thumb-600x600.jpg',
  },
  product_126: {
    id: 'product_126',
    name: 'Huawei Y9 Prime (2019)',
    price: 5490000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/202268/huawei-y9-prime-2019-blue-2-600x600.jpg',
  },
  product_100: {
    id: 'product_100',
    name: 'Vsmart Joy 3 (2GB/32GB)',
    price: 2290000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/217921/vsmart-joy-3-2gb-tim-600x600-600x600.jpg',
  },
  product_134: {
    id: 'product_134',
    name: 'Mobell M729',
    price: 490000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/196890/mobell-m729-black-600x600.jpg',
  },
  product_63: {
    id: 'product_63',
    name: 'Xiaomi Redmi 8 (3GB/32GB)',
    price: 2690000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/209796/xiaomi-redmi-8-blue-600x600.jpg',
  },
  product_171: {
    id: 'product_171',
    name: 'Masstel IZI 120',
    price: 190000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/214765/masstel-izi-120-red-600x600.jpg',
  },
  product_128: {
    id: 'product_128',
    name: 'Mobell S61',
    price: 1250000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/197925/mobell-s61-blue-2-600x600.jpg',
  },
  product_96: {
    id: 'product_96',
    name: 'Vsmart Active 3 (6GB/64GB)',
    price: 3990000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/217438/vsmart-active-3-6gb-emerald-green-600x600-600x600.jpg',
  },
  product_10: {
    id: 'product_10',
    name: 'iPhone Xs 256GB',
    price: 24990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/190324/iphone-xs-256gb-white-600x600.jpg',
  },
  product_59: {
    id: 'product_59',
    name: 'Xiaomi Redmi Note 8 (3GB/32GB)',
    price: 3790000,
    crossPrice: 3990000,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/212247/xiaomi-redmi-note-8-32gb-white-600x600.jpg',
  },
  product_4: {
    id: 'product_4',
    name: 'iPhone 11 Pro 256GB',
    price: 34990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/210655/iphone-11-pro-256gb-black-600x600.jpg',
  },
  product_11: {
    id: 'product_11',
    name: 'iPhone 11 128GB',
    price: 23990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/210644/iphone-11-128gb-green-600x600.jpg',
  },
  product_89: {
    id: 'product_89',
    name: 'Realme 5 (3GB/64GB)',
    price: 3590000,
    crossPrice: 3990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/207649/realme-5-600x600-1-600x600.jpg',
  },
  product_53: {
    id: 'product_53',
    name: 'Xiaomi Redmi Note 8 Pro (6GB/128GB)',
    price: 5990000,
    crossPrice: 6490000,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/214418/xiaomi-redmi-note-8-pro-6gb-128gb-white-600x600.jpg',
  },
  product_109: {
    id: 'product_109',
    name: 'Nokia C2',
    price: 1490000,
    crossPrice: 1690000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/219799/nokia-c2-cyan--200x200.jpg',
  },
  product_160: {
    id: 'product_160',
    name: 'BlackBerry KEYone 4GB/64GB',
    price: 6990000,
    crossPrice: 7990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/112433/blackberry-keyone-9-600x600.jpg',
  },
  product_70: {
    id: 'product_70',
    name: 'Vivo S1',
    price: 5490000,
    crossPrice: 5990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/202861/vivo-s1-blue-600x600.jpg',
  },
  product_18: {
    id: 'product_18',
    name: 'Samsung Galaxy Fold',
    price: 0,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/198158/samsung-galaxy-fold-black-600x600.jpg',
  },
  product_145: {
    id: 'product_145',
    name: 'Itel it2590',
    price: 390000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/215831/itel-it2590-thumb-600x600.jpg',
  },
  product_102: {
    id: 'product_102',
    name: 'Vsmart Star',
    price: 1390000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/209133/vsmart-star-coral-600x600.jpg',
  },
  product_93: {
    id: 'product_93',
    name: 'Realme C2 (2GB/16GB)',
    price: 1990000,
    crossPrice: 2590000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/203347/realme-c2-16gb-new-blue-600x600.jpg',
  },
  product_112: {
    id: 'product_112',
    name: 'Nokia 3310',
    price: 1060000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/92062/nokia-3310-2017-black-600x600.jpg',
  },
  product_117: {
    id: 'product_117',
    name: 'Nokia 105 Dual (2019)',
    price: 360000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/207957/nokia-105-2019-blue-600x600.jpg',
  },
  product_13: {
    id: 'product_13',
    name: 'iPhone 8 Plus 64GB',
    price: 14490000,
    crossPrice: 15990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-hh-600x600-600x600.jpg',
  },
  product_111: {
    id: 'product_111',
    name: 'Nokia 230 (không tặng thẻ nhớ)',
    price: 1250000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/101850/nokia-230-khong-the-blue-600x600.jpg',
  },
  product_119: {
    id: 'product_119',
    name: 'Huawei Mate 30 Pro (Không có Google)',
    price: 20990000,
    crossPrice: 21990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/199046/huawei-mate-30-pro-600x600-1-600x600.jpg',
  },
  product_162: {
    id: 'product_162',
    name: 'BlackBerry Evolve',
    price: 4490000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/199756/blackberry-evolve-black-600x600.jpg',
  },
  product_78: {
    id: 'product_78',
    name: 'Vivo Y91C',
    price: 2390000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/199083/vivo-y91c-600x600.jpg',
  },
  product_166: {
    id: 'product_166',
    name: 'Masstel IZI 300',
    price: 400000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/212227/masstel-izi-300-gold-600x600.jpg',
  },
  product_79: {
    id: 'product_79',
    name: 'Realme C3',
    price: 2990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/218361/realme-c3-do-600x600-600x600.jpg',
  },
  product_110: {
    id: 'product_110',
    name: 'Nokia C1',
    price: 1390000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/218107/nokia-c1-600x600-1-600x600.jpg',
  },
  product_49: {
    id: 'product_49',
    name: 'OPPO A1K',
    price: 2690000,
    crossPrice: 2990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/200485/oppo-a1k-do-600x600-1-600x600.jpg',
  },
  product_139: {
    id: 'product_139',
    name: 'Mobell M229 (2019)',
    price: 190000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/203509/mobell-m229-2019-blue-600x600.jpg',
  },
  product_57: {
    id: 'product_57',
    name: 'Xiaomi Redmi Note 7 (4GB/64GB)',
    price: 3990000,
    crossPrice: 4990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/167535/xiaomi-redmi-note-7-600x600.jpg',
  },
  product_17: {
    id: 'product_17',
    name: 'Samsung Galaxy S10 Lite',
    price: 13990000,
    crossPrice: 14990000,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/194251/samsung-galaxy-s10-lite-blue-thumb-600x600.jpg',
  },
  product_99: {
    id: 'product_99',
    name: 'Vsmart Joy 3 (4GB/64GB)',
    price: 3290000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/219208/vsmart-joy-3-4gb-den-600x600-600x600.jpg',
  },
  product_35: {
    id: 'product_35',
    name: 'Samsung Galaxy A20s 32GB',
    price: 4390000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/211644/samsung-galaxy-a20s-32gb-red-600x600.jpg',
  },
  product_155: {
    id: 'product_155',
    name: 'Coolpad F126',
    price: 230000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/193500/coolpad-f126-black-600x600.jpg',
  },
  product_125: {
    id: 'product_125',
    name: 'Huawei P30 Lite',
    price: 5490000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/198985/huawei-p30-lite-1-600x600.jpg',
  },
  product_62: {
    id: 'product_62',
    name: 'Xiaomi Redmi 7 (2GB/16GB)',
    price: 2590000,
    crossPrice: 2990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/200599/xiaomi-redmi-7-16gb-black-600x600.jpg',
  },
  product_82: {
    id: 'product_82',
    name: 'Realme 6 (8GB/128GB)',
    price: 6990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/219895/realme-6-8gb-600x600-600x600.jpg',
  },
  product_147: {
    id: 'product_147',
    name: 'Itel it6120',
    price: 300000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/200045/itel-it6120-600x600.jpg',
  },
  product_153: {
    id: 'product_153',
    name: 'Coolpad F212',
    price: 260000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/217983/coolpad-f212-xanh-600x600-600x600.jpg',
  },
  product_108: {
    id: 'product_108',
    name: 'Nokia 3.2 16GB',
    price: 1990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/202919/nokia-32-16gb-2-600x600.jpg',
  },
  product_152: {
    id: 'product_152',
    name: 'Coolpad F129',
    price: 300000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/193501/coolpad-f129-black-600x600.jpg',
  },
  product_151: {
    id: 'product_151',
    name: 'Coolpad N5 mini',
    price: 890000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/213671/coolpad-n5-mini-blue-600x600.jpg',
  },
  product_101: {
    id: 'product_101',
    name: 'Vsmart Star 3',
    price: 1790000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/218886/vsmart-star-3-xanh-600x600-600x600.jpg',
  },
  product_64: {
    id: 'product_64',
    name: 'Xiaomi Redmi 8A',
    price: 2590000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/210089/xiaomi-redmi-8a-1-600x600.jpg',
  },
  product_58: {
    id: 'product_58',
    name: 'Xiaomi Mi A3',
    price: 3790000,
    crossPrice: 4490000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/197845/xiaomi-mi-a3-white-600x600.jpg',
  },
  product_131: {
    id: 'product_131',
    name: 'Mobell S51',
    price: 1090000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/195140/mobell-s51-gold-2-600x600.jpg',
  },
  product_113: {
    id: 'product_113',
    name: 'Nokia 5310 (2020)',
    price: 990000,
    crossPrice: null,
    image:
      'https://cdn.tgdd.vn/Products/Images/42/220204/nokia-5310-2020-trang-do-600x600-600x600.jpg',
  },
  product_51: {
    id: 'product_51',
    name: 'Xiaomi Mi Note 10 Pro',
    price: 13490000,
    crossPrice: 14990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/213590/xiaomi-mi-note-10-pro-black-600x600.jpg',
  },
  product_120: {
    id: 'product_120',
    name: 'Huawei P40 (Không có Google)',
    price: 17990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/211157/huawei-p40-600x600-2-600x600.jpg',
  },
  product_154: {
    id: 'product_154',
    name: 'Coolpad F210',
    price: 250000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/206676/coolpad-f210-blue-600x600.jpg',
  },
  product_104: {
    id: 'product_104',
    name: 'Vsmart Bee',
    price: 990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/207847/vsmart-bee-blue-600x600.jpg',
  },
  product_156: {
    id: 'product_156',
    name: 'Coolpad F116',
    price: 200000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/193499/coolpad-f116-8-600x600.jpg',
  },
  product_84: {
    id: 'product_84',
    name: 'Realme 6 (4GB/128GB)',
    price: 5990000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/214644/realme-6-xanh-600x600-600x600.jpg',
  },
  product_115: {
    id: 'product_115',
    name: 'Nokia 150 (không tặng thẻ nhớ)',
    price: 650000,
    crossPrice: null,
    image: 'https://cdn.tgdd.vn/Products/Images/42/97450/nokia-150-khong-the-nho-6-300x300.jpg',
  },
  product_86: {
    id: 'product_86',
    name: 'Realme 5 (4GB/128GB)',
    price: 3990000,
    crossPrice: 4990000,
    image: 'https://cdn.tgdd.vn/Products/Images/42/211161/realme-5-4gb-600x600-600x600.jpg',
  },
};