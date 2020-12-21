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


$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
      loop:true, //Зацикливаем слайдер
      margin:10, //Отступ от картино если выводите больше 1
      nav:false, //Отключил навигацию
      // autoplay:true, //Автозапуск слайдера
      smartSpeed:1000, //Время движения слайда
      autoplayTimeout:4000, //Время смены слайда
      responsive:{ //Адаптация в зависимости от разрешения экрана
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
});


