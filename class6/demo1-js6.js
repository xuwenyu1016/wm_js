// 形参 和 实参
// 形参和实参是不一样的，数量、类型 都可以不一样，js engine不在乎
// 形参和实参会绑定，动态关联

//function foo( a, b, c ){
//    console.log( foo.length );
//    console.log( arguments );
//
//    arguments[0] = -1;  // a = -1; 也一样
//    console.log(a);
//}
//
//foo(10);
//foo( 11, 2, 3, 4, 5, 6 );


// 递归

//function foo(i){
//    if( i < 0 ){
//        return '';
//    }
//    console.log('begin:' + i );
//    foo( i - 1 );
//    console.log('end:' + i );
//}
//
//foo(2);


// 递归的例子
// 有一行台阶，阶数为N，可以一次走1步，2步，3步，一共有多少种走法？
function step(n){
    switch(n){
        case 1:
            return 1;
            break;
        case 2:
            return 2;
            break;
        case 3:
            return 4;
            break;
        default:
            return ( step( n - 3 ) + step( n - 2 ) + step( n - 1 ) );
            break;
    }
}

//step(1): 1  只能走一步
//step(2): 2  一次两步，或者一次一步
//step(3): 1 + step(2) + step(1) = 4    一次三步，或者先走两阶 再走一阶，或者每次一步
//step(4): step(3) + step(2) + step(1) = 7    step3的时候差一步，step2的时候就剩下的两步跨，step1就剩下三阶一步跨
//step(n): step(n-3) + step(n-2) + step(n-1)

console.log(step( 5 ));
