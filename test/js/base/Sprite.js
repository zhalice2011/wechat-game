// 精灵的基类 负责初始化精灵加载的 资源 和 大小 位置  父类
import { DataStore } from './DataStore.js'
export class Sprite {
    constructor(  // = 后面是默认值
        img = null,  // 图片地址
        srcX = 0, // 要剪裁的x坐标
        srcY = 0, // 要剪裁的y坐标
        srcW = 0, // 要剪裁的宽度
        srcH = 0, // 要剪裁的高度
        x = 0,    // 从图片的那个地方开始裁剪
        y = 0,    // 从图片的那个地方开始裁剪
        width = 0,// 要使用的宽度
        height = 0 // 要使用的高度        
    ) {
        this.dataStore = DataStore.getInstance()
        this.ctx = this.dataStore.ctx
        console.log(this.ctx)
        this.img = img  // 图片地址
        this.srcX = srcX // 要剪裁的x坐标
        this.srcY = srcY // 要剪裁的y坐标
        this.srcW = srcW // 要剪裁的宽度
        this.srcH = srcH // 要剪裁的高度
        this.x = x    // 从图片的那个地方开始裁剪
        this.y = y    // 从图片的那个地方开始裁剪
        this.width = width// 要使用的宽度
        this.height = height // 要使用的高度  

    }
    static getImage(key) { //静态方法不需要new实例去访问,直接用类就可以访问了
        return DataStore.getInstance().res.get(key)  // res就是map
    }

    // 绘制
    draw(
        img = this.img,
        srcX = this.srcX,
        srcY = this.srcY,
        srcW = this.srcW,
        srcH = this.srcH,
        x = this.x,
        y = this.y,
        width = this.width,
        height = this.height,
    ) {        
        // console.log('img',img)
        // console.log('srcX',srcX)
        // console.log('srcY',srcY)
        // console.log('srcW',srcW)
        // console.log('srcH',srcH)
        // console.log('x',x)
        // console.log('y',y)
        // console.log('width',width)
        // console.log('height',height)       
        this.ctx.drawImage(
            img,  
            srcX, // 要剪裁的x坐标
            srcY, // 要剪裁的y坐标
            srcW, // 要剪裁的宽度
            srcH, // 要剪裁的高度
            x,    // 从图片的那个地方开始裁剪
            y,    // 从图片的那个地方开始裁剪
            width,// 要使用的宽度
            height // 要使用的高度 
        )
    }
}