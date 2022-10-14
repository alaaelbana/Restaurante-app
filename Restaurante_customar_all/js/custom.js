var menu = ['برجر', 'بيتزا', 'كريب', 'حلو'];
var names = ['burger', 'pizza', 'crepe', 'sweet'];
var imgs = ['Burgers.webp', 'pizza.jpg', 'crepe.jpg', 'sweat.jpeg'];
var mySwiper

mySwiper = new Swiper('.swiper-container', {
    // If we need pagination
    activeIndex: 2,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<div name="' + names[index] + '"  class="' + className + '"><span>' + menu[index] + '</span></div>';
        }
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    on: {
        'slideChange': function () {
            page_hash()
        },
    },
});

function page_hash() {
    setTimeout(() => {
        window.location.hash = $('.swiper-pagination-bullet-active').attr('name')
    }, 100);
}
$('.swiper-slide .order_page').hide()
var idleTime = 0;
$(document).ready(function () {
    if (window.location.hash == "") {
        window.location.hash = "#home"
    }
    // Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 60000); // 1 minute
    // Zero the idle timer on mouse movement.
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
        for (let i = 0; i < $('.input_num').length; i++) {
            $(`.order_box:nth-child(${i + 1} ) .input_num`).val(0)
        }
        $('.option').each(function () {
            $(this).attr('price_val', 0)
        })
        $(".customer_order_details").hide();
        total_amount = 0
    }
}

$('.categories').click(function () {
    $('.swiper-wrapper').addClass('no_animation')
    setTimeout(() => {
        $('.swiper-wrapper').removeClass('no_animation')
    }, 10);
})
$('.order_box').each(function () {
    if ($(this).find('.order_details').height() > 35) {
        $(this).find('.order_details').addClass('hide')
    }
})
$('.categories_link').click(function () {
    $('.nav_categories').slideToggle()
    $('.expand_more').toggleClass('rotat')
})

function back_btn() {
    if (window.location.hash == "#single_order") {
        history.back()
    } else if (window.location.hash == '#queue_order') {
        history.back()
    } else if (window.location.hash == "#show_order") {
        history.back()
    } else if (window.location.hash == "#about") {
        history.back()
    } else if (window.location.hash == "#home") {} else {
        window.location.hash = '#home'
    }
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
    $('.expand_more').removeClass('rotat')
    $('.nav_bar').removeClass('nav_show')
    $('.cover').fadeOut()
    $('.add_note_box').fadeOut()

})
document.getElementById("cover").addEventListener('touchmove', function (e) {
    setTimeout(() => {
        $('.page_content ,.nav_bar').removeClass('nav_show')
        $('.cover').fadeOut()
    }, 100);
}, false);
var img_lg
var img_sm
var div_height
$('.swiper-slide .order_box .order_img ,.swiper-slide .order_box .order_title ,.swiper-slide .order_box .order_details').click(function () {
    window.location.hash = '#single_order'
    div_height = $(this).parents('.order_box').height()
    setTimeout(() => {
        $(this).parents('.order_box').addClass('order_box_large')
        $(this).parents('.order_box').next().css("margin-top", div_height + 20);
    }, 5);
    setTimeout(() => {
        $(this).parents('.order_box').addClass('show')
    }, 50);
    var img_lg = $(this).parents('.order_box').find('.order_img_sm').attr('src-data');
    $(this).parents('.order_box').find('.order_img_sm').attr('src', img_lg);
})
var size_selected
$('.order_box .order_text .order_options select').change(function () {
    size_selected = $(this).parent().find('.selected').attr('data-value')
    $(this).parents('.order_text').find('.order_price span').addClass('hide')
    $(this).parents('.order_text').find('.order_price span:nth-child(' + size_selected + ')').removeClass('hide')
    $(this).parents('.order_text').find('.order_num .input_num').val($(this).parent().find('.nice-select .selected').attr('price_val'))
})
$('.decrease').click(function () {
    var value = $(this).parent().find('.input_num').val();
    value < 1 ? value = '1' : '';
    value--;
    value == 0 ? value = 0 : '';
    $(this).parent().find('.input_num').val(value);
})
$('.increase').click(function () {
    var value = $(this).parent().find('.input_num').val();
    value = isNaN(value) ? 0 : value;
    value++;
    $(this).parent().find('.input_num').val(value);
})

