$(document).ready(function() {
  // debugger
});

// CLASSES

class User {
  constructor({login, html_url, repos_url, avatar_url, followers_url, following_url, followers, following, public_repos, public_gists, starred_url, gists_url, created_at, updated_at}) {
    this.username = login;
    this.profile_url = html_url;
    this.repos_url = repos_url;
    this.avatar_url = avatar_url;
    this.followers_url = followers_url;
    this.following_url = following_url;
    this.followers = followers;
    this.following = following;
    this.public_repos = public_repos;
    this.public_gists = public_gists;
    this.starred_url = starred_url;
    this.gists_url = gists_url;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

class Repository {
  constructor({name, html_url, description, commits_url, created_at, pushed_at, size, language, owner}) {
    this.name = name;
    this.profile_url = html_url;
    this.description = description;
    this.commits_url = commits_url.split('{')[0];
    this.created_at = created_at;
    this.pushed_at = pushed_at;
    this.size = size;
    this.language = language;
    this.owner = owner.login;
  }
}

// API CALLS

function getSearchedUser(user) {
  let url = 'https://api.github.com/users/' + user;
  let request = $.ajax({
    url: url,
    type: 'GET',
    dataType: 'JSON',
    data: {access_token: window.currentUser.token},
  });
  request.done(function(response) {
    let user = new User(response);
    updateListItem('second', 'Second slide');
    displaySearchedUser(user);
    updateWrapperAttributes('#display-searched-user', 'section1', 'secondPage');
    restartFullpage();
    updateWindowLocation('#secondPage');
    getUserRepos(user.repos_url);
  });
  request.fail(function( jqXHR, textStatus) {
    alert( "Request failed: " + textStatus );
  });
}

function getUserRepos(url) {
  let request = $.ajax({
    url: url,
    type: 'GET',
    dataType: 'JSON',
    data: {access_token: window.currentUser.token, sort: 'pushed', per_page: 100},
  });
  request.done(function(response) {
    let repos = response.map(function (repo) {
        return new Repository(repo);
      });
  });
  request.fail(function( jqXHR, textStatus) {
    alert( "Request failed: " + textStatus );
  });
}

// HELPER FUNCTIONS

function repoLanguages(repos) {
  let languages = repos.map(function (repo) {
    return repo.language;
  });
  return languages.filter(function(val){ return val !== null });
}

// Source of code: http://stackoverflow.com/a/14438954/6664582
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function languageStats(languages) {
  let unique = languages.filter(onlyUnique);
  let result = {};
  $.each(unique, function(index, value) {
    result[value] = languages.filter(function(val){ return val === value }).length;
  });
  return result;
}

function updateWindowLocation(location) {
  if (window.location.href.includes('#')) {
    window.location.href = window.location.href.split('#')[0] + location;
  } else {
    window.location.href = window.location.href + location;
  }
}

function updateListItem(page, name) {
  // NEEDS IMPROVEMENT
  // Should replace anchors when searching multiple
  let $slideButtons =  $('#menu li');
  if ($slideButtons.length === 1) {
    $slideButtons.after('<li data-menuanchor="'+ page +'Page"><a href="#'+ page +'Page">'+ name +'</a></li>');
  }
}

function updateWrapperAttributes(id, sectionNum, pageNum) {
  $(id).attr({
    class: 'section',
    id: sectionNum,
    'data-anchor': pageNum
  });
}
