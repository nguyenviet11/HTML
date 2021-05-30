var inStock;                        /* gọi biến */
var shipping;                       /* gọi biến */

inStock = true;                     /* gán biến */
shipping = false;                    /* gán biến */

inStock = false;                    /* gán biến =, kết quả sẽ tính biến đc gán sau cùng */
shipping = true;                     /* gán biến =, kết quả sẽ tính biến đc gán sau cùng */

var elStock = document.getElementById('stock');

elStock.className = inStock;

var elShip = document.getElementById('shipping');

elShip.className = shipping;