$(".customer_order_details").hide();
$('.show_order_box').hide();
var input_val
var price
var total_amount = 0
var total_amount2 = 0
var price2
$(".customer_order_details").click(function () {
    // if (document.fullscreenElement) {
    //     document.exitFullscreen();
    // } else {
    //     document.documentElement.requestFullscreen();
    // }
});
setTimeout(() => {
    $('.option').each(function () {
        $(this).attr('price_val', 0)
    })
}, 50);
$(".show_order_box .delete_order").click(function () {
    for (let i = 0; i < $('.input_num').length; i++) {
        $(`.order_box:nth-child(${i + 1} ) .input_num`).val(0)
    }
    $('.option').each(function () {
        $(this).attr('price_val', 0)
    })
    $(".show_order_deatils").hide();
    total_amount = 0
})
$(".order_num .value-button").click(function () {
    setTimeout(() => {
        $('.option').each(function () {
            if ($(this).attr('price_val') > 0) {
                $(".show_order_deatils").show();
            }
        })
    }, 1);
    $(".input_num").each(function () {
        if ($(this).val() == 0) {
            $(".show_order_deatils").hide();
        }
    });
    $('.swiper-slide .order_page').each(function () {
        for (let i = 0; i < $(this).find('.input_num').length; i++) {
            if ($(this).find(`.order_box:nth-child(${i + 1} ) .input_num`).val() > 0) {
                $(".show_order_deatils").show();
            }
        }
    })

    $(this).parents('.order_box').find('.nice-select .selected').attr('price_val', $(this).parent().find('.input_num').val())
});

$(".order_num .input_num").change(function () {
    $(".input_num").each(function () {
        if ($(this).val() == 0) {
            $(".show_order_deatils").hide();
        }
    });
    $('.swiper-slide .order_page').each(function () {
        for (let i = 0; i < $(this).find('.input_num').length; i++) {
            if ($(this).find(`.order_box:nth-child(${i + 1} ) .input_num`).val() > 0) {
                $(".show_order_deatils").show();
            }
        }
    })

    $(this).parents('.order_box').find('.nice-select .selected').attr('price_val', $(this).val())
});
$('.send_order').click(function () {
    window.location.hash = '#queue_order'
})

