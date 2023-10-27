// $('.num').each(function(){
//     let dataTarget = $(this).attr('data-target')
//     let $this = $(this)

//     $({val:0}).animate({val:dataTarget},{
//         duration:1000,
//         step:function(){
//             $this.text(Math.ceil(this.val).toLocaleString())
//         },
//         complete:function(){
//             $this.text(Math.ceil(this.val).toLocaleString())
//         }
//     })
        

// })




// $('.num').each(function(){
//     let dataTarget = $(this).attr('data-target')
//     let $this = $(this)


//     $({val:0}).animate({val.dataTarget},{
//         duration:1000,
//         step:function(){
//             $this
//         }
//     })
// })


// 스크롤 위치 구하는 공식

     


    





$(window).scroll(function(){
    let scrT = $(window).scrollTop();
    let winH = $(window).height();



    $('.section2 .cont li').each(function(){
        let s2LiTop = $(this).offset().top;
    
        if(scrT >= s2LiTop - (winH/1.5)){
            $(this).addClass('on')
        }
    })


    // $('#section_subbox .cont li').each(function(){
    //     let sbLiTop = $(this).offset().top;

    //     if(scrT >= sbLiTop - (winH/1.5)){
    //         $(this).addClass('on')

    //     }
    // })

})





   