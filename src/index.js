import './css/style.css'

let array = [
  [2, 2, 4, 4],
  [2, 2, 2, 4],
  [0, 2, 0, 2],
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
  
const isNumber = (item) => typeof item === 'number' ? true : false

const summedElements = (array) => {
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

const boxes = [...document.querySelectorAll('.box')]

const reloadArray = (array) => {
  const iterableVar = array.flat(1)
  boxes.forEach((box, i) => {
    if(iterableVar[i] !== '0'){
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

window.addEventListener('keydown', event => {
  if(event.keyCode===37){
    const rmZeros = removedZeros(arrayCopy)
    const sumEls = summedElements(rmZeros)
    const result = swipeLeft(sumEls)
    arrayCopy = result
    reloadArray(result)
  }
  if(event.keyCode===39){
    const rmZeros = removedZeros(arrayCopy)
    const sumEls = summedElements(rmZeros)
    const result = swipeRight(sumEls)
    arrayCopy = result
    reloadArray(result)
  }
  if(event.keyCode===38){
    const transposed = transpose(arrayCopy)
    const rmZeros = removedZeros(transposed)
    const sumEls = summedElements(rmZeros)
    const result = swipeUp(sumEls)
    arrayCopy = result
    reloadArray(result)
  }
  if(event.keyCode===40){
    const transposed = transpose(arrayCopy)
    const rmZeros = removedZeros(transposed)
    const sumEls = summedElements(rmZeros)
    const result = swipeDown(sumEls)
    arrayCopy = result
    reloadArray(result)
  }
  console.log(arrayCopy)
})


document.body.appendChild(component());