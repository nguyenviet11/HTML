function checkUsername() {                          // declare function
    var username = el.value;                        // store username in variable
    if (username.length < 5 ) {                     // if username < 5 characters
        elMsg.className = 'warning';                // change class on message
        elMsg.textContent = 'Not long enough, yet ...';     // update message
    }   else {                                      // otherwise
        elMsg.textContent = '';                    // clear the message
    }
}

function tipUsername()  {                   // declare function
    elMsg.className = 'tip';                // change class for message
    elMsg.innerHTML = 'Username must be at least 5 characters';     // add message
}

var el = document.getElementById('username');       // username input
var elMsg = document.getElementById('feedback');    // element to hold message

// when the username input gains / loses focus call functions above:
el.addEventListener('focus', tipUsername, false);   // focus call tipUsername()
el.addEventListener('blur', checkUsername, false);   // blur call checkUsername()

/* Longer version with IE8 (and lower) compatibility

if (el.addEventListener) {

 */