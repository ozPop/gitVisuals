$(document).ready(function() {
  $('select').change(function () {
    if ($(this).val().includes("http")) {
      console.log('here');
      redirect($(this).val());
    }
  });
})

function redirect(goto){

    if (goto != '') {
      window.open(goto, '_blank');
    }
}
