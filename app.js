document.querySelector('#original-1').style.display = 'flex'
document.querySelector('#challenge-1').style.display = 'flex'

const originals = document.getElementsByClassName('original')
console.log('originals:', originals)
const challenges = document.getElementsByClassName('challenge')
console.log('challenges:', challenges)
let currentOriginal = 0
let currentChallenge = 0

const leftArrowOriginals = document.querySelector('#arrow-left-originals')
const rightArrowOriginals = document.querySelector('#arrow-right-originals')
const leftArrowChallenges = document.querySelector('#arrow-left-challenges')
const rightArrowChallenges = document.querySelector('#arrow-right-challenges')

leftArrowOriginals.addEventListener('click', () => {
  if (currentOriginal > 0) {
    originals[currentOriginal].style.display = 'none'
    currentOriginal--
    originals[currentOriginal].style.display = 'block'
  } else {
    originals[currentOriginal].style.display = 'none'
    currentOriginal = originals.length - 1
    originals[currentOriginal].style.display = 'block'
  }
})

rightArrowOriginals.addEventListener('click', () => {
  if (currentOriginal < originals.length - 1) {
    originals[currentOriginal].style.display = 'none'
    currentOriginal++
    originals[currentOriginal].style.display = 'block'
  } else {
    originals[currentOriginal].style.display = 'none'
    currentOriginal = 0
    originals[currentOriginal].style.display = 'block'
  }
})

leftArrowChallenges.addEventListener('click', () => {
  if (currentChallenge > 0) {
    challenges[currentChallenge].style.display = 'none'
    currentChallenge--
    challenges[currentChallenge].style.display = 'block'
  } else {
    challenges[currentChallenge].style.display = 'none'
    currentChallenge = challenges.length - 1
    challenges[currentChallenge].style.display = 'block'
  }
})

rightArrowChallenges.addEventListener('click', () => {
  if (currentChallenge < challenges.length - 1) {
    challenges[currentChallenge].style.display = 'none'
    currentChallenge++
    challenges[currentChallenge].style.display = 'block'
  } else {
    challenges[currentChallenge].style.display = 'none'
    currentChallenge = 0
    challenges[currentChallenge].style.display = 'block'
  }
})