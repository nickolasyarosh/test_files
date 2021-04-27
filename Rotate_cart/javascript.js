//rotate
function myFunction(e) {
 e.classList.add("squareclick");
 console.log(e);
}

/*video play*/
$(document).ready(function() {
  $('#play-video').on('click', function(ev) {
 
    $("#video")[0].src += "&autoplay=1";
    ev.preventDefault();
 
  });
});
