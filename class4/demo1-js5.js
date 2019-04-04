// 数组的成员函数

// slice( iStart [, iEnd] ) iEnd 可选 节选数组中的一段; 原数组不说影响，从start开始，end结束，start显示，end不显示
// 数组都是，正着数 0开头，倒着数 1开头

var arr1 = [ 1, 2, 3, 4, 5, 6, 7 ];
console.log( '[slice] ' + arr1.slice( 5 ) );    // 6, 7  从下标第五个开始，形成新的数组
console.log( '[slice] ' + typeof arr1.slice( 5).join(',') );    // 这里虽然还是返回 6, 7 但是已经变成string了


console.log( '[slice] ' + arr1.slice( -3 ) );   // 倒着数，从倒数1开始数三个

console.log( '[slice] ' + arr1.slice( 2, 5 ) );     // 3,4,5
console.log( '[slice] ' + arr1.slice( -5, 5 ) );    // 3,4,5

// splice( iIndex [, iHowmany [, item1][, item2] ... ] )
// 原数组受到影响
// 从iIndex开始，删除元素，删除几个由iHowmany决定，item是要插入的元素

arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ];
var arr1 = arr.splice(6);
console.log('[splice]' + arr);      // 0,1,2,3,4,5
console.log('[splice]' + arr1);     // 6,7,8

arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ];
var arr1 = arr.splice(-3);
console.log('[splice]' + arr);      // 0,1,2,3,4,5
console.log('[splice]' + arr1);     // 6,7,8

arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ];
var arr1 = arr.splice( 2, 3 );      // 等价于 arr.splice( -7, 3 )
console.log('[splice]' + arr1);     // 2,3,4

arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ];
var arr1 = arr.splice( 2, 3, -9, -9, -9);
console.log('[splice]' + arr);      // 0,1,-9,-9,-9,5,6,7,8
console.log('[splice]' + arr1);     // 2,3,4

// delete
arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ];
console.log('[delete]' + arr);
delete arr[4];
console.log('[delete]' + arr);      // 0,1,2,3,,5,6,7,8 //把内容删掉，留下个empty的位置，数组的长度length不变

// 二维数组
var matrix = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];
// 等价于
//  matrix = [];
//  matrix[1] = [ 1, 2, 3 ];
//  matrix[2] = [ 4, 5, 6 ];
//  matrix[3] = [ 7, 8, 9 ];

// 三维数组
var cubic = [];
cubic[0] = [];
cubic[0][0] = [ 1, 2, 3 ];
cubic[0][1] = [ 4, 5, 6 ];
cubic[0][2] = [ 7, 8, 9 ];
cubic[1] = [];
cubic[1][0] = [ 10, 11, 12 ];
cubic[1][1] = [ 13, 14, 15 ];
cubic[1][2] = [ 16, 17, 18 ];
cubic[2] = [];
cubic[2][0] = [ 19, 20, 21 ];
cubic[2][1] = [ 22, 23, 24 ];
cubic[2][2] = [ 25, 26, 27 ];

// 内存里面有 栈内存 和 堆内存, 这里的栈和堆，是在js底层那块用c++写的代码里面，实现的一个栈/堆功能，原理上这里的栈和array的那个栈一样；但是堆不是，堆只是一块存储空间
// 空间里面，后进先出的叫栈，没有规则的叫堆
// var 声明一个变量，有两种形式 一个是值类型，一个是引用类型
// 栈内存是确定的( 放值类型)，栈内存小
// 堆内存是不确定的( 放引用类型), 比如数组, 不能按照值的类型去操作，所以在var 一个引用类型变量的时候，栈内存里面存一个堆内存的地址，然后一个个的去指向这个object; 堆内存大

var a = 5; // 这个是值类型，直接放栈内存里面
var arr = [];   // 这个是引用类型，栈内存里放个的地址(引用)，内容放堆内存里
var s = 'abc';
var b = a;
var arr1 = arr;

// 栈内存
//    ST001: a, 5
//    ST002: arr, HP001
//    ST003: s, 'abc'
//    ST004: b, 5
//    ST005: arr1, HP001

// 堆内存，堆内存里面的都是对象，里面有个东西叫引用计数，这里有个GC(Garbage Collection) 内存回收机制
// 每当有引用堆内存里面东西的时候，比如这里 HP001被引用到了两次，则HP001: [],(2) 这里记个2
// 变量都有个作用域，一旦出了这个栈的变量的作用域的区域，则这个变量被摧毁，相应的引用数减1
// 或者这个变量被改变成为了数值变量或者其他引用变量，相应的引用数也减1
// 栈内存 GC是不管的，堆内存里，谁的内存计数器变成0，就被清理/摧毁，否则一直保留
// GC使用时间：1 内存达到一定的使用门槛; 2 定期清理
// 堆只对栈开放，只能通过栈里面的变量去访问堆，而不能直接去访问堆；如果一个堆内存在栈内存里没有任何变量引用，则这个堆内存的计数器一定是0，将会被清理
//    HP001: [], (2)
//    HP002:
//    HP003:

// 循环相互引用，这里在堆内存里面的东西永远不会被清理
var a1 = [],
    a2 = [];
a1[0] = a2;
a2[0] = a1;


