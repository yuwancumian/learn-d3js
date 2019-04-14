console.log('02.js loaded')

import * as d3 from "d3";

var dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
    11, 12, 15, 20, 18, 17, 16, 18, 23, 25
];

var svg = d3.select("#root")
    .append("svg")
    .attr("width", 800)
    .attr("height", 240);



function draw() {
    svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("rx", 5)
        .attr("x", function (d, i) {
            return i * 31; //Bar width of 20 plus 1 for padding
        })

        .attr("y", function (d) {
            return 200 - d * 4; //Height minus data value
        })
        .attr("height", function (d) {
            return d * 4;
        })
        .attr("width", 30)
        .attr("fill", "#f7931e")

    svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .text(function (d) {
            return d;
        })
        .attr("x", function (d, i) {
            return i * 31 + 10; //Bar width of 20 plus 1 for padding
        })
        .attr("y", 220)
}

draw();
