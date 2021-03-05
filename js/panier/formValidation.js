let textInput = document.getElementsByClassName("textInput");
let alerteTextInput = document.getElementsByClassName("alerteTextInput")
let phoneInput = document.getElementById("telephone");
let mailInput = document.getElementById("mail");
let boutonDenvoi = document.getElementById("boutonDenvoi");

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

phoneInput.addEventListener("blur", function(e){
	let value = parseInt(phoneInput.value);
	console.log(typeof value)
	if(typeof value !== "number" && phoneInput.value.length > 0){
		phoneInput.style.border = "3px solid red";
		phoneInput.value = "";
		phoneInput.setAttribute("placeholder", "Uniquement des chiffres");
	} else if (value.length !== 10 && phoneInput.value.length > 0){
		phoneInput.style.border = "3px solid red";
		phoneInput.value = "";
		phoneInput.setAttribute("placeholder", "Entrez 10 chiffres");
	} else {
		phoneInput.style.border = "";
		phoneInput.setAttribute("placeholder", "");
	}
});

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



let id = Math.floor(Math.random()*1000000);
console.log(id)
boutonDenvoi.setAttribute("href", "commande.html?id=" + id);

boutonDenvoi.addEventListener("click", () => {
	let prenom = textInput[0].value;
	let nom = textInput[1].value;
	let telephone = phoneInput.value;
	let mail = mailInput.value;
	let product_id = [prenom, nom, telephone, mail];
	let request = new XMLHttpRequest;
	request.onreadystatechange = function(){
		if(this.readyState == XMLHttpRequest.DONE && this.readyState == 4){
			if(this.status ==200){
			}
		}
	}
	request.open("POST", "http://localhost:3000/api/teddies");
	request.SetRequestHeader("Content-Type", "application/JSON");
	request.send(jSON.stringify(product_id));
})
