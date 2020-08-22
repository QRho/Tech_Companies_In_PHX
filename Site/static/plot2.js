//Plotting bar chart by funding

var funding = ["Self-Funded", "VC-Funded", "Angel/Seed", "Acquired", "Public",
  "Other"];
var total = [324, 89, 67, 58, 28, 11];

// Create the Trace
var trace1 = {
  x: total,
  y: funding,
  type: "bar",
  marker: {color: '#df00fe'},
  orientation: "h"
};

// Create the data array for the plot
var data = [trace1];

// Define the plot layout
var layout = {
  plot_bgcolor:"black",
  paper_bgcolor:"#5463bb",
  font: {
    family: 'Helvetica',
    size: 11,
    color: '#fff'
  },
  title: "Funding of Software Companies in Phoenix",
  xaxis: { title: "Number of Companies" },
};

// Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot2", data, layout);