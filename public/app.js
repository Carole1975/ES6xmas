"use strict";

//console.log ("toto");

document.getElementById("button").addEventListener('click', function () {
	document.getElementById("receiver").innerHTML = "Bonjour ".concat(document.getElementById("Submit").value);

	if (document.getElementById("Submit").value == "") {
		document.getElementById("receiver").innerHTML = "Bonjour Père Noël ";
	}
});
