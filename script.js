
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') { 
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
      if (computerChoice === 'paper') {
        return 'Computer won.';
        } else {
          return 'You won!';
        }
  }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer won.';
        } else {
          return 'You won!';
        }
    } 
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer won.';
        } else {
          return 'You won!';
        }
    }
    
    if (userChoice === 'fire') {
        if (computerChoice === 'rock') {
          return 'Computer won.';
          } else {
            return 'You won!';
          }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'fire') {
          return 'Computer won.';
          } else {
            return 'You won!';
          }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'fire') {
          return 'Computer won.';
          } else {
            return 'You won!';
          }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'snake') {
        return 'Computer won.';
        } else {
          return 'You won!';
        }
  }
  if (userChoice === 'snake') {
    if (computerChoice === 'scissors') {
      return 'Computer won.';
      } else {
        return 'You won!';
      }
}
if (userChoice === 'snake') {
  if (computerChoice === 'rock') {
    return 'Computer won.';
    } else {
      return 'You won!';
    }
}
if (userChoice === 'snake') {
  if (computerChoice === 'fire') {
    return 'Computer won.';
    } else {
      return 'You won!';
    }
}
if (userChoice === 'human') {
  if (computerChoice === 'fire') {
    return 'Computer won.';
    } else {
      return 'You won!';
    }
}
if (userChoice === 'human') {
  if (computerChoice === 'rock') {
    return 'Computer won.';
    } else {
      return 'You won!';
    }
}
if (userChoice === 'human') {
  if (computerChoice === 'scissors') {
    return 'Computer won.';
    } else {
      return 'You won!';
    }
}
if (userChoice === 'paper') {
  if (computerChoice === 'human') {
    return 'Computer won.';
    } else {
      return 'You won!';
    }
}
    }
   

  function playGame(userChoice){
   
      const computerChoice = getComputerChoice(); 
      console.log(`You chose: ${userChoice}.`);
      console.log(`Computer chose: ${computerChoice}.`);
      
      console.log(determineWinner(userChoice, computerChoice));
  };


