document.getElementById("menu-button").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.classList.toggle("open");
    
   
    document.body.classList.toggle("menu-open");
});

document.getElementById("close-button").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.classList.remove("open");
    
    document.body.classList.remove("menu-open");
});




let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("diapo");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}


