import { WORDS_1, WORDS_2 } from '../constants/wordlist'
import { VALID_GUESSES } from '../constants/validGuesses'
// import { WRONG_SPOT_MESSAGE, NOT_CONTAINED_MESSAGE } from '../constants/strings'
// import { getGuessStatuses } from './statuses'

export const isWordInWordList = (word: string) => {
  return (
    WORDS_1.includes(word.toLowerCase()) ||
    WORDS_2.includes(word.toLowerCase()) ||
    VALID_GUESSES.includes(word.toLowerCase())
  )
}

export const isWinningWord = (word: string) => {
  return solution_A === word || solution_B === word;
}

// build a set of previously revealed letters - present and correct
// guess must use correct letters in that space and any other revealed letters
// also check if all revealed instances of a letter are used (i.e. two C's)
// export const findFirstUnusedReveal = (word: string, guesses: string[]) => {
//   if (guesses.length === 0) {
//     return false
//   }

//   const lettersLeftArray = new Array<string>()
//   const guess = guesses[guesses.length - 1]
//   const statuses = getGuessStatuses(guess)

//   for (let i = 0; i < guess.length; i++) {
//     if (statuses[i] === 'correct' || statuses[i] === 'present') {
//       lettersLeftArray.push(guess[i])
//     }
//     if (statuses[i] === 'correct' && word[i] !== guess[i]) {
//       return WRONG_SPOT_MESSAGE(guess[i], i + 1)
//     }
//   }

//   // check for the first unused letter, taking duplicate letters
//   // into account - see issue #198
//   let n
//   for (const letter of word) {
//     n = lettersLeftArray.indexOf(letter)
//     if (n !== -1) {
//       lettersLeftArray.splice(n, 1)
//     }
//   }

//   if (lettersLeftArray.length > 0) {
//     return NOT_CONTAINED_MESSAGE(lettersLeftArray[0])
//   }
//   return false
// }

export const getWordsOfDay = () => {
  // January 1, 2022 Game Epoch
  const epochMs = new Date('January 1, 2022 00:00:00').valueOf()
  const now = Date.now()
  const msInDay = 86400000
  const index = now // ;Math.floor((now - epochMs) / msInDay)
  const nextday = (Math.floor((now - epochMs) / msInDay) + 1) * msInDay + epochMs

  return {
    solution_A: WORDS_1[index % WORDS_1.length].toUpperCase(),
    solution_B: WORDS_2[index % WORDS_2.length].toUpperCase(),
    solutionIndex: index,
    tomorrow: nextday,
  }
}

export const { solution_A, solution_B, solutionIndex, tomorrow } = getWordsOfDay()