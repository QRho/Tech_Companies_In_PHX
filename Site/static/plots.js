//Plotting bar chart by cities

var cities = ["Scottsdale", "Phoenix", "Tempe", "Chandler", "Tucson Area",
  "Gilbert Area", "Mesa", "Northeast Phoenix Area", "Flagstaff", "Prescott"];
var amount = [213, 193, 53, 39, 25, 24, 20,
 10, 2, 1];

// Create the Trace
var trace1 = {
  x: cities,
  y: amount,
  type: "bar",
  marker: {color: '#FF9933'},
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
  title: "Software Companies by City",
  xaxis: { title: "Cities" },
  yaxis: { title: "Number of Companies" },
};

// Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot", data, layout);

