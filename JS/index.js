const swiper = new Swiper(".mySwiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$("#dropdown").hide();
$("#btn_s").click(function (event) {
  event.stopPropagation();
  $("#dropdown").slideToggle("slow");
});
