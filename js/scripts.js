$(document).ready(function(){
  $("button#submit").click(function(event){
    var height = parseInt($("#height").val());

    if (height >= 3){
      $(".s").show();
    } else if (height >= 4){
      $(".m").show();
    } else if (height >= 5){
      $(".l").show();
    } else if (height >= 6){
      $(".x").show();
      $(".s").hide();
    }
    event.preventDefault();
  });
});
