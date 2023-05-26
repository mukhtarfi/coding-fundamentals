const navPanel = document.querySelector('.header')
const mouseBody = document.querySelector('body')

// nav panel appear
mouseBody.addEventListener('mousemove', (e) => {
    let y = e.clientY

    // window.scrollY = at least 114px
    if (y <= 114) {
        navPanel.style.top = '0px'
    } else {
        navPanel.style.top = '-120px'
    }
})

// nav panel hiding
// when scroll down navbar hide. when scroll up navbar appear

var prevScroll = window.scrollY

console.log(`this is prevscroll : ${prevScroll}`)

window.onscroll = function() {
    var currentScroll = window.scrollY

    if (prevScroll === currentScroll) {
        navPanel.style.top = '0px'
    } else {
        navPanel.style.top = '-120px'
    }
}