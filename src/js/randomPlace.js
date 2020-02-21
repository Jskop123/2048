const cordinate = () => {
  const random1 = Math.round(Math.random()*3)
  let random2 = Math.round(Math.random()*3)
  if(random1 === random2) random2 = Math.abs(random2-1)
  const cordinates = {
    x: random1,
    y: random2
  }
  return cordinates
}

const randomPlace = () => {
  const firstCordinate = cordinate()
  const secondCordinate = cordinate()
  if(JSON.stringify(firstCordinate) === JSON.stringify(secondCordinate)){
    secondCordinate.x = Math.abs(secondCordinate.x - 1)  
  }
  const cordinates = [firstCordinate, secondCordinate] 
  return cordinates
}

export default randomPlace