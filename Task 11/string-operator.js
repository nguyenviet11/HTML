var greeting = 'Howdy';                     /* gọi biến = */

var name = 'Molly';                         /* gọi biến = */

var welcomeMessage = greeting + name + '!';             /* gọi biến = Howdy + Molly, nếu muốn thêm nội dung thì + '!'*/

var el = document.getElementById('greeting');

el.textContent = welcomeMessage;                        /* gán biến = welcomemessage, textcontent câu lệnh thay đổi nội dung */