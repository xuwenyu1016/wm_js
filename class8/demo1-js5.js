function test( x, x ){
    console.log(x);         // x(){}
    x = 5;
    console.log(arguments);    // Arguments(2)[12,5]

    function x(){}
}
test( 12, 13 );


//GO:
//test:function
//
//test-AO:
//arguments: [ 12, 13 ];
//
//x: 第一次绑定12， 第二次绑定13，第二次覆盖第一次，所以用13
//x-(arguments[1]):13 -> x变成函数 x-(arguments[1]):function -> x = 5

