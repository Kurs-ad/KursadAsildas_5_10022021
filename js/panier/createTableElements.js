function createTableElements(object){
	for(let i=0; i < object.length; i++){
		let tableau = new ElementsDuPanier(
			object[i].colors,
			object[i]._id,
			object[i].name,
			object[i].price,
			object[i].imageUrl,
			object[i].description,
			);
		tableau.tableauPanier();				
	};
	boutonAjouterPourTableau();
	boutonSupprimerPourTableau();
};