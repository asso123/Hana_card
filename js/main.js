//event_box2 slider
$('.eb_slider_list').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    pauseOnHover: false, //마우스를 올렸을때 오토플레이가 멈추는 기능 해제

});

$('.page_act .page_act .btn_stop').click(function (e) {
    e.preventDefault();
    if ($('.event_box2 .page_act').hasClass("on")) {
        $('.event_box2 .page_act').removeClass("on")
        $('.eb_slider_list').slick("slickPause")
    }
})


$('.page_act .page_act .btn_play').click(function (e) {
    e.preventDefault();
    $('.event_box2 .page_act').addClass("on");
    $('.eb_slider_list').slick("slickPlay")
})

$('.card').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    pauseOnHover: false, //마우스를 올렸을때 오토플레이가 멈추는 기능 해제

});

$('.event_box3 .pagn_act .btn_stop').click(function (e) {
    e.preventDefault();
    if ($('.event_box3 .pagn_act').hasClass("on")) {
        $('.event_box3 .pagn_act').removeClass("on")
        $('.card').slick('slickPlay');
    }
})

$('.event_box3 .pagn_act .btn_play').click(function (e) {
    e.preventDefault();
    if ($('.event_box3 .pagn_act').addClass("on")) {
        $('.card').slick('slickPlay');
    }
})

//life버튼
let tab = $('.life_menu ul li');
let menu = $('.life_style li');

tab.mouseover(function () {
    let target = $(this);
    let index = target.index(); //index 태생적으로 가지고 나온 번호를 추출하는 방법 index()
    console.log(index)
    menu.css({
        opacity: 0
    })
    menu.eq(index).css({
        opacity: 1
    })

});