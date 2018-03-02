//导演类 控制游戏进程  逻辑放在这个类里面
import { DataStore } from './base/DataStore.js'

export class Director {
    constructor() {
        console.log('构造器初始化=>测试Director是否只创建一次')
        this.dataStore = DataStore.getInstance()
    }

    // 让Director
    static getInstance() {
        if(!Director.instance) { // 判断 Director.instance 有没有构造函数创建的对象的一个实例 有就不创建了
            Director.instance = new Director()
        }
        return Director.instance
    }

    // 游戏运行的方法 
    run() {
        //先拿到dataStore获取当前的状态 然后绘制
        this.dataStore.get('background').draw()
        this.dataStore.get('land').draw()
        
        // 开始动画 并且给他赋值 以便结束的时候中指
        let timer = requestAnimationFrame( ()=> {
            return this.run()
        })
        // 存储到dataStore中
        this.dataStore.put('timer', timer)
        //cancelAnimationFrame(this.dataStore.get('timer'));
    }
}