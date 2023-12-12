// Js to show contact form after banner section.
$(document).ready(function () {
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
    $('.thank-you-message').show();
  });
});

