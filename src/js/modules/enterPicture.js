function picture() {

function showPicture(selector, sourse, size, stprice, fnprice) {
  document.querySelector(selector).addEventListener('mouseenter', (e)=>{
    e.target.src = sourse
    document.querySelector(size).style.display = 'none'
    document.querySelector(stprice).style.display = 'none'
    document.querySelector(fnprice).style.display = 'none'
  })
}
function hidePicture(selector, sourse, size, stprice, fnprice) {
  document.querySelector(selector).addEventListener('mouseleave', (e)=>{
    e.target.src = sourse
    document.querySelector(size).style.display = 'block'
    document.querySelector(stprice).style.display = 'block'
    document.querySelector(fnprice).style.display = 'block'
  })
}
 showPicture('.size-1', 'assets/img/sizes-1-1.png', '.size',
  '.starting-price', '.final-price')
 hidePicture('.size-1', 'assets/img/sizes-1.png', '.size',
 '.starting-price', '.final-price')  
 
 showPicture('.size-2', 'assets/img/sizes-2-1.png', '.size2',
 '.starting-price2', '.final-price2')
 hidePicture('.size-2', 'assets/img/sizes-2.png', '.size2',
 '.starting-price2', '.final-price2') 

 showPicture('.size-3', 'assets/img/sizes-3-1.png','.size3',
 '.starting-price3', '.final-price3' )
 hidePicture('.size-3', 'assets/img/sizes-3.png', '.size3',
 '.starting-price3', '.final-price3') 

 showPicture('.size-4', 'assets/img/sizes-4-1.png', '.size4',
 '.starting-price4', '.final-price4')
 hidePicture('.size-4', 'assets/img/sizes-4.png', '.size4',
 '.starting-price4', '.final-price4') 
}
export default picture;