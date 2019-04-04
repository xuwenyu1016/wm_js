
// 循环 for

// 输出0-19

for( var i = 0; i < 20; i++ ){
    document.write( i + ', ');
}

document.write('<hr/>');

var i = 0;
for( ; i < 20;  ){   // 第一个参数可以是空，第三个参数可以放到下面去
    document.write( i + ', ');
    i++;
}

document.write('<hr/>');

// do..while

var i = 0;
do{
    document.write( i + ', ');
    i++;
}while( i < 20 );

document.write('<hr/>');

var i = 0;
while( i < 20 ){
    document.write( i + ', ');
    i++;

    if( i == 10 ){
        break;
    }
}

document.write('<hr/>');
// 所有循环里面，break都管用

var i = 0;
while( i < 20 ){
    document.write( i + ', ');
    i++;

    if( i == 10 ){
        i++;
        continue;
    }
}

document.write('<hr/>');

// 代码的三种结构，顺序，条件，循环 的任意组合

// 50000以内，找到前五个满足：除7余5，除13余7，除17余13 的数

var
    //b1 = false, b2 = false, b3  = false,
    count = 0;

for( i = 1; i <= 50000; i++ ){
    //document.write( ( i * 7  + 5 ) + ', ');
    if( i % 7 == 5 && i % 13 == 7 && i % 17 ==13 ){
        document.write( i + ', ');
        count++;

        if(count >= 5){
            break;
        }

    }

}

document.write('<hr/>');

// 计算10! 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
var ret = 1, n = 10;
for( i = n; i > 1; i-- ){
    if( !isFinite( ret )){
        break;
    }
    ret *= i;
}
document.write( ret );

document.write('<hr/>');

var ret = 0, n = 1E1;   // 要限制n的大小
for( i = 1; i <= n; i++ ){
    if( n > 1E8 || !isFinite( ret ) ){
        break;
    }

    ret += i;
}
document.write( ret );

document.write('<hr/>');

// 5的n次幂
var iRet = 1,
    n = 10,
    root = 5;
for( var i = 0; i < n; i++ ){
    if(!isFinite(iRet)){
        break;
    }
    iRet *= root;
}
document.write( iRet );

