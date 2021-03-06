module.exports = [
  {
    id: 1,
    category: 'Диски для легковых', // id or name?
    code: '257',
    name: 'BMW PX F55 Dark', // brand + model
    description: 'BMW диски PX F55 Dark за 24к',
    stock: false,
    meta: {
      brand: 'BMW',
      model: 'PX F55 Dark',
      price: '240000',
    },
    mods: [
      {
        id: 0, // нужен?
        j: 11.75,
        d: 132.5,
        et: 110.5,
        holes_n: 5,
        pcd: '127/155',
        dia: 56.62,
        code: 123456,
        color: 'Brushed',
        price: 422000, // ?
        prices: 634000, // ?
        stock: false, // ?
        difWidth: false, // ?
      },
    ],
    photo: [],
    cover: {},
    reviews: [
      {
        id: 0,
        brand: 'Land Rover Sport Discovery',
        model: 'KMC XD755 Rockstar',
        desc: 'Владею авто недолго, всего-то пол года, но за это время успел вкусить все прелести марки. Двигетель 3.7 - прет нормально… На светофоре можно оторваться, по трассе крейсеркская скорость 150-160, в таком диапазоне и бензине ест не очень много, и можно успеть оттормозиться перед камерой.',
        recommend: false,
        rating: '4',
        author: 'Алексей',
        date: '01.02.2015',
      },
      {
        id: 1,
        brand: 'Infinity Space',
        model: 'XX-9 Star',
        desc: 'Тачка - космос',
        recommend: false,
        rating: '2',
        author: 'Даша 9 лет',
        date: '01.02.2010',
      },
    ],
  },
  // {
  //   id: 2,
  //   category: 'Диски для легковых',
  //   brand: 'BMW',
  //   model: 'PX F55 Dark',
  //   price: 24000,
  //   vendor: 257,
  //   desc: 'BMW диски PX F55 Dark за 24к',
  //   stock: false,
  //   reviews: [
  //     {
  //       id: 0,
  //       brand: 'Land Rover Sport Discovery',
  //       model: 'KMC XD755 Rockstar',
  //       desc: 'Владею авто недолго, всего-то пол года',
  //       recommend: false,
  //       rating: '4',
  //       author: 'Алексей',
  //       date: '01.02.2015',
  //     },
  //     {
  //       id: 1,
  //       brand: 'Infinity Space',
  //       model: 'XX-9 Star',
  //       desc: 'Тачка - космос',
  //       recommend: false,
  //       rating: '2',
  //       author: 'Даша 9 лет',
  //       date: '01.02.2010',
  //     },
  //   ],
  //   modifications: [
  //     {
  //       id: 0,
  //       width: 11.75,
  //       diameter: 132.5,
  //       radius: 110.5,
  //       holes: 5,
  //       pcd: '127/155',
  //       dia: 56.62,
  //       art: 123456,
  //       color: 'Brushed',
  //       price: 422000,
  //       prices: 634000,
  //       stock: false,
  //       diffWidth: false,
  //     },
  //     {
  //       id: 1,
  //       width: 12,
  //       diameter: 112.7,
  //       radius: 115.5,
  //       holes: 4,
  //       pcd: '112/115',
  //       dia: 53.12,
  //       art: 654321,
  //       color: 'Серо-буро малиновый',
  //       price: 150000,
  //       prices: 500000,
  //     },
  //   ],
  //   foto: [],
  //   cover: {},
  // },
  // {
  //   id: 2,
  //   category: 'Диски для внедорожников',
  //   brand: 'Hummer',
  //   model: 'KMC XD755 Rockstar',
  //   price: 16000,
  //   vendor: 189571232114,
  //   desc: 'Hummer диски KMC XD755 Rockstar за 16к',
  //   reviews: [],
  //   modifications: [],
  //   stock: false,
  // },
  // {
  //   id: 3,
  //   category: 'Комплектующие',
  //   brand: 'Audi',
  //   model: 'GH PL90',
  //   price: 150000,
  //   vendor: 25742,
  //   desc: 'Audi диски GH PL90 за 150к',
  //   reviews: [],
  //   modifications: [],
  //   stock: false,
  // },
  // {
  //   id: 4,
  //   category: 'Тюнинг',
  //   brand: 'Toyota',
  //   model: 'UPLA X876 Space',
  //   price: 1000,
  //   vendor: 11232114,
  //   desc: 'Toyota диски UPLA X876 Space за 1к',
  //   reviews: [],
  //   modifications: [],
  //   stock: false,
  // },
];
