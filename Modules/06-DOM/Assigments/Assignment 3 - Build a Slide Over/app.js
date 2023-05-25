const pageBody = document.querySelector('body')
const pageBackdrop = document.querySelector('.bg-backdrop')
const slidePanel = document.querySelector('.slide-over-container')
const closeBtn = document.querySelector('.close-button')

// create a register button
const registerBtn = document.createElement('button')
registerBtn.setAttribute('style', 'height: 30px; width: 70px; margin-left: 10px; margin-top: 10px; border-radius: 5px; cursor: pointer;')
const btnInfo = document.createTextNode('Register')

// combine the register button into the html
registerBtn.appendChild(btnInfo)
pageBody.appendChild(registerBtn)

// create a function for closed button
closeBtn.addEventListener('click', () => {
    slidePanel.classList.add('slide-out')

    // set time out so that backdrop panel hide after slide panel is slide-out completely
    function autoClosedBackground() {
        pageBackdrop.setAttribute('style', 'display: none;')
    }

    setTimeout(autoClosedBackground, 700)
})

// create a function for register button
registerBtn.addEventListener('click', () => {
    slidePanel.classList.add('slide-in')
    slidePanel.classList.remove('slide-out')
    pageBackdrop.setAttribute('style', 'display: flex;')
})