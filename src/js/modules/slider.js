function slider(slides, dir, prev, next, parentSelector) {
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
    slide.classList.add('animated')
  })

  slide[slideIndex - 1].classList.add('show')
}

function helpSlides(num) {
  showSlides(slideIndex += num)
}
try {
  nextButton.addEventListener('click', ()=>{
    helpSlides(1)
    slide[slideIndex - 1].classList.remove('slideInRight')
    slide[slideIndex - 1].classList.add('slideInLeft')
  })
  
  prevButton.addEventListener('click', ()=>{
    helpSlides(-1)
    slide[slideIndex - 1].classList.remove('slideInLeft')
    slide[slideIndex - 1].classList.add('slideInRight')
  })
} catch (error) {}

let move;
function activeMove() {
  if (dir === 'vertical') {
    move =  setInterval(()=>{
       helpSlides(1)
       slide[slideIndex - 1].classList.add('slideInDown')
     }, 3000)
   }else{
    move = setInterval(()=>{
       helpSlides(1)
       slide[slideIndex - 1].classList.remove('slideInRight')
       slide[slideIndex - 1].classList.add('slideInLeft')
     }, 3000)
   }
}
activeMove()

slide[0].parentNode.addEventListener('mouseenter', ()=>{
     clearInterval(move)
})
slide[0].parentNode.addEventListener('mouseleave', ()=>{
  activeMove()
})


}



export default slider;