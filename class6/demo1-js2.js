// 函数表达式

//  (function f(){});

//  var f = function ff(){};

//  ff( a, function fff(){}, b );


//var f = function fact(x){
//    if( x <= 1 ){
//        return 1;
//    }else{
//        return x * fact( x - 1 );
//    }
//};

var f = function(x){    // 和上面相比，这个函数名字去掉了
    if( x <= 1 ){
        return 1;
    }else{
        return x * arguments.callee( x - 1 );
    }
};
// 这是阶乘 5! = 5 * 4 *3 * 2 * 1

console.log( f(5) );