// 函数可以作为参数船体给另外一个函数

function f1(xingcan){
    console.log(xingcan);
    // ƒ f2(){  console.log('I am f2()');   return 'f2 say hello';  }

    console.log(xingcan());
    // I am f2();    f2 say hello

}

// f2() 是函数声明
function f2(){
    console.log('I am f2()');
    return 'f2 say hello';
}

f1(f2);


// f3是函数表达式
var f3 = function(){
    console.log('I am f3()');
    return 'f3 say hello';
};
f1(f3);

// 立即执行函数
var a = (function(x){
    console.log('I am f3()');
    return 'f3 say hello to ' + x + '!';
})('xu');

console.log(a);


var x = 5, y = 6;
function exchange( a, b ){
    var c = a;
    a = b;
    b = c;
}
exchange(x,y);
console.log( x, y );    // 5 6


var x = [5], y = [6];
function exchange( a, b ){
    var c = a[0];
    a[0] = b[0];
    b[0] = c;
}
exchange(x,y);
console.log( x, y );    // [6] [5]