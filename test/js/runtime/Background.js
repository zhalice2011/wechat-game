//游戏背景类  继承-精灵类
import { Sprite } from '../base/Sprite.js'
export class BackGround extends Sprite {
    constructor() {
        //super 其实就是调用父类的构造方法 =>constructor
        const image = Sprite.getImage('background')
        super(image,
            0,0,
            image.width, image.height,
            0,0,
            window.innerWidth, window.innerHeight
        );
    }


}


// //背景
// import {Sprite} from "../base/Sprite.js";
// import {DataStore} from "../base/DataStore.js";

// export class BackGround extends Sprite {
//     constructor() {
//         const image = Sprite.getImage('background');
//         super(image,
//             0, 0,
//             image.width, image.height,
//             0, 0,
//             DataStore.getInstance().canvas.width, DataStore.getInstance().canvas.height);
//     }
// }