### step01 get started

##### 生成一个画布 

```js
var svg = d3.select(“#root").append("svg")
    .attr("width", 960)
    .attr("height", 500)
```

##### 在画布上画一个矩形

```js
svg.append("rect")
    .attr("width", 200)
    .attr("height", 120)
    .attr("fill", "yellow")
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

```
d3.select("#hello")  
// $("#hello")
d3.select("body")
// $("body")
d3.select(".list")
// $(".list")
```

D3.js 的链式语法也和jQuery 非常接近:

```js
svg.append("text")
    .text("hello")
    .attr("x", 10)
    .attr("y", 20)
    .attr("fill", "#333333")
```

一些DOM方法

append(), text(),  html(), attr(), 和style(),

### step04  data join

data()

datam()

enter()

exit()

元素`g`是用来组合对象的容器。添加到`g`元素上的变换会应用到其所有的子元素上。添加到`g`元素的属性会被其所有的子元素继承。





### step05 svg transitions



