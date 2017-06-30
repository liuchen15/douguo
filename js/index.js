/*** Created by Áõ³¿ on 2017/3/22.*/
$(function(){
    $(".hcent_right").hover(
        function(){
            $(".hcent_right .fabu").stop().css({"display":"block"})
        },
        function(){
            $(".hcent_right .fabu").stop().css({"display":"none"})
        }
    )
});
$(function(){
    $(".xt").hover(
        function(){
            $(".xt>.dingwei").stop().css({"display":"block"})
        },
        function(){
            $(".xt>.dingwei").stop().css({"display":"none"})
        }
    )
});
var l=0;
$(function(){
    $(".top_left").click(
        function() {
            $(".list").stop().animate({"left":"-700px"},1000,function(){
                var a= $(".list li:last").remove();
                $(".list").prepend(a);
                $(".list").css("left","-1400px");
                if(l==0){
                    l=5;
                }
                l=l-1
                $(".banner_bottom li").eq(l).stop().addClass("yanse").siblings().removeClass();
            });
        }
    )
});
$(function(){
    $(".top_right").click(
        function() {
            $(".list").stop().animate({"left":"-2100px"},1000,function(){
                var a= $(".list li:first").remove();
                $(".list").append(a);
                $(".list").css("left","-1400px");
                l=l+1
                if(l==5){
                    l=0;
                }
                $(".banner_bottom li").eq(l).stop().addClass("yanse").siblings().removeClass();
            });
        }
    )
});
$(function(){
    $(".banner_bottom>ul>li").click(
        function(){
            var c=$(this).index();
            l=c;
            $(".banner_top ul").stop().animate({"left":l*-700},1000);
            $(this).addClass("yanse").siblings("li").removeClass("yanse");
        }
    )
});
$(function(){
    $(".tupian").hover(
        function(){
            $(this).find(".shengyu").stop().show()
        },
        function(){
            $(this).find(".shengyu").stop().hide()
        }
    );
});
$(function(){
    $(".meishi li>a").hover(
        function(){
            $(this).children("div").stop().animate({"bottom":0})
        },
        function(){
            $(this).children("div").stop().animate({"bottom":-180})
        }
    );
});
$(function(){
    $(".erweima>.shanchu").click(
        function(){
            $(".erweima").stop().css("display","none");
        }
    )
});

