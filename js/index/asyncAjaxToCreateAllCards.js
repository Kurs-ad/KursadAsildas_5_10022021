async function useAjaxToCreateAllCards(url){
	try{
		let response = await ajaxRequest(url);
		createAllCards(response);
	} catch(error){
		console.log(error)
		/*window.location = "";*/
	}
};

useAjaxToCreateAllCards("http://localhost:3000/api/teddies");