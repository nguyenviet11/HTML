function getTarget(e) {                     // declare funtion
    if (!e) {                               // if there is no event object
        e = window.event;                   // use old IE event object
    }
    return e.target || e.srcElement;        // get the target of event
}

function itemDone(e) {                      // Declare funtion
    //Remove item from the list
    var target, elParent, elGrandparent;        // declare variables
    target = getTarget(e);                      // get the item clicked link

    /*
    The book used the following code - but it had two shortcomings
    - Clicking between list items would remove the whole list
    - Clicking on italic text would remove the link - not the list item

    elParent = target.parentNode;
    elGrandparent = target.parentNode.parrentNode;
    elGrandparent.removeChild(elParent);

    The next 10 lines improve that example
     */
}
if ( target.nodeName.toLowerCase() == "a" ) {           // if user clicked on an a element
    elListItem = target.parentNode;                     // get its li element
    elList = elListItem.parentNode;                     // get the ul element
    elList.removeChild(elListItem);                     // remove list item from list
}
if (target.nodeName.toLowerCase() == "em" ) {           // if the user clicked on an em element
    elListItem = target.parentNode.parentNode;          // get its li element
    elList = elListItem.parentNode;                     // get the ul element
    elList.removeChild(elListItem);                     // remove list item from list
}

// Prevent the link from taking you elsewhere
    if (e.preventDefault(){                             // if preventDefault() works
        e.preventDefault();                             // use preventDefault()
    } else {                                            // Otherwise
        e.returnValue = false;                         // use old IE version
    }
}

// set up event listeners to call itemDone() on click
var el = document.getElementById('shoppingList'); // get shopping list
if (el.addEventListener) {                          // if event listeners work
    el.addEventListener('click',function (e) {          // add listener on click
        itemDone(e);                                        // it calls itemDone()
    },false);                                       // use bubbling phase for flow
} else {                                                // Otherwise
    el.attachEvent('onclick',function(e) {              // Use old IE model: onclick
        itemDone(e);                                    // Call itemDone()
    })
}