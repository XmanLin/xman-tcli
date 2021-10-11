const reactClassJSX = require('./js/reactClassJSX');
const reactFuncJSX = require('./js/reactFuncJSX');
const reactClassTSX = require('./ts/reactClassTSX');
const reactFuncTSX = require('./ts/reactFuncTSX');
const reactFuncModal = require('./ts/reactFuncModal');
const reactFuncTable = require('./ts/reactFuncTable');
const reactFuncTS = require('./ts/reactFuncTS');
// 命名规范：name由“-”链接，前面为模板名，后面为创建后文件的后缀

module.exports = [
    {
        name: 'reactClass-jsx', src: reactClassJSX
    },
    {
        name: 'reactFunc-jsx', src: reactFuncJSX
    },
    {
        name: 'reactClass-tsx', src: reactClassTSX
    },
    {
        name: 'reactFunc-tsx', src: reactFuncTSX
    },
    {
        name: 'reactFuncModal-tsx', src: reactFuncModal
    },
    {
        name: 'reactFuncTable-tsx', src: reactFuncTable
    },
    {
        name: 'reactFunc-ts', src: reactFuncTS
    }
]