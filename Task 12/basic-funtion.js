var msg = 'Sign up to receive out newsletter for 10% off';              /* gọi biến */

function updateMessage(){                                       /* gọi 1 hàm */
    var el = document.getElementById('message');
    el.textContent = msg;                                   /* thay đổi nội dung = msg */
}
updateMessage();                                    /* hiển thị hàm lên hmml*/