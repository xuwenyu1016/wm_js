// 清空一个数组 3个方法

// 1. length
var arr = [ 1, 2, 3 ];
console.log( arr );         //  [1, 2, 3]
arr.length = 0;
console.log( arr );         // []

// 2. splice
arr = [ 1, 2, 3 ];
arr.splice(0);
console.log( arr );

// 3. 直接赋值
arr = [ 1, 2, 3 ];
arr = [];           // 这个会新增一个堆内存，并且把原来那个堆内存的计数器变成0
console.log( arr );


// 数组去重，并且新生成一个数组，用三种方法 [ 1, 3, 4, 5, 1, 3, 2, 4, 5, 1, 4, 5]
var a = [ 1, 3, 4, 5, 1, 3, 2, 4, 5, 1, 4, 5];
var b = [];
for( i = 0; i < a.length; i++){
    for( j = 0; j < b.length; j++){
        if( a[i] === b[j] ){
            break;
        }
    }
    if( j >= b.length){
        b.push(a[i]);
    }
}
console.log(b);

var a = [ 1, 3, 4, 5, 1, 3, 2, 4, 5, 1, 4, 5];
var b = [];
a.sort();
for( i = 0; i < a.length; i++){
    if(b.length ===0 || a[i] !== b[b.length-1]){
        b.push(a[i]);
    }
}
console.log(b);

var x = [ 1, 3, 4, 5, 1, 3, 2, 4, 5, 1, 4, 5];
var b = [];
var arrMap = [];
for( var i = 0; i < x.length; i++ ){
    //console.log(a[i]);
    arrMap[ x[i] ] = true;
}
for( var j in arrMap ){
    b.push(+j);
}

//console.log(arrMap);
console.log(b);