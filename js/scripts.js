$(document).ready(function(){
  $("button#submit").click(function(event){
    var height = parseInt($("#height").val());

    if (height >= 3){
      $(".s").show();
      $(".m").hide();
      $(".l").hide();
      $(".x").hide();
    }
   if (height >= 4){
      $(".m").show();
      $(".s").hide();
      $(".l").hide();
      $(".x").hide();
    }
   if (height >= 5){
      $(".l").show();
      $(".s").hide();
      $(".m").hide();
      $(".x").hide();
    }
   if (height >= 6){
      $(".x").show();
      $(".l").hide();
      $(".s").hide();
      $(".m").hide();
    }
    event.preventDefault();
  });
});
