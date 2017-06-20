//console.log ("toto");

document.getElementById("button").addEventListener('click',()=>{
  document.getElementById("receiver").innerHTML = "Bonjour ".concat(document.getElementById("submit").
    value);

  if(document.getElementById("submit").value == ""){
    document.getElementById("receiver").innerHTML = "Bonjour Père Noël ";
}

});

let listOfName= [];
let input = document.getElementById("submit");
button.addEventListener("click", (event)=>{
  listOfName.push(submit.value);
  console.log(listOfName);

  document.getElementById("table").innerHTML = listOfName.map((value)=>`<td>${value}</td>`);
});
