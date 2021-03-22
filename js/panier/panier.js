let ajax = new Ajax;
let panierElts = JSON.parse(localStorage.getItem("peluchesDansLePanier"));
for(let i=0; i<panierElts.length; i++){
	let id = Object.keys(panierElts[i]);
	let data = ajax.request("http://localhost:3000/api/teddies/" + id, "GET");
	data.then((response) => {
		let tableau = new TableauRecapitulatif(
			response.colors,
			response._id,
			response.name,
			response.price,
			response.imageUrl,
			response.description,	
			);
		tableau.creerLigne();
		tableau.gestionDuPanier();
	}).catch(error => {
	console.log(error);
	});
}