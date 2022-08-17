function setLang(input) {

  const inp = document.querySelectorAll(input);
  inp.forEach(elem=>{
    elem.addEventListener('keypress', (e)=>{
      if (e.key.match(/[^а-яё 0-9]/ig)) {
        e.preventDefault()
      }
    })
  })
}
export default setLang;