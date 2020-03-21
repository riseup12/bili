# vue仿B站首页

## 技术栈

前端：vue2 + vuex + vuecli + ES6/7 + scss 

前端运行

```shell
cd bili
npm install
npm run serve
```



后端运行

```shell
cd bilibili-api
npm install
npm run dev
```



## 组件

根据首页的各模块的功能不同，划分出了共20多个可复用的组件。具体请看下方

组件的原则就是尽量将复杂的UI布局划分成单个小的UI组件，逻辑处理也被划分成更多的单个小的逻辑。数据流动采用的单向数据流动。子组件的数据更多的是来自于父组件，父组件的数据主要是其本身发起的`ajax`请求。本项目中`ajax`请求库使用的是`axios`。

## 性能优化

- 图片懒加载
- 压缩`js`、`css`

- 服务器开启`gzip`
- 浏览器缓存
- ...

相关截图:

轮播：

![](D:\webproject\bilibili\bili\img\Snipaste_2020-03-21_21-03-37.png)

![](D:\webproject\bilibili\bili\img\Snipaste_2020-03-21_21-04-41.png)

![](D:\webproject\bilibili\bili\img\Snipaste_2020-03-21_21-04-49.png)