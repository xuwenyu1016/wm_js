// 包装类

var n1 = 123;
var n2 = new Number(123);

console.log( typeof(n1) );  // number
console.log( typeof(n2) );  // object

var n3 = n1 + n2;
console.log( n3 );  // 246

var s1 = 'aaa';
var s2 = new String('aaa');
console.log( typeof(s1) );  // string
console.log( typeof(s2) );  // object

var b1 = true;
var b2 = new Boolean(true);
console.log( typeof(b1) );  // string
console.log( typeof(b2) );  // object

var arr = [ 1, 2, 3, 4 ];
arr.length = 2;
console.log(arr);   // (2) [1, 2]

var str = '1234';
str.length = 2;
console.log(str);       // 1234



