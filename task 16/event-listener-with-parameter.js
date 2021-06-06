var elUsername = document.getElementById('username');   // Username input
var elMsg = document.getElementById('feedback');         // Error msg element

function checkUsername(minLength) {                 // declare function
    if (elUsername.valueOf.length < minLength) {    // if username too short
        // set the error message
        elMsg.innerHTML = 'Username must be' + minLength + 'characters or more';
    } else {                                         // otherwise
        elMsg.innerHTML = '';                       // clear msg
    }
}

elUsername.addEventListener('blur',function (){     // when it loser focus
    checkUsername(5);                           // pass argument here
},false );      // regular expression