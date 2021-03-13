class Ajax {
	request(url, method){
		return new Promise((resolve, reject) => {
		let request = new XMLHttpRequest();
		request.onreadystatechange = function(){
			if(this.readyState == XMLHttpRequest.DONE && this.readyState == 4){
		  		if (this.status == 200){
		  			resolve(JSON.parse(this.responseText));
				} else {
		    		reject(false)
		    	}
			}
		}
		request.open(method, url);
		request.send();
		});
	}
};