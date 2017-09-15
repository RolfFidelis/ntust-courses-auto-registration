// ==UserScript==
// @name         choice_course
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://stu255.ntust.edu.tw/ntust_stu/choice_course.aspx
// @grant        none
// ==/UserScript==
console.log('choice_course enable');
unsafeWindow.alert = function(arg){console.log(arg);};
var idInput = document.getElementById('courseno');
var add = document.getElementById('B_add');

unsafeWindow.json = json;
/*var reqJson = document.createElement('script');
reqJson.src = 'https://wolveschat.herokuapp.com/json';
document.body.appendChild(reqJson);*/
json('[{"code":"3NG124706"},{"code":"3NG124707"},{"code":"3NG229706"},{"code":"3NG239709"},{"code":"3NG278703"},{"code":"3NG286706"},{"code":"3NG292702"},{"code":"3NG296701"},{"code":"3NG297701"},{"code":"3NG298701"},{"code":"3NG298702"},{"code":"3NG299701"},{"code":"3NG300701"},{"code":"3NG301701"},{"code":"3NG302701"},{"code":"3NG303701"},{"code":"3TG034701"},{"code":"3TG035701"},{"code":"3TG036701"},{"code":"3TG037701"},{"code":"3TG038701"},{"code":"3TG039701"},{"code":"ADG015301"},{"code":"ADG016301"},{"code":"ADG018301"},{"code":"ADG020301"},{"code":"CEG321301"},{"code":"CHG303301"},{"code":"ECG003301"},{"code":"GE1515301"},{"code":"GE1515302"},{"code":"GE3401301"},{"code":"GE3401302"},{"code":"GE3402301"},{"code":"GE3405301"},{"code":"GE3405304"},{"code":"GE3407301"},{"code":"GE3604301"},{"code":"GE3605302"},{"code":"GE3606301"},{"code":"GE3612301"},{"code":"GE3653301"},{"code":"GE3653302"},{"code":"GE3657301"},{"code":"GE3660301"},{"code":"GE3661301"},{"code":"GE3700301"},{"code":"GE3700302"},{"code":"GE3708301"},{"code":"GE3708302"},{"code":"GE3709301"},{"code":"GE3709302"},{"code":"GE3710301"},{"code":"GE3710302"},{"code":"GE3711301"},{"code":"GE3711302"},{"code":"GE3713301"},{"code":"GE3713302"},{"code":"GE3714301"},{"code":"GE3714302"},{"code":"GE3719301"},{"code":"GE3719302"},{"code":"GE3723301"},{"code":"GE3723302"},{"code":"GE3724301"},{"code":"GE3724302"},{"code":"GE3725301"},{"code":"GE3726301"},{"code":"GE3726302"},{"code":"GE3727301"},{"code":"GE3727302"},{"code":"GE3729301"},{"code":"GE3729302"},{"code":"GE3900301"},{"code":"GE3900304"},{"code":"GE3901301"},{"code":"GE3902301"},{"code":"GE3903302"},{"code":"GE3907301"},{"code":"GE3907302"},{"code":"GE3909302"},{"code":"GE3909303"},{"code":"GE3909305"},{"code":"GE3909306"},{"code":"GE3910301"},{"code":"GE3910303"},{"code":"GE3916301"},{"code":"GE3917301"},{"code":"GE3917302"},{"code":"GE3918301"},{"code":"GE3931301"},{"code":"GE3931302"},{"code":"HCG009301"},{"code":"MBG204301"},{"code":"MBG204302"},{"code":"MEG302301"},{"code":"TCG033301"},{"code":"TCG034301"},{"code":"TCG035301"},{"code":"TCG036301"},{"code":"TCG037301"},{"code":"TCG039301"},{"code":"TCG040301"},{"code":"TCG041301"},{"code":"TCG042302"},{"code":"TCG043301"},{"code":"TCG044301"},{"code":"TCG045301"},{"code":"TCG046301"},{"code":"TCG047301"},{"code":"TCG047302"},{"code":"TCG048301"},{"code":"TCG058301"},{"code":"TCG059301"},{"code":"TCG063301"},{"code":"TCG063302"},{"code":"TCG065301"},{"code":"TCG068301"},{"code":"TCG069301"},{"code":"TCG072301"},{"code":"TCG073301"},{"code":"TCG074301"},{"code":"TCG075301"}]');
function json(jsonStr){
	var courses = JSON.parse(jsonStr);
	console.log(index);
	var index;
	if (!(index = parseInt(getCookie('courseIndex')))) {
		index = setCookie('courseIndex', 0, 3600);
	}
	if (index >= courses.length) {
		index = setCookie('courseIndex', 0, 3600);
	}
	idInput.setAttribute('value', courses[index].code);
	setCookie('courseIndex', ++index, 90);
	console.log(index);
	setTimeout(function () {
		add.click();
	}, 0);
}

function setCookie(cname, cvalue, exdays) {
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