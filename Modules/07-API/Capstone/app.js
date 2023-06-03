const infoBox = document.querySelector('.info__box')

const API_URL = 'https://api.thecatapi.com/v1/breeds'
const IMAGE_URL = 'https://cdn2.thecatapi.com/images'

async function getData() {
    const response = await fetch(API_URL)
    const data = await response.json()

    console.log('early data',data)

    return data
}

async function displayData() {
    var dataInput = await getData()

    var catInfo = document.createElement('ul')
    catInfo.classList.add('cat__info')
    
    for (i=0; i<dataInput.length; i++) {
        let catData = dataInput[i]
        
        let catBox = document.createElement('li')
        catBox.classList.add('cat__box')

        const catGroup = document.createElement('div')
        
        // group for cat image
        let imageContainer = document.createElement('div')
        imageContainer.classList.add('image__container')
        const catImage = document.createElement('img')
        catImage.classList.add('cat__image')
        
        var catImageId = catData.reference_image_id
        var newUrl = `${IMAGE_URL}/${catImageId}.jpg`
        
        catImage.src = newUrl
        catImage.onerror = () => {
            catImage.src='https://media1-production-mightynetworks.imgix.net/asset/55741260/1679051561667.png?ixlib=rails-4.2.0&fm=jpg&q=75&auto=format'
        }
        
        imageContainer.appendChild(catImage)
        catGroup.appendChild(imageContainer)
        
        // cat name & description
        const catName = document.createElement('h3')
        catName.classList.add('name__font')
        catName.innerText = catData.name
        
        const catDescription = document.createElement('p')
        catDescription.classList.add('description__font')
        catDescription.innerText = catData.description
        
        catGroup.appendChild(catName)
        catGroup.appendChild(catDescription)

        // for profile wording
        var boxName = document.createElement('div')
        boxName.classList.add('box__name')
        var profileWord = document.createElement('p')
        profileWord.innerText = 'Profile'

        boxName.appendChild(profileWord)

        // for big parent in li element
        catBox.appendChild(catGroup)
        catBox.appendChild(boxName)
        catInfo.appendChild(catBox)
    }
    
    infoBox.appendChild(catInfo)
}

displayData()