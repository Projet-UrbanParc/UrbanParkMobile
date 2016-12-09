/*==============================*/
/*         GRAND ECRAN          */
/*==============================*/
$(function(){
  $('#horaire').hide();
  $('#infohoraire').hover(function(){
    $('#horaire').fadeIn();
  }, function(){
    $('#horaire').fadeOut();
  });
});
/*==============================*/
/*         PETIT ECRAN          */
/*==============================*/
$(function(){
  $("#horairetel").hide();
  $("#infohorairetel").click(function(){
    $("#horairetel").toggle('slow');
  });
});
