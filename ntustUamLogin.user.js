// ==UserScript==
// @name         ntustUamLogin
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://wlan-web.ntust.edu.tw/NtustWeb/PC/Logon.aspx*
// @grant        none
// ==/UserScript==
var form1 = document.getElementById('form1');
var username = document.getElementById('TextBoxUserName');
var password = document.getElementById('TextBoxPassword');
var btn = document.getElementById('ImageButtonLogin');

var id = getCookie('id');
var psw = getCookie('psw');
var complete = id && psw;
if(complete){
	username.value = atob(id);
	password.value = atob(psw);
	btn.click();
}

form1.addEventListener('submit', function(){
	if(!complete){
		setCookie('id', btoa(username.value), 365);
		setCookie('psw', btoa(password.value), 365);
	}	
});

function setCookie(cname, cvalue, exdays = 30) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = 'expires=' + d.toUTCString();
	document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
	return cvalue;
}
function getCookie(cname) {
	var name = cname + '=';
	var decodedCookie = document.cookie;
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return '';
}
