"use strict";
/* 基本の型 */
const message = 'Hello World'; // 文字列
const age = 123; // 数値
const isActive = true; // 真偽値
const container = null; // null
const box = undefined; // undefined
const nandemo = 123;
/* 配列の型 */
const numbers = [1, 2, 3];
const names = ['John', 'Jane'];
/* オブジェクトの型 */
const user = { name: 'taro', age: 20 };
console.log(user.name);
/* 関数の型 */
const add = (a, b) => a + b;
const user2 = { name: 'taro', age: 20 };
const foo = 'foo';
const bar = 123;
const color = 'red';
const userName = { name: 'taro' };
// type ColorList = { [key: string]: Color };
const colorList = {
    0: 'red',
    1: 'blue',
    2: 'green',
};
// 他にもいっぱいあるよ
//  https://www.typescriptlang.org/docs/handbook/generics.html
/* Generics */
const getValue = (value) => value;
const valueStr = getValue('foo');
const valueNum = getValue(123);
