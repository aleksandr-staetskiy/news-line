$(document).ready(function () {
  $('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});