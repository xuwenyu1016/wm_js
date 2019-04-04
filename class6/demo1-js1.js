// 函数 function

x = [ 1, 2, 3, 4, 5, 6, NaN, undefined, null, 'abc'];   // 求和

// 参数不符合要求
// 1. 发现不符合的，拒绝服务，但是保证自己的代码不崩溃
// 2. 发现不合格，把合格部分处理

var iRet = 0;
for( var i = 0; i < x.length; i++ ){
    if( typeof( x[i] ) == 'number' ){
        if( !isNaN(x[i]) || isFinite(x[i])){
            iRet += x[i];
        }
    }
}

console.log(iRet);


// 数字倒序 12345 => 54321

function reverseNum(num){
    if( typeof( num ) !== ('number') ){
        return 'Error';
    }else if( isNaN(num) || !isFinite(num)){
        return 'Error';
    }else{
        return +num.toString().split('').reverse().join('');
    }

}
console.log(reverseNum(1234));