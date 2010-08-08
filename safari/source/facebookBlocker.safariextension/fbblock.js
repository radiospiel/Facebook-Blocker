document.addEventListener('beforeload', handleBeforeLoadEvent, true);

function allowedToLoad(scriptURL, elementName, item) {
	// Search scripts for these potential Facebook URLs
	var findMe=new Array("facebook.com", "fbcdn.net", "facebook.net", "fbshare.me"); 
	var site = window.location.toString();
	
	if(site.toLowerCase().indexOf("facebook.com") == -1){
		if(scriptURL.toLowerCase().indexOf("http://static.ak.connect.facebook.com/") == -1 && scriptURL.toLowerCase().indexOf("http://www.facebook.com/extern/login_status.php") == -1 && scriptURL.toLowerCase().indexOf("http://www.facebook.com/connect/prompt_permissions.php") == -1){
			if(elementName === 'SCRIPT' || elementName === 'IFRAME'){
				for ( var check in findMe ){
					var search = scriptURL.toLowerCase().indexOf(findMe[check].toLowerCase());
					if(search !== -1){
						if(elementName === 'IFRAME'){
							item.parentNode.removeChild(item);
						}else{
							return false;
						}
					}
				}
				return true;
			}
			return true;
		}
		return true;
	}
	return true;
}


function handleBeforeLoadEvent(event) {
	const element = event.target;
	
	// Allow script to load
	if (allowedToLoad(event.url, element.nodeName, element)) {
		return;
	}
	
	// Do not allow facebook scripts to load
	event.preventDefault();
}