// 函数的调用方式
// 1. 函数的方式进行调用
// 2. 作为方法

var obj = {
    add: function( a, b ){
        return a + b;
    }
};

// 等价于
var obj = {};
obj.add = function( a, b ){
    return a + b;
};
console.log( obj.add( 1, 2 ) );
// 等价于
console.log( obj['add']( 1, 2 ) );

// 3. 构造函数
//var arr = new Array();

// 4. 间接调用  间接调用和直接调用，唯一的区别是可以绑定this指针

function hypotenuse( a, b ){    // 重复的过程，要提炼函数
    return Math.sqrt( a * a + b * b );
}

console.log( this.hypotenuse( 3, 4 ) ); // 两个一样 console.log( hypotenuse( 3, 4 ) );

console.log( hypotenuse.call( this, 3, 4 ) );
console.log( hypotenuse.apply( this, [3, 4]) );
// 如果不考虑this指针，这三种方法完全一样


