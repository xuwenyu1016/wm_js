// boolean

// 隐式
var bVar = !0;
console.log('[隐式类型转化] ' + typeof(bVar) + ' ' + bVar );  // true

bVar = !1;
console.log('[隐式类型转化] ' + typeof(bVar) + ' ' + bVar );  // false

bVar = !100;
console.log('[隐式类型转化] ' + typeof(bVar) + ' ' + bVar );  // false 是0与非0区别

bVar = !!100;
console.log('[隐式类型转化] ' + typeof(bVar) + ' ' + bVar );  // 用布尔判断一个数是否是0

// 显示
var bVar = !Boolean(0);     //等价于 !0 true
console.log('[显式类型转化] ' + typeof(bVar) + ' ' + bVar );

var bVar = Boolean(1);     // true
console.log('[显式类型转化] ' + typeof(bVar) + ' ' + bVar );

bVar = Boolean(undefined);     // false
console.log('[显式类型转化] ' + typeof(bVar) + ' ' + bVar );

bVar = Boolean(null);     // false
console.log('[显式类型转化] ' + typeof(bVar) + ' ' + bVar );

bVar = Boolean(NaN);     // false
console.log('[显式类型转化] ' + typeof(bVar) + ' ' + bVar );

bVar = Boolean('');     // false
console.log('[显式类型转化] ' + typeof(bVar) + ' ' + bVar );

bVar = Boolean('0aa');     // true  非空字符串都是true
console.log('[显式类型转化] ' + typeof(bVar) + ' ' + bVar );

