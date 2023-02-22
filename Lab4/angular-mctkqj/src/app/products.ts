export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  image1: string;
  image2: string;
  image3: string;
  link: string;
}

export const products = [
  {
    id: 1,
    name: 'Apple MacBook Air 13',
    price: 1068.49 ,
    description: `Laptop Apple MacBook Air 13 MGN63 Grey  `,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h25/h3a/52177862524958/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-2-Container.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h80/h9f/50489392332830/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-3-Container.jpg',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
    rating: 6.3,
  },
  {
    id: 2,
    name: 'Xiaomi Liven Electric Meat Grinder JR-GW300',
    price: 82.33,
    description: `Xiaomi Liven Electric Meat Grinder JR-GW300 Kitchen Grinder Red`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h80/h4d/62698869751838/xiaomi-liven-electric-meat-grinder-jrj-gw300-krasnyj-106577552-1.jpg',
    image2:
      'https://micom.kz/image/cache/catalog/Kitchen/6711-9-800x800.jpg',
    image3:
      'https://micom.kz/image/cache/catalog/Kitchen/6711-6-800x800.jpeg',
    link: 'https://kaspi.kz/shop/p/xiaomi-liven-electric-meat-grinder-jrj-gw300-krasnyi-106577552/?c=750000000#!/item',
    rating: 6.0,
  },
  {
    id: 3,
    name: 'Orlando Skyline Wardrobe',
    price: 178.08,
    description: `Orlando 4D Horizon cabinet, 160x57x207, white`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc6/h2b/47699747012638/arlando-skaf-4d-belyj-gorizont-103142592-1.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h98/hc2/47699747995678/arlando-skaf-4d-belyj-gorizont-103142592-2.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h13/hbe/47699749371934/arlando-skaf-4d-belyj-gorizont-103142592-3.jpg',
    link: 'https://kaspi.kz/shop/p/gorizont-arlando-4d-160x57x207-belyi-103142592/?c=750000000#!/item',
    rating: 6.0,
  },
  {
    id: 4,
    name: 'iMac 24',
    price: 1855.77,
    description: `Apple iMac 24 2021 24M182SUX MGTF3 Monoblock silver`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/hb7/34185499017246/apple-imac-24-2021-24m182sux-mgtf3-serebristyj-101530799-1-Container.jpg',
    image2:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTowLj-ir9JThZOGk5kL75nv2OVVKon82hlmu23xPjAf9sqvjLvtW-eEu0JXvYOhHLgXN4&usqp=CAU',
    image3:
      'https://www.mechta.kz/export/1cbitrix/import_files/61/6161917d-bdd8-11eb-a23e-005056b6dbd7-480.webp',
    link: 'https://kaspi.kz/shop/p/apple-imac-24-2021-24m182sux-mgtf3-serebristyi-101530799/?c=750000000#!/item',
    rating: 9.0,
  },
  {
    id: 5,
    name: 'Apple iPad Pro 2022',
    price: 3099.73,
    description: `Apple iPad Pro 2022 12.9 2Tb Wi-Fi Tablet Grey`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd8/h82/64905252929566/apple-ipad-pro-2022-12-9-2tb-wi-fi-seryi-107279814-1.jpg',
    image2:
      'https://www.mechta.kz/export/1cbitrix/import_files/5c/5cfd71f6-bc65-11eb-a23e-005056b6dbd7-480.webp',
    image3:
      'https://www.mechta.kz/export/1cbitrix/import_files/5c/5cfd71f7-bc65-11eb-a23e-005056b6dbd7-480.webp',
    link: 'https://kaspi.kz/shop/p/apple-ipad-pro-2022-12-9-2tb-wi-fi-seryi-107279814/?c=750000000#!/item',
    rating: 8.0,
  },
  {
    id: 6,
    name: 'Yandex Station Mini 2',
    price: 99.51,
    description: `Smart Speaker Yandex Station Mini 2 with Clock Black`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4c/hb7/46546983649310/yandeks-novaya-stantsiya-mini-s-chasami-chernyi-102580021-1.jpg',
    image2:
      'https://www.mechta.kz/export/1cbitrix/import_files/dd/ddd3a0a8-2b30-11ec-a23f-005056b6dbd7-480.webp',
    image3:
      'https://static.beeline.ru/shop/media/goods/334x434/5bac702a-ff82-4b2f-8a16-810f4f2fc3ae.png',
    link: 'https://kaspi.kz/shop/p/jandeks-stantsija-mini-2-s-chasami-chernyi-102580021/?c=750000000#!/item',
    rating: 4.0,
  },
  {
    id: 7,
    name: 'Panasonic NN-ST342WZPE Microwave',
    price: 156.52,
    description: `Panasonic NN-ST342WZPE Microwave oven white, black`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbe/he5/32305820041246/panasonic-nn-st342wzpe-cernyj-belyj-2900987-1-Container.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcd/h0a/50282292019230/panasonic-nn-st342wzpe-belyj-cernyj-2900987-4.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h25/h35/50282291560478/panasonic-nn-st342wzpe-belyj-cernyj-2900987-3.jpg',
    link: 'https://kaspi.kz/shop/p/panasonic-nn-st342wzpe-belyi-chernyi-2900987/?c=750000000#!/item',
    rating: 7.0,
  },
  {
    id: 8,
    name: 'MacBook Pro 16',
    price: 5478.56,
    description: `Apple MacBook Pro 16 MVVM2 Laptop Silver`,
    image1:
     'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h18/h2d/46665337995294/apple-macbook-pro-16-mvvm2-serebristyj-100397588-1-Container.jpg',
    image2:
     'https://www.mechta.kz/images/product/69725/17100000154_2-480.webp',
    image3:
     'https://www.mechta.kz/images/product/69725/17100000154_5-480.webp',
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-mvvm2-serebristyi-100397588/?c=750000000#!/item',
    rating: 6.0,
  },
  {
    id: 9,
    name: 'Sony PlayStation 5',
    price: 413.66,
    description: `Sony PlayStation 5 Game Console white`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h81/h61/49348562649118/sony-playstation-5-belyj-100746577-1-Container.jpg',
    image2:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h98/hfa/33035113463838/sony-playstation-5-belyj-100746577-3-Container.jpg',
    image3:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfa/h5c/33035116576798/sony-playstation-5-belyj-100746577-4-Container.jpg',  
    link: 'https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?c=750000000#!/item',
    rating: 10.0,
  },
  {
    id: 10,
    name: 'Airpods Pro 2',
    price: 267.33,
    description: `Apple Airpods Pro 2nd generation headphones white`,
    image1:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hba/hf8/62281477259294/apple-airpods-pro-2nd-generation-belyj-106362968-1.jpg',
    image2:
      'https://www.mechta.kz/export/1cbitrix/import_files/3d/3db2e093-3a26-11ed-a24a-005056b6dbd7-480.webp',
    image3:
      'https://www.mechta.kz/export/1cbitrix/import_files/3d/3db2e095-3a26-11ed-a24a-005056b6dbd7-480.webp',
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362968/?c=750000000#!/item',
    rating: 6.0,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/


