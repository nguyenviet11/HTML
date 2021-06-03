var itemTwo = document.getElementById('two')  // get second list item

var elText = itemTwo.firstChild.nodeValue;   // Get its text content

elText = elText.replace('pine nuts', 'kale');   // change pine nut to kale

itemTwo.firstChild.nodeValue = elText;      // Update the list item
