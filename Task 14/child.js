// select the starting point and find its children.
var startItem = document.getElementsByTagName('ul')[0];
var firstItem = startItem.firstChild;
var lastItem = startItem.lastChild;

// change the value of the children's class attributes.
firstItem.className = 'complete';
lastItem.className = 'cool';