$(document).ready(function() {
  updateCurrentSection();

  // console.log($("video").prop("volume", .5));
  // console.log($("video").prop("volume"));

  /* Video play control code */

  var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

  if (iOS) {
    $('.hero').css('background-attachment', 'scroll');
    $('.photo-section').css('background-attachment', 'scroll');
  }

  // var message = "I miss you :(";
  // var original;

  // $(window).focus(function() {
  //   if (original) {
  //     document.title = original;
  //   }
  // }).blur(function() {
  //   var title = $("title").text();
  //   if (title != message) {
  //     original = title;
  //   }
  //   document.title = message;
  // });

  /* Nav bar opacity change on scroll */

  var animationSpeed = 2000;
  var scrollInterval = $.duringScroll({
    interval: 60,
    always: function() {

    },
    scrollStart: function() {
      // $('nav').css({
      //  'opacity': '0.4'
      // });
    },
    duringScroll: function() {
      updateCurrentSection();
    },
    afterScroll: function() {
      $('nav').css({
       'opacity': '1'
      });
    }
  });

  /* Smooth scroll */

  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800,
      function(){
        window.location.hash = hash;
      });
    }
  });


  $('.hamburger').click(function(){
    this.classList.toggle("is-active");
    $('#responsive-nav').toggleClass('hidden');
  });
})

function updateCurrentSection() {
  var currentPos = $(window).scrollTop();
  var offset = Math.min($('#about').innerHeight(), $('#film').innerHeight());
  $('nav ul li a').each(function() {
    var sectionLink = $(this);
    var section = $(sectionLink.attr('href'));

    if(section.position().top <= currentPos+offset && section.position().top + section.innerHeight() > currentPos+offset) {
      $('nav ul li').removeClass('active');
      sectionLink.addClass('active');
    } else {
      sectionLink.removeClass('active');
    }
  });
}