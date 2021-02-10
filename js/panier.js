var nombreTotal = 0;
var panier = document.getElementById("panier");
panier.innerHTML = nombreTotal;
var boutons = document.getElementsByTagName("button");
console.log(boutons);
for (let i = 0; i < boutons.length; i++){
	boutons[i].addEventListener("click", function(){
		console.log(nombreTotal)
		nombreTotal ++;
		panier.innerHTML = nombreTotal;
		console.log(nombreTotal)
	});
}
