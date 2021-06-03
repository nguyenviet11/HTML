var elements = document.getElementsByTagName('li');  // find <li> eletements            // truyền vào thẻ li



if (elements.length > 0) {      // if 1 or more are found           // độ dài của mảng nếu lớn hơn 0

    var el = elements[0];   // select the first one using array syntax      // đổi biến li thành cool vào giá trị đầu tiên của li
    el.className = 'cool';  // change the value of the class attribute

}