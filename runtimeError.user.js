// ==UserScript==
// @name         runtimeError
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://stu255.ntust.edu.tw/*
// @grant        none
// ==/UserScript==
if (document.title.search(/runtime/i) != - 1) {
  window.location.assign('https://stu255.ntust.edu.tw/ntust_stu/stu.aspx');
} else {
  console.log('false');
}