$(function () {
  getCommits('natalisp', 'yumoo-app')
})

function getCommits(user, repo) {
  let url = 'https://api.github.com/repos/' + user + '/' + repo + '/stats/punch_card';
$.ajax({
  type: 'GET',
  url: url,
  success : function (response) {
    renderCommits(response);
  }
});

function renderCommits(commits) {

  var commitsChart = document.getElementById("commitsChart");
  var h = {};
  var bubbleData = [];

  for (i = 0; i < commits.length; i++) {
    h['x'] = (commits[i][0] + 3);
    h['y'] = (commits[i][1] + 3);
    h['r'] = (commits[i][2] + 3);
    bubbleData.push(h);
  };





}
