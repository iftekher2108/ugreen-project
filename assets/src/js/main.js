console.log('iftekher mahmud pervez')

// wow initialization
AOS.init({
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  offset: 250, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 500, // values from 0 to 3000, with step 50ms
  easing: 'ease-in-out', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
})

// banner offer slide
$('.offer-slider').slick({
  dots: false,
  infinite: true,
  arrows: false,
  speed: 500,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 2000,
})


// hero image slide
$('.hero-slider').slick({
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
  })



  // header scrolling function

  $(document).scroll(function(){
    if($(document).scrollTop() < 10) {
      $('header').css({'background':'transparent'})
      $('.navbar').find('a.nav-link').css({'color':'white'})
    }
    else {
      $('header').css({'background':'white'})
      $('.navbar').find('a.nav-link').css({'color':'black'})
    }
  })






  // client title show js 
  $('.client img').on('mouseenter',function(){

    $(this).parent('.icon').siblings('.icon').children('img').removeClass('border-bottom')
    $(this).addClass('border-bottom')
    $(".client .content h4").text($(this).attr('title'));
    // console.log($(this).attr('title'))

  })


  // loader scripts
  $(document).ready(function(){
    $('#loader').fadeOut(300);
  })



