// store the element to be removed in a variable.
var removeEl = document.getElementsByTagName('li')[3];          //phần tử chỉ định trong li

// find the element which contains the element to be removed.
var containerEl = document.getElementsByTagName('ul')[0];

// Remove the element.
containerEl.removeChild(removeEl);          // xoá phần tử