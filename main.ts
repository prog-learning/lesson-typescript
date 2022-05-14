/* 基本の型 */
const message: string = 'Hello World'; // 文字列
const age: number = 123; // 数値
const isActive: boolean = true; // 真偽値
const container: null = null; // null
const box: undefined = undefined; // undefined

/* 配列の型 */
const numbers: number[] = [1, 2, 3];
const names: string[] = ['John', 'Jane'];

/* オブジェクトの型 */
const user: { name: string; age: number } = { name: 'taro', age: 20 };

/* 型オブジェクトの定義 */
type User = { name: string; age: number };
const user2: User = { name: 'taro', age: 20 };

/* 関数の型 */
const add = (a: number, b: number): number => a + b;

/* リテラル型 */
type StringOrNumber = string | number;
const foo: StringOrNumber = 'foo';
const bar: StringOrNumber = 123;

type Color = 'red' | 'blue' | 'green';

/* Utility Types */

// Omit
type UserName = Omit<User, 'age'>;
const userName: UserName = { name: 'taro' };

// Record
type ColorList = Record<number, Color>;

const colorList: ColorList = {
  0: 'red',
  1: 'blue',
  2: 'green',
};

// 他にもいっぱいあるよ
//  https://www.typescriptlang.org/docs/handbook/generics.html

/* Generics */
const getValue = <T>(value: T): T => value;

const valueStr = getValue<string>('foo');
const valueNum = getValue<number>(123);
