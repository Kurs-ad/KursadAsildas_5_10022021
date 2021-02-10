let request = new XMLHttpRequest();
request.onreadystatechange = function(){
	if(this.readyState = XMLHttpRequest.DONE && this.readyState == 4){
  		if (this.status == 200){
	    	let response = JSON.parse(this.responseText);
			//document.getElementById("row").textContent = ""; 
	    	//createCard(response);
	    	for(let i=0; i < response.length; i++){
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
		} else {
    		console.error("blabla");
    	}
	}
}
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

			//création du lien
			let lien = document.createElement("a");
			lien.setAttribute("class", "stretched-link col-4 m-5");
			lien.setAttribute("href", "produit.html" + "?" + this.name);
			row.appendChild(lien);
			// création de la première div col
	    	let divCol = document.createElement("div");
			divCol.classList.add("col");
			lien	.appendChild(divCol);

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
			p.textContent = this.price + " €";
			divCardBody.appendChild(p);
	}
}
