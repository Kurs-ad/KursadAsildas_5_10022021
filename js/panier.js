let nombreTotal = 0;
let panier = document.getElementById("panier");
panier.innerHTML = nombreTotal;
let boutons = document.getElementsByTagName("button");
console.log(boutons);
for (let i = 0; i < boutons.length; i++){
	boutons[i].addEventListener("click", function(){
		/*console.log(nombreTotal)
		nombreTotal ++;
		panier.innerHTML = nombreTotal;
		console.log(nombreTotal)*/
		nombreDeProduits();
	});
}
document.getElementById("boutonAjouter").addEventListener("click", function(){
	nombreDeProduits();
})

let monPanier = document.getElementById("monPanier");

function produitsDansLePanier(){
	let produitsDansLocalStorage = localStorage.getItem("peluche");
	if (produitsDansLocalStorage){
		monPanier.innerHTML = produitsDansLocalStorage;
		console.log("ok")
	}
}

function nombreDeProduits(){
	let produitsDansLocalStorage = localStorage.getItem("peluche");
	produitsDansLocalStorage = parseInt(produitsDansLocalStorage);
	if(produitsDansLocalStorage){
		localStorage.setItem("peluche", produitsDansLocalStorage + 1);
		monPanier.innerHTML = produitsDansLocalStorage;
	} else {
		localStorage.setItem("peluche", 1);
		monPanier.innerHTML = produitsDansLocalStorage;
	}
};

produitsDansLePanier();