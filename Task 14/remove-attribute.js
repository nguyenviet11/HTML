var firstItem = document.getElementById('one');     // get the first item
if (firstItem.hasAttribute('class')) {  // if it has a class attribute
    firstItem.removeAttribute('class'); // Remove its class attribute
}