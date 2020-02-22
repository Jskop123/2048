const cloneDeep = require('lodash.clonedeep');

import './css/style.css'
import './css/boxColors.css'
import './css/modal.css'

import resetGame from './js/resetGame'
import {openModal, closeModal}  from './js/modal'
import randomPlace from './js/randomPlace'

closeModal()

let array = [
  [0, 0, 2, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]

let arrayCopy = cloneDeep(array)



const boxes = [...document.querySelectorAll('.box')]


const chunkArray = array => {
  const arrayLength = array.length;
  const tempArray = [];
  for (let i = 0; i < arrayLength; i += 4) {
      const myChunk = array.slice(i, i+4);
      tempArray.push(myChunk);
  }
  return tempArray;
}


const removedZeros = (array) => {
  const arrayWithoutZeros = array.map(element => {
    for (let i = 0; i < 4; i++) {
      const index = element.indexOf(0)
      if (index > -1) {
        element.splice(index, 1)
      }
    }
    return element
  })
  return arrayWithoutZeros
}

const isNumber = item => typeof item === 'number' ? true : false

let scoreCounter = 0

const summedElementsLeft = (array) => {
  const sumElementsArray = array.map(element => {
    const answersArray = []
    for (let i = 0; i < 4; i++) {
      if (element[i] === element[i + 1] && element[i] !== 0) {
        if (isNumber(element[i])) {
          answersArray.push(element[i] += element[i + 1])
          scoreCounter += element[i]
        }
        element.splice(element.indexOf(element[i + 1]), 1)
      }
      else {
        if (isNumber(element[i])) answersArray.push(element[i])
      }
    }
    return answersArray
  })
  return sumElementsArray
}

const summedElementsRight = (array) => {
  const sumElementsArray = array.map(element => {
    element.reverse()
    const answersArray = []
    for (let i = 0; i < 4; i++) {
      if (element[i] === element[i + 1] && element[i] !== 0) {
        if (isNumber(element[i])){
          answersArray.push(element[i] += element[i + 1])
          scoreCounter += element[i]
        }
        element.splice(element.indexOf(element[i + 1]), 1)
      }
      else {
        if (isNumber(element[i])) answersArray.push(element[i])
      }
    }
    return answersArray.reverse()
  })
  return sumElementsArray
}

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

const swipeLeft = (array) => {
  const swipeLeftArray = array.map(element => {
    while (element.length < 4) {
      element.push(0)
    }
    return element
  })
  return swipeLeftArray
}

const swipeRight = (array) => {
  const swipeRightArray = array.map(element => {
    while (element.length < 4) {
      element.unshift(0)
    }
    return element
  })
  return swipeRightArray
}

const transpose = array => array[0].map((x, i) => array.map(x => x[i]))

const swipeUp = (array) => {
  const swipeUpArray = array.map(element => {
    while (element.length < 4) {
      element.push(0)
    }
    return element
  })
  const result = transpose(swipeUpArray)
  return result
}

const swipeDown = (array) => {
  const swipeDownArray = array.map(element => {
    while (element.length < 4) {
      element.unshift(0)
    }
    return element
  })
  return transpose(swipeDownArray)
}

const zerosPosition = array => {
  const zerosArray = []
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (!array[i][j]) zerosArray.push({ row: i, col: j })
    }
  }
  return zerosArray
}

const addFollowingNr = (zeros, array) => {
  const number = 2
  const rand = Math.floor(Math.random() * zeros.length)
  const row = zeros[rand].row
  const col = zeros[rand].col
  array[row][col] = number
  zeros.splice(rand, 1)
  return array
}

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
    for(let i=0; i<3; i++){
      if(arr[i]===arr[i+1] && arr[i] !== 0) isSimilar = true
    }
  })
  return isSimilar
}

const similarElements = array => {
  const trans = transpose(array)
  if(similarItems(array) || similarItems(trans)) return true
  return false
}


const gameOverAlert = array => {
  let noZero = true
  let simEls = true
  array.forEach(arr => {
    if(arr.includes(0)) noZero = false
  })
  if(similarElements(array)) simEls = false 
  if(noZero && simEls) return true
  else return false
}

const manageClasses = elements => {
  elements.forEach(element => {
    const value = element.innerText*1
    element.classList = 'box'
    for(let i=2; i<4096; i=i*2){
      if(value === i){
        element.classList += ` box${i}`
      }
    }
  })
}

const displayScore = document.querySelector('#actualScore h2')
const modalScore = document.querySelector('#modal-content h2')

manageClasses(boxes)
window.addEventListener('keydown', event => {
  if (event.keyCode === 37) {
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
  if (event.keyCode === 39) {
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
  if (event.keyCode === 38) {
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
  if (event.keyCode === 40) {
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
  if(gameOverAlert(array)) openModal()
  manageClasses(boxes)
  displayScore.innerText = scoreCounter
  modalScore.innerText = scoreCounter
})

const newGame = document.querySelector('#newGame')
newGame.addEventListener('click', () => {
  const reset = resetGame(array)
  array = cloneDeep(reset)
})

const container = document.querySelector('.container')

const hammertime = new Hammer(container);
hammertime.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

hammertime.on('swipe', function(ev) {
	if(ev.direction === 2){
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
  if(ev.direction === 4){
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
  if(ev.direction === 8){
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
  if(ev.direction === 16){
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
  if(gameOverAlert(array)) openModal()
  manageClasses(boxes)
  displayScore.innerText = scoreCounter
  modalScore.innerText = scoreCounter
});



