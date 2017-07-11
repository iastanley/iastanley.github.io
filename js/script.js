$(document).ready(function(){
  // add scroll spy to navbar links
  $('body').scrollspy({target: '.navbar', offset: 50});

  // add smooth scroll to brand and navbar links
  // offset corrects scroll position for fixed nav
  $('.navbar a').on('click', function(event){
    if(this.hash) {
      event.preventDefault();
      smoothScroll(this.hash, 50);
    }
  });
});

function smoothScroll(hash, offset) {
  $('body, html').animate({
    scrollTop: $(hash).offset().top - offset
  }, 800, function(){
    window.location.hash = hash;
  });
}
