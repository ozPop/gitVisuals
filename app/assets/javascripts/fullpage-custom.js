$(document).ready(function() {
  if ( $( 'html' ).hasClass( 'fp-enabled' ) !== true ) {
    $('#fullpage').fullpage({
      sectionsColor: ['#02C39A', '#00A896'],
      anchors: ['firstPage', 'secondPage'],
      menu: '#menu',
      scrollingSpeed: 1000
    });
  }
});
