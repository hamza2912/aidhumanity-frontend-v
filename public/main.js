$(document).ready(function () {
  $('.donation-history').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    dots: true,
    pagination: true,
    items: 1,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
  });
  $('.next').click(function() {
    $('.donation-history').trigger('next.owl.carousel');
  });
  $('.prev').click(function() {
      $('.donation-history').trigger('prev.owl.carousel', [300]);
  });
  $('.owl-carousel-1').owlCarousel({
    loop:true,
    margin:30,
    autoHeight: false,
    nav: false,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
  });
  $('.achievements-carousel').owlCarousel({
      loop:true,
      margin:30,
      nav: false,
      dots: true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:4
          }
      }
  });
  $('.events-carousel').owlCarousel({
      loop:true,
      margin:20,
      nav: false,
      dots: true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:6
          }
      }
  });
});