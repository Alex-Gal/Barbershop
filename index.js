$(document).ready(function () {
  $(".slider__item").eq(0).clone().appendTo(".slider");
  $(".slider__item").eq(1).clone().appendTo(".slider");
  $(".slider__item").eq(2).clone().appendTo(".slider");
  $(".slider__item").eq(0).clone().appendTo(".slider");
  $(".slider__item").eq(1).clone().appendTo(".slider");
  $(".slider__item").eq(2).clone().appendTo(".slider");
  $(".slider__item").eq(0).clone().appendTo(".slider");

  $(".slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
      // responsive: [
      //   {
      //     breakpoint: 992,
      //     settings: "unslick"
      //   }
      // ]
  });
});


