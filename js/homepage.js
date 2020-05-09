$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});


let myLabels = document.querySelectorAll('.lbl-toggle');

Array.from(myLabels).forEach(label => {
  label.addEventListener('keydown', e => {
    // 32 === spacebar
    // 13 === enter
    if (e.which === 32 || e.which === 13) {
      e.preventDefault();
      label.click();
    };
  });
});

// $(window).scroll(function() {
//     if ($(document).scrollTop() > 50) {
//       $('nav').addClass('shrink');
//     } else {
//       $('nav').removeClass('shrink');
//     }
//   });


//   Holder.addTheme('gray', {
//     bg: '#777',
//     fg: 'rgba(255,255,255,.75)',
//     font: 'Helvetica',
//     fontweight: 'normal'
// //   });

// var coll = document.getElementsByClassName("click-collapse");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.maxHeight){
//       content.style.maxHeight = null;
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//     } 
//   });
// }

//   $("#viewGames").click(function(){
//     $("#gameListPanel").removeClass('hide').slideToggle('slow');
//   });
  
  