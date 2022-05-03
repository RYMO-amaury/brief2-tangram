var tangram = document.getElementsByClassName("tangram")[0];
var button_basic = document.getElementsByClassName("button--basic")[0];
var cygne = document.getElementsByClassName("cygne")[0];

button_basic.onclick = function() {
	tangram.className =
  tangram.className.replace(/tangram--(\S*)/,'tangram--basic');
};

cygne.onclick = function() {
	tangram.className =
  tangram.className.replace(/tangram--(\S*)/,'cygne');
};
