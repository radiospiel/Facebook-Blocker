const pageURL = document.domain;

document.addEventListener('load', handleBeforeLoadEvent, true);

function handleBeforeLoadEvent(event) {
	const element = event.target;

	if(element.nodeName == 'IFRAME'){
		if(element.src.toLowerCase().indexOf('facebook.com/extern/') > 0){
			element.parentNode.removeChild(element);
		}else if(element.src.toLowerCase().indexOf('facebook.com/plugins/') > 0){
			element.parentNode.removeChild(element);
		}
	}else if(element.nodeName == 'SCRIPT'){
		if(element.src.toLowerCase().indexOf('static.ak.fbcdn.net') > 0){
			return false;
		}else if(element.src.toLowerCase().indexOf('static.ak.connect.facebook.com') > 0){
			return false;
		}
		return true;
	}
	return true;
	
	event.preventDefault();
}
