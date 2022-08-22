function accordion(wrapper) {
  const accordTrigger = document.querySelectorAll(wrapper);
        
  accordTrigger.forEach((item)=>{
    item.addEventListener('click', function () { 
      
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('active-content');

      if(this.classList.contains('active')){
        this.style.color = '#c51abb';
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.
      scrollHeight + 80 + 'px';
      }else{
        this.style.color = 'inherit';
        this.nextElementSibling.style.maxHeight = '0px';
      };  
  }); 
});
  
/* accordTrigger.forEach((item, i)=>{
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
}) */ 
}
export default accordion;