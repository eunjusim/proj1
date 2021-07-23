$(function(){
   

  var lang = 0; /* 닫힘0, 열림1*/
  $('.lang').click(function(){
      /* 다른 열려있는 창들을 닫거나 버튼 디자인을 제거함 */
     $('.top button.login').removeClass('on');
     $('.top div.login_box').hide();
     login = 0;
     $('.top button.search').removeClass('on');
     $('.top div.search_box').hide();
     search = 0;

     if (lang == 0){
      $('.lang_box').fadeIn();
      $(this).addClass('on');
      lang = 1;
     } else {
          $('.lang_box').fadeOut();
          $(this).removeClass('on');
          lang = 0;
     }
  }) //lang

 var login = 0; /* 닫힘0, 열림1*/
  $('.login').click(function(){
      /* 다른 열려있는 창들을 닫거나 버튼 디자인을 제거함 */
     $('.top button.lang').removeClass('on');
     $('.top div.lang_box').hide();
     lang = 0;
     $('.top button.search').removeClass('on');
     $('.top div.search_box').hide();
     search = 0;

     if (login == 0){
      $('.login_box').fadeIn();
      $(this).addClass('on');
      login = 1;
     } else {
          $('.login_box').fadeOut();
          $(this).removeClass('on');
          login = 0;
     }
  }) //login

 var search = 0; /* 닫힘0, 열림1*/
  $('.search').click(function(){
      /* 다른 열려있는 창들을 닫거나 버튼 디자인을 제거함 */
     $('.top button.lang').removeClass('on');
     $('.top div.lang_box').hide();
     lang = 0;
     $('.top button.login').removeClass('on');
     $('.top div.login_box').hide();
     login = 0;

     if (search == 0){
      $('.search_box').fadeIn();
      $(this).addClass('on');
      search = 1;
     } else {
          $('.search_box').fadeOut();
          $(this).removeClass('on');
          search = 0;
     }
  }) //search

}) //제이쿼리 전체 끝