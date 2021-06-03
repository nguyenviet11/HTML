var hotItem = document.querySelectorAll('li.hot');  // Store nodelist in Array
if (hotItem.length > 0) {               // if it contanin item

    for (var i = 0 ; i < hotItem.length; i++) {     // Loop through each item
        hotItem[i].className = 'cool';          // change value of class attribute
    }
}