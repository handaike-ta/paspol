$(function() {
  $('.vegas').vegas({
    slides: [
     { src: 'http://pas-pol.jp/wp-content/uploads/2014/11/main_visual_13-0x0.jpg' },
     { src: 'http://pas-pol.jp/wp-content/uploads/2014/11/main_visual_2-0x0.jpg' },
     { src: 'http://pas-pol.jp/wp-content/uploads/2014/11/main_visual_6-0x0.jpg' },
     { src: 'http://pas-pol.jp/wp-content/uploads/2014/11/main_visual_7-0x0.jpg' },
     { src: 'http://pas-pol.jp/wp-content/uploads/2014/11/main_visual_111-0x0.jpg' }
    ],
     delay: 2000,
     timer: false,
     transitionDuration: 1500
  });
  $('.circle').click(function(){
    $('html,body').animate({
      'scrollTop': 0
    },500);
  });
  $('.menu p i').click(function(){
    if($('.menu p i').hasClass('active')){
    $('.menu p i').removeClass('active');
    $('.header-two ul').slideUp();
  }else{
    $('.menu p i').addClass('active');
    $('.header-two ul').slideDown();
  }
  });
});
