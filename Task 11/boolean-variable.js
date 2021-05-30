var inStock;                     /* gọi biến */
var shipping;                       /* gọi biến */
inStock = true;                     /* gán biến = */
shipping = false;                   /* gán biến = */

var elStock = document.getElementById('stock');             /* gọi 1 biến = địa chỉ html */

elStock.className = inStock;                                        /* gán biến = , classname = câu lệnh gửi đến 1 ảnh */

var elShip = document.getElementById('shipping');            /* gọi 1 biến = địa chỉ html */

elShip.className = shipping;                                /* gán biến = , classname = câu lệnh gửi đến 1 ảnh */
