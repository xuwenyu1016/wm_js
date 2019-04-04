// 加法有数学加法，字符串拼接；减号只有 数学减法


var iNum = 3 + 3;                       // 数学加法
document.write('[+] = ' + iNum + '<hr/>');

iNum = iNum +3;
document.write('[+] = ' + iNum + '<hr/>');


iNum = Number.MAX_VALUE + 1E307;        // Infinity Number.MAX_VALUE 1.79e+308
document.write('[+] = ' + iNum + '<hr/>');


iNum = Number.MAX_VALUE + 1E308 - Number.MAX_VALUE;        // Infinity
document.write('[+] = ' + iNum + '<hr/>');

iNum = Number.Infinity + 1;             // NaN
document.write('[+] = ' + iNum + '<hr/>');


var sToken = 'abc' + 'edf';         // 字符串拼接
document.write('[+] = ' + sToken + '<hr/>');

var sToken = 5 + '5';                   // 55
document.write('[+] = ' + sToken + '<hr/>');

var sToken = 5 - '5';                   // 0
document.write('[-] = ' + sToken + '<hr/>');

var sToken = '5' - '5';                   // 0
document.write('[-] = ' + sToken + '<hr/>');

var iNum = 7 - 3;
document.write('[-] = ' + iNum + '<hr/>');

var iNum = 7 * 3;
document.write('[*] = ' + iNum + '<hr/>');

//                                        / 除号

var iNum = 4 / 3;
document.write('[/] = ' + iNum + '<hr/>');

var iNum = 4 / 0;                           // Infinity
document.write('[/] = ' + iNum + '<hr/>');

var iNum = 0 / 0;                           // NaN
document.write('[/] = ' + iNum + '<hr/>');

//                                         % 取余
var iNum = 4 % 3;                           // 余 1
document.write('[%] = ' + iNum + '<hr/>');

var iNum = 4.5 % 3;                           // 余 1.5
document.write('[%] = ' + iNum + '<hr/>');

var iNum = 4 % 0;                           // 余 NaN
document.write('[%] = ' + iNum + '<hr/>');

var iNum = 0 % 0;                           // 余 NaN
document.write('[%] = ' + iNum + '<hr/>');

//     ++
//iNum++;
//iNum = iNum + 1;
var iNum = 5;
iNum++;                                 // 6
document.write('[++] = ' + iNum + '<hr/>');

++iNum;                                 // 7
document.write('[++] = ' + iNum + '<hr/>');

document.write('[++] = ' + ( iNum++ ) + '<hr/>');   // 7    iNum 是一个变量，但是iNum是一个表达式

//++放后面，表达式等于变量自己，变量加1；如果++放前面，表达式就是变量都是加一
document.write('[++] = ' + ( ++iNum ) + '<hr/>');   // 9


var iNum = 5;
iNum = iNum++ + 10 + ++iNum;    // 15 + 7
document.write('[++] = ' + iNum + '<hr/>'); //22

var iNum = 7;
iNum = 10 - ++iNum + ++iNum - iNum++ - iNum++;  // -8
document.write('[++] = ' + iNum + '<hr/>');

// --
var iNum = 5;
--iNum;
document.write('[--] = ' + iNum + '<hr/>');

var iNum = 5;
iNum = iNum-- + 10 + --iNum;
document.write('[--] = ' + iNum + '<hr/>');


var iNum = 5;
iNum = ( 13 % 7 ) + 4 * 7 / iNum-- - ++iNum;    // 6.6
document.write('[--] = ' + iNum + '<hr/>');

