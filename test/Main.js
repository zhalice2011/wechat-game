// 游戏主类  初始化创建放在main类里面
import { ResourceLoader } from './js/base/ResourceLoader.js'
import { DataStore } from './js/base/DataStore.js'
import { Director } from './js/Director.js'
import { BackGround } from './js/runtime/Background.js'
import { Land } from './js/runtime/Land.js'

// new ResourceLoader()
export class Main {
    constructor() {
        console.log('Main')
        this.canvas = document.getElementById('game_canvas')
        this.ctx = this.canvas.getContext('2d')
        // 数据存储
        this.dataStore = DataStore.getInstance() //获取实例
        const loader = ResourceLoader.create()// ResourceLoader中的static方法可以直接被调用  不需要new
        loader.onloaded(map => this.onResourceFirstLoaded(map)) //加载资源
    }
    // 资源只需要加载一次
    onResourceFirstLoaded(map) {
        console.log('传入的map', map)
        // 资源第一次加载完毕之后,给dataStore赋值 需要销毁(子弹)需要销毁是放在给dataStore.map中的,需要长期保存的是放在类变量中的,
        this.dataStore.ctx = this.ctx
        this.dataStore.res = map
        console.log(this.dataStore.res)
        this.init()

    }

    init() {
        this.dataStore
            .put('background',BackGround) //生成BackGround image对象 并且put到dataStore中
            .put('land',Land); //生成land image对象 并且put到dataStore中
        
        // //导演类游戏运行
        Director.getInstance().run()
    }
}