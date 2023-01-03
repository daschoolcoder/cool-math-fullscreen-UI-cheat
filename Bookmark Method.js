req = new XMLHttpRequest(); 
req.open('GET', 'https://raw.githubusercontent.com/daschoolcoder/cool-math-fullscreen-UI-cheat/main/The%20Code.js');
req.onload = function() { eval(this.responseText); };req.send();
