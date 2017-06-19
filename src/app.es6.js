//console.log ("toto");

document.getElementById("button").addEventListener('click',()=>{
	document.getElementById("receiver").innerHTML = "Bonjour ".concat(document.getElementById("Submit").
		value);

	if(document.getElementById("Submit").value == ""){
		document.getElementById("receiver").innerHTML = "Bonjour Père Noël ";
	}
});