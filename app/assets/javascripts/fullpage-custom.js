$(document).ready(function() {
  if ( $( 'html' ).hasClass( 'fp-enabled' ) !== true ) {
    $('#fullpage').fullpage({
      sectionsColor: ['#e0dfdc', '#e2e0df'],
      anchors: ['firstPage', 'secondPage'],
      menu: '#menu',
      scrollingSpeed: 1000
    });
  }
});
