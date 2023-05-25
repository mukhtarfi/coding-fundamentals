const searchBox = document.querySelector('.palette')

searchBox.addEventListener('keydown', (e) => {

    if (e.altKey && e.key === 'k') {
        e.preventDefault()

        searchBox.classList.toggle('fade-out')
        searchBox.classList.add('fade-in')
    }

})