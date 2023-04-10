const isFetching = true;
const isLoading = false;
const int = 42;
const float = 4.2;
const num = 3e10;
const message = 'Hello Typescript';
const numberArray = [1, 1, 2, 3, 5, 8, 13];
const numberArray2 = [1, 1, 2, 3, 5, 8, 13];
const words = ['Hello', 'Typescript'];
// Tuple
const contact = ['Vladilen', 1234567];
// Any
let variable = 42;
// ...
variable = 'New String';
variable = [];
// ====
function sayMyName(name) {
    console.log(name);
}
sayMyName('Хайзенберг');
// Never
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) {
    }
}
const login = 'admin';
const id1 = 1234;
const id2 = '1234';
//# sourceMappingURL=1_types.js.map