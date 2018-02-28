// 精灵的基类 负责初始化精灵加载的 资源 和 大小 位置  父类
export class Sprite {
    constructor(  // = 后面是默认值
        ctx = null,
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
        this.ctx = ctx
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

    // 绘制
    draw() {
        console.log('')
        this.ctx.drawImage(
            this.img,  
            this.srcX, // 要剪裁的x坐标
            this.srcY, // 要剪裁的y坐标
            this.srcW, // 要剪裁的宽度
            this.srcH, // 要剪裁的高度
            this.x,    // 从图片的那个地方开始裁剪
            this.y,    // 从图片的那个地方开始裁剪
            this.width,// 要使用的宽度
            this.height // 要使用的高度 
        )
    }
}