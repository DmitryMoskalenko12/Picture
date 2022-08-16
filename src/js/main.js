import modal from './modules/modal';
import slider from './modules/slider';
import forms from './modules/form'
window.addEventListener("DOMContentLoaded", ()=>{
  'Use strict'
modal();
slider('.feedback-slider-item','horizontal', '.main-prev-btn', '.main-next-btn');
slider('.main-slider-item', 'vertical');
forms();
})