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
        else if($(window).scrollTop() >= 245 && $(window).scrollTop() < 851){
            $('.down_nav').removeClass("clicked");
            $('#down_nav_1').addClass("clicked");
        }
        else if($(window).scrollTop() >= 851 && $(window).scrollTop() < 1314){
            $('.down_nav').removeClass("clicked");
            $('#down_nav_2').addClass("clicked");
        }
        else if($(window).scrollTop() >= 1314 && $(window).scrollTop() < 1818){
            $('.down_nav').removeClass("clicked");
            $('#down_nav_3').addClass("clicked");
        }
        else {
            $('.down_nav').removeClass("clicked");
            $('#down_nav_4').addClass("clicked");
        }
    });

    $('#return_top').click(function(){
        //alert($(window).scrollTop());
        $.scrollTo ( 0 , 1000);
    });

});