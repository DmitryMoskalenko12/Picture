function calculate(size, material, plus, promo, place) {
  const blockSize = document.querySelector(size),
        blockMaterial = document.querySelector(material),
        blockPlus = document.querySelector(plus),
        blockPromo = document.querySelector(promo),
        blockPlace = document.querySelector(place);
        let sum = 0;

        function calcSum() {
          sum = Math.round((+blockSize.value) * (+blockMaterial.value) + (+blockPlus.value));

          if (blockSize.value !== '' && blockMaterial.value !== '') {
            blockPlace.textContent = sum
          }else if(blockSize.value == '' || blockMaterial.value == '' && blockPlus.value){
            blockPlace.textContent = 'Оберіть розмір картини та матеріал'
          } 
          if(blockPromo.value == 'IWANTPOPART' && blockSize.value !== '' && blockMaterial.value !== '' ){
            blockPlace.textContent = Math.round((sum * 0.7))
          }
 
        }
        blockSize.addEventListener('change', calcSum);
        blockMaterial.addEventListener('change', calcSum);
        blockPlus.addEventListener('change', calcSum);
        blockPromo.addEventListener('input', calcSum)
        
}
export default calculate;