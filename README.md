#Taurus
纬度空间后台

## 一、项目启动方法
### 1. 设置镜像
`npm config set registry https://registry.npm.taobao.org  && npm config ls`  淘宝的镜像,比国外的快n倍

```
; cli configs
user-agent = "npm/3.9.5 node/v4.4.5 win32 x64"

; userconfig C:\Users\Administrator\.npmrc
email = "83387856@qq.com"
registry = "https://registry.npm.taobao.org/"

; node bin location = D:\Program Files\nodejs\node.exe
; cwd = E:\oscchina\Taurus
; HOME = C:\Users\Administrator
; "npm config ls -l" to show all defaults.

```

### 2. 更新npm
`npm install -g npm`   
如果是mac   请用`sudo npm install -g npm`

### 3.查看npm版本 确保是`npm3.x`以上
`npm -v`

```
E:\oscchina\Taurus>npm -v
3.9.5
```

### 4. 安装typescript编译工具
`npm install -g typings`
### 5.  安装依赖
`npm install`
#### 3.1. 如果发现node-sass安装失败 再执行一次 `npm install node-sass`，不报错就可以了。这源自于天朝的牛逼墙
### 6. 运行项目
`npm run start`
### 7. 访问项目
`http://localhost:3000`
