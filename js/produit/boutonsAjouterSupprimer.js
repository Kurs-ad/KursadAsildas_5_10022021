function ajoutDeProduits(param){
	if(localStorage.peluchesDansLePanier && JSON.parse(localStorage.getItem("peluchesDansLePanier")).length != 0){
		let produitsDansLocalStorage = JSON.parse(localStorage.getItem("peluchesDansLePanier"));
		for(let i=0; i < produitsDansLocalStorage.length; i++){
			let objectKeys = Object.keys(produitsDansLocalStorage[i]); // stocke la clé de l'objet numéro i du tableau de mon storage dans objectKeys
			if(objectKeys == param){
				produitsDansLocalStorage[i][param] += 1;
				localStorage.setItem("peluchesDansLePanier", JSON.stringify(produitsDansLocalStorage));
				break
			} else {
				if(i == produitsDansLocalStorage.length - 1){
					let objetTemporaire = new Object();
					objetTemporaire[param] = 1;
					produitsDansLocalStorage.push(objetTemporaire);
					localStorage.setItem("peluchesDansLePanier", JSON.stringify(produitsDansLocalStorage));
					break
				}
			}
		}
	} else {
		let objetStorage = new Object();
		let produitsDansLocalStorage = [];
		objetStorage[param] = 1;
		produitsDansLocalStorage.push(objetStorage);
		localStorage.setItem("peluchesDansLePanier", JSON.stringify(produitsDansLocalStorage));
	}
	produitsDansLePanier();
};


function suppressionDeProduits(param){
	if(localStorage.peluchesDansLePanier){
		let produitsDansLocalStorage = JSON.parse(localStorage.getItem("peluchesDansLePanier"));
		for(let i=0; i < produitsDansLocalStorage.length; i++){
			let objectKeys = Object.keys(produitsDansLocalStorage[i]); // stocke la clé de l'objet numéro i du tableau de mon storage dans objectKeys
			if(objectKeys == param){
				if(Object.values(produitsDansLocalStorage[i]) > 1){
					produitsDansLocalStorage[i][param] -= 1;
					localStorage.setItem("peluchesDansLePanier", JSON.stringify(produitsDansLocalStorage));
					break
				} else {
					produitsDansLocalStorage[i][param] -= 1;
					produitsDansLocalStorage.splice(i, 1);
					localStorage.setItem("peluchesDansLePanier", JSON.stringify(produitsDansLocalStorage));
					break
				}
			}
		}
	produitsDansLePanier();
	}
	if(JSON.parse(localStorage.getItem("peluchesDansLePanier")).length == 0){
		localStorage.removeItem("peluchesDansLePanier");
	}
};

