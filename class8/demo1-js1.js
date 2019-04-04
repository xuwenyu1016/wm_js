// 构造函数
// 需要一种函数，每次能够以相同的方式构造对象，同时，改动这个函数，所有对象都能跟着改变

// 构造函数 名称以大写字母开头

function Student( name, age, gender ){
    this.name = name;
    this.age = age;
    this.gender = gender;

}

var std = new Student('xu', 20, 'male');    // Student {name: "xu", age: 20, gender: "male"}

// 上下两种一样，都是构造函数，上面比较常用

function Student2( name, age, gender ){
    var object = {};
    object.name = name;
    object.age = age;
    object.gender = gender;

    return object;

}

var std2 = new Student2('xu', 20, 'male');      // {name: "xu", age: 20, gender: "male"}

// 三种命名规则   匈牙利命名规则     小驼峰命名规则     大驼峰命名规则
