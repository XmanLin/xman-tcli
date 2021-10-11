// 说明： 
// folder: 文件夹名，可以嵌套，用 “/”分隔
// fileName: 文件名
// funcName: 类名或函数名
// template： 用到的文件模板

module.exports = [
    {
        folder: './home',
        fileName: 'index',
        funcName: 'home',
        template: 'reactFunc-tsx'
    },
    {
        folder: './home/compnent',
        fileName: 'index',
        funcName: 'compnent',
        template: 'reactFunc-tsx'
    },
    {
        folder: './home/service',
        fileName: 'index',
        funcName: 'service',
        template: 'reactFunc-ts'
    },
    {
        folder: './news',
        fileName: 'index',
        funcName: 'news',
        template: 'reactFunc-tsx'
    },
    {
        folder: './news/compnent',
        fileName: 'index',
        funcName: 'compnent',
        template: 'reactFuncTable-tsx'
    },
    {
        folder: './news/service',
        fileName: 'index',
        funcName: 'service',
        template: 'reactFunc-ts'
    }
]