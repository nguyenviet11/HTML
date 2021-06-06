$(function (){
    var $p = $('p');

    var $cloneQuote = $p.clone();
    $p.remove();
    $cloneQuote.insertAfter('h2');

    var $moveItem = $('#one').detach();
    $moveItem.append('ul');

});