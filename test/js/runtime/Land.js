//游戏陆地
import { Sprite } from '../base/Sprite.js'
export class Land extends Sprite {
    constructor() {
        const image = Sprite.getImage('land')
        super(image,0,0, // 开始裁剪的坐标
            image.width,image.height,//裁剪的大小
            0,window.innerHeight-image.height,//要放置的x,y位置
            image.width, image.height//要使用的宽度高度
        )
        // 地板的水平变化坐标
        this.landX = 0
        // 地板的移动速度
        this.landSpeed = 2
    }

    // 陆地的绘制函数
    draw() {
        this.landX = this.landX + this.landSpeed;
        //防止超出
        if(this.landX>(this.img.width - window.innerWidth)) { //this.img.width =  window.innerWidth就是canvas的宽度
            this.landX = 0
        }
        // console.log(' this.landX', this.landX)
        // console.log(' this.landX', this.img.width)
        // console.log(' this.landX', window.innerWidth)
        // if(this.landX>(window.innerWidth)) {
        //     this.landX = 0
        // }
        super.draw(this.img,
            this.srcX,
            this.srcY,
            this.srcW,
            this.srcH,
            -this.landX,
            this.y,
            this.width,
            this.height
        )

    }
}