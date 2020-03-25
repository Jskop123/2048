const winGame = array => {
  for(let i=0; i<4; i++){
    for(let j=0; j<4; j++){
      if(array[i][j]===2048) {
        //alert('You win')
        return true
      }
    }
  }
  return false
}

export default winGame
