$(document).ready(function() {
  attachEventListeners();
});

function attachEventListeners() {
  $(".cf button").on('click', function(e) {
    e.preventDefault();
    let user = $(this).prev().val();
    getSearchedUser(user);
  });
}

// HANDLEBARS COMPILE
function formatUserTemplate(user) {
  let template = $('#searched-user').html();
  let templateScript = Handlebars.compile(template);
  return templateScript(user);
}

function formatChartsTemplate() {
  let template = $('#searched-user-charts').html();
  let templateScript = Handlebars.compile(template);
  return templateScript();
}

// DISPLAYING THINGS
function displaySearchedUser(user) {
  let html = formatUserTemplate(user);
  $('#section1').html(html);
}

function displaySearchedUserCharts() {
  let html = formatChartsTemplate();
  $('#section2').html(html);
}