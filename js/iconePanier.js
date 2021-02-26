let monPanier = document.getElementById("monPanier");

function produitsDansLePanier(){
	let peluchesDansLePanier = JSON.parse(localStorage.getItem("peluchesDansLePanier"));

	let valueSum = 0;
	for(let i=0; i < peluchesDansLePanier.length; i++){
		let keyValue = parseInt(Object.values(peluchesDansLePanier[i]));
		valueSum += keyValue;
		if (valueSum > 0){
			monPanier.innerHTML = valueSum;
		} else {
			monPanier.innerHTML = "";
		}
	}
};
produitsDansLePanier();