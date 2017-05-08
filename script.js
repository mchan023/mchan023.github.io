/* Video play control code */

var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

alert(iOS);
if (iOS) {
  $('.first-aid').css({'background-attachment': 'fixed'});
  $('.drugs').css({'background-attachment': 'fixed'});
  $('.save-card').css({'background-attachment': 'fixed'});
}

$('#control-button').on('click', () => {

  let isPlaying = $('#control-button').hasClass('fa-pause-circle-o');

  $('#control-button').toggleClass('fa-play-circle-o');
  $('#control-button').toggleClass('fa-pause-circle-o');


  // scroll to top
  if (isPlaying){
    $('.hero-header').fadeIn('slow');
    $('.hero-subheader').fadeIn('slow');
    $('#custom-seekbar').fadeOut('slow');
    $('#video').get(0).pause();
  } else {
    $('.hero-header').fadeOut('slow');
    $('.hero-subheader').fadeOut('slow');
    $('#custom-seekbar').fadeIn('slow');
    $('#video').get(0).play();
  }

});

/* Video seek control code */

var vid = document.getElementById("video");
vid.ontimeupdate = function(){
  var percentage = ( vid.currentTime / vid.duration ) * 100;
  $("#custom-seekbar span").css("width", percentage+"%");
};

$("#custom-seekbar").on("click", function(e){
    var offset = $(this).offset();
    var left = (e.pageX - offset.left);
    var totalWidth = $("#custom-seekbar").width();
    var percentage = ( left / totalWidth );
    var vidTime = vid.duration * percentage;
    vid.currentTime = vidTime;
});//click()


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