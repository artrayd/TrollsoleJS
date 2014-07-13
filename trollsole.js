// If you want to load external html from same domain - uncomenet this function and add jQuery library
// function trollHtml(path){
//   jQuery("#trollsole").load(path);
// }

// Open/Close switcher
var open = true;

function show_trolfface_console(){
	if(open == true){

		document.getElementById('trollface_console').style.display="block";
		document.getElementsByTagName('body')[0].style.marginTop="-130px";
		open = false;
    soundPlay();

	} else {
		document.getElementById('trollface_console').style.display="none";
		document.getElementsByTagName('body')[0].style.marginTop="0";
		open = true;
	}
}

// Play sound id exist
function soundPlay(){

  var sound = document.getElementById('troll-sound');

  if (sound != null){
    sound.play();
  } else{
    // trollface
  }
}

//////////F12 disable code////////////////////////
document.onkeypress = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
       show_trolfface_console();
        return false;
    }
}
document.onmousedown = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        show_trolfface_console();
        return false;
    }
}
document.onkeydown = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        show_trolfface_console();
        return false;
    }
}