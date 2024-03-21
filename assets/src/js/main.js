console.log('iftekher mahmud pervez')

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


  // client title show js 
  $('.client img').on('mouseenter',function(){

    $(this).parent('.icon').siblings('.icon').children('img').removeClass('border-bottom')
    $(this).addClass('border-bottom')
    $(".client .content h4").text($(this).attr('title'));
    // console.log($(this).attr('title'))

  })