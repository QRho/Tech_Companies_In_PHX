window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        backgroundColor: "#000",
        title:{
        fontColor: "white"
        
        },     
        title:{
            text: "Software Industries in Phoenix",
            fontColor: "white"
        },
        axisX: {
            title:"Industries",
            titleFontColor: "white"
        },
        axisY: {
            title:"Industry Saturation",
            titleFontColor: "white"
        },
        legend:{
            horizontalAlign: "left",
            fontColor: "white"
        },
        data: [{
            type: "bubble",
            showInLegend: true,
            legendText: "Size of Bubble Represents Quantity of Companies within a specific Industry",
            legendMarkerType: "circle",
            legendMarkerColor: "red",
            toolTipContent: "<b>{name}</b><br/><br/> Industry Saturation: {y}<br/>",
            dataPoints: [
                
                { x: 1, y: 114, z:320.896, name: "Sales and Marketing" },
                { x: 2, y: 31, z: 258.162, name: "Practice Management" },
                { x: 3, y: 24, z: 225.962, name: "Accounting and Finance" },
                { x: 4, y: 75, z: 125.890, name: "Business Mgt and ERP" },
                { x: 5, y: 27, z: 181.181, name: "Analytics and BI" },
                { x: 6, y: 16, z: 144.096, name: "IT Mgt" },
                { x: 7, y: 3, z:127.141, name: "Games and Entertainment" },
                { x: 8, y: 4, z:23.789, name: "Personal Sports and Fitness" },
                { x: 9, y: 16, z: 93.778, name: "Document Management" },
                { x: 10, y: 37, z:65.128, name: "HR and Recruiting" },
                { x: 11, y: 17, z: 47.236, name: "eLearning" },
                { x: 12, y: 13, z: 36.115, name: "Cloud and Software Dev Tools" },
                { x: 13, y: 12, z: 33.736, name: "Payments" },
                { x: 14, y: 21, z: 27.859, name: "Logistics, Supply Chain" },
                { x: 15, y: 21, z: 101.716, name: "Cybersecurity" },
                { x: 16, y: 10, z: 28.656, name: "Automation" },
                { x: 17, y: 21, z: 45.154, name: "Lifestyle" },
                { x: 18, y: 4, z: 46.447, name: "Clinical" },
                { x: 19, y: 5, z: 99.873, name: "Student Mgt" },
                { x: 20, y: 19, z: 68.65, name: "Marketplace" },
                { x: 21, y: 9, z: 48.228, name: "Personal Finance" },
                { x: 22, y: 6, z: 31.155, name: "Compliance" },
                { x: 23, y: 11, z: 55, name: "Ecommerce" },
                { x: 24, y: 2, z: 15.77, name: "Point of Sale" },
                { x: 25, y: 14, z: 22.834, name: "On-Demand Services"},
                { x: 26, y: 10, z: 48.228, name: "Personal On-Demand Services" },
                { x: 27, y: 3, z: 31.155, name: "Fraud Mgt" },
                { x: 28, y: 16, z: 55, name: "Personal Health Mgt" },
                { x: 29, y: 11, z: 15.77, name: "Communications" },
                { x: 30, y: 3, z: 22.834, name: "Personal eLearning"},
                { x: 31, y: 7, z: 22.834, name: "Personal Real Estate"},
            ]
        }]
    });
    chart.render();
    
    }