// Get the canvas element from the HTML file
var ctx = document.getElementById("myChart").getContext("2d");

// Define the data for your line graph
var chartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

// Create a new line chart and display it on the canvas element
var myChart = new Chart(ctx, {
  type: "line",
  data: chartData,
});