let introduction = prompt('Welcome to Super Roshambo! Click on any of the buttons to choose a character and battle against the computer! The game ends when one player gets a score of 3, good luck and have fun!')
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') { 
      return userInput;
  } else {
    console.log('Error!');
  }
}
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
      case 3:
        return 'fire';
    }
  };
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The game is a tie!';
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') 
        return 'Computer won.';
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'rock') 
      return 'User won.';
}
if (userChoice === 'scissors') {
  if (computerChoice === 'rock') 
    return 'Computer won.';
}
if (userChoice === 'rock') {
  if (computerChoice === 'scissors') 
    return 'User won.';
}
if (userChoice === 'paper') {
  if (computerChoice === 'scissors') 
    return 'Computer won.';
}
if (userChoice === 'scissors') {
  if (computerChoice === 'paper') 
    return 'User won';
}

//Fire Options
if (userChoice === 'paper') {
  if (computerChoice === 'fire') 
    return 'Computer won.';
}
if (userChoice === 'fire') {
  if (computerChoice === 'paper') 
    return 'User Won.';
}

if (userChoice === 'fire') {
  if (computerChoice === 'rock') 
    return 'Computer won.';
}
if (userChoice === 'rock') {
  if (computerChoice === 'fire') 
    return 'User won.';
}

if (userChoice === 'scissors') {
  if (computerChoice === 'fire') 
    return 'Computer won.';
}
if (userChoice === 'scissors') {
  if (computerChoice === 'fire') 
    return 'Computer won.';
}
    }
   

 const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice(); 
    console.log(`You chose: ${userChoice}.`);
    console.log(`Computer chose: ${computerChoice}.`);
    
    console.log(determineWinner(userChoice, computerChoice));
};
playGame();


  console.log(introduction)