var el;

function charCount (e) {
    var textEnterd, charDisplay, counter, lastkey;
    textEnterd = document.getElementById('message').value;
    charDisplay = document.getElementById('charactersLeft');
    counter = (180 - (textEnterd.length));
    charDisplay.textContent = counter;
    lastkey = document.getElementById('lastKey');
    lastkey.textContent = 'Last key in ASCII code: ' + e.keyCode;
}
el = document.getElementById('message');
el.addEventListener('keyup', charCount, false);
