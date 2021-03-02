function ajaxRequest(url){
	return new Promise((resolve, reject) => {
		let request = new XMLHttpRequest();
		request.onreadystatechange = function(){
			if(this.readyState = XMLHttpRequest.DONE && this.readyState == 4){
		  		if (this.status == 200){
			    	let response = JSON.parse(this.responseText);
			    	alert(JSON.stringify(response))
				} else {
		    		console.error("blabla");
		    	}
			}
		}
		request.open("GET", url);
		request.send();
	});
};

async function test(){
	try{
		await ajaxRequest("http://localhost:3000/api/teddies");
		console.log("go")
	} catch{
		console.error("fefe")
	}
}
test()