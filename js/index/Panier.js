class Panier {
	constructor(){
		this.monPanier = document.getElementById("monPanier");
		this.produitsDansLePanier();
	}
	produitsDansLePanier(){
		if(localStorage.getItem("peluchesDansLePanier")){
			let peluchesDansLePanier = JSON.parse(localStorage.getItem("peluchesDansLePanier"));

			let valueSum = 0;
			for(let i=0; i < peluchesDansLePanier.length; i++){
				let keyValue = parseInt(Object.values(peluchesDansLePanier[i]));
				valueSum += keyValue;
				if (valueSum > 0){
					this.monPanier.innerHTML = valueSum;
				} else {
					this.monPanier.innerHTML = "";
				}
			}
		}
	};
};