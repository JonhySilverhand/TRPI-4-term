/*1. Хранилище всего имеющегося товара в интернет-магазине представляет собой объект products.
Весь товар разделен на категории, одна из них «Обувь», которая в свою очередь делится на виды
«Ботинки», «Кроссовки», «Сандалии». О каждой паре обуви хранится следующая информация:
уникальный номер товара, размер обуви, цвет, цена.  */
interface IProducts {
    shoes: {
        boots: {
            id: number,
            size: number,
            color: string,
            price: number

        },
        sneakers: {
            id: number,
            size: number,
            color: string,
            price: number
        },
        sandals: {
            id: number,
            size: number,
            color: string,
            price: number
        },
    },
    [Symbol.iterator]()
}

let Products: IProducts = {
    shoes: {
        boots: {
            id: 1,
            size: 34,
            color: 'red',
            price: 256
        },
        sneakers: {
            id: 2,
            size: 45,
            color: 'orange',
            price: 303
        },
        sandals: {
            id: 3,
            size: 41,
            color: 'yellow',
            price: 70
        }
    },
    // 2. Реализуйте итератор для объекта products для доступа к каждому товару.
    [Symbol.iterator]() {
        return {
            current: this.shoes.boots.id,
            last: this.shoes.sandals.id,
            next() {
                if (this.current <= this.last) {
                    return {done: false, value: this.current++};
                } else {
                    return {done: true};
                }
            }
        };
    }
}

for (let value of Products) {
    alert(value);
}

/*3. Реализуйте фильтр обуви по цене в заданном диапазоне, по заданному размеру, по заданному цвету.
Выведите номера товаров, соответствующих заданному условию (фильтру). */

let choice: number = 1;
let found: boolean = false;
while (choice) {
    choice = Number(prompt('Выберите действие: \n1 - Фильтр по цене \n' +
        '2 - Фильтр по размеру \n3 - Фильтр по цвету \n0 - Выход'));

    switch (choice) {
        case 1:
            let minPrice = prompt('Введите минимальную цену');
            let maxPrice = prompt('Введите максимальную цену');
            for (let key in Products.shoes) {
                if (Products.shoes[key].price >= minPrice && Products.shoes[key].price <= maxPrice) {
                    alert(Products.shoes[key].id);
                    found = true;
                }
            }
            if (!found) {
                alert("Ничего не найдено");
            }
            found = false;
            break;
        case 2:
            let size = prompt('Введите размер');
            for (let key in Products.shoes) {
                if (Products.shoes[key].size == size) {
                    alert(Products.shoes[key].id);
                    found = true;
                }
            }
            if (!found) {
                alert("Ничего не найдено");
            }
            found = false;
            break;
        case 3:
            let color = prompt('Введите цвет');
            for (let key in Products.shoes) {
                if (Products.shoes[key].color == color) {
                    alert(Products.shoes[key].id);
                    found = true;
                }
            }
            if (!found) {
                alert("Ничего не найдено");
            }
            found = false;
            break;
        case 0:
            choice = 0;
            break;
        default:
            alert('Неверный ввод');
    }
}


/*4. Каждый товар (пара обуви) из предыдущей задачи представляет собой однотипные объекты.
 Учитывая это, каким образом мы можем оптимизировать создание нового товара в хранилище?
 Оптимизируйте объект-хранилище, при этом свойства «id», «цвет» и «размер» должны быть доступны только для чтения,
 свойство «id» не может быть удалено. */

class Product
{
    public readonly id : number;
    public readonly size : number;
    public readonly color : string;
    public price : number;
    public sale : number;
    private endPrice : number;
    /*5. Добавьте геттер и сеттер для свойства «конечная стоимость», учитывая то,
    что свойства «скидка» и «конечная стоимость» взаимозависимые.*/

   public get EndPrice(): number {
        return this.endPrice;
   }
    public set EndPrice(value: number) {
        this.price = value;
        this.endPrice = (100 - this.sale) * this.price / 100;
    }

    constructor(ID: number, Size: number, Color: string, Price: number, Sale: number) {
        this.id = ID;
        this.size = Size;
        this.color = Color;
        this.price = Price;
        this.sale = Sale;
        this.endPrice = (100 - Sale) * Price / 100;
    }
}

const boots1 = new Product(1, 36, "Красный", 164, 10);
const boots2 = new Product(2, 41, "Черный", 230, 20);
const boots3 = new Product(3, 38, "Синий", 860, 30);
const boots4 = new Product(4, 42, "Белый", 340, 40);

let warehouse : Product[] = [boots1, boots2, boots3, boots4];
for (let product of warehouse) {
    alert("ID: " + product.id + " " + "EndPrice: " + product.EndPrice)
}