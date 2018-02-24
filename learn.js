// es5创建对象方法
;(function() {
    'use strict' // 使用严格模式 让代码更加严格

    // 函数表达式  区别:需要声明之后才能进行调用
    var fun1 = function () {

    }

    // 函数声明    区别:会自动提示到顶部执行,所以在那都能调用
    function fun2() {

    }

    // es5 面对对象编程
    var Class1 = function() {
        this.fun1 = function() {
            console.log('test fun1')
        }
    }
    Class1.prototype.fun2 = function() {
        console.log('test fun2')
    }
    new Class1().fun2();
})()


// es6创建对象方法 是默认使用严格模式的
;(function() {
    class ClassTest {
        constructor() {
            console.log('我创建了')
        }
        fun1() {
            console.log('test fun1')
        }
        static fun2() { //类似于java中的静态方法
            console.log('test fun2')
        }
    }
    new ClassTest().fun1()
    ClassTest.fun2()
})()