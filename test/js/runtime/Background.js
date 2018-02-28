//游戏背景类  继承-精灵类
import { Sprite } from '../base/Sprite.js'
export class BackGround extends Sprite {
    constructor(ctx, image) {
        //super 其实就是调用父类的构造方法 =>constructor
        super(ctx,image,
            0,0,
            image.width, image.height,
            0,0,
            window.innerWidth, window.innerHeight
        );
    }


}