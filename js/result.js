/**
 * Created by Administrator on 2014/10/25.
 */
/**
 * Created by Administrator on 2014/10/25.
 */
/**
 * Created by Administrator on 2014/10/23.
 */
$(document).ready(function(){
    /*返回顶部*/

    $('#down_nav_1').click(function () {
        $.scrollTo ( $('#stage2') , 1000);
        $('.down_nav').removeClass("clicked");
        $('#down_nav_1').addClass("clicked");
    });
    $('#down_nav_2').click(function () {
        $.scrollTo ( $('#stage3') , 1000);
        $('.down_nav').removeClass("clicked");
        $('#down_nav_2').addClass("clicked");
    });
    $('#down_nav_3').click(function () {
        $.scrollTo ( $('#stage4') , 1000);
        $('.down_nav').removeClass("clicked");
        $('#down_nav_3').addClass("clicked");
    });
    $('#down_nav_4').click(function () {
        $.scrollTo ( $('#stage5') , 1000);
        $('.down_nav').removeClass("clicked");
        $('#down_nav_4').addClass("clicked");
    });
    $('#down_nav_5').click(function () {
        $.scrollTo ( $('#stage7') , 1000);
        $('.down_nav').removeClass("clicked");
        $('#down_nav_5').addClass("clicked");
    });
    $('#down_nav_6').click(function () {
        $.scrollTo ( $('#stage8') , 1000);
        $('.down_nav').removeClass("clicked");
        $('#down_nav_6').addClass("clicked");
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 132) {
            $('#navigator').addClass("after_fixed");
            $('#after_fixed_div').css("display", "block");
        } else {
            $('#navigator').removeClass("after_fixed");
            $('#after_fixed_div').css("display", "none");
        }



        if($(window).scrollTop() < 245) {
            $('.down_nav').removeClass("clicked");
        }
        else if($(window).scrollTop() >= 245 && $(window).scrollTop() < 1715){
            $('.down_nav').removeClass("clicked");
            $('#down_nav_1').addClass("clicked");
        }
        else if($(window).scrollTop() >= 1715 && $(window).scrollTop() < 4765){
            $('.down_nav').removeClass("clicked");
            $('#down_nav_2').addClass("clicked");
        }
        else if($(window).scrollTop() >= 4765 && $(window).scrollTop() < 6063){
            $('.down_nav').removeClass("clicked");
            $('#down_nav_3').addClass("clicked");
        }
        else if($(window).scrollTop() >= 6063 && $(window).scrollTop() < 6773){
            $('.down_nav').removeClass("clicked");
            $('#down_nav_4').addClass("clicked");
        }
        else if($(window).scrollTop() >= 6773 && $(window).scrollTop() < 7491){
            $('.down_nav').removeClass("clicked");
            $('#down_nav_5').addClass("clicked");
        }
        else {
            $('.down_nav').removeClass("clicked");
            $('#down_nav_6').addClass("clicked");
        }
    });

    $('#return_top').click(function(){
        //alert($(window).scrollTop());
        $.scrollTo ( 0 , 1000);
    });

});