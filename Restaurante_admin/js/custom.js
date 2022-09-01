$('.categories_link').click(function () {
    $(this).parent().find('.nav_categories').slideToggle()
    $(this).find('.expand_more').toggleClass('rotat')
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
    if (window.location.hash == "#delete_category_single") {
        history.back()
    }
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
var if_delete = 0
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
                $('.edit_category_sinle .file_input').val('')
            } else {
                history.back()
            }
        } else {
            if_edit = 0
            $('.edit_category_sinle').hide()
        }
        if (window.location.hash == "#delete_category") {
            $('.delete_confirmation_box').hide()
            $('.page_name').text('حذف تصنيف')
            $('.delete_category_box').show()
            $('.cover').fadeOut()

        } else if (window.location.hash == "#delete_category_single") {
            if (if_delete == 1) {
                $('.cover').fadeIn()
                $('.delete_confirmation_box').show()
                if_delete = 0
            } else {
                history.back()
            }
        } else {
            if_delete = 0
            $('.delete_confirmation_box').hide()
            $('.delete_category_box').hide()
            $('.cover').fadeOut()

        }
        if (window.location.hash == "#add_producer") {
            $('.add_producer_box').show()
            $('.page_name').text('أضف منتج')
        } else {
            $('.add_producer_box').hide()
        }
    });
}


$('.input_box .file_input').change(function () {
    if (!$(this).get(0).files[0]) return;
    $(this).parent().find('label img').attr("src", URL.createObjectURL($(this).get(0).files[0]))
    $(this).parent().find('.img_show').removeClass('img_show')

})


$('.edit_category_box .category_box').click(function () {
    $('.edit_category_sinle .add_category #edit_categorie_name_input').val($(this).find('.category_name').text())
    $(".edit_category_sinle .categorie_img label img").attr("src", $(this).find('.category_img img').attr('src'))
    $('.edit_category_sinle .edit_categorie_img_show').addClass('img_show')
    if_edit = 1
})
$('.delete_category_box .category_box').click(function () {
    if_delete = 1
})
$('.delete_confirmation_box .delete_confirmation .delete_confirmation_btns button').click(function () {
    history.back()
})