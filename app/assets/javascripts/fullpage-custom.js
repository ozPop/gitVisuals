$(document).ready(function() {
  if ( $( 'html' ).hasClass( 'fp-enabled' ) !== true ) {
    $('#fullpage').fullpage({
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#4B8BC3'],
      anchors: ['firstPage', 'secondPage', 'thirdPage'],
      menu: '#menu',
      scrollingSpeed: 1000
    });
  }
});

function restartFullpage() {
  $.fn.fullpage.destroy('all');
  if ( $( 'html' ).hasClass( 'fp-enabled' ) !== true ) {
    $('#fullpage').fullpage({
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#4B8BC3'],
      anchors: ['firstPage', 'secondPage', 'thirdPage'],
      menu: '#menu',
      scrollingSpeed: 1000
    });
  }
}