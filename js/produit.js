let pointDinterrogation = window.location.href.indexOf("?");
let parametresURL = window.location.href.substr(pointDinterrogation + 1);
parametresURL = parametresURL.replace(/%20/g, " ");
console.log(parametresURL);

let request = new XMLHttpRequest();
request.onreadystatechange = function(){
	if(this.readyState == XMLHttpRequest.DONE && this.readyState == 4){
		if(this.status ==200){
			let response = JSON.parse(this.responseText);
			for(i=0; i < response.length; i++){
				let descriptifPeluche = response[i].name;
				if(descriptifPeluche == parametresURL){
					let card = new Card(
					response[i].colors,
					response[i]._id,
					response[i].name,
					response[i].price,
					response[i].imageUrl,
					response[i].description,
					);
					card.generateCard();
				}
			}
		} else{
			console.error("erreur");
		}
	}
};
request.open("GET", "http://localhost:3000/api/teddies");
request.send();

class Card {
	constructor(colors, _id, name, price, imageUrl, description){
		this.colors = colors; 
		this._id = _id;
		this.name = name;
		this.price = price;
		this.imageUrl = imageUrl;
		this.description = description;
	}
	generateCard(response){
		console.log("go");
			let row = document.getElementById("row");

			// création de la première div col
	    	let divCol = document.createElement("div");
			divCol.classList.add("col-6");
			row.appendChild(divCol);

			// création de la deuxième div col
			let divCard = document.createElement("div");
			divCard.classList.add("card");
			divCard.setAttribute("id", "peluche." + this.name);
			divCol.appendChild(divCard);

			// création de l'image de la carte, enfant du second col
			let img = document.createElement("img");
			img.setAttribute("class", "card-mg-top");
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

			// création du prix de la carte
			let p = document.createElement("p");
			p.setAttribute("class", "card-text");
			p.innerHTML = this.price + " €" + "<br/>" + this.description + "<br/><br/><button id='boutonSupprimer' class='col-6 btn btn-light'>Supprimer du panier</button><button id='boutonAjouter' class='col-6 btn btn-primary'>Ajouter au panier</button>" ;
			divCardBody.appendChild(p);
	}
}