// 创建单个文件
const templates = require('../templates/index');
const chalk = require('chalk');
const inquirer = require('inquirer');
const fs = require("fs");
const utils = require('../utils/index');


module.exports = () => {
    inquirer.prompt([
        {
            name: 'templateName',
            type:'list',
            message: '请选择你想要生成的代码模板：',
            choices: templates
        },
        {
            name: 'filename',
            type:'input',
            message: '请输入代码文件中类名或方法名：',
            validate: function (value) {
                if (value.length) {
                    return true;
                } else {
                    return '请输入代码文件中类名或方法名';
                }
            },
        }
    ])
    .then(answers => {
        const templateName = answers.templateName;
        const filename = answers.filename;
        templates.forEach((item) => {
            if(item.name === templateName) {
                const suffix = utils.getFileSuffix(item.name)
                const file = `./index.${suffix}`
                // 检验当前文件夹下是否有同名文件
                fs.access(file, function(err) {
                    if(!err) {
                        console.log('创建失败：', chalk.yellow('文件已存在'))
                    } else {
                        fs.writeFile(file, item.src(filename), function(err) {
                            if(err) {
                                console.log('创建失败：', chalk.red(err))
                            } else {
                                console.log(chalk.green(`创建文件成功！${file}`));
                            }
                        })
                    }
                })
            }
        })
    })
}


