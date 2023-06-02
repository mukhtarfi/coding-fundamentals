var getInput = document.querySelector('#get__input')
var searchBtn = document.querySelector('#getuser__btn')
var userAvatarDisplay = document.querySelector('.user__avatar')
var userAvatarImage = document.querySelector('#user__image')
var userName = document.querySelector('.name')
var userBio = document.querySelector('.bio')
var userJoin = document.querySelector('#joined')
var form = document.querySelector('form')

let userData

const DATA_URL = 'https://api.github.com/users'

async function getData(name) {
    const response = await fetch(`${DATA_URL}/${name}`)
    const data = await response.json()

    return data
}

function getDate() {
    var joinDate = userData.created_at.split('-')
    var daySplit = joinDate[2].split('T')

    var day = daySplit[0]
    var getMonth = joinDate[1]
    var year = joinDate[0]
    
    var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novemner', 'December']
    
    var month = monthName[parseInt(getMonth) - 1]

    userJoin.innerHTML = `Joined at: ${day} ${month} ${year}`
}

searchBtn.addEventListener('click', async (e) => {
    e.preventDefault()

    searchInput = getInput.value
    userData = await getData(searchInput)
    
    getDate()

    userAvatarDisplay.setAttribute("style", "display: flex;")
    userAvatarImage.src = userData.avatar_url
    userBio.innerHTML = userData.bio
    userName.innerHTML = userData.name
})

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    searchInput = getInput.value
    userData = await getData(searchInput)
      
    getDate()

    userAvatarDisplay.setAttribute("style", "display: flex;")
    userAvatarImage.src = userData.avatar_url
    userBio.innerHTML = userData.bio
    userName.innerHTML = userData.name
})