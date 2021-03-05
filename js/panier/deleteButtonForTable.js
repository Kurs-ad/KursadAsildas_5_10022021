function boutonSupprimerPourTableau(){
	let boutonSupprimer = document.getElementsByClassName("supprimerProduit");
	for(let x=0; x < boutonSupprimer.length; x++){
		let id = boutonSupprimer[x].classList[0];
		boutonSupprimer[x].addEventListener("click", function(){
			let quantity = parseInt(document.getElementsByClassName("quantity")[x].textContent)
			suppressionDeProduits(id);
			quantity--;
			document.getElementsByClassName("quantity")[x].textContent = quantity;
			produitsDansLePanier();
			let valeurProduit = parseInt(document.getElementsByClassName("prixProduit")[x].textContent);
			let newQuantity = valeurProduit * quantity;
			document.getElementsByClassName("prixDuProduit")[x].textContent = newQuantity;
			let colonnePrix = document.getElementsByClassName("prixDuProduit");
			let prixTotal = 0;
			for(let y=0; y < colonnePrix.length; y++){
				let valeurColonnePrix = parseInt(colonnePrix[y].textContent);
				prixTotal += valeurColonnePrix;
				document.getElementById("prixTotal").textContent = prixTotal;
			};
		});
	};
};