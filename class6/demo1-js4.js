// 嵌套函数

function hypotenuse( a, b ){    // 重复的过程，要提炼函数
    function square(x){
        return ( x * x );
    }
    var square = function(x){
        return ( x * x );
    };
    return Math.sqrt( square(a) + square(b) );
}

console.log(hypotenuse( 3, 4 ));    // 5

