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
    this.created_at = formatDate(created_at);
    this.updated_at = formatDate(updated_at);
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
    updateListItem();
    processSearchedUser(user);
    processSearchedUserCharts();
    getAllUserRepos(user.repos_url);
    getCommits(user.username);
    restartFullpage();
    updateWindowLocation('#secondPage');
  });
  request.fail(function( jqXHR, textStatus) {
    alert( "Request failed: " + textStatus );
  });
}

function processSearchedUser(user) {
  displaySearchedUser(user);
  updateWrapperAttributes('#section1', 'secondPage');
}

function processSearchedUserCharts() {
  displaySearchedUserCharts();
  updateWrapperAttributes('#section2', 'thirdPage');
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
  let $slideButtons =  $('#menu li');
  if ($slideButtons.length === 1) {
    $slideButtons.after('<li data-menuanchor="secondPage"><a href="#secondPage">Second slide</a></li><li data-menuanchor="thirdPage"><a href="#thirdPage">Third slide</a></li>');
  }
}

function updateWrapperAttributes(id, pageNum) {
  $(id).attr({
    class: 'section',
    'data-anchor': pageNum
  });
}

function formatDate(date) {
  var monthNames = [
  "Jan", "Feb", "Mar",
  "Apr", "May", "Jun", "Jul",
  "Aug", "Sep", "Oct",
  "Nov", "Dec"
  ];
  var weekDays = [
  "Sunday", "Monday", "Tuesday",
  "Wednesday", "Thursday", "Friday",
  "Saturday"
  ];

  var date = new Date(date);
  var weekDay = date.getDay();
  var moDay = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();
  return  weekDays[weekDay] + ", " + moDay + " " + monthNames[monthIndex] + " " + year; 
}