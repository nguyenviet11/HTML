var msg = '<h2>browser window</h2><p>width: ' + window.innerWidth + '</p>';         /* gọi biến có đoạn chữ và câu lệnh hiển thị chiều dài trình duyệt */

msg += '<p>height: ' + window.innerHeight + '</p>';                       /* câu lệnh hiển thị chiều cao trình duyệt */

msg += '<h2>history</h2><p>items: ' + window.history.length + '</p>';      /* câu lệnh hiển thị lịch sự của cửa sổ */

msg += '<h2>screen</h2><p>width: '+window.screen.width + '</p>';        /* câu lệnh hiển thị chiều dài màn hình */

msg += '<p>height: ' + window.screen.height + '</p>';                   /* câu lệnh hiển thị chiều cao màn hình */

var el = document.getElementById('info');

el.innerHTML = msg;                                         /* thay đổi nội dung = 1 link và độ bảo mật thấp hơn */

alert('Current page: ' + window.location);