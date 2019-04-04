// 函数可以作为参数传递给另外一个函数

function f1(xingcan){
    console.log(xingcan);
    console.log(xingcan());
}

function f2(){
    console.log('I am f2');
    return 'f2 say hello';
}

f1(f2);