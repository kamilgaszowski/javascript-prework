

/**
 * Change player's name 
 * If input is empty the player name is set as "Gracz"
 */

let name,
  newName; 

function yourName() {
  console.log('zamieniam imię gracza');
  newName = document.getElementById('name-input').value;
  name = document.getElementById('your-name').innerHTML = newName;
  if (document.getElementById("name-input").value.length == 0){
      newName = 'Gracz';
      document.getElementById('your-name').innerHTML = newName;
  } 
} 




const buttonPaper = document.getElementById('button-paper'),
    buttonRock = document.getElementById('button-rock'), 
    buttonScissors = document.getElementById('button-scissors'),
    buttonErase = document.getElementById('button-erase'), 
    buttonYourName = document.getElementById('button-name'),
    buttonCongrat = document.getElementById('button-congrat'),
    buttonLoser = document.getElementById('button-loser');
let scorePlayer = 0, 
  scoreComputer = 0;
 



/**
 * Describe this function...
 */
function buttonClicked(buttonName) {
  clearMessages();
  console.log(buttonName + ' został kliknięty');

/**
 * Count number of points for player and computer and display it 
 */

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

  let playerMove, 
    computerMove; 
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
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);

}



buttonCongrat.addEventListener('click', function(){ 
  closeModalCongrat();
 });

buttonLoser.addEventListener('click', function(){ 
  closeModalLoser();
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


function closeModal(){
  document.getElementById('myModal').style.display = 'none';
}
function openModal (){
  window.location.reload(true);
}
function closeModalCongrat (){
  clearMessages();
  document.getElementById('player-result').innerHTML = 0;
  document.getElementById('computer-result').innerHTML = 0;
  document.getElementById('name-input').value = '';
  document.getElementById('modal-congrat').style.display = 'none';
  document.getElementById('messages').innerHTML = newName + ', tym razem nie pozwolę Ci wygrać';   
}




function openModalCongrat(){
  document.getElementById('modal-congrat').style.display = 'block';
  document.getElementById('name-winer').innerHTML = newName + "!";
  document.getElementById('computer-result-winer').innerHTML = document.getElementById('computer-result').innerHTML;
  document.getElementById('player-result-winer').innerHTML = document.getElementById('player-result').innerHTML;
  console.log('Wyświetlam imię gracza');
}

function closeModalLoser (){
  clearMessages();
  document.getElementById('player-result').innerHTML = 0;
  document.getElementById('computer-result').innerHTML = 0;
  document.getElementById('name-input').value = '';
  document.getElementById('modal-loser').style.display = 'none';
  document.getElementById('messages').innerHTML = newName + ', znowu przegrasz :)'; 
}

function openModalLoser(){
  document.getElementById('modal-loser').style.display = 'block';
  document.getElementById('name-loser').innerHTML = newName + "!";
  document.getElementById('computer-result-loser').innerHTML = document.getElementById('computer-result').innerHTML;
  document.getElementById('player-result-loser').innerHTML = document.getElementById('player-result').innerHTML;
  console.log('Wyświetlam imię gracza');
}






