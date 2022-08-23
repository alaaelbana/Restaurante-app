var idleTime = 0;
$(document).ready(function () {
    var idleInterval = setInterval(timerIncrement, 60000);
    document.addEventListener('touchmove', function (e) {
        idleTime = 0;
    }, false);
    $("body").mousemove(function (e) {
        idleTime = 0;
    });
    $("body").click(function (e) {
        idleTime = 0;
    });
});

function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 4) { // 20 minutes
        window.location.hash = '#home'
        total_amount = 0
    }
}

$('.categories_link').click(function () {
    $('.nav_categories').slideToggle()
    $('.expand_more').toggleClass('rotat')
})

function back_btn() {
    history.back()
}

$('.menu_btn').click(function () {
    $('.nav_bar').toggleClass('nav_show')
    $('.cover').fadeToggle()
})
$('.cover ,.nav_bar .nav_links_box a,.nav_links_box .nav_categories').click(function () {
    $('.nav_categories').slideUp()
    $('.expand_more').removeClass('rotat')
    $('.nav_bar').removeClass('nav_show')
    $('.cover').fadeOut()
})
document.getElementById("cover").addEventListener('touchmove', function (e) {
    setTimeout(() => {
        $('.page_content ,.nav_bar').removeClass('nav_show')
        $('.cover').fadeOut()
    }, 100);
}, false);

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
        if (window.location.hash == "#about") {
            $('.about_us_page').show()
            $('.page_name').text('عن مطعمنا')
        } else {
            $('.about_us_page').hide()
        }
    });
}

const fileinput = document.querySelector('.file_input');

const loadimg = () => {
    let file = fileinput.files[0];
    if (!file) return;
    $(".categorie_img label img").attr("src", URL.createObjectURL(fileinput.files[0]));
}
fileinput.addEventListener("change", loadimg);