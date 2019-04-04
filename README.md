#### get started



#### step01 hello world

##### 生成一个画布 

```js
var svg = d3.select(“#root").append("svg")
    .attr("w“dth",”960)
    .attr(“h“ight”,”500)
```

##### 在画布上画一个矩形

```js
svg.append("rect")
    .attr("width", 200)
    .attr("height", 120)
    .attr("fill", "yellow")
	.text("123")
```

#### step02 svg basic

一些基本形状

rect  矩形

circle 圆形

ellipse 椭圆形

line 线条

polyline 折线

polygon 多边形

path 路径



#### step03 selection



#### step04  data join

data()

datam()

enter()

exit()

元素`g`是用来组合对象的容器。添加到`g`元素上的变换会应用到其所有的子元素上。添加到`g`元素的属性会被其所有的子元素继承。





#### step05 svg transitions



