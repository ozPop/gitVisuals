$(function() {
    getReposUrl();
    getCommits('natalisp');
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

function getReposUrl() {
   $.ajax({
      type: 'GET',
      url: window.location.href + '.json',
      success: function(resp){
          createRepos(resp.repos_url);
      }
    });
}

function createRepos(url) {
  $.ajax({
    type: 'GET',
    url: url,
    success: function (response) {
      var repos = response.map(function (repo) {
        oneRepo = new Repo(repo)
        return new Repo(repo);
      });
      renderCharts(repos);
    }
  })
}
