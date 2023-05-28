const quoteStatement = document.querySelector('.quote__statement')
const authorName = document.querySelector('.author__name')
const newQuoteBtn = document.querySelector('button')

let quoteContent
let quoteAuthor

const ENDPOINT = 'https://api.quotable.io/random'

async function getQuote() {
    const response = await fetch(ENDPOINT)
    const data = await response.json()

    return data
}

newQuoteBtn.addEventListener('click', async (e) => {
    e.preventDefault()

    const newQuote = await getQuote()
    const quote = newQuote.content
    const nameAuthor = newQuote.author

    quoteStatement.textContent = quote
    authorName.textContent = `- ${nameAuthor}`
    authorName.classList.add('quote__author')
})