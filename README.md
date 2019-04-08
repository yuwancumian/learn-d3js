### 准备工作

把D3.js跑起来很简单，只需要将d3.js下载到本地`https://d3js.org/d3.v4.min.js `，然后再建一个html，再将d3.v4.min.js 引入到html 里，就可以开工了,

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h2>A d3.js demo</h2>
    <h5>svg animation</h5>
    <div id="root">

    </div>
</body>
<script src="../lib/d3.v4.min.js"></script>
<script src="./05.js"></script>
</html>

```

当然你也可以在d3的线上playground https://blockbuilder.org/  上玩。

### step01 get started

`D3js` 是一个可以基于数据来操作文档的 `JavaScript` 库。可以帮助你使用 `HTML`, `CSS`, `SVG` 以及 `Canvas` 来展示数据。`D3` 遵循现有的 `Web` 标准，可以不需要其他任何框架独立运行在现代浏览器中，它结合强大的可视化组件来驱动 `DOM` 操作。所以现在假设你已经掌握了 HMTL 和CSS 的相关知识，现在需要学习一下SGV 的基础。

##### D3.js  生成一个画布 

```js
var svg = d3.select(“#root").append("svg")
    .attr("width",960)
    .attr("height",500)
```

##### 在画布上画一个矩形

```js
svg.append("rect")
    .attr("width",200)
    .attr("height",120)
    .attr("fill","yellow")
```

### step02 svg basic

一些基本形状

rect  矩形

circle 圆形

ellipse 椭圆形

line 线条

polyline 折线

polygon 多边形

path 路径



### step03 selection

D3.js  使用以下两种方法从html 中选择元素

select() - 通过匹配给定的CSS选择器，仅选择一个DOM元素。如果给定的CSS选择器有多个元素，则仅选择第一个元素

selectAll()- 通过匹配给定的CSS选择器来选择所有DOM元素。

D3.js 选择元素的方法和jQuery非常类似

```js
d3.select("#hello")  
// $("#hello")
d3.select("body")
// $("body")
d3.select(".list")
// $(".list")
```

D3.js 的链式语法也和jQuery 几乎一样:

```js
svg.append("text")
    .text("hello")
    .attr("x", 10)
    .attr("y", 20)
    .attr("fill", "#333333")
```

一些DOM方法也和jQuery 一样，

append(), text(),  html(), attr(), 和style(),

### step04  data join

data()

datam()

enter()

exit()

元素`g`是用来组合对象的容器。添加到`g`元素上的变换会应用到其所有的子元素上。添加到`g`元素的属性会被其所有的子元素继承。





### step05 svg transitions



