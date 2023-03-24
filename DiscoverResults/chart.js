// Get the canvas element from the HTML file
var ctx = document.getElementById("myChart").getContext("2d");

// Define the data for your line graph
var chartData = {
  labels: [],
  datasets: [
    {
      label: "Temperature",
      data: [],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

// Fetch the data from the PHP script
fetch('temperature.php')
  .then(response => response.json())
  .then(data => {
    // Loop through the data and add it to the chart data
    data.forEach(row => {
      chartData.labels.push(row.measurement_time);
      chartData.datasets[0].data.push(row.temperature);
    });

    // Create a new line chart and display it on the canvas element
    var myChart = new Chart(ctx, {
      type: "line",
      data: chartData,
    });
  })
  .catch(error => console.error(error));