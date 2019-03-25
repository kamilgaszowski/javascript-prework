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
	    newName = 'Gracz';
	    document.getElementById('your-name').innerHTML = newName;
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

