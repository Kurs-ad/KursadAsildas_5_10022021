function createProductCard(object){
	console.log(object)
	let card = new Card(
		object.colors,
		object._id,
		object.name,
		object.price,
		object.imageUrl,
		object.description,
		);
	card.generateCard();
	document.getElementById("boutonAjouter").addEventListener("click", function(){
	ajoutDeProduits(getIdOnUrl());
	});
	document.getElementById("boutonSupprimer").addEventListener("click", function(){
	suppressionDeProduits(getIdOnUrl());
	});
};
