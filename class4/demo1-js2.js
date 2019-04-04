// 转化字符串 隐式 显示 string toString

var sToken = '' + 2;
console.log( '[隐式字符串转换]' + typeof(sToken) );    // string

var sToken = '' + null;
console.log( '[隐式字符串转换]' + typeof(sToken) );    // string

var sToken = '' + undefined;
console.log( '[隐式字符串转换]' + typeof(sToken) );    // string

var sToken = '' + true;
console.log( '[隐式字符串转换]' + typeof(sToken) );    // string

var sToken = '' + false;
console.log( '[隐式字符串转换]' + typeof(sToken) );    // string

// 显示
// String()
var sToken = String(2);
console.log( '[显式字符串转换 String ]' + typeof(sToken) + ' ' + sToken );

var sToken = String(null);
console.log( '[显式字符串转换 String ]' + typeof(sToken) + ' ' + sToken );

var sToken = String(undefined);
console.log( '[显式字符串转换 String ]' + typeof(sToken) + ' ' + sToken );

var sToken = String(true);
console.log( '[显式字符串转换 String ]' + typeof(sToken) + ' ' + sToken );

// toString
var iNum = 80;
sToken = iNum.toString();
console.log( '[显式字符串转换 toString ]' + typeof(sToken) + ' ' + sToken );   // 80.toString() 不可以

sToken = iNum.toString(16);                                                   // 出来16进制的字符串 50
console.log( '[显式字符串转换 toString ]' + typeof(sToken) + ' ' + sToken );

sToken = true.toString();
console.log( '[显式字符串转换 toString ]' + typeof(sToken) + ' ' + sToken );

// undefined.toString() null.toString() 都不行

// 一个二进制字符串，变成16进制字符串
// 先变成10进制数，然后toString 变成16进制string
var sString = '10101001';
var nNum = parseInt( sString, 2);
if( !isNaN(nNum) ){
    console.log( nNum.toString(16) );
}




