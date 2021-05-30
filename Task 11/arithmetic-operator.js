var subtotal = (13 + 1) * 5;                            /* gán biến = */

var shipping = 0.5 * (13 +1);                              /* gán biến = */

var total = subtotal + shipping;                            /* gán biến = */

var elSub = document.getElementById('subtotal');
elSub.textContent = subtotal;                                        /* gán biến = subtotal, textcontent câu lệnh thay đổi nội dung */

var elShip = document.getElementById('shipping');
elShip.textContent = shipping;

var elTotal = document.getElementById('total');
elTotal.textContent = total;

