// select the starting point and find its sibling.
var startItem = document.getElementById('two');
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

// change the values of the siblings' class attributes.
prevItem.className = 'complete';
nextItem.className = 'cool';