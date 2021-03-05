async function useAjaxToCreateProductCard(url, id){
	try{
		let response = await ajaxRequest(url + id);
		createProductCard(response);
	} catch(error){
		console.log(error);
		/*window.location.href("")*/
	}
};
useAjaxToCreateProductCard("http://localhost:3000/api/teddies/", getIdOnUrl());