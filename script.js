"use strict";

const arr = ['3458', '456623', '9462953', '284673', '695863', '28758', '986453'];

for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
        console.log(arr[i]);
    };
};

const dividers = el => {
    let arr = [];
    if (el !== 1) {
        arr.push(1);
        for (let j = 2; j * j <= el; j++) {
            if (el % j === 0) {
                arr.push(j);
            };
        };
    };
    arr.push(el);
    return arr;
};

for (let i = 1; i <= 100; i++) {
    const n = dividers(i);
    if (n.length <= 2) {
        console.log(`${i}: Простое число. Делители этого числа: ${n.join(', ')}`);
    };
};

for (let i = 1; i <= 100; i++) {
    console.log(`${i}: Делители этого числа: ${dividers(i).join(', ')}`);
};