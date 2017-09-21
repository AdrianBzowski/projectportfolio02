 // Initialize Variables
    var closePopup = document.getElementById("popupclose");
    var closePopup2 = document.getElementById("popupclose2");
    var closePopup3 = document.getElementById("popupclose3");

    var overlay = document.getElementById("overlay");
    var overlay2 = document.getElementById("overlay2");
    var overlay3 = document.getElementById("overlay3");

    var popup = document.getElementById("popup");
    var popup2 = document.getElementById("popup2");
    var popup3 = document.getElementById("popup3");

    var button = document.getElementById("button");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    // Close Popup Event
closePopup.onclick = function() {
    overlay.className = ''; /*This removes all classes, use at your own risk*/
    popup.className = ''; /*This removes all classes, use at your own risk*/
};
closePopup2.onclick = function() {
    overlay2.className = ''; /*This removes all classes, use at your own risk*/
    popup2.className = ''; /*This removes all classes, use at your own risk*/
};
closePopup3.onclick = function() {
    overlay3.className = ''; /*This removes all classes, use at your own risk*/
    popup3.className = ''; /*This removes all classes, use at your own risk*/
};
// Show Overlay and Popup
button.onclick = function() {
    overlay.className = 'show';
    popup.className = 'show';
};
button2.onclick = function() {
    overlay2.className = 'show2';
    popup2.className = 'show2';
};
button3.onclick = function() {
    overlay3.className = 'show3';
    popup3.className = 'show3';
}









