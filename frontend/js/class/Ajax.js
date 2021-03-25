class Ajax {
	request(url, method, toSend){
		return new Promise((resolve, reject) => {
		let request = new XMLHttpRequest();
		request.onreadystatechange = function(){
			if(this.readyState == XMLHttpRequest.DONE && this.readyState == 4){
		  		if (this.status == 200 || this.status == 201){
		  			resolve(JSON.parse(this.responseText));
				} else {
		    		reject("Erreur dans la requête, page non affichable");
		    	}
			}
		}
		request.open(method, url);
		request.setRequestHeader("Content-Type", "application/json");
		request.send(toSend);
		});
	}
};