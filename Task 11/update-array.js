var colors = ['white', 'black' , 'custom'];                 /* gọi 1 mảng 3 phần tử */

colors[2] = 'beige';                                        /* gán phần tử t2 = beige */

var el = document.getElementById('colors')

el.textContent = colors[2];                             /* gán biến thay đổi nội dung = color 2 */