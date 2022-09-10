function drop() {
  const files = document.querySelectorAll('[name="upload"]');
  ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventD=>{
    files.forEach(input=>{
      input.addEventListener(eventD, cancelEventPrevent, false);
    });
  });

  function cancelEventPrevent(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function areaColor(item) {
    item.closest('.file_upload').style.boxShadow = '5px 5px 20px #c818bc';
  }
  function noAreaColor(item) {
    item.closest('.file_upload').style.boxShadow = 'none';
    if (item.closest('.main')) {
      item.closest('.file_upload').style.backgroundColor = '#f7e7e6';
    }else if(item.closest('.popup-design')){
      item.closest('.file_upload').style.backgroundColor = '#ededed';
    }else if(item.closest('.calc')){
      item.closest('.file_upload').style.backgroundColor = '#fff';
    }
    
  }
  ['dragenter', 'dragover'].forEach(eventD => {
    files.forEach(input => {
      input.addEventListener(eventD, () => areaColor(input), false);
    });
  });

  ['dragleave', 'drop'].forEach(eventD => {
    files.forEach(input => {
      input.addEventListener(eventD, () => noAreaColor(input), false);
    });
  });

  files.forEach(item=>{
    item.addEventListener('drop', (e)=>{
    item.files = e.dataTransfer.files;


    const words = item.files[0].name.split('.');
    words[0].length > 5 ? item.previousElementSibling.textContent = words[0].slice(0, 5) + '...' + words[1] : item.previousElementSibling.textContent = words[0] + '.' + words[1]
    
    if (item.closest('.main')) {
      async function postData(url, data) {
        let res = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: data
        })
  
        return await res.json()
      }
    
      const formData = new FormData();
        for(let key in item.files[0]){
          formData.append(key, item.files[0][key])
        }
  
     const json = JSON.stringify(Object.fromEntries(formData.entries()))
        postData('http://localhost:3000/getWithImage', json)
    }
  
    });
  });
}
export default drop;