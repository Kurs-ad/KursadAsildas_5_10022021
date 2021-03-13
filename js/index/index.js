let ajax = new Ajax;
let data = ajax.request("http://localhost:3000/api/teddies", "GET");
data.then((response) => {
	for(let i=0; i<response.length; i++){
		let card = new Card(
			response[i].colors,
			response[i]._id,
			response[i].name,
			response[i].price,
			response[i].imageUrl,
			response[i].description,			
			);
		card.generateCardIndex();
	};
}).catch(error =>{
	console.log(error)
});
new Panier;