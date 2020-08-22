// from data.js
var tableData = data;

// YOUR CODE HERE!
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Function build table
function buildTable(data){
    // First, clear out existing data
    tbody.html("");
    data.forEach(dataRow => {
        console.table(dataRow);
        let row = tbody.append("tr");

       console.table(Object.values(dataRow));
       Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
           cell.html(val);
           //cell.text(val);
        
       });
    });
}

// Event that calls a function name it handleClick
function handleClick(){
    d3.event.preventDefault() // prevent the form from refreshing the page
    
    
    let title = d3.select("#Title").property("value");
    let location=d3.select("#Location").property("value");
    let employees=d3.select("#Employees").property("value");
    
 
    let filterData = tableData;

    //Check to see if a date was entered and filter the data using that date
    if (title){
        // Apply filter to the table data to only keep the 
        // rows where the datetime value matches the filter value
        filterData = filterData.filter((row) => row.Title === title);


    }

    buildTable(filterData);

    
    if (location){

           filterData = filterData.filter((row) => row.Location === location);

    }

    buildTable(filterData);

    if (employees){

            filterData = filterData.filter((row) => row.Employees === employees);
 
    }
 
   
    buildTable(filterData);



}

d3.selectAll("#filter-btn").on("click", handleClick);
buildTable(tableData);







