/* Video play control code */

$('#control-button').on('click', () => {

  let isPlaying = $('#control-button').hasClass('fa-pause-circle-o');

  $('#control-button').toggleClass('fa-play-circle-o');
  $('#control-button').toggleClass('fa-pause-circle-o');


  // scroll to top
  if (isPlaying ){
    $('.hero-header').fadeIn('slow');
    $('.hero-subheader').fadeIn('slow');
    $('#video').get(0).pause();
  } else {
    $('.hero-header').fadeOut('slow');
    $('.hero-subheader').fadeOut('slow');
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