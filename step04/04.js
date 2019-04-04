console.log("04!")
d3.select("#list1").selectAll("li")
.data([10, 20, 30, 25, 15])
.append("span")
.text(function(d) {return "this is " + d})

d3.select("#list2").selectAll("li")
   .data([10, 20, 30, 25, 15])
   .text(function(d) { return "This is pre-existing element and the value is " + d; })
   .enter()
   .append("li")
   .text(function(d) { return "This is dynamically created element and the value is " + d; });
