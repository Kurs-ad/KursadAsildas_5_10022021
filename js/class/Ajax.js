class Ajax {
	request(url, method, toSend){
		return new Promise((resolve, reject) => {
		let request = new XMLHttpRequest();
		request.onreadystatechange = function(){
			if(this.readyState == XMLHttpRequest.DONE && this.readyState == 4){
				let status = JSON.stringify(this.status);
				console.log(status)
		  		if (status.startsWith("2")){
		  			resolve(JSON.parse(this.responseText));
				} else {
		    		reject("Erreur de type " + this.status);
		    	}
			}
		}
		request.open(method, url);
		request.setRequestHeader("Content-Type", "application/json");
		request.send(toSend);
		});
	}
};