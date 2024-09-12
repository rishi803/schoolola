// JavaScript to handle hamburger menu toggle
document.getElementById('menu-icon').addEventListener('click', function () {
    document.getElementById('menu').classList.toggle('show');
  });
  
  // Get Started Button and Modal Logic
  const modal = document.getElementById('modal');
  const getStartedBtn = document.getElementById('get-started-btn');
  const closeBtn = document.getElementById('close-btn');
  const body = document.querySelector('body');
  
  // Show modal and apply blur effect
  getStartedBtn.addEventListener('click', function() {
    modal.style.display = 'flex';
    body.classList.add('modal-open');  // Add class to blur background
  });
  
  // Close modal and remove blur effect
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    body.classList.remove('modal-open');
  });
  
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      body.classList.remove('modal-open');
    }
  });

//   let currentSlide = 0;

// function nextSlide() {
//   const slider = document.querySelector('.testimonial-container');
//   const slides = document.querySelectorAll('.testimonial-card');
//   const slideWidth = slides[0].clientWidth + 20; // 20 is the margin between slides
//   currentSlide = (currentSlide + 1) % slides.length;
//   slider.scrollTo({
//     left: currentSlide * slideWidth,
//     behavior: 'smooth'
//   });
// }

// function prevSlide() {
//   const slider = document.querySelector('.testimonial-container');
//   const slides = document.querySelectorAll('.testimonial-card');
//   const slideWidth = slides[0].clientWidth + 20;
//   currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//   slider.scrollTo({
//     left: currentSlide * slideWidth,
//     behavior: 'smooth'
//   });
// }

let currentSlideIndex = 0;

function updateSlider() {
  const slider = document.querySelector('.testimonial-container');
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  
  let cardsPerView = 3; // Default for large screens
  if (window.innerWidth <= 1024) {
    cardsPerView = 2; // Medium devices
  }
  if (window.innerWidth <= 768) {
    cardsPerView = 1; // Small devices
  }
  
  const cardWidth = testimonialCards[0].clientWidth + 20; // Card width + gap
  const offset = currentSlideIndex * cardWidth;
  slider.style.transform = `translateX(-${offset}px)`;
}

function nextSlide() {
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  let cardsPerView = 3;
  
  if (window.innerWidth <= 1024) {
    cardsPerView = 2;
  }
  if (window.innerWidth <= 768) {
    cardsPerView = 1;
  }
  
  currentSlideIndex = (currentSlideIndex + 1) % Math.ceil(testimonialCards.length / cardsPerView);
  updateSlider();
}

function prevSlide() {
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  let cardsPerView = 3;
  
  if (window.innerWidth <= 1024) {
    cardsPerView = 2;
  }
  if (window.innerWidth <= 768) {
    cardsPerView = 1;
  }
  
  currentSlideIndex = (currentSlideIndex - 1 + Math.ceil(testimonialCards.length / cardsPerView)) % Math.ceil(testimonialCards.length / cardsPerView);
  updateSlider();
}

window.addEventListener('resize', updateSlider);

// Smooth Scroll Functionality for Menu
document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  