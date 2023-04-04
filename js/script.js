$(document).ready(function(){

      $('.nav-list.contact').click(function(){
            $('.contact-pop-up-bg').addClass('on');
      });

      $('.contact-pop-up-bg').click(function(e){
            if(e.target == e.currentTarget){
            $('.contact-pop-up-bg').removeClass('on');
            }
            // $('.contact-pop-up-bg').removeClass('on');
      });
      $('.close-btn').click(function(){
            $('.contact-pop-up-bg').removeClass('on');
      });

      $('.dark-mode-btn').click(function(){
            $(this).addClass('off');
            $('.light-mode-btn').addClass('on');
            $('body').addClass('dark');
            $('.header-wrap').addClass('hd-dark');
            $('.about-title-svg').addClass('svg-dark');
            $('.about-list-wrap').addClass('about-list-dark');
            $('.list-title').addClass('list-dark');
            $('.contact-pop-up').addClass('contact-dark');
      });
      
      $('.light-mode-btn').click(function(){
            $(this).removeClass('on');
            $('.dark-mode-btn').removeClass('off');
            $('body').removeClass('dark');
            $('.header-wrap').removeClass('hd-dark');
            $('.about-title-svg').removeClass('svg-dark');
            $('.about-list-wrap').removeClass('about-list-dark');
            $('.list-title').removeClass('list-dark');
            $('.contact-pop-up').removeClass('contact-dark');
      });


});
