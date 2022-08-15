function modal() {
let nonePressKeyBord = false;
  function bindModal(trigger, modal, close, destroy = false) {
    const modalTrigger = document.querySelectorAll(trigger),
          modalDesign = document.querySelectorAll(modal),
          modalClose = document.querySelectorAll(close),
          scrolll = scroll(),
          windows = document.querySelectorAll('[data-modal]');

  function showModal() {
    modalDesign.forEach(modal=>{
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = `${scrolll}px`;

      nonePressKeyBord = true;
    })

    if (destroy) {
      document.querySelector('.fixed-gift').remove()
    }
  }

  function closeModal() {
    modalDesign.forEach(modal=>{
      modal.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.marginRight = `${0}px`
    })
  }

  modalTrigger.forEach(trig=>{
    trig.addEventListener('click', showModal)
  })

  modalClose.forEach(close=>{
    close.addEventListener('click', closeModal)
  })

  function scroll() {
    const div = document.createElement('div')
    div.style.cssText = `
    overflow-Y: scroll;
    visibility: hidden;
    width: 50px;
    height: 50px;`

    document.body.append(div);

    const res = div.offsetWidth - div.clientWidth
    div.remove();
    return res;
  }
  
  function showModalByTime(selector, time) {
    setTimeout(function() {
        let display;

        document.querySelectorAll('[data-modal]').forEach(item => {
            if (getComputedStyle(item).display !== 'none') {
                display = "block";
            }
        });

        if (!display) {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";
            document.body.style.marginRight = `${scrolll}px`;
        }
    }, time);
}
    showModalByTime('.popup-consultation', 120000)

    function closeEsc() {
    document.addEventListener('keydown', (e)=>{
      if (e.code === 'Escape') {
        closeModal()
      }
    })
    }
    closeEsc()

    function overlayHide() {
    modalDesign.forEach(popup=>{
    popup.addEventListener('click', (e)=>{
      if (e.target === popup) {
        windows.forEach(item=>{
        item.style.display = 'none'
        document.body.style.overflow = '';
        document.body.style.marginRight = `${0}px`
        })
      }
    })
  })  
}
overlayHide()

function showEndModal(selector) {
  window.addEventListener('scroll', ()=>{
    let adaptateToBrowswer = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)
    if (!nonePressKeyBord && (window.pageYOffset + document.documentElement.clientHeight >= adaptateToBrowswer)) {
      document.querySelector(selector).click();
    }
  })
  
}
showEndModal('.fixed-gift')
}
  bindModal('.button-design','.popup-design','.popup-design .popup-close');
  bindModal('.button-consultation','.popup-consultation','.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true )
}

export default modal;