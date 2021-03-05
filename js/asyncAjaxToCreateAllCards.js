async function useAjaxToCreateAllCards(url){
	try{
		let response = await ajaxRequest(url);
		createAllCards(response);
	} catch(error){
		window.location.href("");
	}
};

useAjaxToCreateAllCards("http://localhost:3000/api/teddies");