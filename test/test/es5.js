(function () {
    'use strit';

    //函数声明  -- 不推荐 因为一加载就会提升到所有变量之前 不管你写在哪
    function Animal() {

    }


    //函数表达式 推荐
    var Animal = function(name, age) {
        this.name = name;
        this.age = age;
        // this.say = function() {
        //     console.log(this.name + '  ' +this.age + '岁')
        // }
    }

    //给原型添加方法 还有一种方法就是直接给原型链赋值
    Animal.prototype.say = function() {
        console.log(this.name + '  ' +this.age + '岁')
        
    }
    var cat = new Animal('小猫',1)
    cat.say()




})()