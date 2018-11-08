
$(document).ready(function(){
    $(document).on("click", "ul.nav > li > a", function () {
        $('ul.nav > li').removeClass('active');
        $('ul.nav > li').removeClass('open');
        var $li = $(this).closest('li');
        $li.addClass('active');
        if ($li.hasClass('dropdown')) {
            $li.toggleClass('open');
        }
    });
})