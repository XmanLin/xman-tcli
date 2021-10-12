# xman-tcli

#### 介绍
web-cli工具，可以快速创建template

### 安装

```
npm install xman-tcli -g
```

#### 功能说明


查看cli的全部命令
```
xmant
```
根据模板快速创建文件
```
xmant c
// 或
xmant create
```
通过配置 `config/fileList.js` 快速批量创建文件夹和文件
```
xmant c
// 或
xmant create-many
```

#### 部分代码文件说明

- `bin/xmant.js` ：设置和执行命令行;
- `command/...` : 命令行逻辑；
- `config/fileList.js`: 批量创建的配置文件；
- `templates/...` : 各种自定义模板文件；
- `utils/...`: 工具函数。