let ajax = new Ajax;
let data = ajax.request("http://localhost:3000/api/teddies/" + getIdOnUrl(), "GET");
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
}).catch(error => {
	console.log(error);
});
new Panier;