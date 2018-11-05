
$(document).ready(function(){
    $(document).on("click", "ul.nav li > a", function () {
        $('ul.nav > li').removeClass('active');
        var $li = $(this).closest('li');
        $li.addClass('active');
        if ($li.hasClass('dropdown')) {
            $li.toggleClass('open');
        }
    });
})