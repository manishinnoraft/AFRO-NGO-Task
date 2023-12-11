

// Slick slider js
$(function() {

  $('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 3000,
    autoplaySpeed: 2000,
    arrows:true,
    slidesToShow: 1,
    arrows:false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.responsive-1').slick({
    centerMode: true,
  centerPadding: '60px',
  dots:true,
  arrows: true,
  infinite: true,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        centerMode: true,
        arrows: true,
        centerPadding: '40px',
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        arrows: true,
        centerPadding: '40px',
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        centerMode: true,
        arrows: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
  });
});


	
