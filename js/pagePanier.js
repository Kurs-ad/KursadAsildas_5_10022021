let request = new XMLHttpRequest();
request.onreadystatechange = function(){
	if(this.readyState = XMLHttpRequest.DONE && this.readyState == 4){
  		if (this.status == 200){
	    	let response = JSON.parse(this.responseText);
			let panierElts = JSON.parse(localStorage.getItem("peluchesDansLePanier"));
	    	for(let i=0; i < response.length; i++){
				let tableau = new ElementsDuPanier(
					response[i].colors,
					response[i]._id,
					response[i].name,
					response[i].price,
					response[i].imageUrl,
					response[i].description,
					);
				tableau.tableauPanier();
				/*for(let e=0; e<localStorage.length; e++){
					if(localStorage.key(e) == response[i]._id){
						myTotalStorage += response[i].price/100 * parseInt(localStorage.getItem(localStorage.key(e)));
						localStorage.setItem("total_panier", myTotalStorage);
					}
				}
				document.getElementById("prixTotal").textContent = localStorage.getItem("total_panier") + "€";*/
				
				/*let boutonAjouter = document.getElementsByClassName("ajouterProduit");
				for(let i=0; i < boutonAjouter.length; i++){
					boutonAjouter[i].addEventListener("click", function(){
						ajoutDeProduits();
					})
				};
				let boutonSupprimer = document.getElementsByClassName("supprimerProduit");
				for(let i=0; i < boutonAjouter.length; i++){
					boutonSupprimer[i].addEventListener("click", function(){
						suppressionDeProduits();
					})
				};*/
			}
		} else {
    		console.error("blabla");
    	}
	}
}
request.open("GET", "http://localhost:3000/api/teddies");
request.send();

class ElementsDuPanier {
	constructor(colors, _id, name, price, imageUrl, description){
		this.colors = colors; 
		this._id = _id;
		this.name = name;
		this.price = price;
		this.imageUrl = imageUrl;
		this.description = description;
	}
	tableauPanier(){
		let panierElts = JSON.parse(localStorage.getItem("peluchesDansLePanier"));
		for(let i=0; i<panierElts.length; i++){
			let key = Object.keys(panierElts[i]);
			let value = parseInt(Object.values(panierElts[i]));
			let prixTotal = document.getElementById("prixTotal");
			if(key == this._id){
				let monTableau = document.getElementById("tableau");
				// création de la ligne contenant toutes les informations
				let lignePrincipale = document.createElement("tr");

				// création d'une colonne de la ligne principale contenant une image d'un produit du panier
				let colonneImage = document.createElement("td");
				colonneImage.innerHTML = "<img style='width:200px; height:200px; object-fit:cover' src='" + this.imageUrl + "'/>";

				// création d'une colonne de la ligne principale contenant la description du produit
				let colonneDescriptif = document.createElement("td");
				/*let boutonAjouter = document.createElement("button");
				boutonAjouter.setAttribute("class", "ajouterProduit btn btn-primary");
				boutonAjouter.textContent = "+";
				let boutonSupprimer = document.createElement("button");
				boutonSupprimer.setAttribute("class", 'supprimerProduit btn btn-light');
				boutonSupprimer.textContent = "-";
				let quantity = document.createElement("span");
				quantity.setAttribute("class", "quantity");
				for(let e=0; e < localStorage.getItem("peluchesDansLePanier").length; e++){
					let keys = Object.keys(localStorage.getItem("peluchesDansLePanier")[e]);
					if(keys == this._id){

					}
				}
				quantity.textContent = Object.values(JSON.parse(localStorage.getItem("peluchesDansLePanier"))[this._id]);*/
				colonneDescriptif.innerHTML = this.name + "<br/>"+ this.description;

				// création d'une colonne de la ligne principale contenant le prix du produit
				let colonnePrix = document.createElement("td");
				colonnePrix.textContent = parseInt(this.price)/100*value;

				// Mise à jour du prix total
				let prixTotal = parseInt(document.getElementById("prixTotal").textContent);
				prixTotal += parseInt(this.price)/100*value;
				document.getElementById("prixTotal").textContent = prixTotal;

				// Insertion de ces éléments dans le DOM
				lignePrincipale.appendChild(colonneImage);
				lignePrincipale.appendChild(colonneDescriptif);
				lignePrincipale.appendChild(colonnePrix);
				monTableau.appendChild(lignePrincipale);
			}
		}
	}
}

//Pour afficher ce qu'il y a dans le panier

/*let monPanier = document.getElementById("monPanier");

function produitsDansLePanier(){
	let valueSum = 0;
	for(let i=0; i < localStorage.length; i++){
		let keyValue = localStorage.getItem(localStorage.key(i));
		valueSum += parseInt(keyValue);
		console.log(valueSum);
		if (valueSum > 0){
			monPanier.innerHTML = valueSum;
		} else {
			monPanier.innerHTML = ""
		}
	}
};*/