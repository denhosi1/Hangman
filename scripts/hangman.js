class Hangman {
    constructor (word, remainingGuesses) {
        this.word = word.toLowerCase()
        this.letters = this.word.toLowerCase().split('')
        this.guessedLetters = []
        this.remainingGuesses = remainingGuesses
        this.gameStatus = 'Playing'
    }
    get puzzle () {
        let puzzle = ''
    
        this.letters.forEach((letter) => {
            if(this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })

        return puzzle
    }
    get statusMessage () {
        if(this.gameStatus === 'Finished') {
            return 'Great work! You guessed the word.'
        }
        else if(this.gameStatus === 'Failed') {
            return `Nice try! The word was "${this.word}".`
        }
        else {
            return `Guesses left: ${this.remainingGuesses}`
        }
    }
    makeGuess (guess) {
        if(this.gameStatus === 'Playing') {
            guess = guess[0].toLowerCase()
            if(!this.guessedLetters.includes(guess)) {
                this.guessedLetters.push(guess)
                if(!this.letters.includes(guess)){
                    this.remainingGuesses--
                }
    
                this.calculateStatus()
            }
        }
    }
    calculateStatus () {
        if(this.letters.every((letter) => {
            return this.guessedLetters.includes(letter) || letter === ' '
            })) {
            this.gameStatus = 'Finished'
        } 
        else if(this.remainingGuesses === 0) {
            this.gameStatus = 'Failed'
        } 
        else {
            this.gameStatus = 'Playing'
        }
    }
}