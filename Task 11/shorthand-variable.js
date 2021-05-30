var price = 5;                              /* gọi biến */
var quantity = 14;                          /* gọi biến */
var total = price * quantity;               /* các kiểu gọi biến trong Js */

var el = document.getElementById('cost')
el.textContent = '$' + total;