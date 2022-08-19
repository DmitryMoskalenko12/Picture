function accordion(wrapper, content) {
  const accordContent = document.querySelectorAll(content),
        accordTrigger = document.querySelectorAll(wrapper);
        
  function hideContent() {
    accordContent.forEach(item=>{
      item.style.display = 'none';
      item.classList.add('animated', 'fadeInUp')
    })
  }
  hideContent()

  accordTrigger.forEach((item, i)=>{
    item.addEventListener('click', (e)=>{
    if (e.target.classList.toggle('active')) {
      accordContent[i].style.display = 'block';
      item.style.color = '#c51abb';
    }else{
      accordContent[i].style.display = 'none';
      item.style.color = 'inherit';
     
    }
  })
  }) 
  
}
export default accordion;