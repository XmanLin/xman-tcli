// 工具函数

module.exports = {
    getFileSuffix: (name) => {
        if(typeof name === 'string') {
            return name.split('-')[1]
        }
    }
}