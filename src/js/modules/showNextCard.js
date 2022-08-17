function nextCard(trigger, hidecard) {
  const card = document.querySelectorAll(hidecard),
        btn = document.querySelector(trigger);
  card.forEach(card=>{
    card.classList.add('animated', 'fadeInUp');
  }) 
  
  btn.addEventListener('click', ()=>{
    card.forEach(card=>{
    card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    })
    btn.remove();
  })
}
export default nextCard;