// store the first list item in a variable
var firstItem = document.getElementById('one');

// get the content of the first list item
var itemContent = firstItem.innerHTML;

// update the content of the fistt list item so it is a link
firstItem.innerHTML = '<a href=\"http://example.org\">' + itemContent + '</a>';