



var buttonName, buttonPaper, buttonRock, buttonScissors, buttonErase, buttonYourName, buttonCongrat, buttonLoser;

buttonErase = document.getElementById('button-erase');
buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');
buttonYourName = document.getElementById('button-name');
buttonCongrat = document.getElementById('button-congrat');
buttonLoser = document.getElementById('button-loser');

/**
 * Describe this function...
 */
function buttonClicked(buttonName) {
  clearMessages();
  console.log(buttonName + ' został kliknięty');


var moveId, playerMove, computerMove, computerMove, playerMove, randomNumber, playerInput, scorePlayer, scoreComputer, addScoreComputer, addScorePlayer;


  

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

scorePlayer = 0;
function addOneScorePlayer(addScorePlayer) {
  addScorePlayer = ++ scorePlayer;
  document.getElementById('player-result').innerHTML = addScorePlayer;
  console.log('dodałem ' + addScorePlayer +'pkt dla mnie');
  if (addScorePlayer == 3){
    openModalCongrat();
  }
  else if (addScorePlayer == 2) {
    printMessage('Zdobyłeś 1 pkt!');
  }
  else if (addScorePlayer == 1) {
    printMessage('Zdobyłeś 1 pkt!');
  }
}

scoreComputer = 0;
function addOneScoreComputer(addScoreComputer) {
  addScoreComputer = ++ scoreComputer;
  document.getElementById('computer-result').innerHTML = addScoreComputer;
  console.log('dodałem ' + addScoreComputer +'pkt dla computera');
  if (addScoreComputer == 3){
    openModalLoser();
  }
   else if (addScoreComputer == 2) {
    printMessage('Zdobyłem 1 pkt!');
  }
  else if (addScoreComputer == 1) {
    printMessage('Zdobyłem 1 pkt!');
  }

}

function displayResult(playerMove, computerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + playerMove + ', ' + computerMove);
  if (computerMove == 'kamień'){
    document.getElementById("icon-rock-comp").style.display = 'block';
  } else if (computerMove == 'nożyce') {
    document.getElementById("icon-scissors-comp").style.display = 'block';
  } else  {
    document.getElementById("icon-paper-comp").style.display = 'block';
  }

if (playerMove == 'kamień'){
    document.getElementById("icon-rock-usr").style.display = 'block';
  } else if (playerMove == 'nożyce') {
    document.getElementById("icon-scissors-usr").style.display = 'block';
  } else  {
    document.getElementById("icon-paper-usr").style.display = "block";
  }



  if (playerMove == 'papier' && computerMove == 'kamień') {
    addOneScorePlayer();
    console.log('mam ' + scorePlayer +'pkt');
  } else if (playerMove == 'kamień' && computerMove == 'nożyce') {
    addOneScorePlayer();
    console.log('mam ' + scorePlayer + 'pkt');
  } else if (playerMove == 'nożyce' && computerMove == 'papier') {
    addOneScorePlayer();
    console.log('mam ' + scorePlayer + 'pkt');
  } else if (playerMove == computerMove) {
    printMessage('Remis!');
  } else {
   addOneScoreComputer();
   console.log('komputer ma ' + scoreComputer + 'pkt'); 
  }
  printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);

 
  }

scorePlayer = document.getElementById('player-result').innerHTML;
scoreComputer = document.getElementById('computer-result').innerHTML;

playerMove = buttonName;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);



}



buttonCongrat.addEventListener('click', function(){ 
  closeModalCongrat();
  openModal();
});

buttonLoser.addEventListener('click', function(){ 
  closeModalLoser();
  openModal();
});

buttonYourName.addEventListener('click', function(){ 
  yourName();
  closeModal();
});

buttonErase.addEventListener('click', function(){ 
  clearMessages();
  openModal();
});
buttonRock.addEventListener('click', function(){ 
  buttonClicked('kamień'); 

});
buttonPaper.addEventListener('click', function(){ 
  buttonClicked('papier'); 

});
buttonScissors.addEventListener('click', function(){ 
  buttonClicked('nożyce'); 
 
});