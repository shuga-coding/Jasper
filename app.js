// ================= HERO SLIDER =================

const slides = document.querySelectorAll('.hero__slide');
let currentSlide = 0;

// Создаем точки навигации
const sliderContainer = document.querySelector('.hero__right');
const dotsContainer = document.createElement('div');
dotsContainer.className = 'slider-dots';

slides.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
  dot.addEventListener('click', () => goToSlide(index));
  dotsContainer.appendChild(dot);
});

sliderContainer.appendChild(dotsContainer);

function updateDots() {
  const dots = document.querySelectorAll('.slider-dot');
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function goToSlide(index) {
  slides[currentSlide].classList.remove('is-active');
  currentSlide = index;
  slides[currentSlide].classList.add('is-active');
  updateDots();
}

function showNextSlide() {
  slides[currentSlide].classList.remove('is-active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('is-active');
  updateDots();
}

// Запускаем автоматическую смену слайдов
setInterval(showNextSlide, 5000);


// ================= MODAL MENU =================

const openMenuBtn = document.getElementById('openMenu');
const openMenuHeroBtn = document.getElementById('openMenuHero');
const closeMenu = document.getElementById('closeMenu');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const menuModal = document.getElementById('menuModal');

function openModal() {
  menuModal.classList.add('is-open');
  document.body.style.overflow = 'hidden'; // Блокируем скролл фона
}

function closeModal() {
  menuModal.classList.remove('is-open');
  document.body.style.overflow = ''; // Возвращаем скролл
}

// Закрытие по Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menuModal.classList.contains('is-open')) {
    closeModal();
  }
});

openMenuBtn.addEventListener('click', openModal);
openMenuHeroBtn.addEventListener('click', openModal);
closeMenu.addEventListener('click', closeModal);
closeMenuBtn.addEventListener('click', closeModal);