const r1 = document.getElementById("radio1");
const r2 = document.getElementById("radio2");
const r3 = document.getElementById("radio3");
const r4 = document.getElementById("radio4");
const w1 = document.getElementById('wisata1');
const w2 = document.getElementById('wisata2');
const w3 = document.getElementById('wisata3');
const w4 = document.getElementById('wisata4');

w1.addEventListener('click', function() {
    r1.checked = true;
});

w2.addEventListener('click', function() {
    r2.checked = true;
});

w3.addEventListener('click', function() {
    r3.checked = true;
});

w4.addEventListener('click', function() {
    r4.checked = true;
});

// Slide Show
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}