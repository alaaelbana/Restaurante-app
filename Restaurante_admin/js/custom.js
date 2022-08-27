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
var if_edit = 0
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
        if (window.location.hash == "#add_category") {
            $('.add_category_box').show()
            $('.page_name').text('أضف تصنيف')
        } else {
            $('.add_category_box').hide()
        }
        if (window.location.hash == "#edit_category") {
            $('.edit_category_box').show()
            $('.page_name').text('تعديل تصنيف')
        } else {
            $('.edit_category_box').hide()
        }
        if (window.location.hash == "#edit_category_single") {
            if (if_edit == 1) {
                $('.edit_category_sinle').show()
                $('.page_name').text('تعديل تصنيف')
            } else {
                $('.admin_statistics').show()
                $('.page_name').text('الرئيسية')
            }
        } else {
            if_edit = 0
            $('.edit_category_sinle').hide()
        }
    });
}

const fileinput = document.getElementById('categorie_img_input');
const fileinput_edit = document.getElementById('edit_categorie_img_input');

const loadimg = () => {
    let file = fileinput.files[0];
    if (!file) return;
    $(".categorie_img label img").attr("src", URL.createObjectURL(fileinput.files[0]));
    $('.categorie_img_show').removeClass('categorie_img_show')
}
fileinput.addEventListener("change", loadimg);

const loadimg_edit = () => {
    let file = fileinput_edit.files[0];
    if (!file) return;
    $(".edit_category_sinle .categorie_img label img").attr("src", URL.createObjectURL(fileinput_edit.files[0]));
    $('.edit_category_sinle .edit_categorie_img_show').removeClass('categorie_img_show')
}
fileinput_edit.addEventListener("change", loadimg_edit);

$('.category_box').click(function () {
    $('.edit_category_sinle .add_category #edit_categorie_name_input').val($(this).find('.category_name').text())
    $(".edit_category_sinle .categorie_img label img").attr("src", $(this).find('.category_img img').attr('src'))
    $('.edit_category_sinle .edit_categorie_img_show').addClass('categorie_img_show')
    if_edit = 1
})