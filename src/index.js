import './css/style.css'

let array = [
  [2, 4, 4, 4],
  [4, 2, 2, 4],
  [4, 2, 4, 2],
  [4, 4, 4, 4]
]

let arrayCopy = [...array]

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
        if (isNumber(element[i])) answersArray.push(element[i] += element[i + 1])
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
    const reversElement = element.reverse()
    const answersArray = []
    for (let i = 0; i < 4; i++) {
      if (element[i] === element[i + 1] && element[i] !== 0) {
        if (isNumber(element[i])) answersArray.push(element[i] += element[i + 1])
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


const boxes = [...document.querySelectorAll('.box')]

const reloadArray = (array) => {
  const iterableVar = array.flat(1)
  boxes.forEach((box, i) => {
    if(iterableVar[i] !== 0){
      box.innerHTML = iterableVar[i]
    }
    else{
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

const addNumberAfterSwipe = (array) => {
  const number = 2
  for(let i=0; i<16; i++){
    const rand1 = Math.round(Math.random()*3)
    const rand2 = Math.round(Math.random()*3)
    if(array[rand1][rand2]===0){
      array[rand1][rand2] = number
    }
  }
}

window.addEventListener('keydown', event => {
  if(event.keyCode===37){
    const rmZeros = removedZeros(arrayCopy)
    const sumEls = summedElementsLeft(rmZeros)
    const result = swipeLeft(sumEls)
    arrayCopy = result
    reloadArray(result)
    //addNumberAfterSwipe(arrayCopy)
  }
  if(event.keyCode===39){
    const rmZeros = removedZeros(arrayCopy)
    const sumEls = summedElementsRight(rmZeros)
    const result = swipeRight(sumEls)
    arrayCopy = result
    reloadArray(result)
    //addNumberAfterSwipe(arrayCopy)
  }
  if(event.keyCode===38){
    const transposed = transpose(arrayCopy)
    const rmZeros = removedZeros(transposed)
    const sumEls = summedElementsLeft(rmZeros)
    const result = swipeUp(sumEls)
    arrayCopy = result
    reloadArray(result)
    //addNumberAfterSwipe(arrayCopy)
  }
  if(event.keyCode===40){
    const transposed = transpose(arrayCopy)
    const rmZeros = removedZeros(transposed)
    const sumEls = summedElementsRight(rmZeros)
    const result = swipeDown(sumEls)
    arrayCopy = result
    reloadArray(result)
    //addNumberAfterSwipe(arrayCopy)
  }
})
