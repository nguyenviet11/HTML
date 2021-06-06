var sx = document.getElementById('sx');         // element to hold screenX
var sy = document.getElementById('sy');         // element to hold screeny
var px = document.getElementById('px');         // element to hold pageX
var py = document.getElementById('py');         // element to hold pageY
var cx = document.getElementById('cx');         // element to hold clientX
var cy = document.getElementById('cy');         // element to hold clientY

function showPosition(event) {
    sx.value = event.screenX;           // Update element with screenX
    sy.value = event.screenY;
    px.value = event.pageX;
    py.value = event.pageY;
    cx.value = event.clientX;
    cy.value = event.clientY;
}

var el = document.getElementById('body');       // get body element
el.addEventListener('mousemove', showPosition, false);  // move updates position