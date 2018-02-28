// 游戏主类  初始化创建放在main类里面
import { ResourceLoader } from './js/base/ResourceLoader.js'
import { Director } from './js/Director.js'
import { BackGround } from './js/runtime/Background.js'


// new ResourceLoader()
export class Main {
    constructor() {
        console.log('Main')
        this.canvas = document.getElementById('game_canvas')
        this.ctx = this.canvas.getContext('2d')
        const loader = ResourceLoader.create()// ResourceLoader中的static方法可以直接被调用  不需要new
        loader.onloaded(map => this.onResourceFirstLoaded(map))

        // let image = new Image();
        // image.src = './res/background.png'
        // image.onload = () => {
        //     // 调用canvas的画图api
        //     this.ctx.drawImage(
        //         image,
        //         0,
        //         0,
        //         image.width,
        //         image.height,
        //         0,
        //         0,
        //         image.width,
        //         image.height,
        //     )
        // }
    }
    // 资源只需要加载一次
    onResourceFirstLoaded(map) {
        console.log('传入的map', map)
        let background = new BackGround(this.ctx, map.get('background'));
        background.draw();
    }
}