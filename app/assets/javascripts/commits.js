
function getCommits(user) {
  let url = 'https://api.github.com/users/' + user + '/events';
 $.ajax({
   type: 'GET',
   url: url,
   data: { type: "pushEvent", page: 1, per_page: '100', access_token: window.currentUser.token },
   success: function(resp){
     let result = [];
     $.each(resp, function(key, val) {
       if (val.type === "PushEvent") {
         result.push({"created_at": val.created_at, "size": val.payload.size});
       }
     });
    renderCommits(result);
   }
 });
 };


function renderCommits(commits) {
  var days = [0, 1, 2, 3, 4, 5, 6];
  var commitsCount =  days.map(function(day){
      return getRepoCount(day, commits);
  });

  function getRepoCount(day, commits) {
  return commits.filter(function(c){
    date = new Date(c.created_at);
    return date.getDay() === day;
  }).length;
  }

 var sizes = [0, 0, 0, 0, 0, 0, 0];

for (let z = 0; z < sizes.length; z++) {
  for (let i = 0; i < commits.length; i++) {
    date = new Date(commits[i].created_at);
    var d = date.getDay()
      switch(d){
      case 0:
          sizes[0] += commits[i].size ;
          break;
      case 1:
          sizes[1] += commits[i].size ;
          break;
      case 2:
          sizes[2] += commits[i].size ;
          break;
      case 3:
          sizes[3] += commits[i].size ;
          break;
      case 4:
          sizes[4] += commits[i].size ;
          break;
      case 5:
          sizes[5] += commits[i].size ;
          break;
      case 6:
          sizes[6] += commits[i].size ;
          break;
      }
}
}

  var commitsChart = document.getElementById("commitsChart").getContext("2d");
  var bubbleChartData = {
    labels: ["SUN","MON","TUE","WED","THU","FRI","SAT"],
      datasets: [
        {
              label: 'Weekdays',
              data: [
                  {
                      x: 1,
                      y: commitsCount[1],
                      r: sizes[1]
                  },
                  {
                      x: 2,
                      y: commitsCount[2],
                      r: sizes[2]
                  },
                  {
                      x: 3,
                      y: commitsCount[3],
                      r: sizes[3]
                  },
                  {
                      x: 4,
                      y: commitsCount[4],
                      r: sizes[4]
                  },
                  {
                      x: 5,
                      y: commitsCount[5],
                      r: sizes[5]
                  }
              ],
              backgroundColor:"#ca4444",
              hoverBackgroundColor: "#FF6384",
          },
          {
              label: 'Weekends',
              data: [
                {
                    x: 6,
                    y: commitsCount[6],
                    r: sizes[6]
                },
                {
                    x: 7,
                    y: commitsCount[0],
                    r: sizes[0]
                }
              ],
              backgroundColor:"#000",
              hoverBackgroundColor: "#FF6384",
          }
          ]
  };

  var comChart = new Chart(commitsChart,{
              type: 'bubble',
              data: bubbleChartData,
              options: {
                pointLabels: {
                  fontSize: 30,
                },
                responsive: true,
                      scales: {
                        yAxes: [{
                            display: true,
                            ticks: {
                               fontSize: 30,
                                max: 18,
                                min: 0,
                                stepSize: 3
                               }
                              }],
                        xAxes: [{
                          display: true,
                             ticks: {
                               fontSize: 30,
                               display: true,
                                max: 8,
                                min: 0
                              }
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
}
