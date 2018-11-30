$(document).ready(function () {

    // Toggle sidenav
    $(document).on("click", "header .navbar-collopse", function () {
        $('.nav > li > a > span').toggleClass('hide');
        $('body').toggleClass('minbar')
        $('ul.nav > li').removeClass('open');
        if ($('body').hasClass('minbar')) {
            $('.main aside').animate({
                width: 60
            }, 400)
            $('.main').animate({
                "margin-left": 60
            }, 400)
        } else {
            $('.main aside').animate({
                width: 220
            }, 400)
            $('.main').animate({
                "margin-left": 220
            }, 400)
        }
        // $('.main aside').toggleClass('w-50');

    });

    // Sidenav toggle active and open
    $(document).on("click", "ul.nav > li > a", function () {
        $('ul.nav > li').removeClass('active');

        var $li = $(this).closest('li');
        $li.addClass('active');
        if (!$li.hasClass('open')) {
            $('ul.nav > li.dropdown').removeClass('open');
            $('ul.nav > li.dropdown ul').animate({
                opacity: 0,
                "margin-left": "-5rem"
            }, 20);
        }

        if ($li.hasClass('dropdown')) {
            if (!$li.hasClass('open')) {
                $li.find('ul').animate({
                    opacity: 1,
                   // height: $li.find('ul').get(0).scrollHeight,
                    "margin-left": "0"
                }, 50);
            } else {
                $li.find('ul').animate({
                    opacity: 0,
                    "margin-left": "-5rem"
                }, 20);
            }
            $li.toggleClass('open');
        }
    });
})