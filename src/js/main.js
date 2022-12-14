import modal from './modules/modal';
import slider from './modules/slider';
import forms from './modules/form';
import setLang from './modules/inputLang';
import mask from './modules/mask';
import nextCard from './modules/showNextCard';
import calculate from './modules/calc';
import filters from './modules/filter';
import picture from './modules/enterPicture';
import accordion from './modules/accordion';
import burger from './modules/burger';
import scrolling from './modules/scrolling';
import drop from './modules/drop';


window.addEventListener("DOMContentLoaded", ()=>{
  'Use strict'
  let price ={}
modal();
slider('.feedback-slider-item','horizontal', '.main-prev-btn', '.main-next-btn');
slider('.main-slider-item', 'vertical');
forms(price);
setLang('[name="name"]');
setLang('[name="message"]');
mask('[name="phone"]');
nextCard('.button-styles','#styles .row');
calculate('#size', '#material', '#options', '.promocode', '.calc-price', price);
filters('.portfolio-block', '.portfolio-menu', '.tab', '.portfolio-no');
picture('.sizes-block');
accordion('.accordion-heading');
burger();
scrolling('.pageup');
drop();
})

 