// 资源文件加载器 确保在图片资源加载完成后才进行页面渲染
import { Resource } from './Resource'
export  class ResourceLoader {
    constructor() {
        this.map = new Map(Resource)
    }
}