function calculate()
{
    var field1;
    var field2;
    var field3;
    var field4;
    var field5;
    var field6;
    var field7;
    //Make sure each value entered in the text boxes are numbers!
    
    field1 = document.getElementById("num1").value; //Total Revenue
    field2 = document.getElementById("num2").value; //Costs of Goods Sold
    field3 = document.getElementById("num3").value; //Salary Expense
    field4 = document.getElementById("num4").value; //Rent Expense
    field5 = document.getElementById("num5").value; //Utility Expense
    field6 = document.getElementById("num6").value; //Depreciation Expense
    field7 = document.getElementById("num7").value; //Taxes


    if (isNaN(field1, field2, field3, field4, field5, field6, field7))
    {
        window.alert("Need to enter a number!");
    }


    if (field1, field2, field3, field4, field5, field6, field7 == "")
    {
        window.alert("Need to enter a number!");
    }

    /*if (field2 == "") {
        window.alert("Need to enter a number!");
    }

    if (field3 == "") {
        window.alert("Need to enter a number!");
    }

    if (field4 == "") {
        window.alert("Need to enter a number!");
    }

    if (field5 == "") {
        window.alert("Need to enter a number!");
    }

    if (field6 == "") {
        window.alert("Need to enter a number!");
    }

    if (field7 == "") {
        window.alert("Need to enter a number!");
    }*/

    //field1, field2, etc. are string variables and need to be converted to a numeric data type (i.e. Float)
    var result1 = parseFloat(field1) - parseFloat(field2); //Gross Profit
    //var rresult1 = Number((result).toFixed(2));

    var result2 = parseFloat(field3) + parseFloat(field4) + parseFloat(field5) + parseFloat(field6); //Total Operating Expneses
    //var rresult2 = Number((result).toFixed(2));

    var result3 = parseFloat(field7); //Taxes
    //var rresult3 = Number((result).toFixed(2));

    var result4 = parseFloat(result1) - parseFloat(result2) - parseFloat(field7); //Net Income
    //var rresult4 = Number((result).toFixed(2));

    //If result1, result2 !isNaN, "is a number", make the following calculations.
    if (!isNaN(result1))
    {
        document.getElementById("answer1").innerHTML = "Gross Profit: " + "$" + result1;

    }

    if (!isNaN(result2))
    {
        document.getElementById("answer2").innerHTML = "Total Operating Expense: " + "$" + result2;
    }

    if (!isNaN(result3))
    {
        document.getElementById("answer3").innerHTML = "Taxes: " + "$" + result3;
    }

    if (!isNaN(result4))
    {
        document.getElementById("answer4").innerHTML = "Net Income/Net Loss: " + "$" + result4;
    }

    /*$("h2").animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
    });*/
    //This is the bar chart that will compare Gross Profit, Total Operating Expenses, Taxes, and Net Income
    
    var ctx = document.getElementById('myChart');

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Gross Profit', 'Total Operating Expenses', 'Taxes', 'Net Income'],
            datasets: [{
                label: 'Amount ($)',
                data: [result1, result2, result3, result4],
                backgroundColor: function (context) {
                    var index = context.dataIndex;
                    var value = context.dataset.data[index];
                    return value < 0 ? 'red' :  // draw negative values in red
                        'green';
                },
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },

            title: {
                display: true,
                text: "Net Income Bar Chart",
                position: 'top'
            }
        }
    });
   //This is the pie chart that will compare expenses
    var dtx = document.getElementById('pieChart');
    var pieChart = new Chart(dtx, {
        type: 'pie',
        data: {
            labels: ['Salary Expense', 'Rent Expense', 'Utility Expense', 'Depreciation Expense', 'Cost of Goods Sold'],
            datasets: [{
                label: 'Amount ($)',
                data: [field2, field3, field4, field5, field6],
                backgroundColor: function (context) {
                    var pindex = context.dataIndex;
                    var pvalue = context.dataset.data[pindex];
                    /*return pvalue < 0 ? 'red' :  // draw negative values in red
                        'green';*/
                    return 
                        if (pvalue == field2)
                        {
                            backgroundColor: 'purple';
                        }
                        else if (pvalue == field3)
                        {
                            backgroundColor: 'blue';
                            
                        }

                        else if (pvalue == field4)
                        {
                            backgroundColor: 'green';
                            
                        }

                        else if (pvalue == field5)
                        {
                            backgroundColor: 'orange';
                            
                        }

                        else if (pvalue == field6)
                        {
                            backgroundColor: 'yellow';
                            
                        }
                    

                },
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            
            title: {
                display: true,
                text: "Expenses Pie Chart",
                position: 'bottom'
            }
        }
    });
   
    
}

document.getElementById("reset").onclick = function () {
    //This will clear out the values entered in the text boxes
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("num3").value = "";
    document.getElementById("num4").value = "";
    document.getElementById("num5").value = "";
    document.getElementById("num6").value = "";
    document.getElementById("num7").value = "";


    
};




