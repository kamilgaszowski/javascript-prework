function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('icon-paper').style.color = '#ecf0f1';
	document.getElementById('icon-scissors').style.color = '#ecf0f1';
	document.getElementById('icon-rock').style.color = '#ecf0f1';
	document.getElementById('messages').innerHTML = '';
	
}

