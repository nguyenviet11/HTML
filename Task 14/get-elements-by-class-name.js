var elements = document.getElementsByClassName('hot'); // find hot item  // thuộc tính hot trong id

if(elements.length > 2) { // if 3 or more are found//

    var el = elements[2]; // select the third one from the nodelist//           // đổi thuộc tính hot thành cool giá trị t2 trong mảng hot
    el.className = 'cool';  // change the value of its class attribute//

}