function getIdOnUrl(){
	const url = window.location.search; //Partie de l'URL qui suit "?"
	const urlParam = new URLSearchParams(url);
	return const urlId = urlParam.get("id");
};