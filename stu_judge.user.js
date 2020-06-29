// ==UserScript==
// @name         stu_judge
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://stu255.ntust.edu.tw/ntust_stu/stu_judge.aspx
// @grant        none
// ==/UserScript==
var a = document.querySelectorAll('a[href^="judge_course_c.aspx"]');
console.log(a[0].click());