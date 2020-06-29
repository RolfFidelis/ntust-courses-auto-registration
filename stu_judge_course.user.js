// ==UserScript==
// @name         stu_judge_course
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include     /^https?:\/\/stu255\.ntust\.edu\.tw\/ntust_stu\/stu_judge_course\.aspx.*$/
// @grant        none
// ==/UserScript==
var input = document.querySelectorAll('input[id$="_2"]');
for (var i = 0; i < input.length; i++) {
  input[i].checked = 'checked';
}
var btn = document.getElementById('Btn_Save').click();