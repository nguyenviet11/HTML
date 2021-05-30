var title;                          /* gọi biến */
var message;                        /* gọi biến */

title = "Molly's Special Offers";                               /* gán biến = .. */
message = '<a href="sale.html"> 25% off!</a>';                  /* gán biến = 1 đường link */

var elTitle = document.getElementById('title');         /* gọi 1 biến = địa chỉ html */

elTitle.textContent = title;                                    /* gán biến = title, textcontent = câu lệnh thay đổi nội dung*/

var elNote = document.getElementById( 'note');           /* gọi 1 biến = địa chỉ html */

elNote.innerHTML = message;                                       /* gán biến = massage, inneHtml = câu lệnh thay đổi nội dung = 1 đường link k có tính bảo mật cao */