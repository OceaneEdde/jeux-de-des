let currentPlayer = 1;
let currentScore = 0;

function startGame() {
    currentScore = 0;
    document.getElementById('score1').textContent = '0';
    document.getElementById('score2').textContent = '0';
    currentPlayer = 1;
    alert(`Début de la partie ! Joueur ${currentPlayer}, c'est à votre tour. Cliquez sur "Lancer les Dés" pour jouer.`);
  }

  function startNewGame() {
    startGame();
  }

  function rollDice() {
    const diceValue1 = getRandomNumber();
    const diceValue2 = getRandomNumber();
  
    document.getElementById('dice1').textContent = diceValue1;
    document.getElementById('dice2').textContent = diceValue2;
  
    updateScore(diceValue1, diceValue2);
  }

  function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function updateScore(diceValue1, diceValue2) {
    const diceSum = diceValue1 + diceValue2;
  
    if (diceSum === 2) {
      currentScore = 0;
      alert(`Double 1 ! Joueur ${currentPlayer} a perdu tous ses points. C'est au tour de l'autre joueur.`);
      switchPlayer();
    } else {
      currentScore += diceSum;
      document.getElementById('score' + currentPlayer).textContent = currentScore;
  
      if (diceValue1 === diceValue2) {
        alert(`Double ${diceValue1} ! Joueur ${currentPlayer} peut rejouer.`);
      } else {
        checkWin();
        switchPlayer();
      }
    }
  }

  function checkWin() {
    if (currentScore >= 421) {
      alert(`Félicitations ! Joueur ${currentPlayer} a gagné avec un score de ${currentScore}.`);
      startGame();
    }
  }
  
  function switchPlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    alert(`Tour de Joueur ${currentPlayer}. Cliquez sur "Lancer les Dés" pour jouer.`);
  }
  
  startGame();