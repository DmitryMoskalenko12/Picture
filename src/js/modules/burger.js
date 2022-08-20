function burger() {
  const trigger = document.querySelector('.burger'),
        menu = document.querySelector('.burger-menu');
  menu.style.display = 'none'
  trigger.addEventListener('click', ()=>{

if(menu.style.display == 'none' && window.screen.availWidth < 992){
  menu.style.display = 'block';
  menu.classList.add('animated', 'fadeInLeft')
}else {
  menu.style.display = 'none';
}
window.addEventListener('resize', ()=>{
  if(window.screen.availWidth > 992){
    menu.style.display = 'none';
    menu.classList.add('animated', 'fadeInLeft')
  }
})

})
}
export default burger;