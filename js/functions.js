function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}






var name, newName;

function yourName() {
  console.log('zamieniam imię gracza');
  newName = document.getElementById('name-input').value;
  name = document.getElementById('your-name').innerHTML = newName;
  
	if (document.getElementById("name-input").value.length == 0){
	    openModal();
	} 

} 



function clearMessages(){

	document.getElementById('icon-paper-comp').style.display = 'none';
	document.getElementById('icon-scissors-comp').style.display = 'none';
	document.getElementById('icon-rock-comp').style.display = 'none';
	document.getElementById('icon-paper-usr').style.display = 'none';
	document.getElementById('icon-scissors-usr').style.display = 'none';
	document.getElementById('icon-rock-usr').style.display = 'none';
	document.getElementById('messages').innerHTML = '';	

}

function closeModal(){
  document.getElementById('myModal').style.display = 'none';
}

function openModal (){
	window.location.reload(true);
}

function closeModalCongrat (){
	document.getElementById('player-result').innerHTML = 0;
	document.getElementById('computer-result').innerHTML = 0;
	document.getElementById('name-input').value = '';
	document.getElementById('modal-congrat').style.display = 'none';
	document.getElementById('messages').innerHTML = newName + ', tym razem nie pozwolę Ci wygrać';	
	
}

function openModalCongrat(){
  	document.getElementById('modal-congrat').style.display = 'block';
  	document.getElementById('name-winer').innerHTML = newName + "!";
  console.log('Wyświetlam imię gracza');
  	
}

function closeModalLoser (){
	document.getElementById('player-result').innerHTML = 0;
	document.getElementById('computer-result').innerHTML = 0;
	document.getElementById('name-input').value = '';
	document.getElementById('modal-loser').style.display = 'none';
	document.getElementById('messages').innerHTML = newName + ', znowu przegrasz :)';	
	
}

function openModalLoser(){
  document.getElementById('modal-loser').style.display = 'block';
  document.getElementById('name-loser').innerHTML = newName + "!";
  console.log('Wyświetlam imię gracza');
}
