var msg = '<p><b>page title: </b>' + document.title + '<br />';         /* câu lệnh hiển thị tiêu đề */

msg += '<b>page address: </b>' + document.URL + '<br />';           /* câu lệnh hiển thị địa chỉ link */

msg += '<b>Last modified: </b>' + document.lastModified + '</p>';       /* câu lệnh hiển thị thời gian sửa đổi lần cuối */

var el = document.getElementById('footer');

el.innerHTML = msg;