var val = 0
if (window.history && window.history.pushState) {
    $(window).on('popstate', function () {
        $('.pages_nav').removeClass('pages_nav_show')
        if (window.location.hash == "#home") {
            $('.user_name_box').show()
            $('.page_name').text('اسم المستخدم')
        } else {
            $('.user_name_box').hide()
        }
        if (window.location.hash == "#categories") {
            $('.categories').removeClass('hide')
            $('.page_name').text('الأصناف')
            $('.swiper-slide .order_page').hide()
        } else {
            $('.categories').addClass('hide')
        }
        $('.swiper-slide .order_page').each(function () {
            for (let i = 0; i < $(this).find('.input_num').length; i++) {
                if ($(this).find(`.order_box:nth-child(${i + 1} ) .option`).length > 0) {
                    $(this).find(`.order_box:nth-child(${i + 1} ) .option`).each(function () {
                        if ($(this).attr('price_val') > 0) {
                            val = 1
                        }
                    })
                } else if ($(this).find(`.order_box:nth-child(${i + 1} ) .input_num`).val() > 0) {
                    val = 1
                }
            }
        })
        if (val > 0) {
            if (window.location.hash == "#show_order") {
                $(".show_order_box .show_order").html('')
                $('.swiper-slide .order_page').each(function () {
                    for (let i = 0; i < $(this).find('.order_box').length; i++) {
                        if ($(this).find(`.order_box:nth-child(${i + 1} ) .option`).length > 0) {
                            $(this).find(`.order_box:nth-child(${i + 1} ) .option`).each(function () {
                                setTimeout(() => {
                                    if ($(this).attr('price_val') > 0) {
                                        price2 = $(this).attr('data-value')
                                        price = $(this).parents('.order_box').find(`.order_text .order_price span:nth-child(${price2})`).text()
                                        input_val = $(this).attr('price_val')
                                        $(".show_order_box .show_order").append(
                                            '<div class="order_box">' +
                                            '<div class="order_img">' +
                                            $(this).parents('.order_box').find('.order_img').html() +
                                            '</div>' +
                                            '<div class="order_text">' +
                                            '<div class="order_title">' +
                                            $(this).parents('.order_box').find('.order_text .order_title').html() +
                                            '</div>' +
                                            '<div class="order_details">' +
                                            $(this).parents('.order_box').find('.order_text .order_details').html() +
                                            '</div>' +
                                            '<div class="order_options">الحجم: <span>' +
                                            $(this).text() +
                                            '<span></div>' +
                                            `<div class="order_price">${price} جنيه</div>` +
                                            '<div class="order_num">' +
                                            `<input class="input_num" type="number" id="" min="0" max="999" value="${input_val}">` +
                                            '</div>' +
                                            '</div>' +
                                            '</div>'
                                        );
                                        total_amount2 = total_amount2 + (price * input_val)
                                    }
                                }, 100);
                            })
                        } else if ($(this).find(`.order_box:nth-child(${i + 1}) .input_num`).val() > 0) {
                            setTimeout(() => {
                                input_val = $(this).find(`.order_box:nth-child(${i + 1} ) .input_num`).val()
                                price = $(this).find(`.order_box:nth-child(${i + 1} ) .input_num`).parents('.order_box').find('.order_text .order_price span:not(.hide)').text()
                                $(".show_order_box .show_order").append(
                                    '<div class="order_box">' +
                                    '<div class="order_img">' +
                                    $(this).find(`.order_box:nth-child(${i + 1} ) .input_num`).parents('.order_box').find('.order_img').html() +
                                    '</div>' +
                                    '<div class="order_text">' +
                                    '<div class="order_title">' +
                                    $(this).find(`.order_box:nth-child(${i + 1} ) .input_num`).parents('.order_box').find('.order_text .order_title').html() +
                                    '</div>' +
                                    '<div class="order_details">' +
                                    $(this).find(`.order_box:nth-child(${i + 1} ) .input_num`).parents('.order_box').find('.order_text .order_details').html() +
                                    '</div>' +
                                    `<div class="order_price">${price} جنيه</div>` +
                                    '<div class="order_num">' +
                                    `<input class="input_num" type="number" id="" min="0" max="999" value="${input_val}">` +
                                    '</div>' +
                                    '</div>' +
                                    '</div>'
                                );
                                total_amount = total_amount + (price * input_val)
                            }, 130);
                        }
                    }
                })

                setTimeout(() => {
                    $(".show_order_box .show_order").append(
                        `<div class="order_total_price">
                            <span>
                                السعر :
                            </span>
                            <span>
                                ${total_amount + total_amount2} جنيه
                            </span>
                        </div>
                        <div class="order_total_price">
                            <span>
                                الضريبة :
                            </span>
                            <span>
                            ${Math.round(10/100*(total_amount + total_amount2))} جنيه
                            </span>
                        </div>
                        <div class="order_total_price">
                            <span>
                                المجموع الكلي :
                            </span>
                            <span>
                                <i class="material-icons-outlined">payments</i>
                                ${Math.round(total_amount + total_amount2 + 10/100*(total_amount + total_amount2))} جنيه
                            </span>
                        </div>`
                    )
                }, 150);

                $('.show_order_box').show();
                $('.show_order_box').addClass('show');
                $('.page_name').text('الطلب الخاص بك')
            } else {
                $('.show_order_box').removeClass('show');
                setTimeout(() => {
                    $('.show_order_box').hide();
                }, 500);
                total_amount = 0
                total_amount2 = 0
                val = 0
                $(".show_order_box .show_order").html('')
                $('.add_note_box').hide()
            }
        } else {
            if (window.location.hash == "#show_order") {
                window.location.hash = "#home"
            }

        }
        for (let i = 0; i < names.length; i++) {
            if (window.location.hash == "#" + names[i]) {
                $('.swiper-pagination-bullet:nth-child(' + [i + 1] + ')').click()
                $('.swiper-slide:not(.swiper-slide-active) .order_page').fadeOut()
                $('.swiper-slide-active .order_page').fadeIn()
                $('.page_name').text('قائمة الطعام')
            }
        }

        if (window.location.hash == "#single_order") {
            $('.page_name').text('قائمة الطعام')
            $('.swiper-slide:not(.swiper-slide-active) .order_page').fadeOut()
            $('.swiper-slide-active .order_page').fadeIn()
        } else {
            $('.order_box').removeClass('order_box_large show')
            $('.order_box').css("margin-top", '0');
            $('.order_box .order_img').each(function () {
                img_sm = $(this).find('.order_img_sm').attr('src-data-sm');
                $(this).find('.order_img_sm').attr('src', img_sm);
            })
            $('.order_box').each(function () {
                if ($(this).find('.order_details').height() > 35) {
                    $(this).find('.order_details').addClass('hide')
                }
            })
        }
        if (window.location.hash == "#orders") {
            $('.receive_orders_box').show()
            $('.page_name').text('الطلبات')
        } else {
            $('.receive_orders_box').hide()
        }
        if (window.location.hash == "#about") {
            $('.about_us_page').show()
            $('.page_name').text('عن مطعمنا')
            $('.swiper-slide .order_page').hide()
        } else {
            $('.about_us_page').hide()
        }
        if (window.location.hash == "#queue_order") {
            $('.queue_box').show()
        } else {
            $('.queue_box').hide()
        }
        if (window.location.hash == "#waiting_order") {
            $('.waiting_order').show()
        } else {
            $('.waiting_order').hide()
        }
    });
}

