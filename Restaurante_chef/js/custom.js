$('.categories_link').click(function () {
    $(this).parent().find('.nav_categories').slideToggle()
    $(this).find('.expand_more').toggleClass('rotat')
})

function back_btn() {
    history.back()
}

$('.menu_btn').click(function () {
    $('.nav_bar').show()
    setTimeout(() => {
        $('.nav_bar').toggleClass('nav_show')
    }, 10);
    $('.cover').fadeToggle()
})
$('.cover ,.nav_bar .nav_links_box a,.nav_links_box .nav_categories').click(function () {
    $('.nav_categories').slideUp()
    if (window.location.hash == "#delete_category_single") {
        history.back()
    }
    $('.expand_more').removeClass('rotat')
    $('.nav_bar').removeClass('nav_show')
    $('.nav_bar').fadeOut()
    $('.cover').fadeOut()
})

document.getElementById("cover").addEventListener('touchmove', function (e) {
    setTimeout(() => {
        $('.page_content ,.nav_bar').removeClass('nav_show')
        $('.nav_bar').fadeOut()
        $('.cover').fadeOut()
    }, 100);
}, {
    passive: true
});

if (window.history && window.history.pushState) {
    $(window).on('popstate', function () {
        if (window.location.hash == "") {
            $('.admin_statistics').show()
            $('.page_name').text('الرئيسية')
        } else if (window.location.hash == "#home") {
            $('.admin_statistics').show()
            $('.page_name').text('الرئيسية')
        } else {
            $('.admin_statistics').hide()
        }
    });
}   