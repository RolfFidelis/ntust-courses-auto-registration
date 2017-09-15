// ==UserScript==
// @name         stu
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://stu255.ntust.edu.tw/ntust_stu/stu.aspx
// @grant        none
// @require      https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.12.4.min.js
// ==/UserScript==
var b64 = '', code = '';
var form1 = document.getElementById('Form1');
var stuNo = document.getElementById('studentno');
var id = document.getElementById('idcard');
var birth = document.getElementById('birthday');
var psw = document.getElementById('password');
var captcha = document.getElementById('code_box');
var captcha_img = document.getElementById('Image2');
var submitBtn = document.getElementById('Button1');

unsafeWindow.ocr = ocr;
var no = getCookie('stuNo');
var i = getCookie('id');
var bir = getCookie('birth');
var p = getCookie('psw');
var complete = no && i && bir && p;
if(complete){
	stuNo.value = atob(no);
	id.value = atob(i);
	birth.value = atob(bir);
	psw.value = atob(p);
}
captcha.focus();

form1.addEventListener('submit', function(){
	if(!complete){
		setCookie('stuNo', btoa(stuNo.value), 90);
		setCookie('id', btoa(id.value), 90);
		setCookie('birth', btoa(birth.value), 90);
		setCookie('psw', btoa(psw.value), 90);
	}	
});

captcha_img.onload = function(){
	b64 = getBase64Image(captcha_img);
	code = encodeURIComponent(b64);
	console.log(code);
	var reqocr = document.createElement('script');
	reqocr.src = 'https://wolveschat.herokuapp.com/captcha/' + code;
	document.body.appendChild(reqocr);
};

captcha.oninput = function(){
	if(captcha.value.length === 6){
		submitBtn.click();
	}
	if(captcha.value.length >= 10){
		captcha.setAttribute('value', '');
	}
};

function getBase64Image(img) {
	var canvas = document.createElement('canvas');
	canvas.width = img.width;
	canvas.height = img.height;
	var ctx = canvas.getContext('2d');
	ctx.drawImage(img, 0, 0);
	return canvas.toDataURL('image/png').replace('data:image/png;base64,', '');
}

function ocr(result) {
	console.log(result);
	if (result.search(/^[0-9]{3}[a-z]{3}$/i) !== 0) {
		captcha.style.backgroundColor = 'yellow';
		document.body.style.backgroundColor = '#ff9999';
		captcha.setAttribute('value', result);
	} else {
		captcha.setAttribute('value', result);
		if(stuNo.value && id.value && birth.value && psw.value && captcha.value){
			submitBtn.click();
		}		
	}
}

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