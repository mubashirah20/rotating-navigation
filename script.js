const open = document.getElementById('open')
const close = document.getElementById('close')
//it's a class so use QuerySelector and .container
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))
close.addEventListener('click', () => container.classList.remove('show-nav'))
