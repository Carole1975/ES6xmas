"use strict";

//console.log ("toto");

document.getElementById("button").addEventListener('click', function () {
  document.getElementById("receiver").innerHTML = "Bonjour ".concat(document.getElementById("submit").value);

  if (document.getElementById("submit").value == "") {
    document.getElementById("receiver").innerHTML = "Bonjour Père Noël ";
  }
});

var listOfName = [];
var input = document.getElementById("submit");
button.addEventListener("click", function (event) {
  listOfName.push(submit.value);
  console.log(listOfName);

  document.getElementById("table").innerHTML = listOfName.map(function (value) {
    return "<td>" + value + "</td>";
  });
});
