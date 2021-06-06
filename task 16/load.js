function setup() {                                    // declare function
    var textInput;                                    // Create variable
    textInput = document.getElementById('username');        // get username input
    textInput.focus();                                  // give username focus
}

window.addEventListener('load', setup, false);      // when page loader call setup()

/*  Longer version with IE8 (and lower) compatibility

if(el.addEventListerer) {
    el.addEventListerner('click', function(e) {
        itemdone(e);
     }, false);
} else {
    el.attachEvent('onload', function(e) {
        itemDone(e);
     });
}

 */