const cloneDeep = require('lodash.clonedeep');

import './css/style.css'
import './css/boxColors.css'
import './css/modal.css'

import resetGame from './js/resetGame'
import { openModal, closeModal } from './js/modal'
import winGame from './js/winGame'
import {
  removedZeros,
  summedElementsLeft,
  summedElementsRight,
  swipeLeft,
  swipeRight,
  swipeUp,
  swipeDown,
  transpose,
  zerosPosition,
  addFollowingNr,
  countScore,
  resetScore
} from './js/mechanism'

closeModal()

let array = [
  [0, 0, 0, 0],
  [0, 0, 2, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]

let arrayCopy = cloneDeep(array)

const boxes = [...document.querySelectorAll('.box')]

const newGameButton = document.querySelectorAll('.newGame')
const resetGameFunc = () => {
  const resetArray = resetGame()
  reloadArray(resetArray)
  arrayCopy = cloneDeep(resetArray)
  manageClasses(boxes)
  resetScore()
  countScore()
}
newGameButton[0].addEventListener('click', resetGameFunc)
newGameButton[1].addEventListener('click', resetGameFunc)

const reloadArray = (array) => {
  const iterableVar = array.flat(1)
  boxes.forEach((box, i) => {
    if (iterableVar[i] !== 0) {
      box.innerHTML = iterableVar[i]
    }
    else {
      box.innerHTML = ''
    }
  })
}
reloadArray(arrayCopy)

const compareArray = (a, b) => {
  if (JSON.stringify(a) == JSON.stringify(b)) return true
  else return false
}

const addingNumberDecition = (a, b, c) => {
  if (!compareArray(a, b)) addFollowingNr(c, b)
}

const similarItems = array => {
  let isSimilar = false
  array.forEach(arr => {
    for (let i = 0; i < 3; i++) {
      if (arr[i] === arr[i + 1] && arr[i] !== 0) isSimilar = true
    }
  })
  return isSimilar
}

const similarElements = array => {
  const trans = transpose(array)
  if (similarItems(array) || similarItems(trans)) return true
  return false
}

const gameOverAlert = array => {
  let noZero = true
  let simEls = true
  array.forEach(arr => {
    if (arr.includes(0)) noZero = false
  })
  if (similarElements(array)) simEls = false
  if (noZero && simEls) return true
  else return false
}

const manageClasses = elements => {
  elements.forEach(element => {
    const value = element.innerText * 1
    element.classList = 'box'
    for (let i = 2; i < 4096; i = i * 2) {
      if (value === i) {
        element.classList += ` box${i}`
      }
    }
  })
}

const moveLeft = () => {
  const rmZeros = removedZeros(arrayCopy)
  const sumEls = summedElementsLeft(rmZeros)
  const result = swipeLeft(sumEls)
  arrayCopy = result
  reloadArray(result)
  const zerosPos = zerosPosition(arrayCopy)
  addingNumberDecition(array, arrayCopy, zerosPos)
  array = cloneDeep(arrayCopy)
  reloadArray(arrayCopy)
}
const moveRight = () => {
  const rmZeros = removedZeros(arrayCopy)
  const sumEls = summedElementsRight(rmZeros)
  const result = swipeRight(sumEls)
  arrayCopy = result
  reloadArray(result)
  const zerosPos = zerosPosition(arrayCopy)
  addingNumberDecition(array, arrayCopy, zerosPos)
  array = cloneDeep(arrayCopy)
  reloadArray(arrayCopy)
}
const moveUp = () => {
  const transposed = transpose(arrayCopy)
  const rmZeros = removedZeros(transposed)
  const sumEls = summedElementsLeft(rmZeros)
  const result = swipeUp(sumEls)
  arrayCopy = result
  reloadArray(result)
  const zerosPos = zerosPosition(arrayCopy)
  addingNumberDecition(array, arrayCopy, zerosPos)
  array = cloneDeep(arrayCopy)
  reloadArray(arrayCopy)
}
const moveDown = () => {
  const transposed = transpose(arrayCopy)
  const rmZeros = removedZeros(transposed)
  const sumEls = summedElementsRight(rmZeros)
  const result = swipeDown(sumEls)
  arrayCopy = result
  reloadArray(result)
  const zerosPos = zerosPosition(arrayCopy)
  addingNumberDecition(array, arrayCopy, zerosPos)
  array = cloneDeep(arrayCopy)
  reloadArray(arrayCopy)
}

manageClasses(boxes)
let scoreStorage = 0


window.addEventListener('keydown', event => {
  if(event.keyCode === 37 ||event.keyCode === 39 || event.keyCode === 38 || event.keyCode === 40) event.preventDefault()
})
window.addEventListener('keyup', event => {
  if (event.keyCode === 37) moveLeft()
  if (event.keyCode === 39) moveRight()
  if (event.keyCode === 38) moveUp()
  if (event.keyCode === 40) moveDown()
  if (gameOverAlert(array)) openModal()
  manageClasses(boxes)
  countScore()
  winGame(array)
})

const container = document.querySelector('.container')
const hammertime = new Hammer(container);
hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

hammertime.on('swipe', function (ev) {
  if (ev.direction === 2) moveLeft()
  if (ev.direction === 4) moveRight()
  if (ev.direction === 8) moveUp()
  if (ev.direction === 16) moveDown()
  if (gameOverAlert(array)) openModal()
  manageClasses(boxes)
  countScore()
  winGame(array)
});

