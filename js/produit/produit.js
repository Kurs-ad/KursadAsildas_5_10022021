let ajax = new Ajax;
let getIdOnUrl = new GetIdOnUrl;
let idOnUrl = getIdOnUrl.idOnUrl();
let data = ajax.request("http://localhost:3000/api/teddies/" + idOnUrl, "GET");
data.then((response) => {
		let card = new Card(
			response.colors,
			response._id,
			response.name,
			response.price,
			response.imageUrl,
			response.description,	
			);
		card.generateCardProduit();
		card.gestionDuPanier();
}).catch(error => {
	console.log(error);
});