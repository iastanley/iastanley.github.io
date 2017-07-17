$(document).ready(function(){
  //hamburger menu toggle
  $('.hamburger-menu').on('click', function(event){
    event.preventDefault();
    $('.nav-right').slideToggle('slow');
  });

  // add smooth scroll to brand and navbar links
  // offset corrects scroll position for fixed nav
  $('nav a').on('click', function(event){
    if(this.hash) {
      event.preventDefault();
      smoothScroll(this.hash, 49); //49 instead of 50 fixes scroll spy bug
      $('.nav-right').slideUp('fast');
    }
  });

  // scroll spy implementation
  var currentIndex = 0;
  var nextIndex = currentIndex + 1;
  var navHeight = $('nav').height() + 1;
  var sectionList = $('.scrollSpy');
  $(window).on('scroll', function() {
    if (nextSectionReached(nextIndex, sectionList, navHeight)) {
      currentIndex = nextIndex;
      nextIndex = currentIndex + 1;
      addActiveTo(currentIndex, sectionList);
    }
    if (prevSectionReached(currentIndex, sectionList, navHeight)) {
      currentIndex--;
      nextIndex = currentIndex + 1;
      addActiveTo(currentIndex, sectionList);
    }
  });
}); // end of document.ready function

// Helper function for smooth scrolling
function smoothScroll(hash, offset) {
  $('body, html').animate({
    scrollTop: $(hash).offset().top - offset
  }, 800, function(){
    window.location.hash = hash;
  });
}

// Helper functions for scroll spy
function nextSectionReached(index, elementList, navOffset) {
  if (index > elementList.length - 1) {
    return false;
  }
  var element = elementList[index];
  // required to get max $(window).scrollTop value - for bottom of page
  var scrollBottom = $(document).height() - $(window).height();
  if ($(element).offset().top - ($(window).scrollTop() + navOffset) <= 0) {
    return true;
  } else if ($(window).scrollTop() >= scrollBottom){
    return true;
  } else {
    return false;
  }
}

function prevSectionReached(index, elementList, navOffset) {
  // required to get max $(window).scrollTop value - for bottom of page
  var scrollBottom = $(document).height() - $(window).height();
  if (index < 0 || $(window).scrollTop() >= scrollBottom) {
    return false;
  }
  var element = elementList[index];
  if ($(element).offset().top - ($(window).scrollTop() + navOffset) > 0) {
    return true;
  } else {
    return false;
  }
}

// adding active class to navbar links when scrolling
function addActiveTo(index, elementList) {
  // remove active class from all links
  $('.nav-right a').removeClass('active');
  if (index > 0) {
    var currentElement = $(elementList[index]);
    var currentId = currentElement.attr('id');
    $('.nav-right a[href="#'+ currentId + '"]').addClass('active');
  }
}
