const puzzleElement = document.querySelector('#puzzle')
const remainingGuessesElement = document.querySelector('#remaining-guesses')
let game1

// puzzleElement.textContent = game1.puzzle
// remainingGuessesElement.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleElement.textContent = game1.puzzle
    remainingGuessesElement.textContent = game1.statusMessage
}

const startGame = async () => {
    const puzzle = await getPuzzle(3)
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

//Using callback
// getPuzzle((error, puzzle) => {
//     if(error) {
//         console.log(`Error: ${error}`)
//     }else {
//         console.log(`Async puzzle = ${puzzle}`)
//     }
// })

// const myPuzzlePromise = getPuzzle(2)

// myPuzzlePromise.then((puzzle) => {
//     console.log(`Async puzzle = ${puzzle}`)
// },(error) => {
//     console.log(`Error: ${error}`)
// }) 

// getPuzzle(4).then((puzzle) => {
//     console.log(`Fetch puzzle = ${puzzle}`)
// }).catch((error) => {
//     console.log(`Error: ${error}`)
// })

//Using callback
// getCountryDetails('nz', (error, countryName) => {
//     if(error) {
//         console.log(`Error: ${error}`)
//     }else {
//         console.log(`Country name: ${countryName}`)
//     }
// })

// getCountryDetails('MX').then((countryName) => {
//     console.log(`Country name: ${countryName}`)
// }, (error) => {
//     console.log(`Error: ${error}`)
// })

// getCountryDetails('NZ').then((country) => {
//     console.log(`My Fetch Country name: ${country.name}`)
// }).catch((error) => {
//     console.log(`Error: ${error}`)
// })

// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//     if(response.status === 200) {
//         return response.json()
//     } else {
//         throw new Error('Unable to fetch the puzzle')
//     }
// }).then((data) => {
//     console.log(`This is the promise puzzle: ${data.puzzle}`)
// })
// .catch((error) => {
//     console.log(error)
// })

// getLocation().then((location) => {
//     console.log(`You are currently in ${location.city}, ${location.region}, ${location.country}`)
// }).catch((error) => {
//     console.log(`IP Error: ${error}`)
// })

// getLocation().then((location) => {
//     return getCountryDetails(location.country)
// }).then((country) => {
//     console.log(`My linked promise Country name: ${country.name}`)
// }).catch((error) => {
//     console.log(`Error: ${error}`)
// })

// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log('Error: ', error)
// })

// console.log('Do something')

// const puzzle = getPuzzleSync()
// console.log(`Sync puzzle = ${puzzle}`)

// console.log('Do something else')

//Making an HTTP request
//const request = new XMLHttpRequest()

// request.addEventListener('readystatechange', (e) => {
//     if(e.target.readyState === 4 && e.target.status === 200){
//         const puzzleJSON = JSON.parse(e.target.responseText)
//         console.log(puzzleJSON.puzzle)
//     }
//     else if(e.target.readyState === 4) {
//         console.log('An error has occurred')
//     }
// })

// request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
// request.send()
// const countryCode = 'GB'

// request.addEventListener('readystatechange', (e) => {
//     if(e.target.readyState === 4 && e.target.status === 200){
//         const countries = JSON.parse(e.target.responseText)
//         const myCountry = countries.find((country) => country.alpha2Code === countryCode.toUpperCase())
//         console.log(myCountry.name)
//         console.log(myCountry.currencies[0].symbol)
//     }
//     else if(e.target.readyState === 4) {
//         console.log('An error has occurred')
//     }
// })

// request.open('GET', 'http://restcountries.eu/rest/v2/all')
// request.send()