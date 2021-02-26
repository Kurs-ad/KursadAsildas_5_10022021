let textInput = document.getElementsByClassName("textInput");
let alerteTextInput = document.getElementsByClassName("alerteTextInput")
let phoneInput = document.getElementsByClassName("phoneInput");
let mailInput = document.getElementsByClassName("mailInput");

for(let i=0; i < textInput.length; i++){
	textInput[i].addEventListener("keypress", function(e){
		let value = this.value;
		if(value.length < 2){
			textInput[i].style.border = "3px solid red";
			alerteTextInput[i].textContent = "2 lettres minimum";
		} else {
			textInput[i].style.border = "";
			alerteTextInput[i].textContent = "";
		}
	})
};