async function useAjaxToCreateTableRows(url){
	try{
		let response = await ajaxRequest(url);
		createTableElements(response);
	} catch(error){
		console.log(error)
		/*window.location.href("");*/
	}
};

useAjaxToCreateTableRows("http://localhost:3000/api/teddies");