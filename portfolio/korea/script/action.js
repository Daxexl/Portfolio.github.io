$(document).ready(function(){

    // 메뉴

    let gnbHtml = $('.gnb').html();

    $('.gnb_mo').append(gnbHtml);

    $('.gnb_mo li').click(function(){
        $('.lnb').slideUp();
        $(this).find('.lnb').stop().slideToggle();
        
    })

    $('.gnb').mouseenter(function(){
        $('.lnb').height(300);
        $('.lnb').stop().fadeIn();
        $('.lnb_bg').stop().fadeIn();
    })

    $('.gnb').mouseleave(function(){
        $('.lnb').stop().fadeOut();
        $('.lnb_bg').stop().fadeOut();
    })



    

    
    let winW = $(window).width();


    function btnPosition(){
        if(winW <= 780){
            $('#section2 .more').appendTo('#section2 .centerbox')
            $('#section4 .more').appendTo('#section4 .centerbox')
        } else {
            $('#section2 .more').prependTo('#section2 .centerbox')
            $('#section4 .more').prependTo('#section4 .centerbox')
        }
    }
    
    $(window).resize(function(){
        winW = $(window).width();
        btnPosition()
    })

    btnPosition()



    //visual scroll 효과 = 패럴렉스 효과
    $(window).scroll(function(){
        var scrT = $(window).scrollTop();    //스크롤위치값


        // .stop을 쓰면 마우스 휠 마지막 한번만 애니메이션이 적용되서 중복방지 (빠르게 따라오는 것 같은 효과)
        $('#floating_menu').stop().animate({top:200 + scrT})

        $('#visual').css({backgroundPositionY:scrT/2})
        $('#visual img').css({top:200 - scrT/4});
        $('#visual .text_box').css({top:300 + scrT/2, opacity:1 - scrT/750})

    
    })

    


    $('.gnb li').mouseover(function(){
        $('.text_box').hide();
    })

    $('.gnb li').mouseleave(function(){
        $('.text_box').show();
    })


    // 유투브박스

    $('.video_box li.btn_youtube button').click(function(){
        let youtubeSrc = $(this).attr('data-youtube');
        $('#youtube_box').find('iframe').attr('src', youtubeSrc)
        $('#youtube_box').show();
    })

    $('#youtube_box button').click(function(){
        $('#youtube_box').hide();
        $('#youtube_box').find('iframe').attr('src', '')
       
    })

    // 플로팅메뉴
    
    $('.move .top').click(function(){
        $('html').animate({scrollTop:0})
    })
    var scT = 0
    $('.move .bottom').click(function(){
        var winH = $(window).height();
        scT++
        console.log(scT)
        $('html').animate({scrollTop:winH * scT})
    })
    
   
    // 플로팅 검색메뉴 

    $('.search').click(function(){
        $('#popup').show();
    })


    $('#popup button').click(function(){
        $('#popup').hide();
    })


// 사이드메뉴 




$('header .ham.mo').click(function(){
    $('header nav .nav_mo').show();
});
$('header .btn_gnb').click(function(){
    $('header nav .nav_mo').hide();
});


$('.gnb_mo > li > a').click(function(){
    $('.gnb_mo .lnb').slideUp();
    $(this).siblings().stop().slideToggle();
    return false    
})






// 검색창
$('#section_sub2 .cont .sear input').keyup(function(){
    let keyVal = $(this).val()

    if(keyVal.length > 0){
        $(this).css({background:'#0086ff'})
        $(this).siblings('.go').css({background:'#0086ff'})
    } else {
        $(this).css({background:''})
        $(this).siblings('.go').css({background:''})
    }
})


// 유튜브영상띄우기
$('.view_youtube').click(function(){
    let dataYoutube = $(this).attr('data-youtube');

    console.log(dataYoutube)
    $('#youtube_container').show();
    $('#youtube_container iframe').attr('src', dataYoutube)
})

$('#youtube_container .btn_close').click(function(){
    $('#youtube_container').hide();
    $('#youtube_container iframe').attr('src', '')
})


    let slideIndex = 0;
    let conW = $('.new_cont ul').width();
    let view = 3
    let itemW = conW/view;
    let itemLength = $('.slide_da li').length;
    $('.slide_da li').eq(1).addClass('on')

    $('.new_cont ul').css({width:itemW * itemLength});
    
    $('.slide_da .btn_container .next').click(function(){
        $('.new_cont ul').animate({marginLeft:-itemW},1000, function(){
            $('.new_cont ul').css({marginLeft:0})
            $('.new_cont ul li:first').appendTo($('.new_cont ul'));
            $('.slide_da li').eq(1).addClass('on').siblings().removeClass('on')
        });
        

        return false
    })


    $('.slide_da .btn_container .prev').click(function(){
        $('.new_cont ul').animate({marginLeft:+itemW},1000, function(){
            $('.new_cont ul').css({marginLeft:0})
            $('.new_cont ul li:first').appendTo($('.new_cont ul'));
            $('.slide_da li').eq(1).addClass('on').siblings().removeClass('on')
        });
        

        return false
    })

});