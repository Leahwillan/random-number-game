let num = 0;

function generateRandomNumber() {
  let randomNum = Math.floor(Math.random() * 1000)
  return(randomNum)
}

function differenceFromAnswer(guess,answer) {
  if (guess > answer){
    console.log("Too high")
  } else if (guess < answer) {
    console.log("Too low")
  } else {
    console.log("Correct!")
  }
}

generateRandomNumber()