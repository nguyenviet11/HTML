var elUsername = document.getElementById('username');   // get username input
var elMsg = document.getElementById('feedback');        // get feedback element

function checkUsername(minLength) {                         // declare function
    if (elUsername.value.length < minLength) {              // if username too short
        // set message
        elMsg.innerHTML = 'Username must be ' + minLength + 'character or more';
    } else {                                                // otherwise
        elMsg.innerHTML = '';                               // clear message
    }
}

if(elUsername.addEventListener) {                       // if event listerner supported
    elUsername.addEventListener('blur',function (){     // when username loser focus
        checkUsername(5);                       // call checkUsername ()
    },false);                                     // capture during bubble phase
} else {                                                // otherwise
    elUsername.attachEvent('onblur',function (){        // IE fallback : on blur
        checkUsername(5);                       // call checkusername()
    });
}