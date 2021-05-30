
var price;                      /* gọi biến */
var quantity;                        /* gọi biến */
var total;                            /* gọi biến */

price = 5;                      /* gán biến = 5 */
quantity = 14;                  /* gán biến = 14 */

total = price * quantity;           /* gọi 1 biến =  price nhân quanlity */

var el= document.getElementById(  'cost');          /* gọi 1 biến = (document = địa chỉ bên html, getelementbyid = tên của địa chỉ html */
el.textContent = '$' +total;                                /* gọi 1 biến, textconten = thay đổi nội dung = '$' + total */