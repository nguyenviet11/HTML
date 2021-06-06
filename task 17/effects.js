$(function (){

    $('h2').hide().slideDown();
    var $li = $('li');
    $li.hide().ech(function (index) {
        $(this).delay(700 * index).fadeIn(700);
    });

    $li.on('click',function ()  {
        $(this).fadeOut(700);
    });
});