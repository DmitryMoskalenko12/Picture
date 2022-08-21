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
    item.closest('.file_upload').style.border = '5px solid blue';
    item.closest('.file_upload').style.backgroundColor = 'rgba(0, 0, 0, .7)';
  }
  function noAreaColor(item) {
    item.closest('.file_upload').style.border = 'none';
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
    document.querySelectorAll('.file_upload > div').forEach(image=>{
      words[0].length > 5 ? image.textContent = words[0].slice(0, 5) + '...' + words[1] : image.textContent = words[0] + '.' + words[1]
    });
    });
  });
}
export default drop;