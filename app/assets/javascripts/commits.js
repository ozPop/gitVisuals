function getCommits(user) {
  let url = 'https://api.github.com/users/' + user + '/events';
  $.ajax({
    type: 'GET',
    url: url,
    data: { type: "pushEvent", page: 2, per_page: '100'},
    success: function(resp){
      debugger
    }
  });



  var months = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  var commitsCount = months.map(function(month){
      return getCommitsCount(month, commits);
  });

  function getCommitsCount(month, commits) {
  return commits.filter(function(commit){
    date = new Date(commit.created_at);
    return date.getMonth() === month;
  }).length;
  }


}
