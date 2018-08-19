/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
javascript: (function () {
  if (!($ = window.jQuery)) { // typeof jQuery=='undefined' works too
    var jq = document.createElement('script');
    jq.src = 'https://code.jquery.com/jquery-3.3.1.min.js';
    document.body.appendChild(jq);
  } else {
    test();
  }
  var bootstrap = document.createElement('script');
  bootstrap.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js';
  document.body.appendChild(bootstrap);
  var sheet = document.createElement('script');
  sheet.rel = 'stylesheet';
  sheet.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
  document.head.appendChild(sheet);
  var meta = document.createElement('meta');
  meta.name = 'viewport';
  meta.content = 'width=device-width, initial-scale=1';
  document.head.appendChild(meta);
  function test() {
    console.log('test1');
    $('#pfc_cmd_container').css('background-color', 'red');
  }
}) ();
