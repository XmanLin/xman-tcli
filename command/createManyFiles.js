// 批量创建文件

const chalk = require('chalk');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const utils = require('../utils/index');
const fileList = require('../config/fileList');
const templates = require('../templates/index');
const clui = require('clui');
const Spinner = clui.Spinner;
const status = new Spinner('正在创建...');

// 递归创建目录 同步方法
function mkdirsSync(dirname) {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirsSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname);
            console.log(chalk.green(`创建目录成功-${dirname}`));
        }
    }   
}

module.exports = () => {
    inquirer.prompt([
        {
            name: 'choices',
            type:'list',
            message: '请确认配置好模板批量生成列表',
            choices: ['yes', 'no']
        }
    ])
    .then(answers => {
        const choices = answers.choices
        if(choices === 'yes') {
            // 批量创建目录
            fileList.forEach(item => {
                if(item.folder) {
                    mkdirsSync(`${item.folder}`)
                }
            })
            // 批量创建文件
            fileList.forEach(item => {
                templates.forEach(tpl => {
                    if(item.template === tpl.name) {
                        const suffix = utils.getFileSuffix(item.template)
                        const fileName = `${item.fileName}.${suffix}`
                        fs.writeFile(`${item.folder}/${fileName}`, tpl.src(item.funcName), function(err) {
                            if(err) {
                                console.log('创建失败：', chalk.red(err))
                            } else{
                                console.log(chalk.green(`创建文件成功！${fileName}`));
                            }
                        })
                    }
                })
            })
        }
    })
}