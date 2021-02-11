/*let nombreTotal = 0;
let panier = document.getElementById("panier");
panier.innerHTML = nombreTotal;
let boutons = document.getElementsByTagName("button");
console.log(boutons);
for (let i = 0; i < boutons.length; i++){
	boutons[i].addEventListener("click", function(){
		console.log(nombreTotal)
		nombreTotal ++;
		panier.innerHTML = nombreTotal;
		console.log(nombreTotal)
		nombreDeProduits();
	});
}*/

let monPanier = document.getElementById("monPanier");

function produitsDansLePanier(){
	let produitsDansLocalStorage = localStorage.getItem("peluche");
	console.log(produitsDansLocalStorage);
	if (produitsDansLocalStorage){
		monPanier.innerHTML = produitsDansLocalStorage;
	}
}

document.getElementById("boutonAjouter").addEventListener("click", function(){
	ajoutDeProduits();
})

function ajoutDeProduits(){
	let produitsDansLocalStorage = localStorage.getItem(urlId);
	produitsDansLocalStorage = parseInt(produitsDansLocalStorage);
	if(produitsDansLocalStorage){
		localStorage.setItem(urlId, produitsDansLocalStorage + 1);
		produitsDansLocalStorage = localStorage.getItem(urlId);
		monPanier.innerHTML = produitsDansLocalStorage;
	} else {
		produitsDansLocalStorage = localStorage.setItem(urlId, 1);
		produitsDansLocalStorage = localStorage.getItem(urlId);
		monPanier.innerHTML = produitsDansLocalStorage;
	}
};

document.getElementById("boutonSupprimer").addEventListener("click", function(){
	suppressionDeProduits();
});

function suppressionDeProduits(){
	let produitsDansLocalStorage = localStorage.getItem(urlId);
	produitsDansLocalStorage = parseInt(produitsDansLocalStorage);
	if(produitsDansLocalStorage > 1){
		localStorage.setItem(urlId, produitsDansLocalStorage - 1);
		produitsDansLocalStorage = localStorage.getItem(urlId);
		monPanier.innerHTML = produitsDansLocalStorage;
	} else if(produitsDansLocalStorage = 1){
			localStorage.setItem(urlId, produitsDansLocalStorage - 1);
			localStorage.removeItem(urlId)
			monPanier.innerHTML = "";
	}
};