// Hamburger menu js
$(document).ready(function () {
  const menuBtn = $(".bar_icon");
  const list = $(".navbar__menu");
  menuBtn.click(function () {
    list.toggle();
  });
});

//Counter Js
var animationTriggered = false;

$(window).on("scroll", function(){
  var windowBottom = $(window).scrollTop() + $(window).height();
  var sectionTop = $(".aboutUs_section").offset().top;

  if (windowBottom - 100 >= sectionTop && !animationTriggered) {
    $(".aboutUs_section").css("opacity", "1");

    $(".statistics__card h3").each(function() {
      var $h3 = $(this);
      var targetValue = parseInt($h3.text());
      var currentNumber = 1;
      var step = 1;

      var counterInterval = setInterval(function() {
        $h3.text(currentNumber);
        currentNumber += step;

        if (currentNumber >= targetValue) {
          $h3.text(targetValue);
          clearInterval(counterInterval);
        }
      }, 10);
    });
    animationTriggered = true;
  } else if (!animationTriggered) {
    // Reset to original state when out of viewport
    $(".statistics__card h3").each(function() {
      var $h3 = $(this);
      var originalValue = $h3.text(); // Capture the original value
      $h3.text(originalValue);
    });
    $(".aboutUs_section").css("opacity", "0");
  }
});

//Js to Display navbar for smaller screens
document.addEventListener("DOMContentLoaded", function() {
  var navbar = document.querySelector('.navbar');

  function handleScroll() {
      if (window.innerWidth >= 768) {
          if (window.scrollY > navbar.offsetTop + navbar.offsetHeight) {
              navbar.style.display = 'none';
          } else {
              navbar.style.display = 'flex';
          }
      } else {
          navbar.style.display = 'flex'; 
      }
  }

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);
  handleScroll();
});


