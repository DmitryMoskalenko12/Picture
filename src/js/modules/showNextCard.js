function nextCard(trigger, parent) {
  const btn = document.querySelector(trigger);

  const getResource = async (url) => {
  let res = await fetch(url)
  if (!res.ok) {
    throw new Error (`Error in path ${url} status: ${res.status}`)
  }
  return await res.json()
  }
  

btn.addEventListener('click', function(){
  getResource('http://localhost:3004/styles')
  .then((res)=>{
   createCard(res)
  })
  this.remove()
})
  function createCard(res) {
    res.forEach(({src, title, link})=>{
      const div = document.createElement('div');
      div.classList.add('animated', 'fadeInDown', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
      div.innerHTML = `
      <div class=styles-block>
        <img src=${src} alt>
        <h4>${title}</h4>
        <a href=${link}>Подробнее</a>
      </div>`
  
      document.querySelector(parent).append(div)
    })
    
  }
 /*  card.forEach(card=>{
    card.classList.add('animated', 'fadeInUp');
  }) 
  
  btn.addEventListener('click', ()=>{
    card.forEach(card=>{
    card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    })
    btn.remove();
  }) */
}
export default nextCard;