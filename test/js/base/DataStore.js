
// 变量缓存器 存储数据
export class DataStore {
    // 因为全局只有一个 所以我们创建一个单例
    static getInstance() { // 获取实例
        if(!DataStore.instance){ // 如果实例不存在
            DataStore.instance = new DataStore() // new一个实例
        }
        return DataStore.instance
    }

    constructor() {
        this.map = new Map(); // 创建一个存储变量的容器
    }

    put(key, value) {
        if(typeof value === 'function') {
            value = new value()
        }
        this.map.set(key,value);
        return this  // return这个对象本身  用链式方法去操作 就不用多次put了
    }

    get(key) {
        return this.map.get(key);
    }

    // 销毁方法
    destroy() {
        for (let value of this.map.values()) {
            value = null
        }
    }
}


