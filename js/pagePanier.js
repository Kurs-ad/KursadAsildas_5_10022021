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
				console.log(response[i]._id)				
			}
			let boutonAjouter = document.getElementsByClassName("ajouterProduit");
			for(let e=0; e < boutonAjouter.length; e++){
				let id = boutonAjouter[e].classList[0];
				boutonAjouter[e].addEventListener("click", function(){
					let quantity = parseInt(document.getElementsByClassName("quantity")[e].textContent)
					ajoutDeProduits(id);
					quantity++;
					document.getElementsByClassName("quantity")[e].textContent = quantity;
					produitsDansLePanier();

					let valeurProduit = parseInt(document.getElementsByClassName("prixProduit")[e].textContent);
					let newQuantity = valeurProduit * quantity;
					document.getElementsByClassName("prixDuProduit")[e].textContent = newQuantity;

					let colonnePrix = document.getElementsByClassName("prixDuProduit");
					let prixTotal = 0;
					for(let y=0; y < colonnePrix.length; y++){
						let valeurColonnePrix = parseInt(colonnePrix[y].textContent);
						prixTotal += valeurColonnePrix;
						console.log(prixTotal)
						document.getElementById("prixTotal").textContent = prixTotal;
					}
				})
			};
			let boutonSupprimer = document.getElementsByClassName("supprimerProduit");
			for(let x=0; x < boutonAjouter.length; x++){
				let id = boutonSupprimer[x].classList[0];
				boutonSupprimer[x].addEventListener("click", function(){
					let quantity = parseInt(document.getElementsByClassName("quantity")[x].textContent)
					suppressionDeProduits(id);
					quantity--;
					document.getElementsByClassName("quantity")[x].textContent = quantity;
					produitsDansLePanier();

					let valeurProduit = parseInt(document.getElementsByClassName("prixProduit")[x].textContent);
					let newQuantity = valeurProduit * quantity;
					document.getElementsByClassName("prixDuProduit")[x].textContent = newQuantity;

					let colonnePrix = document.getElementsByClassName("prixDuProduit");
					let prixTotal = 0;
					for(let y=0; y < colonnePrix.length; y++){
						let valeurColonnePrix = parseInt(colonnePrix[y].textContent);
						prixTotal += valeurColonnePrix;
						console.log(prixTotal)
						document.getElementById("prixTotal").textContent = prixTotal;
					}
				})
			};
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
		if(localStorage.getItem("peluchesDansLePanier")){
			let panierElts = JSON.parse(localStorage.getItem("peluchesDansLePanier"));
			for(let i=0; i<panierElts.length; i++){
				let key = Object.keys(panierElts[i]);
				let value = parseInt(Object.values(panierElts[i]));
				let prixTotal = document.getElementById("prixTotal");
				if(key == this._id){
					let monTableau = document.getElementById("tbody");
					// création de la ligne contenant toutes les informations
					let lignePrincipale = document.createElement("tr");

					// création d'une colonne de la ligne principale contenant une image d'un produit du panier
					let colonneImage = document.createElement("td");
					colonneImage.innerHTML = "<img style='width:200px; height:200px; object-fit:cover' src='" + this.imageUrl + "'/>";

					// création d'une colonne de la ligne principale contenant la description du produit
					let colonneDescriptif = document.createElement("td");
					
					let boutonAjouter = document.createElement("button");
					boutonAjouter.setAttribute("class", this._id + " ajouterProduit btn btn-primary");
					boutonAjouter.textContent = "+";
					
					let boutonSupprimer = document.createElement("button");
					boutonSupprimer.setAttribute("class", this._id + ' supprimerProduit btn btn-light');
					boutonSupprimer.textContent = "-";

					let prixProduit = document.createElement("p");
					prixProduit.setAttribute("class", "prixProduit");
					prixProduit.setAttribute("style", "display: none");
					prixProduit.textContent = this.price/100;
					
					let quantity = document.createElement("span");
					quantity.setAttribute("class", "quantity");
					quantity.textContent = " " + value + " ";
					console.log(key)
					
					colonneDescriptif.innerHTML = this.name + "<br/><br/>"+ this.description + "<br/><br/>" + "Quantité : ";
					colonneDescriptif.appendChild(boutonSupprimer);
					colonneDescriptif.appendChild(quantity);
					colonneDescriptif.appendChild(boutonAjouter);
					colonneDescriptif.appendChild(prixProduit);

					// création d'une colonne de la ligne principale contenant le prix du produit
					let colonnePrix = document.createElement("td");
					colonnePrix.setAttribute("class", "prixDuProduit");
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
};