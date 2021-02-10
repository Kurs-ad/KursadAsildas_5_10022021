var request = new XMLHttpRequest();
request.onreadystatechange = function(){
  if(this.readyState = XMLHttpRequest.DONE && this.status == 200){
    var response = JSON.parse(this.responseText);
	//document.getElementById("row").innerHTML = response[0].colors[0];
    createCard();
  }
}
request.open("GET", "http://localhost:3000/api/teddies");
request.send();

function createCard(){
	for(i = 0; i < response.length; i++){
		var row = document.getElementById("row");

		// création de la première div col
    	var divCol = document.createElement("div");
		divCol.classList.add("col");
		row.appendChild(divCol);

		// création de la deuxième div col
		var divCard = document.createElement("div");
		divCard.classList.add("card");
		divCol.appendChild(divCard);

		// création de l'image de la carte, enfant du second col
		var img = document.createElement("img");
		img.setAttribute("class", "card-mg-top");
		img.setAttribute("src", response[i].imageUrl);
		divCard.appendChild(img);

		// création de la dernière div de la carte
		var divCardBody = document.createElement("div");
		divCardBody.classList.add("card-body");
		divCard.appendChild(divCardBody);

		// création du titre de la carte
		var h2 = document.createElement("h2");
		h2.setAttribute("class", "card-title");
		h2.textContent = response[i].name;
		divCardBody.appendChild(h2);

		// création du prix de la carte
		var p = document.createElement("p");
		p.setAttribute("class", "card-text");
		p.textContent = response[i].price + " €";
		divCardBody.appendChild(p);
	}
}