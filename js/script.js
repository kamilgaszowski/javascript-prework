var buttonName, buttonPaper, buttonRock, buttonScissors, buttonTest;


buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');
/**
 * Describe this function...
 */
function buttonClicked(buttonName) {
  clearMessages();
  console.log(buttonName + ' został kliknięty');


var moveId, playerMove, computerMove, computerMove, playerMove, randomNumber, playerInput;

/**
 * Describe this function...
 */
function getMoveName(moveId) {
  console.log('wywołano funkcję moveName z argumentem: ' + moveId);
  if (moveId == 1) {
    return 'kamień';
  } else if (moveId == 2) {
    return 'papier';
  } else if (moveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + moveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

/**
 * Describe this function...
 */
function displayResult(playerMove, computerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + playerMove + ', ' + computerMove);
  if (playerMove == 'papier' && computerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else if (playerMove == 'kamień' && computerMove == 'nożyce') {
    printMessage('Wygrywasz!');
  } else if (playerMove == 'nożyce' && computerMove == 'papier') {
    printMessage('Wygrywasz!');
  } else if (playerMove == computerMove) {
    printMessage('Remis');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
}
playerMove = buttonName;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);
}


buttonRock.addEventListener('click', function(){ 
	buttonClicked('kamień'); 
});
buttonPaper.addEventListener('click', function(){ 
	buttonClicked('papier'); 
});
buttonScissors.addEventListener('click', function(){ 
	buttonClicked('nożyce'); 
});


