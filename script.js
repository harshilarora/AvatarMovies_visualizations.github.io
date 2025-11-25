const ctx = document.getElementById('myChart').getContext('2d');

// Initial graph
let chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [{
      label: 'Votes',
      data: [12, 19, 3],
      backgroundColor: ['red', 'blue', 'yellow']
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});

// Button to change graph data
document.getElementById('changeGraph').addEventListener('click', () => {
  chart.data.datasets[0].data = [5, 10, 15]; // new data
  chart.update();
});