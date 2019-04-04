// 对象
// 对象的创建

var obj1 = {};
var obj2 = new Object();
// 两个方法都可以创建对象

// 对象可以有原始成员，引用成员，成员函数
// 对象的属性，比如objBook.name 后面可以点的出来的，都是属性
var objBook = {
    name: 'Book Name',  // 这里是逗号，不是分号；object，json数据文件里面，这里都是逗号，并且最后一行是没有逗号的
    pageNumber: 300,        // 原始成员
    author: {               // 引用成员
        firstname: 'aa',
        lastname: 'bb'
    },
    query: function(){  // 这里是函数表达式
          console.log('query');
    },
    addPage: function(){        // 成员函数
        this.pageNumber++;
        console.log('add page');
    }
};

console.log(objBook['pageNumber']);
console.log(objBook.pageNumber++);  // ++ 在后面，所以是300； ++ 在前面，就是301
//console.log(++objBook.pageNumber);

objBook.query();    // query
objBook['query']();     //  query 因为是个函数

