/*
    button动画效果
*/
var angleStart = -360;
// jquery rotate animation
function rotate(li,d) {
    $({d:angleStart}).animate({d:d}, {
        step: function(now) {
            $(li)
                .css({ transform: 'rotate('+now+'deg)' })
                .find('label')
                .css({ transform: 'rotate('+(-now)+'deg)' });
        }, duration: 0
    });
}
// show / hide the options
function toggleOptions(s) {
    $(s).toggleClass('open');
    var li = $(s).find('li');
    var deg = $(s).hasClass('half') ? 180/(li.length-1) : 360/li.length;
    for(var i=0; i<li.length; i++) {
        var d = $(s).hasClass('half') ? (i*deg)-90 : i*deg;
        $(s).hasClass('open') ? rotate(li[i],d) : rotate(li[i],angleStart);
    }
}
$('.firstshow').mouseover(function () {
    $(this).css("transition","1s");
    $(this).text("Go?");
    // $('.selector label').css("box-shadow","2px  2px  #2F4056"); 取消展开按钮的阴影效果
    toggleOptions($(this).parent());
});
$('.firstshow').mouseout(function () {
    $(this).css("transition","1s");
    $(this).text("Go");
    $('.selector label').css("box-shadow","none");
    toggleOptions($(this).parent());
});


/*
    跟随button消失出现页面
*/
$('.firstshow').click(function () {
    $(this).css("transition",'1s');
    $(this).css("transform",'translate(-150px,0)');
    $('.selector label').text("!");
    var movetime =setInterval(function () {
        $('.firstshow').css("transition",'1s');
        $('.firstshow').css("transform",'translateX('+$(document.body).width()+'px)');
        if($('.firstshow').offset().left >= $(document.body).width()){
            $('.firstshow').css("display",'none');
            $('.selector').css("display","none");
            $('.container').show(1150);
            $('.footer').show(1150);
            clearInterval(movetime);
        }
    },500);
});

/*首页导航栏鼠标悬浮出现线条*/
$('.container_header_item ul li a').mouseover(function () {
    $(this).next().css("transition",'0.5s');
    $(this).next().animate({width:"100%"},50);
    $(this).next().show();
});
$('.container_header_item ul li a').mouseout(function () {
    $(this).next().css("transition",'0.5s');
    $(this).next().animate({width:"0"},50);
});

/*滚动条下滑出现页面动画*/
$(window).on("scroll", function(){
    var top = $(this).scrollTop(); // 当前窗口的滚动距离
    if(top>50){
        $('.container_header').css("transition","1s");
        $('.container_header_logo').css("transition","1s");
        $('.container_header_logo').css("margin-left","200px");
        $('.container_header').css("background","white");
        $('.container_header').addClass("boxshadow")
        $('.container_header_item ul li a ').css("color","black");
        $('.container_header_logo a ').css("color","black");
        $('.nowitem').css("background","black");
        $('.chose').css("background","black");
        $('.container_header').css("position",'fixed');
        $('.container_header_item').css("transition","1s");
        $('.container_header_item').css("margin-right","10%");
        $('.container_item_one').show(1000);
    }if(top==0){
        $('.container_header').css("transition","1s");
        $('.container_header').removeClass("boxshadow")
        $('.container_header_logo').css("transition","1s");
        $('.container_header_item').css("transition","1s");
        $('.container_header_logo').css("margin-left","100px");
        $('.container_header').css("background","");
        $('.container_header_item ul li a ').css("color","white");
        $('.container_header_item').css("margin-right","20%");
        $('.container_header_logo a ').css("color","white");
        $('.nowitem').css("background","white");
        $('.chose').css("background","white");
        $('.container_header').css("position",'absolute');
    }
});

/*个人技能百分比title鼠标悬浮左右移动动画*/
$('.container_item_one_footer').mouseover(function () {
    $(this).eq(0).animate({left:"80%"},500);
});
$('.container_item_one_footer').mouseout(function () {
    $(this).eq(0).animate({left:"0"},500);
});