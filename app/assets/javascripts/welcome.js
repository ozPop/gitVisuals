$(document).ready(function() {
  console.log('page loaded');
});

// AJAX CALLS

function localSearchUser() {
  $.ajax({
    method: 'GET',
    url: "http://localhost:3000/github_users",
    dataType: 'json',
    success: function(response) {
      // handle response
      debugger
    },
    error: function(response) {
      throw new Error("Ajax failed. Response message = " + response.statusText);
    }
  });
}

function findUser(user, username) {
  return user.name === username;
}

function getGithubUser(name) {
  $.ajax({
    method: 'GET',
    url: "https://api.github.com/users/" + name,
    success: function(response) {
      // handle response
    }
  });
}

function getGithubUserRepos(name) {
  $.ajax({
    method: 'GET',
    url: "https://api.github.com/users/" + name + "/repos",
    success: function(response) {
      // handle response
    }
  });
}