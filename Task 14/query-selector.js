// queryselector only returns the first match
var el = document.querySelector('li.hot');          //thay đổi hot trong li thành cool đc tính vào giá trị đầu tiên
el.className = 'cool';

// queryselectorall return a nodelist.
// the third li element is then selected and changed.
var els = document.querySelectorAll('li.hot');
els[1].className = 'cool';                  // thay đổi li.hot thành cool và chọn li.hot muốn thay đổi