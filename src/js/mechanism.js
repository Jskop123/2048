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
    return answersArray.reverse()
  })
  return sumElementsArray
}

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


let scoreCounter = 0
const displayScore = document.querySelector('#actualScore h2')
const modalScore = document.querySelector('#modal-content h2')
const storageStore = document.querySelector('#storageScore')
storageStore.innerText = localStorage.getItem('bestScore')

const countScore = () => {
  if(scoreCounter > localStorage.getItem('bestScore')){
    localStorage.setItem('bestScore', scoreCounter)
  }
  storageStore.innerText = localStorage.getItem('bestScore')
  displayScore.innerText = scoreCounter
  modalScore.innerText = scoreCounter
}

const resetScore = () => scoreCounter=0

export {
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
}