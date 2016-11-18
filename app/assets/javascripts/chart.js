function renderCharts(repos) {

  var months = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  var reposCount =  months.map(function(month){
      return getRepoCount(month, repos);
  });

  function getRepoCount(month, repos) {
  return repos.filter(function(repo){
    date = new Date(repo.created_at);
    return date.getMonth() === month;
  }).length;
  }

Chart.defaults.global

  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    title:{
       text: "Index Labels Customizations"
      },
    type: 'bar',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
            label: '# of Repos',
            data: reposCount,
            backgroundColor: "#ca4444",
            borderColor: "#ca4444",
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontSize: 20
                }
            }],
            xAxes: [{
            ticks: {
                fontSize: 20
            }
        }]
        }
    }
});

}
