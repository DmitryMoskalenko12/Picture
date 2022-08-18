function filters(pictures, wrap, tabs, no ) {
  const content = document.querySelectorAll(pictures),
        wrapper = document.querySelector(wrap),
        tab = document.querySelectorAll(tabs),
        noportf = document.querySelector(no)
        function hideActive() {
          tab.forEach(active=>{
            active.classList.remove('active')
          })
        }
        hideActive()
        function showActive(i = 0) {
          tab[i].classList.add('active')
        }
        showActive()
        wrapper.addEventListener('click', (e)=>{
          if (e.target && e.target.classList.contains('tab')) {
            tab.forEach((tab, i)=>{
              if (e.target === tab) {
                hideActive()
                showActive(i)
              }
            })
          }
        })
function show(renge) {
  tab.forEach((item, i)=>{
    item.addEventListener('click', ()=>{
      if (item.classList.contains('grandmother') || item.classList.contains('granddad')) {
        noportf.style.display = 'block'
      }else{
        noportf.style.display = 'none'
      }
      if(item.classList.contains(renge)){
          content.forEach(cont=>{
            if (cont.classList.contains(renge)) {
              cont.style.display = 'block'
            }else{
              cont.style.display = 'none'
            }
          })
      }
    })
  })
}
show('all')
show('lovers')
show('chef')
show('girl')
show('guy')
show('grandmother')
show('granddad')

}
export default filters;