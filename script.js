"use strict";

const foo = (arg) => {
    let res = 'Ожидается появление строки...';
    if (typeof arg === "string") {
        const maxLength = 30;
        const str = arg.trim();
        if (str.length > maxLength) {
            res = str.substr(0, maxLength) + '...';
        } else {
            res = str;
        }
    }
    return res;
};

console.log('foo(): ', foo(5));
console.log('foo(): ', foo('    Строка менее 30 символов     '));
console.log('foo(): ', foo('    Строка более 30 символов -  очень длинная строчка'));