$(document).ready(function () {
  $('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});