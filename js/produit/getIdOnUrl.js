class GetIdOnUrl {
	idOnUrl(){
	const url = window.location.search; //Partie de l'URL qui suit "?"
	const urlParam = new URLSearchParams(url);
	const urlId = urlParam.get("id");
	return urlId;
	}
};