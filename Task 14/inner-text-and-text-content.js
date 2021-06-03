var firstItem = document.getElementById('one'); // find first list item
var showTextContent = firstItem.textContent;    // Get value of textContent
var showInnerText = firstItem.innerText;

// Show the content of these two properties at the end of the list
var msg = '<p>textContent: ' + showTextContent + '</p>';
    msg += '<p>innerText: ' + showInnerText + '</p>';
var el = document.getElementById('scriptResults');
el.innerText = msg;

firstItem.textContent = 'sourdough bread';      // Update the first list item
