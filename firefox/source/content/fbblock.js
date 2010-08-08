function handleBeforeLoadEvent(event) {
	const element = event.target;

	if(element.nodeName == 'IFRAME'){
		if(element.src.toLowerCase().indexOf('facebook.com/extern/') > 0){
			element.parentNode.removeChild(element);
		}else if(element.src.toLowerCase().indexOf('facebook.com/plugins/') > 0){
			element.parentNode.removeChild(element);
		}else if(element.src.toLowerCase().indexOf('fbshare.me') > 0){
			element.parentNode.removeChild(element);
		}
	}else if(element.nodeName == 'SCRIPT'){
		if(element.src.toLowerCase().indexOf('static.ak.fbcdn.net') > 0){
			return false;
		}else if(element.src.toLowerCase().indexOf('static.ak.connect.facebook.com') > 0){
			return false;
		}else if(element.src.toLowerCase().indexOf('fbshare.me') > 0){
			return false;
		}else{
		return true;
		}
	}else{
		return true;
	}
	
	var tags = content.document.getElementsByTagName("fb:like");
	var fb;
	
	for (var i=0;i<tags.length;i++)
	{
		fb = tags[i];
		fb.parentNode.removeChild(fb);
	}
	
	var tags = content.document.getElementsByTagName("fb:share-button");
	var fb;
	
	for (var i=0;i<tags.length;i++)
	{
		fb = tags[i];
		fb.parentNode.removeChild(fb);
	}
	
	event.preventDefault();
}

window.addEventListener('DOMFrameContentLoaded', function(event) { handleBeforeLoadEvent(event) }, true);

