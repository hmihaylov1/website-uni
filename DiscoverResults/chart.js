// Define a function to fetch data from the PHP file
async function getData() {
    const response = await fetch('get_data.php');
    const data = await response.json();
    return data;
}

// Call the function to get the data and create the chart
getData().then(data => {
  const temperatures = data.map(row => row.temperature);
  const measurement_times = data.map(row => row.measurement_time);

  const ctx = document.getElementById('temperatureChart').getContext('2d');
  const temperatureChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: measurement_times,
      datasets: [{
        label: 'Temperature',
        data: temperatures,
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1,
        fill: false
      }]
    },
    options: {
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            displayFormats: {
              'millisecond': 'MMM DD, YYYY h:mm:ss.SSS a',
              'second': 'MMM DD, YYYY h:mm:ss a',
              'minute': 'MMM DD, YYYY h:mm a',
              'hour': 'MMM DD, YYYY hA',
              'day': 'MMM DD, YYYY',
              'week': 'MMM DD, YYYY',
              'month': 'MMM YYYY',
              'quarter': '[Q]Q - YYYY',
              'year': 'YYYY',
            }
          },
          scaleLabel: {
            display: true,
            labelString: 'Measurement Time'
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Temperature'
          }
        }]
      }
    }
  });
}); 