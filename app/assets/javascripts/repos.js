$(function() {
  if ($('.users.show').length !== 0) {
    getAllUserRepos(window.currentUser.repos_url);
    getCommits(window.currentUser.username);
  }
});

class Repo {
  constructor(attr) {
    this.name = attr.name;
    this.description = attr.description;
    this.created_at = attr.created_at;
    this.pushed_at = attr.pushed_at;
    this.language = attr.language;
    this.commits_url = attr.commits_url;
    this.size = attr.size;
    this.commits = 0
  }
  getCommits() {
    var url = this.commits_url.slice(0, -6);
    $.ajax({
      type: 'GET',
      url: url,
      success: function(resp) {
        return resp.length;
      }
    });
  }
}

// AJAX CALLS


function getAllUserRepos(url) {
  let userRepos = [];
  let ajaxStatus = 0;

  for( let i = 0; i < 3; i++ ) {
    getUserRepos(url, i + 1);
  }

  function getUserRepos(url, pageNum) {
    let request = $.ajax({
      url: url,
      type: 'GET',
      dataType: 'JSON',
      data: {access_token: window.currentUser.token, page: pageNum, sort: 'pushed', per_page: 100},
    });
    request.done(function(response) {
      let repos = response.map(function (repo) {
          return new Repository(repo);
        });
      userRepos.push(repos);
      ajaxStatus += 1;
      if ( ajaxStatus === 3 ) {
        processUserRepos();
      }
    });
    request.fail(function( jqXHR, textStatus) {
      alert( "Request failed: " + textStatus );
    });
  }

  function processUserRepos() {
    let reposTotal = userRepos.reduce(function(a, b) {
      return a.concat(b);
    }, []);
      renderCharts(reposTotal);
  }

}
