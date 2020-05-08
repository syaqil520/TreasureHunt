$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('nav').addClass('shrink');
    } else {
      $('nav').removeClass('shrink');
    }
  });

// $(function(){
//     alert("My First Jquery Test");
//  });

//  document.querySelector(".nav").addEventListener("mouseover", function(event){
//     alert("Book a tour");
// });


// $(function(){
//     $('#header_nav').data('size','big');
//   });
  
//   $(window).scroll(function(){
//     if($(document).scrollTop() > 0)
//   {
//       if($('#header_nav').data('size') == 'big')
//       {
//           $('#header_nav').data('size','small');
//           $('#header_nav').stop().animate({
//               height:'40px'
//           },600);
//       }
//   }
//   else
//     {
//       if($('#header_nav').data('size') == 'small')
//         {
//           $('#header_nav').data('size','big');
//           $('#header_nav').stop().animate({
//               height:'100px'
//           },600);
//         }  
//     }
//   });