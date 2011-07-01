window.addEventListener('load', function(event) { handleBeforeLoadEvent(event, 'load') }, true);
window.addEventListener('DOMContentLoaded', function(event) { handleBeforeLoadEvent(event, 'DOM load') }, true);
window.addEventListener('DOMFrameContentLoaded', function(event) { handleBeforeLoadEvent(event, 'DOM Frame load') }, true);
document.addEventListener('load', function(event) { handleBeforeLoadEvent(event, 'load') }, true);
document.addEventListener('DOMContentLoaded', function(event) { handleBeforeLoadEvent(event, 'DOM load') }, true);
document.addEventListener('DOMFrameContentLoaded', function(event) { handleBeforeLoadEvent(event, 'DOM Frame load') }, true);

function handleBeforeLoadEvent(event, msg) {
//	alert(msg);
	const element = event.target;

	// if(element.src.toLowerCase().indexOf('static.ak.fbcdn.net') > 0){
	// 	alert(element.localName);
	// }

//	alert(event.target);

	if(element.localName == 'IFRAME'){
		if(element.src.toLowerCase().indexOf('facebook.com/extern/') > 0){
			element.parentNode.removeChild(element);
		}else if(element.src.toLowerCase().indexOf('facebook.com/plugins/') > 0){
			element.parentNode.removeChild(element);
		}else if(element.src.toLowerCase().indexOf('fbshare.me') > 0){
			element.parentNode.removeChild(element);
		}
	}else if(element.localName == 'SCRIPT'){
		if(element.src.toLowerCase().indexOf('static.ak.fbcdn.net') > 0){
			return false;
		}else if(element.src.toLowerCase().indexOf('static.ak.connect.facebook.com') > 0){
			return false;
		}else if(element.src.toLowerCase().indexOf('fbshare.me') > 0){
			return false;
		}else if(element.src.toLowerCase().indexOf('api.facebook.com') > 0){
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

