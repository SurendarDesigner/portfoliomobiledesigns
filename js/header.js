// var settings ****************************************************
var $header = $('.header-menu');
// code setting  (mobile menu )*************************************


// 06. we add the class stick to the fixed header to change his appearance and the apparence of their content on scroll
$(window).scroll(function() {
if ($(this).scrollTop() > 100){  
    $(".header-menu").addClass("header-menu-background");
  }
  else {
    $(".header-menu").removeClass("header-menu-background");
  }
});

//hamburger animation
document.addEventListener('DOMContentLoaded', function() {
  var burgerMenu = document.getElementById('burger-menu');
  
  burgerMenu.addEventListener('click', function() {
      this.classList.toggle('burger-clicked');
      $(".header-mobile-menu").toggleClass("mobile-menu-height");
  });
});

$(document).ready(function(){

  $(".menu-items").click(function(){
    $(".header-mobile-menu").toggleClass("mobile-menu-height");
  });

});


// scroll reveal animation
ScrollReveal().reveal('.scrollrev-title', { distance: '50px', delay: 300, viewOffset: { top: 480 } })
ScrollReveal().reveal('.scrollrev-work', { distance: '50px', delay: 600, viewOffset: { top: 550 } })
ScrollReveal().reveal('.about-me', { distance: '50px', delay: 600, viewOffset: { top: 550 } })
ScrollReveal().reveal('.tech-skills', { distance: '50px', delay: 600, viewOffset: { top: 550 } })
ScrollReveal().reveal('.footer', { distance: '50px', delay: 600, viewOffset: { top: 550 } })

ScrollReveal().reveal('.scrollrev-case-title', { distance: '50px', delay: 300, viewOffset: { top: 480 } })
ScrollReveal().reveal('.scrollrev-case-desc', { distance: '50px', delay: 300, viewOffset: { top: 480 } })


//download resume
$(document).ready(function() {
  // Function to open PDF in a new tab
  function openPDFInNewTab(fileName) {
    window.open(fileName, '_blank');
  }

  // Event listener for button click
  $(".download-resume").on("click", function() {
    // Specify the PDF file name with a relative path
    var pdfFileName = 'resume/Surendar_Resume_2020.pdf';

    // Open PDF in a new tab
    openPDFInNewTab(pdfFileName);
  });
});


