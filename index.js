let num = 0;

function generateRandomNumber() {
  let answer = Math.floor(Math.random() * 1000)
  return(answer)
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

function makeAGuess() {
  let guess = prompt("guess a number between 0-1000")
  answer = generateRandomNumber()
  return (guess,answer)
}