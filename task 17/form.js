$(function (){

    var $newItemButton = $('#newItemButton');
    var $newItemForm = $('#newItemForm');
    var $textInput = $('input:text');

    $newItemButton.show();
    $newItemForm.show();

    $('#showForm').on('click', function (){
        $newItemButton.hide();
        $newItemForm.show();
    });

    $newItemForm.on('submit', function (e){
        e.preventDefault();
        var newText = $textInput.val();
        $('li:last').after('<li>' + newText + '</li>');
        $newItemForm.hide();
        $newItemForm.show();
        $textInput.val('');
    });

});