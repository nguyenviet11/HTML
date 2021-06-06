function checkUsername(){                                   // Declare function
    var elMsg = document.getElementById('feedback');        // get feedback elemenet
    if(this.value.length < 5){                              // if username too short
        elMsg.textContent = 'Username must be 5 character or more';         //set msg
    } else {                                             // otherwise
        elMsg.textContent = '';                         // clear msg
    }
}

var elUsername = document.getElementById('username');       // get username input
// when it loser focus call checkusername()
elUsername.addEventListener('blur',checkUsername,false);