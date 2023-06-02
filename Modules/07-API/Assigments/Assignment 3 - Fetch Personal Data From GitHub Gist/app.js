const fetchBtn = document.querySelector('button')
const fetchResult = document.querySelector('.info__result')

const DATA_URL = 'https://gist.githubusercontent.com/mukhtarfi/a75ae834156620147687cebb14dec1a8/raw/09d6ae15923fbe12ced8a813d17835cd9db57ac3/me.json'

async function getData() {
    const response = await fetch(DATA_URL)
    const data = await response.json()

    return data
}

fetchBtn.addEventListener('click', async (e) => {
    e.preventDefault()

    var getInfo = await getData()

    var getName = document.createElement('h1')
    getName.textContent = `Name: ${getInfo.name}`
        
    var getAge = document.createElement('p')
    getAge.textContent = `Age: ${getInfo.age}`
    
    var getHobby = document.createElement('ul')
    var hobbyData = getInfo.hobbies
    
    for (i = 0; i < hobbyData.length; i++) {
        var getHobbyList = document.createElement('li')
        getHobbyList.innerText = hobbyData[i]
        getHobby.appendChild(getHobbyList)
    }
     
    fetchResult.appendChild(getName)
    fetchResult.appendChild(getAge)
    fetchResult.appendChild(getHobby)
})