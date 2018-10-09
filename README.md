# vue-panel-selector

> 一个仿51job类别查询的面板选择器

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
```
  直接复制dist下文件,引用vue-panel-selector.js(使用前需引入vue.js文件)
```
参数|类型|说明|默认值
--|--|--|
items|Array|操作的数据格式[{id:001,name:'湖南'，children:[{id:0011,name:"长沙",children:[]}]}]|无
max-item-num|Number|可选择的最大数量|10
show-sel-all|Boolean|是否显示所有选项|false
row|Number|每行显示多少项|5

事件|说明|参数
--|--|
on-ok|点击确认后的回调,返回选中的项|selItems

实例:参照index.html

