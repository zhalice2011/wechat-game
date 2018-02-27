//导演类 控制游戏进程
export class Director {
    constructor() {
        console.log('构造器初始化=>测试Director是否只创建一次')
    }

    // 让Director
    static getInstance() {
        if(!Director.instance) { // 判断 Director.instance 有没有构造函数创建的对象的一个实例 有就不创建了
            Director.instance = new Director()
        }
        return Director.instance
    }
}