function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
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
	document.getElementById('name-input').value = '';
	document.getElementById('myModal').style.display = 'block';
	document.getElementById('your-name').innerHTML = 'Gracz 1';
}
