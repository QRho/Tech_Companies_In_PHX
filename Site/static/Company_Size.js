var Employees = ["1-10", "11-50", "51-200", "201-500",'501-1000','1001-5000','5001-10000','10,000+'];
var Companies = [197, 203, 82, 33, 13, 28, 12,12,14];

// Create the Trace
var trace1 = {
  x: Employees,
  y: Companies,
  type: "bar",
  marker: {color: '#83f52c'},
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
  title: "Company Size",
  xaxis: { title: "Employees" },
  yaxis: { title: "Number of Companies" },
};

// Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot3", data, layout);
