$(function(){
 $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        arrow: true,
        dots: true,
        pauseOnHover : true,
        autoplay : true,
        pauseOnHover : true,
      });

 $(".regular").slick({
        arrows:true,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [                   
                       {  breakpoint: 760,    
                              settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                              }
                         }
                 ]  //반응형 포인트 지정
      });

 $(".vertical-center").slick({
        arrows : false, 
        dots: false,
        vertical: true,
        centerMode: true,
        slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
        slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
        autoplay : true,			// 자동 스크롤 사용 여부
        autoplaySpeed : 1000, 
        pauseOnHover : true,
      });

$('.close').click(function(){
      $('#pop_up').slideUp(); 
          /* show/hide, slideDown/slideUp, fadeIn/fadeOut*/      
  })

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



	/* 1단계 설명  : for
	var li_count = $('.thum_list li').length;
	 // alert(li_count)

     for(var count=0;count < li_count;count++){
		$('.thum_list li').eq(count).text(count+1);
	 }
      */

	 var li_count = $('.item li').length;
	 var click_count = 1;
	 //alert(li_count)
     /*for(var count=0;count < li_count;count++){
		$('.thum_list li a').eq(count).text(count+1);
	 }*/
  
    for(var count = 0;count < click_count * 8;count++){
		$('.item li').eq(count).show();
	 }
        //클릭수만큼 li 보이기
    $('.book_more').click(function(){
		click_count += 1;
		//alert(Math.ceil(li_count/4));
		if(Math.ceil(li_count/4) > click_count){
	  	//alert(click_count);
		  li_show(click_count)
		}else if(Math.ceil(li_count/4) == click_count) {
			li_show(click_count)
			$('.book_more').text('줄이기');     
	      } else {
			$('.item li').hide()
			click_count = 1;     
			$('.book_more').text('더보기');
			li_show(click_count)
			
		  }
	   })


/* 1단계 설명  : for
	var li_count = $('.thum_list li').length;
	 // alert(li_count)

     for(var count=0;count < li_count;count++){
		$('.thum_list li').eq(count).text(count+1);
	 }
      */

	 var li_count = $('.item2 li').length;
	 var click_count = 1;
	 //alert(li_count)
     /*for(var count=0;count < li_count;count++){
		$('.thum_list li a').eq(count).text(count+1);
	 }*/
  
    for(var count = 0;count < click_count * 8;count++){
		$('.item2 li').eq(count).show();
	 }
        //클릭수만큼 li 보이기
    $('.book_more2').click(function(){
		click_count += 1;
		//alert(Math.ceil(li_count/4));
		if(Math.ceil(li_count/4) > click_count){
	  	//alert(click_count);
		  li_show2(click_count)
		}else if(Math.ceil(li_count/4) == click_count) {
			li_show2(click_count)
			$('.book_more2').text('줄이기');     
	      } else {
			$('.item2 li').hide()
			click_count = 1;     
			$('.book_more2').text('더보기');
			li_show2(click_count)
			
		  }
	   })




     /*
	
	$("셀렉터1").이벤트(function(){
		$("셀렉터2")
		.animate({css속성:값},시간,움직임방식,콜백함수)	
	})
	
	*/

	// .open1을 클릭 -> .LeftWrap이 보여짐. 자신의 left속성의 값을 0으로 이동시킴.
	$(".open1").click(function(){
		$("#RightWrap").animate({right:0},500,"swing")
		});
			
	$(".close1").click(function(){
		$("#RightWrap").animate({right:'-100%'},500,"swing")
		});
		
	$('#btn1 > li').each(function() {
      var submenu = $(this).find('.sub');
      $(this).click(function(){
        $('.sub').slideUp();
         $(submenu).stop().slideToggle();
       })
	});	


  //메인이미지 교체
  	 if ( $(window).width()  <  761 ) {
             $('.main_slide1 img').attr('src','./images/slider1/slider_m1.jpg');
		}else {
			 $('.slide img').attr('src','./images/slider1/slider1.jpg');
		}

 $(window).resize(function(){
            if ( $(window).width()  <  761 ) {
            $('.main_slide1 img').attr('src','./images/slider1/slider_m1.jpg');
            $('#nav').hide();
            $('.nav_btn').removeClass('on');
            status = 1;
          }else {
            $('.main_slide1 img').attr('src','./images/slider1/slider1.jpg');
            $('#nav').show();
          }
    })

//메인이미지 교체
  	 if ( $(window).width()  <  761 ) {
             $('.main_slide1 img').attr('src','./images/slider1/slider_m1.jpg');
		}else {
			 $('.slide img').attr('src','./images/slider1/slider1.jpg');
		}

 $(window).resize(function(){
            if ( $(window).width()  <  761 ) {
            $('.main_slide1 img').attr('src','./images/slider1/slider_m1.jpg');
            $('#nav').hide();
            $('.nav_btn').removeClass('on');
            status = 1;
          }else {
            $('.main_slide1 img').attr('src','./images/slider1/slider1.jpg');
            $('#nav').show();
          }
    })


//메인이미지 2교체
  	 if ( $(window).width()  <  761 ) {
             $('.main_slide2 img').attr('src','./images/slider1/slider_m2.jpg');
		}else {
			 $('.slide img').attr('src','./images/slider1/slider2.jpg');
		}

 $(window).resize(function(){
            if ( $(window).width()  <  761 ) {
            $('.main_slide2 img').attr('src','./images/slider1/slider_m2.jpg');
            $('#nav').hide();
            $('.nav_btn').removeClass('on');
            status = 1;
          }else {
            $('.main_slide2 img').attr('src','./images/slider1/slider2.jpg');
            $('#nav').show();
          }
    })

 /*$(".p1").hover(
            function () { $(this).attr("src", "images/section2/1.png")},
            function () { $(this).attr("src", "images/section2/icon_1_on.png")}
        );*/



})//전체



	function li_show(click_count){
		for(var count = 0;count < click_count * 8;count++){
		  $('.item li').eq(count).show();
	      } 
	}


function li_show2(click_count){
		for(var count = 0;count < click_count * 8;count++){
		  $('.item2 li').eq(count).show();
	      } 
	}