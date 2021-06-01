var originalNumber = 10.23456;              /* gán biến cho 1 số */

var msg = '<h2>original number </h2><p>' + originalNumber + '</p>';

msg += '<h2>3 decimal places</h2><p>' + originalNumber.toFixed(3)'</p>';        /* cắt đến số thập phân đến 3 */

msg += '<h2>3 digits</h2><p>' + originalNumber.toPrecision(3) + '</p>';

var el = document.getElementById('info');

el.innerHTML = msg;