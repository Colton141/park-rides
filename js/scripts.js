$(document).ready(function(){
  $("button#submit").click(function(event){
    var height = parseInt($("#height").val());

    if (height >= 3 && height < 4){
      $(".s").show();
      $(".m").hide();
      $(".l").hide();
      $(".x").hide();
      $(".too-short").hide();
    } else if (height >= 4 && height < 5){
      $(".m").show();
      $(".s").hide();
      $(".l").hide();
      $(".x").hide();
      $(".too-short").hide();
    } else if (height >= 5 && height < 6){
      $(".l").show();
      $(".s").hide();
      $(".m").hide();
      $(".x").hide();
      $(".too-short").hide();
    } else if (height >= 6){
      $(".x").show();
      $(".l").hide();
      $(".s").hide();
      $(".m").hide();
      $(".too-short").hide();
    } else {
      $(".too-short").show();
      $(".x").hide();
      $(".l").hide();
      $(".s").hide();
      $(".m").hide();
    }
    event.preventDefault();
  });
});
