function removeIFRAMES(){
	var frames = document.getElementsByTagName('iframe');
	var iframe,src;

	for (var i=0;i<frames.length;i++){
		iframe = frames[i];
		src = iframe.src;
//		alert(src);
		if (src && src != 'about:blank') {
			if(src.indexOf('facebook.com') !== -1) {
//				alert('Removed IFRAME: '+src);
				iframe.parentNode.removeChild(iframe);
			}
			// else{
			// 	alert('Not Removed: '+src);
			// }
		}
	}


  var tags_list=["fb:like-box", "fb:like", "fb:share-button", "fb:comments" ];  
	var tags, fb, tag;
	
  for(var j=0; j<tags_list.lenghth; j++) {
      tags = document.getElementsByTagName( tags_list[j] );
      for (var i=0;i<tags.length;i++)
      {
        fb = tags[i];
        fb.parentNode.removeChild(fb);
      }
  }
	
}

removeIFRAMES();