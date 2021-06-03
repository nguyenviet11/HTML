var firstItem = document.getElementById('one');  // Get the first item
firstItem.className = 'complete';       // change its class attribute

var fourthItem = document.getElementsByTagName('li').item(3);   // Get fourth item
// Note : the following line should say fourthItem (not el2)
fourthItem.setAttribute('class','cool');        // add an attribue to it
