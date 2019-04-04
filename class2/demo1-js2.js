// =

// += -= /= %=

var iNum = 5;
iNum += 15;      // 等价于 iNum = iNum + 15
document.write('[+=] = ' + iNum + '<hr/>');

var iNum = 5;
iNum -= 15;      // 等价于 iNum = iNum - 15
document.write('[+=] = ' + iNum + '<hr/>');

var iNum = 5;
iNum *= 15;      // 等价于 iNum = iNum * 15
document.write('[*=] = ' + iNum + '<hr/>');

var iNum = 5;
iNum /= 15;      // 等价于 iNum = iNum / 15
document.write('[/=] = ' + iNum + '<hr/>');

var iNum = 5;
iNum %= 5;      // 等价于 iNum = iNum % 5
document.write('[%=] = ' + iNum + '<hr/>');

// 比较运算符    ==   ===  !=
// 数字比较
document.write('[>] 2 > 1 ? ' + ( 2 > 1 ) + '<hr/>');   // true
document.write('[<] 2 < 1 ? ' + ( 2 < 1 ) + '<hr/>');
document.write('[>=] 2 >= 1 ? ' + ( 2 >= 1 ) + '<hr/>');
document.write('[<=] 2 <= 1 ? ' + ( 2 <= 1 ) + '<hr/>');

// 字符串比较
document.write('[>] \'aa\' > \'bb\' ? ' + ( 'aa' > 'bb' ) + '<hr/>');   // false

//ASCII表
//数字       0    30H
//           1    31H
//
//大写字母    A   41H
//小写字母    a   61H
document.write('[>] \'aaa\' > \'abb\' ? ' + ( 'aaa' > 'abb' ) + '<hr/>');
// 先比较第一个字母，再比较第二个字母，以此类推

document.write('[>] \'25\' > \'4\' ? ' + ( '25' > '4' ) + '<hr/>');
// 这里也是比较字符串，字符串2小于字符串4

document.write('[>] \'25\' > 4 ? ' + ( '25' > 4 ) + '<hr/>');
// true     这里会把25变成数字

document.write('[>] \'aa\' > 4 ? ' + ( 'aa' > 4 ) + '<hr/>');   // false
document.write('[>] \'aa\' < 4 ? ' + ( 'aa' < 4 ) + '<hr/>');   // false
// 这里都把 'aa' 变成了NaN，NaN和 数字4比较，都是false

document.write('[?:] 25 > 4 ' + ( 25 > 4 ? 'large' : 'small') + '<hr/>');

//document.write('[?:] 25 > 4 ' + ( 25 > 4 ? 'large' : 'small') + '<hr/>');


document.write('[==] null == undefined ? ' + ( null == undefined ) + '<hr/>');  // true
document.write('[==] NaN == NaN ? ' + ( NaN == NaN ) + '<hr/>');    // false
document.write('[!=] NaN != NaN ? ' + ( NaN != NaN ) + '<hr/>');    // true
document.write('[==] false == 0 ? ' + ( false == 0 ) + '<hr/>');    // true
document.write('[==] true == 1 ? ' + ( true == 1 ) + '<hr/>');      // true
document.write('[==] true == 2 ? ' + ( true == 2 ) + '<hr/>');      // false

document.write('[==] undefined == 0 ? ' + ( undefined == 0 ) + '<hr/>');    // false
document.write('[==] null == 0 ? ' + ( null == 0 ) + '<hr/>');      // false

document.write('[==] \'5\' == 5 ? ' + ( '5' == 5 ) + '<hr/>');  // true
document.write('[===] \'5\' === 5 ? ' + ( '5' === 5 ) + '<hr/>');    // false
document.write('[===] \'5\' !== 5 ? ' + ( '5' !== 5 ) + '<hr/>');   // true


document.write('[==] null == undefined ? ' + ( null == undefined ) + '<hr/>');
document.write('[===] null === undefined ? ' + ( null === undefined ) + '<hr/>');

document.write('[==] true == 1 ? ' + ( true == 1 ) + '<hr/>');
document.write('[===] true === 1 ? ' + ( true === 1 ) + '<hr/>');
// ==是false，===一定是false；== 是true，===有可能是true，也有可能是false

document.write('[==] false == 0 ? ' + ( false == 0 ) + '<hr/>');
document.write('[===] false === 0 ? ' + ( false === 0 ) + '<hr/>');

