function renderCharts(repos) {
// BAR CHART
  var months = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  var reposCount =  months.map(function(month){
      return getRepoCount(month, repos);
  });

  function getRepoCount(month, repos) {
  return repos.filter(function(repo){
    date = new Date(repo.created_at);
    return (date.getMonth() +1) === month;
  }).length;
  }

  var ctx = document.getElementById("barChart");
  debugger
  var myChart = new Chart(ctx, {
    type: 'bar',
    label: 'REPOS',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
            label: '# of Repos',
            data: reposCount,
            backgroundColor: "#ca4444",
            borderColor: "#ca4444",
            borderWidth: 1,
            fontSize: 30
        }]
    },
    options: {
      tooltips: {
        titleFontSize: 15
      },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontSize: 30
                }
              }],
            xAxes: [{
            ticks: {
                fontSize: 30
              },
            barPercentage: 1
        }]
      },
      legend: {
          position: 'top',
          labels: {
            fontSize: 30
          }
      }
    }
});

//pieChart

var pie = document.getElementById("pieChart");
var reposLanguages = repoLanguages(repos);
var l = languageStats(reposLanguages);

var myPieChart = new Chart(pie, {
    label: 'LANG',
    type: 'pie',
    data: {
        labels: ["Ruby", "HTML", "JavaScript", "CSS"],
        datasets: [{
          backgroundColor: [
            "#ca4444",
            "#3498db",
            "#95a5a6",
            "#9b59b6"
          ],
          borderColor: "#ca4444",
          data: [
            l['Ruby'],
            l['HTML'],
            l['JavaScript'],
            l['CSS']
          ]
        }]
      },
  options: {
        tooltips: {
          titleFontSize: 30,
          bodyFontSize: 30
        },
         responsive: true,
         legend: {
             position: 'top',
             labels: {
               fontSize: 30
             }
         },
         scale: {
           ticks: {
             beginAtZero: true
           },
           reverse: false
         },
         animation: {
             animateRotate: false,
             animateScale: true
         }
     }
});


}
