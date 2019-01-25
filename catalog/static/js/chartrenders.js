// Chart Definition and JS Render Calls

var endpoint = '/catalog/api/data/';
var chartLabels = [];
var chartData = [];

var chartColor = ['rgba( 63, 191,  63, 0.6)',
                  'rgba(225,  45,  45, 0.6)',
                  'rgba( 45,  45, 225, 0.6)'];

$.ajax({
    url: endpoint,
    success: function(data) {
      chartLabels = data.labels;
      chartData = data.data;
      setChart();
    },
    error: function(error_data) {
      console.log("error");
      console.log(error_data);
    }
});

function setChart() {
  var ctx = document.getElementById("statusPieChart");
  var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          datasets: [{
              data: chartData,
              backgroundColor: chartColor,
              borderColor: chartColor,
              borderWidth: 1
          }],
          labels: chartLabels
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Book Copy Status'
        },
        legend: {
          display: true
        },
      }
  });
}
