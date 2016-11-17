$(document).ready(function() {
  if ( $( 'html' ).hasClass( 'fp-enabled' ) !== true ) {
    $('#fullpage').fullpage({
      sectionsColor: ['#1bbc9b', '#4BBFC3'],
      anchors: ['firstPage', 'secondPage'],
      menu: '#menu',
      scrollingSpeed: 1000
    });
  }
});