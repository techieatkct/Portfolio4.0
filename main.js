document.getElementById('top-button').addEventListener('click',function(){
    window.scrollTo(0,0);
});

$(window).scroll(function(){
  var threshold = 208; 
  var op = (($(document).height() - $(window).height()) - $(window).scrollTop()) / threshold;
  if( op <= 13 ){
    $("#top-button").show();
  } else {
    $("#top-button").hide();
  }
});

$('#switch1').on('click', function(){
  $('body').toggleClass('night')
})

$(document).ready(function(){
  var date = new Date();
  var current_time = date.getHours();
  if (current_time > 17 || current_time < 6)
    document.body.className = "night";
  else
    document.body.className = "";
});

$(window).load(function() {
      $("#top-button").hide();
});

$('.project_used span').on({
    mouseover: function() {
        event.preventDefault();
        $(this).animate({opacity: 0.25});
    },
    mouseout: function() {
        event.preventDefault();
        $(this).animate({opacity: 1});
    }
});


document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}