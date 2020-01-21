import './css/style.css'
import properArray from './js/mechanism'

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
  console.log(array)
  const iterableVar = array.join(',')
  boxes.forEach((box, i) => {
    if(iterableVar[i*2] !== '0'){
      box.innerHTML = iterableVar[i*2]
    }
    else{
      box.innerHTML = ''
    }
  })
}

reloadArray(arrayCopy)


const swipeLeft = () => {
  let array = properArray(arrayCopy)
  const swipeLeftArray = array.map(element => {
    while (element.length < 4) {
      element.push(0)
    }
    return element
  })
  return swipeLeftArray
}


const swipeRight = () => {
  const array = properArray(arrayCopy)
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
  const transposedArray = transpose(array)
  const properArr = properArray(transposedArray)
  const swipeUpArray = properArr.map(element => {
    while (element.length < 4) {
      element.push(0)
    }
    return element
  })
  return transpose(swipeUpArray)
}

const swipeDown = (array) => {
  const transposedArray = transpose(array)
  const properArr = properArray(transposedArray)
  const swipeDownArray = properArr.map(element => {
    while (element.length < 4) {
      element.unshift(0)
    }
    return element
  })
  return transpose(swipeDownArray)
}

window.addEventListener('keydown', event => {
  if(event.keyCode===37){
    const newArray = swipeLeft()
    //console.log(newArray)
    array = newArray
    reloadArray(newArray)
  }
  if(event.keyCode===39){
    const newArray = swipeRight()
    //console.log(newArray)
    array = newArray
    reloadArray(newArray)
  }
  if(event.keyCode===38){
    const newArray = swipeUp()
    //console.log(newArray)
    array = newArray
    reloadArray(newArray)
  }
  if(event.keyCode===40){
    const newArray = swipeDown()
    //console.log(newArray)
    array = newArray
    reloadArray(newArray)
  }
  console.log(array)
})


document.body.appendChild(component());