function forms(price) {
  const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        uploadd = document.querySelectorAll('[name="upload"]');
    const message = {
      loading: 'Идет загрузка',
      success: 'Данные получены',
      failure: 'Произошла ошибка',
      imgsuccess: 'assets/img/ok.png',
      imgfailure: 'assets/img/heart.png',
      spinner: 'assets/img/spinner.gif'
    } 
    inputs.forEach(input=>{
      input.addEventListener('input', ()=>{
        if (input.getAttribute('name') == 'phone') {
          input.value = input.value.replace(/\D/ig, '')
        }

        if (input.getAttribute('name') == 'name') {
          input.value = input.value.replace(/\d/ig, '')
        }
      })
      
    })

    uploadd.forEach(item=>{
      item.addEventListener('input', ()=>{
        const words = item.files[0].name.split('.');
        document.querySelectorAll('.file_upload > div').forEach(image=>{
          words[0].length > 5 ? image.textContent = words[0].slice(0, 5) + '...' + words[1] : image.textContent = words[0] + '.' + words[1]
        })
        
      })
    })

  
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

    form.forEach(item=>{
      item.classList.add('animated', 'fadeIn')
      bindForm(item)
    })

    function bindForm(form) {
      form.addEventListener('submit', (e)=>{
        e.preventDefault();

        form.classList.add('animated', 'fadeOutUp');
        document.querySelectorAll('.file_upload > div').forEach(item=>{
          item.textContent = "Файл не выбран"
        })
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

        for(let key in price){
          formData.append(key, price[key])
        }
        const uploadd = document.querySelectorAll('[name="upload"]');
        uploadd.forEach(item=>{
          for(let key in item.files[0]){
            formData.append(key, item.files[0][key])
          }
       })
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