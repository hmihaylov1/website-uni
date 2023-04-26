// Get the canvas element from the HTML file
var ctx = document.getElementById("myChart").getContext("2d");

// Define the data for your line graph
var chartData = {
  labels: [],
  datasets: [
    {
      label: "CO2 Level",
      data: [],
      fill: false,
      borderColor: "rgb(237, 117, 5)",
      tension: 0.1,
    },
  ],
};

// Fetch the data from the PHP script
fetch('co2-data.php')
  .then(response => response.json())
  .then(data => {
    // Loop through the data and add it to the chart data
    data.forEach(row => {
      chartData.labels.push(row.measurement_time);
      chartData.datasets[0].data.push(row.co2_level);
    });

    // Create a new line chart and display it on the canvas element
    var myChart = new Chart(ctx, {
      type: "line",
      data: chartData,
    });

    // Log the data to the console for debugging purposes
    console.log(chartData.datasets[0].data);
  })
  .catch(error => console.error(error));