// ==UserScript==
// @name Facebook Blocker
// @author J. King & Dustin Wilson
// @version 1.
// @description Removes annoying Facebook garbage from websites.
// @exclude http://*.facebook.*/*
// @exclude https://*.facebook.*/*
// ==/UserScript==

window.opera.addEventListener('BeforeScript',function(ev)
{
 if(ev.element.src.match(/^https?:\/\/(?:[^\/]+\.)*(?:facebook|fbcdn|fbshare)\.[^\/]+\//))
  ev.preventDefault();
},false);

//There will be a flash of content sometimes before loading. This is unavoidable because Opera starts loading before the DOM tree is finished construction in an attempt to perhaps get relevant information to the user more quickly.
window.opera.addEventListener('BeforeEvent.load',function(ev)
{
 	var element=ev.event.target;

 if(element.nodeName=='IFRAME' && element.src.match(/^https?:\/\/(?:[^\/]+\.)*(?:facebook|fbcdn|fbshare)\.[^\/]+\//))
  element.parentNode.removeChild(element);
},false);