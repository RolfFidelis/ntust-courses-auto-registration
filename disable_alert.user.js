// ==UserScript==
// @name         disable_alert
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://stu255.ntust.edu.tw/ntust_stu/*
// @run-at       document-start
// @grant        none
// ==/UserScript==
unsafeWindow.alert = function alert(arg){
	var body = document.body;
	var div = document.createElement("div");
	var txt = document.createTextNode(arg.toString());
	div.appendChild(txt);
	div.style.padding = "1em";
	div.style.backgroundColor = "#ff9999";
	body.insertBefore(div, body.firstChild);
	console.log(arg);
};