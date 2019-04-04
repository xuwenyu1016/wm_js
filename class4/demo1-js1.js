// typeof

var x = 1;
console.log( '[typeof] ' + typeof( x ) );   // number

x = 'abc';
console.log( '[typeof] ' + typeof( x ) );   // string

x = true;
console.log( '[typeof] ' + typeof( x ) );   // boolean

x = null;
console.log( '[typeof] ' + typeof( x ) );   // object

x = undefined;
console.log( '[typeof] ' + typeof( x ) );   // undefined

var x2;
console.log( '[typeof] ' + typeof( x2 ) );  // undefined

// 判断一个东西是否真的存在， 可以 typeof(xx) 为undefined  但是 typeof(xx) == undefined 为false

// 转换有两种，显示 和 隐式

// 转换成数字 显示 Number() parseInt() parseFloat() isNaN()

var sNum = '2',
    iNum = 2,
    ret = sNum + iNum;

console.log('隐式类型转换 ' + typeof(ret) );   // 22   string

ret = sNum - iNum;
console.log('隐式类型转换 ' + typeof(ret) );   // 0   number


// 显示类型转换
var iNum = Number(false);
console.log('[Number() = ]' + iNum );   // 0

var iNum = Number(true);
console.log('[Number() = ]' + iNum );   // 1

var iNum = Number(undefined);
console.log('[Number() = ]' + iNum );   // NaN

var iNum = Number(null);
console.log('[Number() = ]' + iNum );   // 0

var iNum = Number('10');
console.log('[Number() = ]' + iNum );

var iNum = Number('10.2');
console.log('[Number() = ]' + iNum );

// Number 中不分小数和整数

var iNum = Number(' 10.5.2 ');
console.log('[Number() = ]' + iNum );   // NaN

var iNum = Number('');
console.log('[Number() = ]' + iNum );   // 0

// Number() 里面，false, null, '' => 0; undefined => NaN; 不是数 => NaN

// parseInt()

var iNum = parseInt('1234');
console.log('[parseInt() = ]' + iNum );

iNum = parseInt('1234abc');         //  1234
console.log('[parseInt() = ]' + iNum );

iNum = parseInt('1.5.3');         //  1
console.log('[parseInt() = ]' + iNum );

iNum = parseInt('a111');         //  NaN
console.log('[parseInt() = ]' + iNum );

// 0x 开始，一般是16进制
iNum = parseInt('0xA0');         //  160
console.log('[parseInt() = ]' + iNum );

// 0--- 8进制
iNum = parseInt('070');         //  70  以0开头的8进制无效
console.log('[parseInt() = ]' + iNum );

iNum = parseInt('');            // NaN
console.log('[parseInt() = ]' + iNum );

iNum = parseInt('1.1E5');       //  1
console.log('[parseInt() = ]' + iNum );

iNum = parseInt('1E5');       //  1
console.log('[parseInt() = ]' + iNum );

iNum = parseInt('123.9');       //  123
console.log('[parseInt() = ]' + iNum );

iNum = parseInt('0XA0', 16);       //  160  16进制
console.log('[parseInt() = ]' + iNum );

iNum = parseInt('A0', 16);       //  160  16进制
console.log('[parseInt() = ]' + iNum );

iNum = parseInt('70', 8);       //  56  8进制
console.log('[parseInt() = ]' + iNum );

iNum = parseInt('70', 9);       //  63  9进制 最高可以32进制
console.log('[parseInt() = ]' + iNum );

iNum = parseInt(undefined);     // NaN
console.log('[parseInt() = ]' + iNum );

iNum = parseInt(null);          // NaN
console.log('[parseInt() = ]' + iNum );

iNum = parseInt(false);         // NaN
console.log('[parseInt() = ]' + iNum );


// 记忆 Number 和 parseInt 的区别
// Number 是本质上可以转化为数字，parseInt 是看上去像数字
// 1. Number 可以，parseInt 不可以: false, null, ''
// 2. Number 不可以，但是parseInt 可以: 数字开头，参杂其他
// 3. 都不可以: undefined, 字母开头的字符串

// parseFloat
var fNum = parseFloat('10');        // 10
console.log('[parseFloat() = ]' + fNum );

var fNum = parseFloat('10.00');        // 10
console.log('[parseFloat() = ]' + fNum );

var fNum = parseFloat('10.05');        // 10.05
console.log('[parseFloat() = ]' + fNum );

var fNum = parseFloat('10.05.03');        // 10.05
console.log('[parseFloat() = ]' + fNum );

var fNum = parseFloat(' 10.05.03 ');        //  前后都有空格 10.05
console.log('[parseFloat() = ]' + fNum );

var fNum = parseFloat('10.2aaa');        //  后面有字母 10.2
console.log('[parseFloat() = ]' + fNum );


var fNum = parseFloat('1.2E5qer');        //  120000
console.log('[parseFloat() = ]' + fNum );

// parseFloat 和 parseInt 的区别： parseFloat 支持小数点 和 科学计数法，其他都一样


// isNaN
console.log('[isNaN] = ' + isNaN(NaN));     // true
console.log('[isNaN] = ' + isNaN('qqa'));   // true
console.log('[isNaN] = ' + isNaN(undefined));   // true
console.log('[isNaN] = ' + isNaN(null));    // false
console.log('[isNaN] = ' + isNaN('123'));   // false
console.log('[isNaN] = ' + isNaN(''));      // false

// isNaN 底层调用Number函数，所以能被Number parse的，isNaN 都是false

typeof(abc) == 'undefined';   // true




















