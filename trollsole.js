// adding console html
jQuery(function() {
    // adding trollsole html
  jQuery("#trollsole").load( "trollsole/trollsole.html");

  // Message for mobile
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   jQuery('#messaging h1').html("This feature is not supported on your device.");
   jQuery('#messaging h1').css('font-size','100px');
   jQuery('#messaging').css('margin-top','100px');
} 

});

// Open/Close switcher
var open = true;

function show_trolfface_console(){
	if(open == true){

		document.getElementById('trollface_console').style.display="block";
		document.getElementsByTagName('body')[0].style.marginTop="-130px";
		open = false;

	} else {
		document.getElementById('trollface_console').style.display="none";
		document.getElementsByTagName('body')[0].style.marginTop="0";
		open = true;
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