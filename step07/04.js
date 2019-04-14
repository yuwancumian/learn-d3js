console.log('02.js loaded')
require('babel-polyfill')
import * as d3 from "d3";

var arr = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
    11, 12, 15, 20, 18, 17, 16, 18, 23, 25
];

var counter = 0;
var bars = [].slice.call(document.querySelectorAll('.bar'));

var state = [];

var svg = d3.select("#root")
    .append("svg")
    .attr("width", 800)
    .attr("height", 240);

svg.selectAll("rect")
    .data(arr)
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




var draw = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");


            svg.selectAll("rect")
                .data(arr)
                .transition()
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


            console.log("111", counter)
        }, 500);

    });
    svg.selectAll("text")
        .remove()
        .data(arr)
        .enter()
        .append("text")
        .text(function (d) {
            return d;
        })
        .attr("x", function (d, i) {
            return i * 31 + 10; //Bar width of 20 plus 1 for padding
        })
        .attr("y", 220)
};

var sort = async function (arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                arr[j] = arr[j] + arr[j + 1];
                arr[j + 1] = arr[j] - arr[j + 1];
                arr[j] = arr[j] - arr[j + 1];
                state.push(JSON.parse(JSON.stringify(arr)));
                await draw();
                // setInterval(draw, 3000);
                counter++
                console.log("222", counter)
            }


        }
    }
}

sort(arr);
