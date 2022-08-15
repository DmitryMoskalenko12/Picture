function slider(slides, prev, next) {
  const slide = document.querySelectorAll(slides),
        nextButton = document.querySelector(prev),
        prevButton = document.querySelector(next);
  let slideIndex = 1;
  showSlides(slideIndex)
function showSlides(n) {
  if (n > slide.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slide.length
  }

  slide.forEach(slide=>{
    slide.classList.add('hide')
    slide.classList.remove('show')
  })

  slide[slideIndex - 1].classList.add('show')
}

function helpSlides(num) {
  showSlides(slideIndex += num)
}

nextButton.addEventListener('click', ()=>{
  helpSlides(1)
})

prevButton.addEventListener('click', ()=>{
  helpSlides(-1)
})
}

export default slider;