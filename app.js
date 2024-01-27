let currentSlide = 0;
const totalSlides = 3; 

function changeSlide(n) {
  showSlide(currentSlide += n);
}

function showSlide(n) {
  const slides = document.querySelector('.slider-wrapper');
  const dots = document.querySelector('.navigation-dots');

  if (n >= totalSlides) {
    currentSlide = 0;
  } else if (n < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = n;
  }

  slides.style.transform = `translateX(${-currentSlide * 100}%)`;
  updateDots();
}

function updateDots() {
  const dots = document.querySelector('.navigation-dots');
  const dotElements = dots.querySelectorAll('.dot');

  dotElements.forEach((dot, index) => {
    dot.classList.remove('active');
    if (index === currentSlide) {
      dot.classList.add('active');
    }
  });
}

function createDots() {
  const dotsContainer = document.querySelector('.navigation-dots');

  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => showSlide(i));
    dotsContainer.appendChild(dot);
  }
}

createDots();
showSlide(currentSlide);

setInterval(() => {
  changeSlide(1);
}, 3000);  

document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header');

  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const maxScroll = 200; 

    const transitionRatio = Math.min(1, scrollPosition / maxScroll); 

    const startingColor = [26, 30, 31]; 
    const targetColor = [33, 33, 33]; 

    const currentColor = startingColor.map((channel, index) => {
      return Math.round(channel + (targetColor[index] - channel) * transitionRatio);
    });

    const transparency = 0.9; 

    header.style.backgroundColor = `rgba(${currentColor.join(',')}, ${transparency})`;
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const toggleButton = item.querySelector('.toggle-answer');
    const answer = item.querySelector('.answer');
    const line = item.querySelector('.line');

    toggleButton.addEventListener('click', function () {
      answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
      toggleButton.innerText = toggleButton.innerText === '▼' ? '▲' : '▼';
      toggleButton.classList.toggle('active'); 
      line.style.height = answer.style.display === 'none' ? '0' : '10px'; 
    });
  });
});










