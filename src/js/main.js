import modal from './modules/modal';
import slider from './modules/slider';
import forms from './modules/form';
import setLang from './modules/inputLang';
import mask from './modules/mask';
window.addEventListener("DOMContentLoaded", ()=>{
  'Use strict'
modal();
slider('.feedback-slider-item','horizontal', '.main-prev-btn', '.main-next-btn');
slider('.main-slider-item', 'vertical');
forms();
setLang('[name="name"]');
setLang('[name="message"]');
mask('[name="phone"]');
})