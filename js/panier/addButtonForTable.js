function boutonAjouterPourTableau(){
	let boutonAjouter = document.getElementsByClassName("ajouterProduit");
	for(let e=0; e < boutonAjouter.length; e++){
		let id = boutonAjouter[e].classList[0];
		boutonAjouter[e].addEventListener("click", function(){
			let quantity = parseInt(document.getElementsByClassName("quantity")[e].textContent)
			ajoutDeProduits(id);
			quantity++;
			document.getElementsByClassName("quantity")[e].textContent = quantity;
			produitsDansLePanier();
			let valeurProduit = parseInt(document.getElementsByClassName("prixProduit")[e].textContent);
			let newQuantity = valeurProduit * quantity;
			document.getElementsByClassName("prixDuProduit")[e].textContent = newQuantity + "€";
			let colonnePrix = document.getElementsByClassName("prixDuProduit");
			let prixTotal = 0;
			for(let y=0; y < colonnePrix.length; y++){
				let valeurColonnePrix = parseInt(colonnePrix[y].textContent);
				prixTotal += valeurColonnePrix;
				document.getElementById("prixTotal").textContent = prixTotal + "€";
			};
		});
	};
};