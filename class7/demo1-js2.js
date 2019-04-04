// 对象的属性可以增删改查

// 增加一个属性
var obj = {};   // 通过点 或者方括号的方法
obj.a = 'aaa';
obj['b'] = 'bbb';

var obj1 = {};      // {0: "aaa", 1: "bbb"}
obj1['0'] = 'aaa';
obj1['1'] = 'bbb';

var arr = [];       // ["aaa", "bbb"]
arr[0] = 'aaa';
arr[1] = 'bbb';

// 这里arr 和 obj1很像
// array 里面稀疏矩阵的很多特性的实现及做法，就是借鉴了object的特性

obj1.f1 = function(){
    console.log('ff...');
};

function f2(){
    aa = 5;     // 这里如果添加了 var 下面console里 aa就访问不到
    // 如果这里没有声明， 这里会自动添加 window. 变成 window.aa = 5，变成全局变量
}
f2();
console.log(aa);

// window 是浏览器里面内置的对象
//document 和 window.document 是一个东西

// 删除一个属性
// 查询一个属性是否存在
// 1. 用 in
console.log( 'a' in obj );      // true

// 2. hasOwnProperty
console.log(obj.hasOwnProperty('a'));   // true

// 删除属性
delete obj.a;                   // 数组里面也有
console.log( 'a' in obj );              // false
console.log(obj.hasOwnProperty('a'));   // false

// 修改一个属性
obj.a = 123;


// 枚举
for( var p in obj ){
    console.log( p );
}
// 枚举出属性 b a

obj.toString();
// 不会报错，证明obj.toString 有这个东西
// 能够枚举的，都是这个对象自己的；不能够枚举的，都是从proto里面继承过来的，比如toString

console.log(obj.propertyIsEnumerable('a')); // 判断属性是否可以枚举   true
console.log(obj.propertyIsEnumerable('toString()'));    // false


