let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const pauseButton = document.getElementById('pause');
const timingSelect = document.getElementById('timing');

let play = true;
let interval = setInterval(nextSlide, timingSelect.value);

function showSlide(index) {
  slides.forEach(slide => slide.style.display = 'none');
  slides[index].style.display = 'block';
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

prevButton.onclick = prevSlide;
nextButton.onclick = nextSlide;
pauseButton.onclick = () => {
  play = !play;
  pauseButton.textContent = play ? 'Pause' : 'Play';
  if (play) {
    interval = setInterval(nextSlide, timingSelect.value);
  } else {
    clearInterval(interval);
  }
};

timingSelect.onchange = function() {
  clearInterval(interval);
  interval = setInterval(nextSlide, timingSelect.value);
};

showSlide(currentSlide);
