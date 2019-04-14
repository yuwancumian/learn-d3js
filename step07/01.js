import * as d3 from "d3";

var svg = d3.select("#root").append("svg")
    .attr("width", 960)
    .attr("height", 500)

var rect = svg.append("rect")
    .attr("x", 10)
    .attr("y", 10)
    .attr("class", "bar")
    .attr("style", "width:50; height:50;stroke: #333333;stroke-width:7;")
// .attr("width", 50)
// .attr("height", 50)
// .attr("class", "bar")
// .attr("stroke", "#333333")
// .attr("stroke-width", 7)
// .attr("fill", "transparent")
var t1 = svg.append("text")
    .text("12")
    .attr("class", "bar-text")
    .attr("x", 25)
    .attr("y", 40)
    .attr("fill", "#333333")

var array = [1222, 3333123, 111]
var min = d3.min(array)
console.log(min);
