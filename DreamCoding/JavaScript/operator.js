// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals:

'''
1 + 2 = ${1 + 2}`);

console.log('ellie\'s book');

// 2. Numeric operators
console.log(1 + 1);  //add
console.log(1 - 1);  // substract
console.log(1 / 1);  // divide
console.log(1 * 1);  // multiply
console.log(5 % 2);  // remainder
console.log(2 ** 3);  // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;  // x = x + y;
x -= y;  // x = x - y;
x *= y;  // x = x * y;
x /= y;  // x = x / y;

// 5. Coparison operators
console.log(10 < 6);  // less than
console.log(10 <= 6);  // less than or equal
console.log(10 > 6);  // greater than
console.log(10 >= 6);  // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);
// check()함수 같이 heavy한 함수는 비교 연산 맨 앞이 아니라 맨 뒤로 보내자!!

// $$ (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject & nullableObject.something

function check(){
   for (let i = 0; i < 10; i++){
      //wasting time
      console.log('😱');
   }
   return true;
}

// ! (not)
console.log(!value1);  // true

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);  // true
console.log(stringFive != numberFive);  // false

// === strict equality, no type conversion
console.log(stringFive === numberFive);  // false
console.log(stringFive !== numberFive);  // true

// object equality by reference
const ellie1 = { name: 'ellie'};
const ellie2 = { name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);  // false
console.log(ellie1 === ellie2);  // false
console.log(ellie1 === ellie3);  // true
// 관련 이미지 경로
console.log("./lecture_img/object equality by reference.png");
