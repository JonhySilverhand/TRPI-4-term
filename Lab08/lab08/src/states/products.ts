import IProduct from "../types/productsType";

const PRODUCTS : IProduct[] = [
    {id: 1, price: '95.69 BYN', stocked: true, name: 'Таблетка Bravecto от блох и клещей для собак от 40 до 56 кг', image: require("../files/Bravecto.jpeg")},
    {id: 2, price: '17.24 BYN', stocked: true, name: 'Селафорт, капли противопаразитные, для кошек и собак менее 2,5 кг', image: require("../files/Selafort_15_0_25.jpg")},
    {id: 3, price: '22.47 BYN', stocked: false, name: 'Таблетки от блох и клещей Фронтлайн НЕКСГАРД, 11,3 мг, 2-4 кг', image: require("../files/frontline-nexgard.jpg")},
    {id: 4, price: '12.29 BYN', stocked: true, name: 'Ошейник Дана Ультра антипаразитарный, для кошек, розовый, 35 см', image: require("../files/Dana_ultra.jpg")},
    {id: 5, price: '7.94 BYN', stocked: false, name: 'Таблетки Милпразон от глистов, для собак маленьких пород до 5 кг', image: require("../files/Milprazon.jpg")},
    {id: 6, price: '18.74 BYN', stocked: true, name: 'Таблетки Мильбемакс антигельминт, для щенков и собак мелких пород', image: require("../files/Milbemaks.jpg")},
    {id: 7, price: '36.74 BYN', stocked: false, name: 'Капли IN-UP инсектоакарицидные и антигельминтные для собак 30-50 кг, 5 мл', image: require("../files/IN_UP.jpg")},
    {id: 8, price: '11.99 BYN', stocked: true, name: 'Барс ушные капли, для собак и кошек, 20 мл', image: require("../files/Bars.jpg")},
    {id: 9, price: '6.52 BYN', stocked: false, name: 'Таблетки от глистов ZOOЛЕКАРЬ для собак, 1 таблетка на 10 кг', image: require("../files/lekar.jpg")},
    {id: 10, price: '18.74 BYN', stocked: true, name: 'Алезан крем для суставов, 100 мл', image: require("../files/Alezan.jpg")},
    {id: 11, price: '5.92 BYN', stocked: true, name: 'Шампунь Amstrel для кошек, антипаразитарный', image: require("../files/Shampoo.jpg")},
    {id: 12, price: '8.54 BYN', stocked: true, name: 'Биодобавка кормовая Amstrel Антисекс, 10 мл', image: require("../files/AntiSex.jpg")}
];
export default PRODUCTS;