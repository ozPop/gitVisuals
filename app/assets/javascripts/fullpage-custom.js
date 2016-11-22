$(document).ready(function() {
  if ( $( 'html' ).hasClass( 'fp-enabled' ) !== true ) {
    $('#fullpage').fullpage({
      sectionsColor: ['#e0dfdc', '#e0dfdc'],
      anchors: ['firstPage', 'secondPage'],
      menu: '#menu',
      scrollingSpeed: 1000
    });
  }
});

function restartFullpage() {
  $.fn.fullpage.destroy('all');
  if ( $( 'html' ).hasClass( 'fp-enabled' ) !== true ) {
    $('#fullpage').fullpage({
      sectionsColor: ['#e0dfdc', '#e2e0df', '#e2e0df'],
      anchors: ['firstPage', 'secondPage', 'thirdPage'],
      menu: '#menu',
      scrollingSpeed: 1000
    });
  }
}
