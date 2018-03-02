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

    // 寄生组合继承  call()  和 apply()方法
    // 调用一个对象的一个方法,用另一个对象替换当前对象
    // Animal.prototype.say.call(cat)  // 调用了cat.say方法,但是我们不是直接通过cat.say调用的

    // var params = {
    //     name: '小猫2',
    //     age:4
    // }
    // cat.say.call(params); // 打印出来 小猫2 4岁

    // 寄生组合继承
    var Cat = function(name, age) {
        Animal.apply(this,arguments) // 把
    }
    Cat.prototype = Object.create(Animal.prototype) //浅克隆
    Cat.prototype.say = function() {
        var p = {
            name:'父类名字',
            age:'100'
        }
        Animal.prototype.say.apply(p)   // 调用了父类的say
        console.log('这是子类的名字' +this.name)
    }
    var cat1 = new Cat('子猫',10)
    cat1.say()
    //父类名字  100岁
    //这是子类的名字子猫

})()