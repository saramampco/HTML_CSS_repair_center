// $(document).ready(function(){
//    $('.slider').slick({
//       arrows: true,
//       dots: true,
//       adaptiveHeight: true,
//       slidesToShow: 3,
//       slidesToScroll: 2,
//       autoplay: false,
//       autoplaySpeed: 2400,
//    });
// });

jQuery("#carousel").owlCarousel({
   // autoplay: true,
   lazyLoad: true,
   rewind: true,
   margin: 20,
    /*
   animateOut: 'fadeOut',
   animateIn: 'fadeIn',
   */
   responsiveClass: true,
   // autoHeight: true,
   autoplayTimeout: 7000,
   smartSpeed: 800,
   nav: true,
   responsive: {
     0: {
       items: 1
     },
 
     600: {
       items: 3
     },
 
     1024: {
       items: 4
     },
 
     1366: {
       items: 4
     }
   }
 });