function accordion(wrapper, content) {
  const accordContent = document.querySelectorAll(content),
        accordWrapper = document.querySelectorAll(wrapper);
        
  function hideContent() {
    accordContent.forEach(item=>{
      item.style.display = 'none';
      item.classList.add('animated', 'fadeInUp')
    })
  }
  hideContent()

  accordWrapper.forEach((item, i)=>{
    item.addEventListener('click', (e)=>{
    if (e.target.tagName === 'SPAN') {
      accordContent[i].style.display = 'block';
      item.style.color = '#c51abb';
    }
  })
  }) 
  accordContent.forEach((item, i)=>{
    item.addEventListener('mouseleave', (e)=>{
    if (e.target.tagName === 'DIV') {
      accordContent[i].style.display = 'none';
      accordWrapper[i].style.color = 'inherit';
    }
  })
  }) 

}
export default accordion;