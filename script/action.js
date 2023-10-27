// const lis = document.querySelectorAll("#section .section2 .circle li");

// lis.forEach(li => {
//   li.addEventListener("mouseover", () => {
//     li.style.transform = "translateY(-30px)";
//     li.style.transition = "transform 0.3s ease";
//   });

//   li.addEventListener("mouseout", () => {
//     li.style.transform = "translateY(0)";
//   });
// });



$('.section1 span.c_me').click(function(){
  $('.section1').toggleClass('on');
})




document.addEventListener('DOMContentLoaded', function() {
  const cursor = document.getElementById('custom-cursor');

  

  // 커서 위치 업데이트
  document.addEventListener('mousemove', function(e) {
      const x = e.clientX;
      const y = e.clientY;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
  });
});



// 섹션 이동 위치

document.addEventListener('DOMContentLoaded', function() {
  // 기존 스크립트 내용

  var webButton = document.querySelector('.right .btns:nth-child(1)');
  webButton.addEventListener('click', function(event) {
      event.preventDefault(); 
      
      var section2 = document.querySelector('.section2');
      section2.scrollIntoView({ behavior: 'smooth' });
  });

  var uiuxButton = document.querySelector('.right .btns:nth-child(2)');
  uiuxButton.addEventListener('click', function(event) {
      event.preventDefault(); 
      
      var section3 = document.querySelector('.section3');
      section3.scrollIntoView({ behavior: 'smooth' });
  });



  var designButton = document.querySelector('.right .btns:nth-child(3)');
  designButton.addEventListener('click', function(event) {
    event.preventDefault();



    var section4 = document.querySelector('.section4');
    section4.scrollIntoView({ behavior: 'smooth'});
  });





});


// 모바일 aos초기화

// document.addEventListener('DOMContentLoaded', function() {
//   if (window.innerWidth > 768) {
//     AOS.init();
//   }
// });





