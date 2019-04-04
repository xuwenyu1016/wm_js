// 数组

// 最简单的数组

var arr = [];

var arr1 = [ 0, 1, 2, 3 ];

var arr2 = [ 0, 1, 2, , 4 ];    //  [0, 1, 2, empty, 4]

var arr3 = [ , , , ];   // [empty × 3]  length:3

var arr4 = [ 0, 'aaa', undefined, null, true, [123], {} ];

// js的数组是弱类型的，里面可以放任意类型的元素

// 访问数组元素zz
console.log( arr1[1] ); //1
console.log( arr4[3] ); // null

arr[3] = 5;     // arr length为4，前三个是empty
arr2[0] = 'ab';
// 添加数组元素，如果一个下标位置原来不存在，会添加，如果必须，还会增加length；如果下标存在，则会覆盖

console.log(arr.length);    // 数组长度

// 使用构造函数生成数组
arr = new Array();  // 等价于 arr = [];

arr5 = new Array( 0, 1, 2, 3 ); // 等价于 arr5 = [0, 1, 2, 3]

arr6 = new Array(4);        //   [empty × 4]    不等价于 arr = [4], 而等价于 [ , , , ]

// 稀疏数组/矩阵: 内存大多数都是0，只有用到的时候才会存进去，  节省内存
// 可以把数组当作 key: value 的形式去用

arr4[1.5] = 0;

var a7 = [];
a7['china'] = 'rice';
a7['america'] = 'pizza';
a7['france'] = 'wine';
a7[1] = 12;
console.log(a7);    // [china: "rice", america: "pizza", france: "wine"]    key: value
console.log(a7.china);  // rice
// 如果key是整数，就按照证书顺序排；如果不是整数，就转成字符串

// 如何判断一个变量是数组
console.log( typeof(a7) );  // object
console.log( a7.constructor.name );     // Array
console.log( a7.constructor.name == 'Array' );  // true

// 三种轮询数组的方法
arr = [ 1, 1, ,  , 4, 5 ];
// for( i )
for( var i = 0; i < arr.length; i++ ){
    console.log( arr[i] + ',' );
}   // 这里不会忽视empty, empty的地方显示 undefined, 这里a7那个array不可以循环出来，只能循环key 是整数的

// for( in )
for( var i in arr ){
    console.log( arr[i] + ',' );
}   // 这里会忽视empty, 这里a7那个array可以循环出来, 以 key: value 的方式返回所有非稀疏节点的 key

// foreach( f )
arr.forEach(function(x){
    console.log(x);
}); // foreach 返回所有有数字的，非稀疏的value


// concat

var arr = [ 3, 2, 1],
    arr2 = [ 4, 5, 6 ];
var arr3 = arr.concat(arr2);
console.log(arr3);  //  [3, 2, 1, 4, 5, 6] 原数组不改变，形成新数组

console.log(arr3.join(','));    // join 把数组加个分隔符变成字符串拿出来 3,2,1,4,5,6

// sort() 数字的sort
arr3 = [ 1, 5, 3, 2, 9, 4, 0 ];
console.log(arr3.sort());   // [0, 1, 2, 3, 4, 5, 9] 返回排好序的arr3

// 字符串的sort
arr3 = ['bbb', 'aaa', 'ccc'];   // 按ASCII码来排序
console.log(arr3.sort());   //  ["aaa", "bbb", "ccc"]   正序
console.log(arr3.reverse());     //  ["ccc", "bbb", "aaa"] 倒序

// 栈(stack): 后进先出，类似一个桶，比如：羽毛球桶
// 进栈: push 出栈: pop
// push-pop 尾进尾出
var arr = ['a', 'b', 'c'];
console.log(arr.join(','));
arr.push('d');
console.log(arr.join(','));
console.log(arr.pop());     // 把d pop出去，弹出去


// unshift-shift 头进-头出 也是栈

// 队列   先进先出 queue
// 尾进头出     先push, 再shift
// 头进尾出     先unshift, 再pop






