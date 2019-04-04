//预编译--函数调用
//函数调用
//    创建活动对象 active object 是个上下文
//    预编译：
//        scope chain
//        初始化arguments
//        初始化形参，将arguments中的值赋给形参
//        找出所有的变量声明，按照变量名加入AO，如果已经存在，忽略
//        找出所有函数的声明，安装函数名加入AO，如果已经存在同名变量或者函数，则替换
//        this初始化
//    解释执行

// 8 函数中，所有变量声明，在函数的预编译阶段完成，所有变量的声明与实际书写的位置无关
//function f(){
//    console.log(aa);
//    var aa = 5;
//    console.log(aa);
//}
//f();

// 9 函数中，所有函数声明，在函数的预编译阶段完成，所有函数的声明与实际书写的位置无关
//function f(){
//    console.log(haha);
//    function haha(){
//        console.log('h1');
//    }
//}
//f();

// 10 函数中，如果变量与函数同名，则函数将覆盖变量
//function f(){
//    console.log(haha);
//
//    var haha = 123;
//    function haha(){
//        console.log('h1');
//    }
//}
//f();

// 11 函数中，只有函数能够覆盖变量，变量覆盖不了函数
//function f(){
//    console.log(haha);
//
//    function haha(){
//        console.log('h1');
//    }
//    var haha = 123;
//}
//f();

// 12 函数中，后面的函数声明，会覆盖前面的函数声明，并且忽略参数
function f(){
    haha(1);
    function haha(a){
        console.log('haha1');
    }

    function haha( a, b ){
        console.log('haha2');
    }
}
f();

// 13 当函数预编译后，遇到需要访问的变量或者函数，优先考虑自己AO中定义的变量和函数，如果找不到才会在其定义的上一层AO中寻找，直到到达GO

//var scope = 'global';
//function t(){
//    console.log(scope);     // undefined
//    var scope = 'local';
//    console.log(scope);     // local
//}
//t();
//console.log(scope);         // global

console.log(scope);     // undefined
var scope = 'global';
function t(){
    var scope = 't-local';
    function t2(){
        console.log(scope); // undefined
        var scope = 't2-local';
        console.log(scope);     // t2-local
    }
    t2();
    console.log(scope);     // t-local
}
t();
console.log(scope);     // global
