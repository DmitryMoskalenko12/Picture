function filters(pictures, wrap, tabs, no ) {
  const content = document.querySelectorAll(pictures),
        wrapper = document.querySelector(wrap),
        tab = document.querySelectorAll(tabs),
        noportf = document.querySelector(no);

function hideActive() {
  tab.forEach(active=>{
    active.classList.remove('active');
  })
}
function showActive(i = 0) {
  tab[i].classList.add('active');
}
hideActive();
showActive();
wrapper.addEventListener('click', (e)=>{
  if (e.target && e.target.classList.contains('tab')) {
    tab.forEach((tab, i)=>{
      if (e.target === tab) {
        hideActive();
        showActive(i);
      }
    })
  }
})

function showPicture(selector) {

    wrapper.addEventListener('click', (e)=>{
      if (e.target.classList.contains('grandmother') || e.target.classList.contains('granddad')) {
        noportf.style.display = 'block';
        noportf.classList.add('animated', 'fadeIn');
      }else{
        noportf.style.display = 'none';
        noportf.classList.remove('animated', 'fadeIn');
      }

    if(e.target.classList.contains(selector)){
        content.forEach(cont=>{
        if (cont.classList.contains(selector)) {
          cont.style.display = 'block';
          cont.classList.add('animated', 'fadeIn');
        }else{
          cont.style.display = 'none';
          cont.classList.remove('animated', 'fadeIn');
        }
      })
    }
  })
}
showPicture('all');
showPicture('lovers');
showPicture('chef');
showPicture('girl');
showPicture('guy');
showPicture('grandmother');
showPicture('granddad');

}
export default filters;