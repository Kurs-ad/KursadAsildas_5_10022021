class GestionDuPanier {
	constructor(){
		this.monPanier = document.getElementById("monPanier");
		this.iconePanier();
	}
	ajoutDeProduits(param){ // Pour ajouter un produit au panier
		let boutonAjouter = document.getElementsByClassName("ajouterProduit");
		let idBouton = document.getElementsByClassName(param)[0];
		for(let e=0; e < boutonAjouter.length; e++){
			if(localStorage.peluchesDansLePanier && JSON.parse(localStorage.getItem("peluchesDansLePanier")).length != 0){
				let produitsDansLocalStorage = JSON.parse(localStorage.getItem("peluchesDansLePanier"));
				for(let i=0; i < produitsDansLocalStorage.length; i++){
					let objectKeys = Object.keys(produitsDansLocalStorage[i]); // stocke la clé de l'objet numéro i du tableau de mon storage dans objectKeys
					if(objectKeys[0] == param){
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
				break // Empeche la répétition
			} else {
				let objetStorage = new Object();
				let produitsDansLocalStorage = [];
				objetStorage[param] = 1;
				produitsDansLocalStorage.push(objetStorage);
				localStorage.setItem("peluchesDansLePanier", JSON.stringify(produitsDansLocalStorage));
				break // Empeche la répétition
			}
		}
	};
	augmenterQuantite(param){ // Pour augmenter la quantité affichée
		let boutonAjouter = document.getElementsByClassName("ajouterProduit");
		let quantites = document.getElementsByClassName("quantity"); //recupère les span .quantity
		let valeursProduits = document.getElementsByClassName("prixProduit"); // récupère les prix non affichés
		let prixAPayerPourLesProduits = document.getElementsByClassName("prixDuProduit"); // récupère les prix dans la colonne prix
		let prixTotal = document.getElementById("prixTotal");
		for(let i=0; i < quantites.length; i++){
			if(boutonAjouter[i].classList[0] === param){
				let quantite = parseInt(quantites[i].textContent);
				let valeurProduit = parseInt(valeursProduits[i].textContent);
				let prixAPayerPourLeProduit = prixAPayerPourLesProduits[i];
				quantite++;
				quantites[i].textContent = quantite;
				let nouveauPrix = valeurProduit * quantite;
				prixAPayerPourLeProduit.textContent = nouveauPrix + "€";
				let somme = 0;
				for(let y=0; y < prixAPayerPourLesProduits.length; y++){
					let valeurColonnePrix = parseInt(prixAPayerPourLesProduits[y].textContent);
					somme += valeurColonnePrix;
					prixTotal.textContent = somme + "€";
				}
			};
		}
	}
	suppressionDeProduits(param){ // Pour supprimer un produit du panier
		if(localStorage.peluchesDansLePanier){
			let produitsDansLocalStorage = JSON.parse(localStorage.getItem("peluchesDansLePanier"));
			for(let i=0; i < produitsDansLocalStorage.length; i++){
				let objectKeys = Object.keys(produitsDansLocalStorage[i]); // stocke la clé de l'objet numéro i du tableau de mon storage dans objectKeys
				if(objectKeys == param){
					if(Object.values(produitsDansLocalStorage[i]) > 1){
						produitsDansLocalStorage[i][param] -= 1;
						localStorage.setItem("peluchesDansLePanier", JSON.stringify(produitsDansLocalStorage));
						this.diminuerQuantite(param);
						break
					} else {
						if(confirm("Voulez-vous supprimez le produit du panier ?")){
							produitsDansLocalStorage[i][param] -= 1;
							produitsDansLocalStorage.splice(i, 1); // supprime l'objet numéro 1 en ne le remplaçant par rien
							localStorage.setItem("peluchesDansLePanier", JSON.stringify(produitsDansLocalStorage));
							this.diminuerQuantite(param);
							if(document.getElementsByClassName("ligne_" + param).length > 0){
								document.getElementsByClassName("ligne_" + param)[0].style.display = "none";
							}
							break
						}
					}
				}
			}
		}
		if(JSON.parse(localStorage.getItem("peluchesDansLePanier")).length == 0){ // Pour supprimer le tableau lorsqu'il est vide
			localStorage.removeItem("peluchesDansLePanier");
		}
	};
	diminuerQuantite(param){ // Pour diminuer la quantité affichée
		let boutonSupprimer = document.getElementsByClassName("supprimerProduit");
		let quantites = document.getElementsByClassName("quantity"); //recupère les span .quantity
		let valeursProduits = document.getElementsByClassName("prixProduit"); // récupère les prix non affichés
		let prixAPayerPourLesProduits = document.getElementsByClassName("prixDuProduit"); // récupère les prix dans la colonne prix
		let prixTotal = document.getElementById("prixTotal");
		for(let i=0; i < quantites.length; i++){
			if(boutonSupprimer[i].classList[0] === param && quantites[i].textContent != "0"){
				let quantite = parseInt(quantites[i].textContent);
				let valeurProduit = parseInt(valeursProduits[i].textContent);
				let prixAPayerPourLeProduit = prixAPayerPourLesProduits[i];
				quantite--;
				quantites[i].textContent = quantite;
				let nouveauPrix = valeurProduit * quantite;
				prixAPayerPourLeProduit.textContent = nouveauPrix + "€";
				let somme = 0;
				for(let y=0; y < prixAPayerPourLesProduits.length; y++){
					let valeurColonnePrix = parseInt(prixAPayerPourLesProduits[y].textContent);
					somme += valeurColonnePrix;
					prixTotal.textContent = somme + "€";
				}
			};
		}
	}
	iconePanier(){
		if(localStorage.getItem("peluchesDansLePanier")){
			let peluchesDansLePanier = JSON.parse(localStorage.getItem("peluchesDansLePanier"));
			let valueSum = 0; // va être utilisé pour calculé le nombre de produits dans le panier
			for(let i=0; i < peluchesDansLePanier.length; i++){
				let keyValue = parseInt(Object.values(peluchesDansLePanier[i]));
				valueSum += keyValue;
				if (valueSum > 0){
					this.monPanier.innerHTML = valueSum;
				} else {
					this.monPanier.innerHTML = "";
				}
			}
		} else {
		this.monPanier.innerHTML = "";
		}
	}
}