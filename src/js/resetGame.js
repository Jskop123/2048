const resetGame = array => {
  let copy = [...array]
  const reset = copy.map(item => {
    for(let i=0; i<4; i++){
      item[i] = 0
    }
  })
  return reset
}

export default resetGame