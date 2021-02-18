/*let stockage = localStorage;
for(let i=0; i<localStorage.length; i++){
	let key = localStorage.key(i);
	let value = parseInt(localStorage.getItem(key));

}*/

let request = new XMLHttpRequest();
request.onreadystatechange = function(){
	if(this.readyState = XMLHttpRequest.DONE && this.readyState == 4){
  		if (this.status == 200){
				localStorage.setItem("total_panier", 0);
				let myTotalStorage = parseInt(JSON.parse(localStorage.getItem("total_panier")));
	    	let response = JSON.parse(this.responseText);
			//document.getElementById("row").textContent = "";
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

				for(let e=0; e<localStorage.length; e++){;
					if(localStorage.key(e) == response[i]._id){
						myTotalStorage += response[i].price/100 * parseInt(localStorage.getItem(localStorage.key(e)));
						localStorage.setItem("total_panier", myTotalStorage);
					}
				}
				document.getElementById("prixTotal").textContent = localStorage.getItem("total_panier") + "€";
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
		for(let i=0; i<localStorage.length; i++){
			let key = localStorage.key(i);
			let value = parseInt(localStorage.getItem(key));
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
				colonneDescriptif.innerHTML = this.name + "<br/>"+ this.description;

				// création d'une colonne de la ligne principale contenant le prix du produit
				let colonnePrix = document.createElement("td");
				colonnePrix.textContent = parseInt(this.price)/100*value;

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