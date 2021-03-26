class Card {
	constructor(colors, _id, name, price, imageUrl, description){
		this.colors = colors; 
		this._id = _id;
		this.name = name;
		this.price = price;
		this.imageUrl = imageUrl;
		this.description = description;
	}
	generateCardIndex(){
		let row = document.getElementById("row");

		//création du lien
		let lien = document.createElement("a");
		lien.setAttribute("class", "stretched-link col-10 col-sm-4 m-5");
		//Pour ajouter le "?" dans l'URL
		lien.setAttribute("href", "produit.html?id=" + this._id);
		row.appendChild(lien);

		// création de la première div col
	   	let divCol = document.createElement("div");
		divCol.setAttribute("class", "col");
		lien.appendChild(divCol);

		// création de la deuxième div col
		let divCard = document.createElement("div");
		divCard.classList.add("card");
		divCard.setAttribute("id", "peluche." + this.name);
		divCol.appendChild(divCard);

		// création de l'image de la carte, enfant du second col
		let img = document.createElement("img");
		img.setAttribute("class", "card-img-top");
		img.setAttribute("src", this.imageUrl);
		divCard.appendChild(img);

		// création de la dernière div de la carte
		let divCardBody = document.createElement("div");
		divCardBody.classList.add("card-body");
		divCard.appendChild(divCardBody);

		// création du titre de la carte
		let h4 = document.createElement("h4");
		h4.setAttribute("class", "card-title");
		h4.textContent = this.name;
		divCardBody.appendChild(h4);

		// création du prix de la carte
		let p = document.createElement("p");
		p.setAttribute("class", "card-text");
		p.textContent = this.price/100 + " €";
		divCardBody.appendChild(p);
	}
	generateCardProduit(){
		let row = document.getElementById("row");

		// création de la première div col
	    let divCol = document.createElement("div");
		divCol.setAttribute("class", "col-sm-6 col m-5 cardDimensions");
		row.appendChild(divCol);

		// création de la deuxième div col
		let divCard = document.createElement("div");
		divCard.classList.add("card");
		divCard.setAttribute("id", "peluche." + this.name);
		divCol.appendChild(divCard);

		// création de l'image de la carte, enfant du second col
		let img = document.createElement("img");
		img.setAttribute("class", "card-img-top");
		img.setAttribute("src", this.imageUrl);
		divCard.appendChild(img);

		// création de la dernière div de la carte
		let divCardBody = document.createElement("div");
		divCardBody.classList.add("card-body");
		divCard.appendChild(divCardBody);

		// création du titre de la carte
		let h2 = document.createElement("h2");
		h2.setAttribute("class", "card-title");
		h2.textContent = this.name;
		divCardBody.appendChild(h2);

		// création des choix de couleur
		let choixCouleurs = document.createElement("select");
		let label = document.createElement("label");
		label.textContent = "Customiser ";
		if(this.colors.length > 1){
			for(let i=0; i<this.colors.length; i++){
				let option = document.createElement("option");
				option.textContent = this.colors[i];
				choixCouleurs.appendChild(option);
			}
		} else {
			let option = document.createElement("option");
			option.textContent = this.colors;
			choixCouleurs.appendChild(option);
		}
		label.appendChild(choixCouleurs);
		divCardBody.appendChild(label);

		// création du prix de la carte
		let p = document.createElement("p");
		p.setAttribute("class", "card-text");
		p.innerHTML = this.price/100 + " €" + "<br/>" + this.description + "<br/><br/><button class='" + this._id + " supprimerProduit col-6 btn btn-light'>Supprimer du panier</button><button class='" + this._id + " ajouterProduit col-6 btn btn-primary'>Ajouter au panier</button>" ;
		divCardBody.appendChild(p);		
	}
	gestionDuPanier(){
		let gestionDuPanier = new GestionDuPanier;
		let boutonsAjouter = document.getElementsByClassName("ajouterProduit");
		for(let i=0; i < boutonsAjouter.length; i++){
			boutonsAjouter[i].addEventListener("click", () => {
				gestionDuPanier.ajoutDeProduits(boutonsAjouter[i].classList[0]);
				gestionDuPanier.iconePanier();
			})
		};
		let boutonsSupprimer = document.getElementsByClassName("supprimerProduit");
		for(let x=0; x< boutonsSupprimer.length; x++){
			boutonsSupprimer[x].addEventListener("click", () => {
				gestionDuPanier.suppressionDeProduits(boutonsSupprimer[x].classList[0]);
				gestionDuPanier.iconePanier();
			})
		};
	}
}