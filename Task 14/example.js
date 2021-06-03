// Adding item to start and end of list
var list = document.getElementsByTagName('ul')[0];

// add new item to end of list
var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('cream');             // thêm 1 phần tử cream vào li
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);                      // thêm li vào ul

// add new item start of list
var newItemFirst = document.createElement('li');
var newTextFirst = document.createTextNode('kale');             // kale đc thêm vào li
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild);               // kale đc thêm vào đầu li

var listItems = document.querySelectorAll('li');        // gán 1 biến = tất cả li
// add a class of cool to all list items
var i;
for (i = 0; i < listItems.length; i++) {                       // lặp các danh sách
    listItems[i].className = 'cool';                           // các danh sách đc chuyển về thuôc tính cool
}
// add number of item in the list to the heading
var heading = document.querySelector('h2');              // h2 element
var headingText = heading.firstChild.nodeValue;                     // h2 text
var totalItems = listItems.length;                                  // No . of <li> elements
var newHeading = headingText + '<span>' + totalItems + '</span>';    // Content
heading.innerHTML = newHeading;                                 // Update h2 using innerHTML ( not textcontent ) because it contains markup