//脚本的预编译
// 1. 先创建全局对象Global Object 就是window
// 2. 加载脚本文件
// 3. 开始预编译
//     -- 1. 找出所有声明变量（有var的这里不运行赋值），按变量名加入全局对象，如果已经存在则忽略
//     -- 2. 找出所有函数声明，按函数名加入全局对象，如果已经存在同名函数或者变量，则替换
//     -- 3. 非声明不予理睬
// 4. 解释执行

// 1 没有var的变量，都不是变量声明，全部认为是window全局变量，不参与预编译
//

//console.log(aa);    // 下面aa前面有var，因为预编译 这里会显示undefined；如果没有var 这里会直接报错
//var aa = 5;
//console.log(aa);


// 2 在函数中a也是全局变量，是在运行时( 有test() )，而不是定义时( 定义时是指无test()的时候，这里无test() 会报错 )
//test();
//function test(){
//    a = 5;
//}
//console.log(a);

// 3 脚本中，所有变量都有声明，在脚本的预编译阶段完成，所有变量的声明与实际书写的位置无关
//console.log(aa);
//var aa = 5;
//console.log(aa);


// 4 脚本中，所有函数声明，在脚本的预编译阶段完成，所有函数的声明与实际书写的位置无关
//console.log(haha);
//function haha(){
//    console.log('h1');
//}

// 5 脚本中，如果变量与函数同名，则函数将覆盖变量
//console.log(haha);
//
//var haha = 123;
//function haha(){        // 这里如果把function给注释隐藏， 上面console.log出现的是undefined
//    console.log('h1');
//}

// 6 脚本中，只有函数能够覆盖变量，变量覆盖不了函数
//console.log(haha);
//
//function haha(){
//    console.log('h1');
//}
//var haha = 123;

// 7 脚本中，后面的函数声明，会覆盖前面的函数声明，并且忽略参数

haha(1);
function haha(a){
    console.log('haha1');
}

function haha( a, b ){
    console.log('haha2');
}