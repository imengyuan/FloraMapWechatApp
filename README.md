# FloraMap Wechat App

注意微信小程序在本地创建并添加appid之后就不能修改项目目录了orz

现在详细介绍一下已经写的东西。

<br> 

##  项目结构

[官方文档介绍目录结构](https://developers.weixin.qq.com/miniprogram/dev/framework/structure.html)

我是建的一个类似于快速启动的项目，里面已经给你写了一些代码。这是现在的结构

```
├── README.md  //小程序的非必须文件，而且有了readme预览还会报错不过不影响
├── app.js  //我没有改过
├── app.json  //底部导航栏在这里写
├── app.wxss  //没有改过
├── image
│   ├── 各种图放的地方 //放了一些图标，有的还暂时没用上
│   └── 1map.png
├── pages
│   ├── activity //tab2活动页面的所有文件
│   ├── article  //tab3发现页面的所有文件
│   ├── index  //tab4我的页面的所有文件，没有改
│   ├── logs  //没有改，日志，应该不用管
│   └── map  //tab1地图页面的所有文件
├── project.config.json //项目配置，appid, projectname在这里设置，已设置好不用改
├── resources
│   ├── gis-school.js  //这是map-demo那个项目的测试数据，可以删了
│   └── plant_location.js  //存地图页面植物名称、经纬度的文件 /pages/map/map.js会用到
└── utils  //不用管先
    └── util.js
```

<br>

## 已经写了的东西

### map页面
照着这个[wechat-weapp-mapdemo](https://github.com/giscafer/wechat-weapp-mapdemo)写的。把代码下下来跑了一下，改写成植物的，然而这个demo的地图功能太基础了，后面要加的有很多。
```
# /pages/map目录结构

├── map.js  //逻辑，就是函数写功能那些，照着map-demo写的基本没有改
├── map.json  //命名页面
├── map.wxml  //相当于html，只放了一个map组件
└── map.wxss  //相当于css，这里没用到
```
这部分基本抄demo把地图显示出来了，后面要的功能估计得写很多。

### activity和article
```
# /pages/activity和 /pages/article的目录结构

├── activity.js
├── activity.json
├── activity.wxml  //设置image为全屏显示（和html css那套很像了）
└── activity.wxss  //放了一个image组件
```
这两个文件夹一个是活动页面，一个是发现页面，只放了一张演示截图，功能还得从头写...

<br>

## 接下来要写的东西

### map页面（这一部分可以由我接着写）

1. 相机接口
2. 读取手机的定位信息
3. 上传图片并显示


### activity页面

1. 界面按示意图写出来，瀑布流一样往下滑，最初版本至少有5，6个活动供演示吧
2. 每个活动点进去是新页面，新页面（活动详细信息）也要写
3. 详细信息页面或许要能收藏？回复？（可以最后弄）

内容资源应该会有专门的同学整理好拿来用

### article页面

1. 希望用现成的微信文章，按图块显示，点进去是新页面
2. 主要是小程序引入外部链接的问题，看怎么用上我们的微信文章

ps.公众号微信号scubotanics，里面文章都可以（且最好）用上

### index页面
1. 微信登录
2. 个人中心那套东西

微信就能登录很方便，和其他功能（回复、收藏etc）同时实现得看看了。这个可以放最后，等我们把其他的页面做来能看之后...

<br>

以上就是以后的东西和大致后面要写的东西。我打算接着写map，微信自带不给力坑要用百度地图小程序SDK，虽然还不太会。

然后你俩可以一个article，一个activity先把页面写出来，其他再说。









