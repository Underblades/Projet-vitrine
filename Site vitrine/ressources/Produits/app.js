let slidePosition = 0;
var slides = [];

var existing_slides = document.getElementsByClassName('carouselitem');

for(var element of existing_slides)
  slides.push(element)

var slides = document.getElementsByClassName('carouselitem');
var totalSlides = slides.length;

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carouselitem--visible');
    slide.classList.add('carouselitem--hidden');
  }

  slides[slidePosition].classList.add('carouselitem--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}

document.getElementById("element_to_add_button").onclick = async function(){

  totalSlides += 1;

  newElement = document.createElement("div");
  newElement.classList.add("carouselitem");

  newElementImg = document.createElement("img");
  newElementImg.setAttribute("src", document.getElementById("element_to_add").value);

  newElement.appendChild(newElementImg);

  document.getElementById("carouseltoadd").appendChild(newElement);

  var slides = document.getElementsByClassName('carouselitem');

}