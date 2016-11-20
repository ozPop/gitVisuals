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

// DISPLAYING THINGS
function displaySearchedUser(user) {
  let html = formatUserTemplate(user);
  $('#display-searched-user').html(html);
}