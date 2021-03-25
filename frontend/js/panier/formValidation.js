let textInput = document.getElementsByClassName("textInput");
let alerteTextInput = document.getElementsByClassName("alerteTextInput")
let phoneInput = document.getElementById("telephone");
let mailInput = document.getElementById("mail");
let ville = document.getElementById("city");
let adresse = document.getElementById("adresse");
let submit = document.getElementById("submit");


// Contrôle des noms, prénoms et villes
for(let i=0; i < textInput.length; i++){
	textInput[i].addEventListener("blur", function(e){
		let value = this.value;
		if(value.length < 3 && value.length >0){
			textInput[i].style.border = "3px solid red";
			textInput[i].value = "";
			textInput[i].setAttribute("placeholder", "Plus de 2 lettres requises");
		} else {
			textInput[i].style.border = "";
			textInput[i].setAttribute("placeholder", "");
		}
	})
};


// Contrôle du numéro de téléphone
phoneInput.addEventListener("blur", function(e){
	let value = parseInt(phoneInput.value);
	if(typeof value !== "number" && phoneInput.value.length > 0){
		phoneInput.style.border = "3px solid red";
		phoneInput.value = "";
		phoneInput.setAttribute("placeholder", "Uniquement des chiffres");
	} else if (phoneInput.value.length !== 10 && phoneInput.value.length > 0){
		phoneInput.style.border = "3px solid red";
		phoneInput.value = "";
		phoneInput.setAttribute("placeholder", "Entrez 10 chiffres");
	} else {
		phoneInput.style.border = "";
		phoneInput.setAttribute("placeholder", "");
	}
});


// Contrôle de l'adresse mail
mailInput.addEventListener("blur", function(){
	let regex = /.+@.+\..+/;
	let inputValue = mailInput.value;
	if(!regex.test(inputValue) && inputValue.length > 0){
		mailInput.style.border = "3px solid red";
		mailInput.value = "";
		mailInput.setAttribute("placeholder", "Entrez une adresse mail valide");
	} else {
		mailInput.style.border = "";
		mailInput.setAttribute("placeholder", "");
	}
});


// Envoi du formulaire
submit.addEventListener("click", (e) => {
	e.preventDefault();
	let prenom = textInput[1].value;
	let nom = textInput[0].value;
	let phone = phoneInput.value;
	let address = adresse.value;
	let mail = mailInput.value;
	let city = ville.value;
	let contact = {
		firstName: prenom,
		lastName: nom,
		address: address,
		city: city,
		email: mail
	};
	let panierElts = JSON.parse(localStorage.getItem("peluchesDansLePanier"));
	let product_id = [];
	for(let i=0; i<panierElts.length; i++){
		let key = Object.keys(panierElts[i]);
		let value = JSON.parse(Object.values(panierElts[i]));
		product_id.push(key[0]);
	};
	let commande = {
		contact: contact,
		products: product_id
	};
	let sendForm = JSON.stringify(commande);

	let ajax = new Ajax;
	let data = ajax.request( "http://localhost:3000/api/teddies/order", "POST", sendForm);
	data.then((response) => {
		let ordreEtNom = {
			orderId : response.orderId,
			prenom : prenom
		}
		localStorage.setItem("commande", JSON.stringify(ordreEtNom));
		console.log(JSON.parse(localStorage.getItem("commande")), typeof JSON.parse(localStorage.getItem("commande")));
		window.location.assign("file:///C:/Users/Public/Desktop/Openclassrooms/Projet%205/code/JWDP5/frontend/commande.html");
	}).catch(error => {
		console.log(error);
	})
});

