function accordion(wrapper, content) {
  const accordContent = document.querySelectorAll(content),
        accordTrigger = document.querySelectorAll(wrapper);
        
  /* function hideContent() {
    accordContent.forEach(item=>{
      item.style.display = 'none';
      item.classList.add('animated', 'fadeInUp')
    })
  }
  hideContent() */

  accordTrigger.forEach((item, i)=>{
    item.addEventListener('click', (e)=>{
    if (e.target.classList.toggle('active')) {
      
      accordContent[i].style.cssText = `
      max-height: ${accordContent[i].scrollHeight}px;
      opacity: 100;
      `;
      item.style.color = '#c51abb';
    }else{
      accordContent[i].style.cssText = `
      max-height: 0px;
      opacity: 0;
      `;
      item.style.color = 'inherit';
    }
  })
  }) 
  
}
export default accordion;