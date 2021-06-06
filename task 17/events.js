$(function (){
    var ids = '';
    var $listItem = $('li');

    $listItem.on('mouseover click', function (){
        ids = this.id;
        $listItem.children('span').remove();
        $(this).append(' <span class="priority">' + ids + '</span>');
    });

    $listItem.on('mouseout', function (){
        $(this).children('span').remove();
    });
});