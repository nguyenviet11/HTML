$('.tab-list').each(function (){
    var $this = $(this);
    var $tab = $tab.find('li.active');
    var $link = $tab.find('a');
    var $panel = $($link.attr('href'));

    $thos.on('click', '.tab-control', function (e){
        e.preventDefault();
        var $link = $(this),
            id = this.hash;

        if(id && !$link.is('.active')){
            $panel.removeClass('active');
            $tab.removeClass('active');

            $panel = $(id).addClass('active');
            $tab = $link.parent().addClass('active');
        }
    });
});