document.write('[==] [] == \'\' ? ' + ( [] == '' ) + '<hr/>');     // true
document.write('[===] [] === \'\' ? ' + ( [] === '' ) + '<hr/>');

document.write('[==] {} == \'[object Object]\' ? ' + ( {} == '[object Object]' ) + '<hr/>');
document.write('[===] {} === \'[object Object]\' ? ' + ( {} === '[object Object]' ) + '<hr/>');

document.write('[==] [5] == \'5\' ? ' + ( [5] == '5' ) + '<hr/>');     // true
document.write('[===] [5] === \'5\' ? ' + ( [5] === '5' ) + '<hr/>');

// 如果一个运算数是boolean，检查相当性之前，把它转换成数字值，false = 0， true = 1
// 如果一个运算数是字符串，另一个是数字，检查相当性之前，要尝试把字符串转换成数字
// 如果一个运算数是对象，另一个是字符串，在检查相等性之前，要尝试把对象转换成字符串
// 如果一个运算数是对象，另一个是数字，在检查相等性之前，要尝试把对象转换成数字


// 逻辑运算     !     &&     ||      非 与 或

var bRst = true;
var bRst2 = true;
document.write('[&&] bRst && bRst2 ? ' + ( bRst && bRst2 ) + '<hr/>');

//  &&  与    只要有false，返回都是false   都是boolean的情况下
document.write('[&&] true && false ? ' + ( true && false ) + '<hr/>');  //false
document.write('[&&] true && true ? ' + ( true && true ) + '<hr/>');    //true
document.write('[&&] false && false ? ' + ( false && false ) + '<hr/>');    //false
document.write('[&&] false && true ? ' + ( false && true ) + '<hr/>');  //  false

//
document.write('[&&] 0 && true ? ' + ( 0 && true ) + '<hr/>');      // 返回0
// 0,undefined, null, NaN, ''
// x && y, 如果x是false 或者等价于false， return x 并且 y不会运行，else return y
document.write('[&&] undefined && true ? ' + ( undefined && true ) + '<hr/>');  // undefined
document.write('[&&] null && true ? ' + ( null && true ) + '<hr/>');    // null
document.write('[&&] NaN && true ? ' + ( NaN && true ) + '<hr/>');      // NaN

var iCount = 0;
document.write('[&&] 0 && true ? ' + ( 0 && (iCount++) ) + ( iCount ) + '<hr/>');
document.write('[&&] undefined && true ? ' + ( undefined && (iCount++) ) + ( iCount ) + '<hr/>');
document.write('[&&] null && true ? ' + ( null && (iCount++) ) + ( iCount ) + '<hr/>');
document.write('[&&] NaN && true ? ' + ( NaN && (iCount++) ) + ( iCount ) + '<hr/>');
// 这里iCount 都是0，因为前面都是false，后面就不运行，直接返回了

//      ||  或   如果x和y是或的关系，看x，如果x是true，直接返回true，否则看后面的那个，都是false的，返回false
document.write('[||] true || false ? ' + ( true || false ) + '<hr/>');  // true
document.write('[||] true || true ? ' + ( true || true ) + '<hr/>');    // true
document.write('[||] false || false ? ' + ( false || false ) + '<hr/>');    //false
document.write('[||] false || true ? ' + ( false || true ) + '<hr/>');      //true

// 1 || true  结果 1

//      !   非
document.write('[!] !false ? ' + ( !false ) + '<hr/>');

//  运算符的优先级：低优先级让位于高优先级；同优先级的从左到右
//  ()
//  !, ++, --
//  *, /, %
//  +, -
//  <, >, >=, <=
//  ==, !=, ===, !==
//  &&
//  ||
//  ? ...:... 三元运算
//  =, +=, -=, *=, /=, %=
//  ,   如果存在多个逗号，以最后一个逗号为准

// 两个变量都是数字，相互对调
var iNum1 = 123;
var iNum2 = 456;
//var iTemp = iNum2;
//iNum2 = iNum1;
//iNum1 = iTemp;    // 多一个变量的方法

iNum1 += iNum2;     // 123 + 456
iNum2 = iNum1 - iNum2;  // 579 - 456
iNum1 = iNum1 - iNum2;  // 579 - 123

var iNum1 = 4;
document.write('[1]' + ( 30 < 15 ? !true : true, iNum1 * 4 + 5 < 3 == 25 > 24 && false || true ) + '<hr/>' );





