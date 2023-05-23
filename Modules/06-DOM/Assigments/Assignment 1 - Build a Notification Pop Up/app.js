const addButton = document.querySelector('.add__button')
const notify = document.querySelector('.hidden') 
const closeButton = document.querySelector('.cta__button')

let autoNotifyClosed;

addButton.addEventListener('click', () => {
    notify.classList.add('show')

    function autoClosed() {
        notify.classList.remove('show')
    }

    autoNotifyClosed = setTimeout(autoClosed, 3000)
})

closeButton.addEventListener('click', () => {
    clearTimeout(autoNotifyClosed)

    notify.classList.remove('show')
})