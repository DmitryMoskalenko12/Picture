function forms() {
  const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');
    const message = {
      loading: 'Идет загрузка',
      success: 'Данные получены',
      failure: 'Произошла ошибка',
      imgsuccess: 'assets/img/ok.png',
      imgfailure: 'assets/img/heart.png',
      spinner: 'assets/img/spinner.gif'
    } 
    
  
    async function postData(url, data) {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: data
      })

      return await res.json()
    }

    form.forEach(item=>{
      bindForm(item)
    })

    function bindForm(form) {
      form.addEventListener('submit', (e)=>{
        e.preventDefault();

        form.classList.add('animated', 'fadeOutUp');

        setTimeout(()=>{
          form.style.display = 'none'
        }, 400);

        const div = document.createElement('div')
        div.classList.add('center')
        form.parentNode.append(div)

        const thanks = document.createElement('img')
        thanks.setAttribute('src', message.spinner)
        thanks.classList.add('animated', 'fadeInUp')
        div.append(thanks)
        
        const text = document.createElement('div')
        text.textContent = message.loading;
        div.append(text)

        const formData = new FormData(form);
        let path;
        form.closest('.popup-consultation') ? path = 'http://localhost:3000/getNoImage' : path = 'http://localhost:3000/getWithImage'
        const json = JSON.stringify(Object.fromEntries(formData.entries()))
        postData(path, json)
        .then(()=>{
        thanks.setAttribute('src', message.imgsuccess);
        thanks.classList.add('animated', 'fadeInUp');
        text.textContent = message.success;
        })
        .then(()=>{
          setTimeout(()=>{
            thanks.remove()
            text.remove()
            form.style.display = 'block'
            form.classList.remove('fadeOutUp')
            form.classList.add('fadeIn')
            }, 2000)  
        })
        .catch(()=>{
          thanks.setAttribute('src', message.imgfailure);
          thanks.classList.add('animated', 'fadeInUp');
          text.textContent = message.failure;
          setTimeout(()=>{
            thanks.remove()
            text.remove()
            form.style.display = 'block'
            form.classList.remove('fadeOutUp')
            form.classList.add('fadeIn')
            }, 3000) 
        })
        .finally(
          form.reset()
        )
      })
      
    }
}
export default forms;