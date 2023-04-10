//1.	Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9) и возвращает строку этих чисел в виде номера телефона.
// Формат номера телефона должен соответствовать "(xxx) xxx-xxxx".
function createPhoneNumber(num: number[]) {
    if(num.length != 10){
        return "Неверный формат номера телефона"
    }
    return "(" + num[0] + num[1] + num[2] + ")" + num[3] + num[4] + num[5] + "-" + num[6] + num[7] + num[8] + num[9];
}
console.log("Задание 1: " + createPhoneNumber([1,2,3,2,2,1,3,5,9,7]));

//2.	Если перечислить все натуральные числа до 10, кратные 3 или 5, то получим 3, 5, 6 и 9. Сумма этих чисел равна 23.
// Завершите метод так, чтобы он возвращал сумму всех чисел, кратных 3 или 5, меньше переданного числа.
// Кроме того, если число отрицательное, верните 0.

export class Challenge{
    static solution(number: number) : number{
        if(number < 0) {
            return;
        }
        else{
            let sum : number = 0;
            for (let i = 0; i < number; i++) {
                if(i % 3 || i % 5 == 0){
                    sum += i;
                }
            }
            return sum;
        }
    }
}
console.log("Задание 2: " + Challenge.solution(7));

//3.	Дан целочисленный массив nums, поверните массив вправо на k шагов, где k неотрицательно.
function reverseArray(arr: number[], k: number){
    if(k == 0) {
        return;
    }
    if(k > arr.length){
        return;
    }
    let arrres : number[] = [];
    for (let i = 0; i < k; i++) {
        arrres[i] = arr[arr.length - (k - i)];
    }
    for (let i = 0; i < arr.length - k; i++) {
        arrres[k + i] = arr[i];
    }
    return arrres;
}

console.log("Задание 3: " + reverseArray([1,2,3,4,5,6,7], 3));

//4. Есть два отсортированных массива nums1 и nums2 размера m и n соответственно,
// вернуть медиану двух отсортированных массивов. Медиана число (два числа) находящееся в середине массива.

function midNumber(arr1: number[], arr2: number[]) {
    let arrConcat : number[] = [];
    arrConcat = arr1.concat(arr2);
    function sortArr(a, b) {
        return a - b;
    }
    arrConcat.sort(sortArr);
    console.log(arrConcat);
    if(arrConcat.length % 2 == 0){
        return (arrConcat[arrConcat.length / 2 - 1] + arrConcat[arrConcat.length / 2]) / 2;
    }
    else {
        return arrConcat[Math.floor(arrConcat.length / 2)];
    }
}

console.log("Задание 4: " + midNumber([1, 7, 2], [5, 8, 20]));

//Определите, правильно ли заполнена доска судоку 9 x 9. В решении задачи используйте коллекцию Set.
// Заполненные ячейки должны быть проверены в соответствии со следующими правилами:
// -	каждая строка должна содержать цифры 1–9 без повторения;
// -	каждый столбец должен содержать цифры 1–9 без повторения;
// -	каждый из девяти подблоков сетки 3 x 3 должен содержать цифры 1–9 без повторения.

function sudoku(matrix:number[][]) : string {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (matrix[i][j] > 9 || matrix[i][j] < -1) {
                return "Вышли за пределы";
            }
        }
    }
    function RowCheck(matrix: number[][], k: number) : boolean{
        let s = new Set<number>();
        for (let i = 0; i < 9; i++) {
            if(matrix[k][i] == 0){
                continue;
            }
            if(s.has(matrix[k][i])){
                return false;
            }
            s.add(matrix[k][i]);
        }
        return true;
    }

    function ColCheck(matrix: number[][], k: number) : boolean{
        let s = new Set<number>();
        for (let i = 0; i < 9; i++) {
            if(matrix[i][k] == 0){
                continue;
            }
            if(s.has(matrix[i][k])){
                return false;
            }
            s.add(matrix[i][k]);
        }
        return true;
    }

    for (let i = 0; i < 9; i++) {
        if(!RowCheck(matrix, i) || !ColCheck(matrix, i)){
            return "Неверная доска";
        }
        return "Верная доска";
    }
}
 let Sudoku: number[][] = [
     [5, 3, 0, 0, 7, 0, 0, 0, 0],
     [6, 0, 0, 1, 9, 5, 0, 0, 0],
     [0, 9, 8, 0, 0, 0, 0, 6, 0],
     [8, 0, 0, 0, 6, 0, 0, 0, 3],
     [4, 0, 0, 8, 0, 3, 0, 0, 1],
     [7, 0, 0, 0, 2, 0, 0, 0, 6],
     [0, 6, 0, 0, 0, 0, 2, 8, 0],
     [0, 0, 0, 4, 1, 9, 0, 0, 5],
     [0, 0, 0, 0, 8, 0, 0, 7, 9]
 ]

console.log("Задание 5: " + sudoku(Sudoku));