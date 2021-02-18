function ajoutDeProduits(){
	let produitsDansLocalStorage = localStorage.getItem(urlId);
	produitsDansLocalStorage = parseInt(produitsDansLocalStorage);
	if(produitsDansLocalStorage){
		localStorage.setItem(urlId, produitsDansLocalStorage + 1);
	} else {
		produitsDansLocalStorage = localStorage.setItem(urlId, 1);
	}
	produitsDansLePanier();
};


function suppressionDeProduits(){
	let produitsDansLocalStorage = localStorage.getItem(urlId);
	produitsDansLocalStorage = parseInt(produitsDansLocalStorage);
	if(produitsDansLocalStorage > 1){
		localStorage.setItem(urlId, produitsDansLocalStorage - 1);
	} else if(produitsDansLocalStorage = 1){
			localStorage.setItem(urlId, produitsDansLocalStorage - 1);
			localStorage.removeItem(urlId);
	}
	produitsDansLePanier();
};