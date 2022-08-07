export const createSlider = function () {
  const btnPrev = document.querySelector('.radio-slider__btn--prev'),
        btnNext = document.querySelector('.radio-slider__btn--next');
  
  const slides = document.querySelectorAll('.radio-slider__item');

  let count = 0;

  function activeSlide(n) {
    slides.forEach(slide => {
      slide.classList.remove('active');
    });

    slides[n].classList.add('active');
  }

  function prevSlide() {
    if (count == 0) {
      count = slides.length - 1;
      activeSlide(count);
    } else {
      count--;
      activeSlide(count);
    }
  }

  function nextSlide() {
    if (count == slides.length - 1) {
      count = 0;
      activeSlide(count);
    } else {
      count++;
      activeSlide(count)
    }
  }

  btnPrev.addEventListener('click', prevSlide)

  btnNext.addEventListener('click', nextSlide);
}