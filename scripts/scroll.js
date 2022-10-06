$(function(){
    $('.link').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('#order').offset().top }, 1000);
      e.preventDefault();
    });
    
});