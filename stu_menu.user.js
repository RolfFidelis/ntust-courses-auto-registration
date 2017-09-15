// ==UserScript==
// @name         stu_menu
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://stu255.ntust.edu.tw/ntust_stu/stu_menu.aspx
// @grant        none
// ==/UserScript==
var chooseCourse = document.getElementById("Button1");
console.log(chooseCourse.disabled);
if(chooseCourse.disabled){
	console.log('chooseCourse button disable');
}else{
	chooseCourse.click();
}
