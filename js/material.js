/**
 * Created by Administrator on 2014/10/23.
 */
$(document).ready(function(){
    /*返回顶部*/

    $('#down_nav_1').click(function () {
        $.scrollTo ( $('#stage1') , 1000);
        $('.down_nav').removeClass("clicked");
        $('#down_nav_1').addClass("clicked");
    });
    $('#down_nav_2').click(function () {
        $.scrollTo ( $('#stage2') , 1000);
        $('.down_nav').removeClass("clicked");
        $('#down_nav_2').addClass("clicked");
    });
    $('#down_nav_3').click(function () {
        $.scrollTo ( $('#stage3') , 1000);
        $('.down_nav').removeClass("clicked");
        $('#down_nav_3').addClass("clicked");
    });
    $('#down_nav_4').click(function () {
        $.scrollTo ( $('#stage4') , 1000);
        $('.down_nav').removeClass("clicked");
        $('#down_nav_4').addClass("clicked");
    });
    $('#down_nav_5').click(function () {
        $.scrollTo ( $('#stage5') , 1000);
        $('.down_nav').removeClass("clicked");
        $('#down_nav_5').addClass("clicked");
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 132) {
            $('#navigator').addClass("after_fixed");
            $('#after_fixed_div').css("display", "block");
        } else {
            $('#navigator').removeClass("after_fixed");
            $('#after_fixed_div').css("display", "none");
        }
    });

});