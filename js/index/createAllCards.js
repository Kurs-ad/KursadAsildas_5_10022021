function createAllCards(object){
	for(let i=0; i<object.length; i++){
		let card = new Card(
			object[i].colors,
			object[i]._id,
			object[i].name,
			object[i].price,
			object[i].imageUrl,
			object[i].description,			
			);
		card.generateCard();
	}
};