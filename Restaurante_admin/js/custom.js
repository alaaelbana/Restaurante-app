var menu = ['الطلبات الملغية', 'الطلبات الغير مدفوعة'];
var mySwiper
mySwiper = new Swiper('.swiper-container', {
    // If we need pagination
    activeIndex: 2,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<div class="' + className + '"><span>' + menu[index] + '</span></div>';
        }
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    on: {
        'slideChange': function () {
            $('.swiper-slide:not(.swiper-slide-active) .receive_orders_box .full_order_box').fadeIn()
            $('.swiper-slide-active .receive_orders_box .full_order_box').fadeOut()
        },
    },
});

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
$('.cover ,.nav_bar .nav_links_box a,.nav_links_box .nav_categories a').click(function () {
    $('.nav_categories').slideUp()
    if (window.location.hash == "#delete_category_single") {
        history.back()
    }
    if (window.location.hash == "#remove_order") {
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
$('.chart_2_link').click(function () {
    document.getElementById('chart_2').scrollIntoView({
        behavior: 'smooth'
    })
})
$('.chart_1_link').click(function () {
    document.getElementById('chart_1').scrollIntoView({
        behavior: 'smooth'
    })
})

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
            $('.delete_category_conf').hide()
            $('.page_name').text('حذف تصنيف')
            $('.delete_category_box').show()
            $('.cover').fadeOut()
        } else if (window.location.hash == "#delete_category_single") {
            if (if_delete == 1) {
                $('.cover').fadeIn()
                $('.delete_category_conf').show()
                if_delete = 0
            } else {
                history.back()
            }
        } else {
            if_delete = 0
            $('.delete_category_conf').hide()
            $('.delete_category_box').hide()
            $('.nav_categories').slideUp()
            $('.expand_more').removeClass('rotat')
            $('.nav_bar').removeClass('nav_show')
            $('.nav_bar').fadeOut()

        }
        if (window.location.hash == "#add_product") {
            $('.add_product_box').show()
            $('.page_name').text('أضف منتج')
        } else {
            $('.add_product_box').hide()
        }
        if (window.location.hash == "#edit_product") {
            $('.edit_product_box').show()
            $('.page_name').text('تعديل منتج')
        } else {
            $('.edit_product_box').hide()
        }
        if (window.location.hash == "#delete_product") {
            $('.delete_product_box').show()
            $('.page_name').text('حذف منتج')
        } else {
            $('.delete_product_box').hide()
        }

        if (window.location.hash == "#orders") {
            $('.receive_orders_box').show()
            $('.page_name').text('الطلبات')
            $('.cover').fadeOut()
            $('.delete_order_conf').hide()
        } else if (window.location.hash == "#remove_order") {
            $('.receive_orders_box').show()
            $('.page_name').text('الطلبات')
            $('.cover').fadeIn()
            $('.delete_order_conf').show()
        } else {
            $('.receive_orders_box').hide()
            $('.delete_order_conf').hide()
        }

        if (window.location.hash == "#tax") {
            $('.add_tax_box').show()
            $('.page_name').text('الضريبة')
        } else {
            $('.add_tax_box').hide()
        }

        if (window.location.hash == "#customer_page") {
            $('.acounts_page').show()
            $('.acounts_box').hide()
            $('.customer_page').show()
            $('.page_name').text('حسابات العملاء')
        } else if (window.location.hash == "#chef_page") {
            $('.acounts_page').show()
            $('.acounts_box').hide()
            $('.chef_page').show()
            $('.page_name').text('حسابات الطهاه')
        } else if (window.location.hash == "#waiter_page") {
            $('.acounts_page').show()
            $('.acounts_box').hide()
            $('.waiter_page').show()
            $('.page_name').text('حسابات النادل')
        } else if (window.location.hash == "#casher_page") {
            $('.acounts_page').show()
            $('.acounts_box').hide()
            $('.casher_page').show()
            $('.page_name').text('حساب الكشير')
        } else if (window.location.hash == "#all_page") {
            $('.acounts_page').show()
            $('.acounts_box').hide()
            $('.all_page').show()
            $('.page_name').text('الحساب الشامل')
        } else {
            $('.acounts_page').hide()
            $('.acounts_box').hide()
        }

        if (window.location.hash == "#new_acount") {
            $('.new_acc_page').show()
            $('.page_name').text('إنشاء حساب جديد')

        } else {
            $('.new_acc_page').hide()
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
$('.delete_box .delete_confirmation .delete_confirmation_btns button').click(function () {
    history.back()
})

$('.order_box .order_text .order_options select').change(function () {
    size_selected = $(this).parent().find('.selected').attr('data-value')
    $(this).parents('.order_text').find('.order_price span').addClass('hide')
    $(this).parents('.order_text').find('.order_price span:nth-child(' + size_selected + ')').removeClass('hide')
    $(this).parents('.order_text').find('.order_num .input_num').val($(this).parent().find('.nice-select .selected').attr('price_val'))
})

$('.add_tax_box .add_tax .input_box #flat_tax').change(function () {
    $('.add_tax_box .add_tax .tax_val_box .flat_tax_text span').text($(this).val() + ' جنيه')
})
$('.add_tax_box .add_tax .input_box #variable_tax').change(function () {
    $('.add_tax_box .add_tax .tax_val_box .variable_tax_text span').text($(this).val() / 100 * 1000 + ' جنيه')
})