/*** Created by Áõ³¿ on 2017/4/7.*/
$(function(){
    $(".shouchang>div").hover(
        function(){
            $(this).children("div").show();
        },
        function(){
            $(this).children("div").hide();
        }
    )
    $(".fenxiang").hover(
        function(){
            $(this).children(".xiugai").show();
        },
        function(){
            $(this).children(".xiugai").hide();
        }
    )
    $(".guding>.X").click(
        function(){
            $(".guding").hide();
            return false
        }
    )
});