for (let i = 0; i < names.length; i++) {
    $(".categories").append('<a href="#' + names[i] + '"><div><img loading="lazy" src="imgs/categories/' + imgs[i] + '" alt="' + names[i] + ' image"></div><span>' + menu[i] + '<span></a>')
    $(".nav_categories").append('<a href="#' + names[i] + '">' + menu[i] + '</a>')
}

$('.show_order_box .add_note').click(function () {
    $('.add_note_box').fadeIn()
    $('.cover').fadeIn()
})
$('.add_note_box .close_btn').click(function () {
    $('.add_note_box').fadeOut()
    $('.add_note_box .add_note_input textarea').val('')
    $('.cover').fadeOut()
})
$('.add_note_box .add_note_btn button').click(function () {
    $('.add_note_box').fadeOut()
    $('.cover').fadeOut()
})




$(".queue_box .order_num .value-button").click(function () {
    queue_order_btn()
})
$(".queue_box .order_num .input_num").change(function () {
    queue_order_btn()
})

function queue_order_btn() {
    $(".queue_box .input_num").each(function () {
        if ($(this).val() == 0) {
            $(".queue_box .customer_order_details").hide();
        }
    });
    $('.queue_box .order_page').each(function () {
        for (let i = 0; i < $(this).find('.input_num').length; i++) {
            if ($(this).find(`.order_box:nth-child(${i + 1} ) .input_num`).val() > 0) {
                $(".queue_box .customer_order_details").show();
            }
        }
    })
}


$(".user_name_box .user_name .chips_box .chip").click(function () {
    $(".user_name_box .input_box input").val($(this).text())
})

$('.user_name_box .input_box #send_user_name').click(function () {
    if ($(".user_name_box .input_box input").val() != "") {
        $(".user_name_box .user_name .chips_box").append('<div class="chip">' + $('.user_name_box .input_box input').val() + '</div>')
        window.location.hash = "#categories"
    }
})