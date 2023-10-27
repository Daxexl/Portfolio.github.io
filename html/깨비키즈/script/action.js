const lis = document.querySelectorAll("#section .section2 .circle li");

lis.forEach(li => {
  li.addEventListener("mouseover", () => {
    li.style.transform = "translateY(-30px)";
    li.style.transition = "transform 0.3s ease";
  });

  li.addEventListener("mouseout", () => {
    li.style.transform = "translateY(0)";
  });
});