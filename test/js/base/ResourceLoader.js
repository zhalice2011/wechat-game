// 资源文件加载器 确保在图片资源加载完成后才进行页面渲染
import { Resource } from './Resource.js'
export  class ResourceLoader {
    constructor() {
        this.map = new Map(Resource)
        // 遍历  let 和var 的区别,var会在全局中声明,而let只在for中生效
        for (let[key,value] of this.map) {
            const image = new Image();
            image.src = value;
            this.map.set(key,image); //将map的key对应的value替换成image对象
        }
    }
    // 加载全部结束的方法
    onloaded(callback) {
        let loadedCount = 0;
        for (let value of this.map.values()) { // value就是map对应的每一个值了
            value.onload = () => {
                loadedCount++;
                if(loadedCount>= this.map.size){
                    callback(this.map)
                }
            }
        }

    }
    // 工厂方法
    static create() {
        return new ResourceLoader();
    }
}