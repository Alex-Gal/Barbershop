console.clear();

// *Для тех, кто сделал лендинг с барбершопом:
// подключите slick slider(либо другой удобный) для блока с мастерами,
// сделайте, к примеру, чтобы мастеров было 10
// (данные о мастерах просто продублируйте)
// console.log($(".block4__masters_name").eq(1).text());
// $(".block4__masters_box").slick();

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
