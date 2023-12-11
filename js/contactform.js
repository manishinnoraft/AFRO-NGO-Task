$(document).ready(function () {
  // Function to calculate the position of the second section
  function secondSectionPosition() {
    return $('.main section:nth-of-type(1)').offset().top;
  }

  $(window).scroll(function () {
    if ($(this).scrollTop() > secondSectionPosition()) {
      $('.contact-form-container').fadeIn();
    } else {
      $('.contact-form-container').fadeOut();
      $('.contact-form-wrapper').fadeOut();
    }
  });

  $('.contact-btn').click(function () {
    $('.contact-form-wrapper').fadeToggle();
    $('.thank-you-message').hide();
    $('.contact-btn').hide();
  });

  // Close button functionality
  $('.close-btn').click(function () {
    $('.contact-form-wrapper').fadeOut();
  });

  $('.contact-form').submit(function (e) {
    e.preventDefault();
    // Handle form submission here

    // Display the thank you message
    $('.thank-you-message').show();

     });
});

