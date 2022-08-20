function picture() {
  const blocks = document.querySelectorAll('.sizes-block');
        
function showPicture(block) {
  const img = block.querySelector('img');
  img.src = img.src.slice(0, -4) + '-1.png';
  block.querySelectorAll('p:not(.sizes-hit)').forEach(item=>{
    item.style.display = 'none'
  })
}

function hidePicture(block) {
  const img = block.querySelector('img');
  img.src = img.src.slice(0, -6) + '.png';
  block.querySelectorAll('p').forEach(item=>{
    item.style.display = 'block'
  })
}

blocks.forEach(item=>{
  item.addEventListener('mouseover', ()=>{
    showPicture(item)
  });
  item.addEventListener('mouseout', ()=>{
    hidePicture(item)
  })
})

}
export default picture;