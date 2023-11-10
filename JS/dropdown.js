$("#dropdown").hide();
$("#btn_s").click(function (event) {
  event.stopPropagation();
  $("#dropdown").slideToggle("slow");
});
