
var iNum = 86;
document.write('iNum = ' + iNum + '<hr/>');

// 2进制 8进制 16进制
var oNum = 061;  // 8进制
document.write('oNum = ' + oNum + '<hr/>');

var xNum = 0x2e;    // 16进制
document.write('xNum = ' + xNum + '<hr/>');

var fNum = 5.01;    // 浮点数
document.write('fNum = ' + fNum + '<hr/>');

// cpu 弄整数，能处理浮点数，但是非常慢  gpu处理浮点数，适合图形处理，挖矿，人工智能

var fNum = 5.61E7;  // 科学计数法
document.write('fNum = ' + fNum + '<hr/>');

var iNum = Number.MAX_VALUE;    // 大写字母开头的都是构造函数    1.7976931348623157e+308
document.write('iNum = ' + iNum + '<hr/>');

var iNum = Number.MIN_VALUE;    // 5e-324
document.write('iNum = ' + iNum + '<hr/>');

var iNum = Number.POSITIVE_INFINITY;    // 比max value大，就是infinity
document.write('iNum = ' + iNum + '<hr/>');

var iNum = Number.NEGATIVE_INFINITY;      // -infinity
document.write('iNum = NEGATIVE_INFINITY ' + iNum + '<hr/>');

var iNum = Number.MAX_VALUE * 1.1;      // infinity
document.write('iNum = ' + iNum + '<hr/>');
document.write('iNum == Number.POSITIVE_INFINITY ' + ( iNum == Number.POSITIVE_INFINITY ) + '<hr/>');   // true 都是inifinity

document.write('isFinite( iNum ) ' + isFinite( iNum ) + '<hr/>');   // 是 infinity 所以false

var iNum = NaN;     // not a number
document.write('iNum = ' + iNum + '<hr/>');
document.write('NaN == NaN =' + ( NaN == NaN ) + '<hr/>'); //false
document.write('NaN === NaN =' + ( NaN === NaN ) + '<hr/>'); //false

document.write('isNaN(NaN) =' + isNaN(NaN) + '<hr/>');

var sToken = 'hi';
document.write('sToken ' + sToken + '<hr/>');

var sToken = "hi";
document.write('sToken ' + sToken + '<hr/>');

var sToken2 = sToken.concat(' abc', ' 777', '我');    // concat 拼接字符串
document.write('sToken2 = ' + sToken2 + '<hr/>');

document.write('sToken2.length = ' + sToken2.length + '<hr/>');

var sToken = 'hello world';
var iLength = sToken.indexOf('o');  // 从0开始的第四个 indexOf 如果要检索的字符串值没有出现，则该方法返回 -1    indexOf(searchvalue,fromindex) 第二个参数可选，即规定在字符串中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1
document.write('iLength = ' + iLength + '<hr/>');
document.write('sToken.charAt ' + sToken.charAt(iLength)  + '<hr/>');   // charAt   .charAt(index)  返回指定位置的字符
document.write('sToken.substring ' + sToken.substring( 0, iLength + 1 )  + '<hr/>');    // substring    .substring(start,stop)  返回一个新的字符串 内容是从 start 处到 stop-1 处的所有字符，其长度为 stop 减 start。

// 查找获取第二个单词
var sToken = 'abcd abce a124 5599';
//var spaceS = sToken.indexOf(' ');
//console.log(spaceS);
//var newStr = sToken.substring( spaceS, 9);
//console.log(newStr);
var iStart = sToken.indexOf(' '), iEnd;
if( iStart != -1 ){
    iEnd = sToken.indexOf(' ', iStart + 1 );   // 找第二个空格
    if( iEnd != -1 ){
        console.log( '[' + sToken.substring( iStart + 1 , iEnd ) + ']');
    }
}

// boolean
var bCheck = true;
document.write('bCheck ' + bCheck + '<hr/>');

// undefined
var oTemp;
document.write('oTemp ' + oTemp + '<hr/>');
document.write('oTemp ' + typeof(oTemp) + '<hr/>');

var oTemp = 1;
document.write('oTemp 1 ' + typeof(oTemp) + '<hr/>');
var oTemp = 'abc';
document.write('oTemp abc ' + typeof(oTemp) + '<hr/>');
var oTemp = true;
document.write('oTemp true ' + typeof(oTemp) + '<hr/>');
var oTemp = null;                                       // object
document.write('oTemp null ' + typeof(oTemp) + '<hr/>');
var oTemp = undefined;
document.write('oTemp undefined ' + typeof(oTemp) + '<hr/>');
var oTemp233;
document.write('oTemp233 ' + typeof(oTemp233) + '<hr/>');

document.write('undefined == undefined ' + ( undefined == undefined ) + '<hr/>');   // true
document.write('undefined == null ' + ( undefined == null ) + '<hr/>');             // true
document.write('null == null ' + ( null == null ) + '<hr/>');                       // true