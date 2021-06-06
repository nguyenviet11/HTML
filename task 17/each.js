$(function (){
    $('li').each(function (){
        var ids = this.id;
        $(this).append(' <span class="oder")' + ids + '</span>');
    });
});