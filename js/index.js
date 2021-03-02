var width = $(window).width(); 
window.onscroll = function(){
    if ((width >= 1000)){
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            $("#header").css("background","#fff");
            $("#header").css("color","#000");
            $("#header").css("box-shadow","0px 0px 20px rgba(0,0,0,0.09)");
            $("#header").css("padding","2vh 2vw");
            $("#navigation li a").hover(function(){
                $(this).css("border-bottom","2px solid rgb(21, 44, 90)");
            },function(){
                $(this).css("border-bottom","2px solid transparent");
            });
        }else{
            $("#header").css("background","transparent");
            $("#header").css("color","#fff");
            $("#header").css("box-shadow","0px 0px 0px rgba(0,0,0,0)");
            $("#header").css("padding","4vh 2vw");
            $("#navigation li a").hover(function(){
                $(this).css("border-bottom","2px solid #fff");
            },function(){
                $(this).css("border-bottom","2px solid transparent");
            });
        }
    }
}

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            let scrollHeight= (parseInt($(hash).offset().top)-40)+"px"
            $('body,html').animate({
            scrollTop: scrollHeight
            }, 500 );
       }else{
            this.hash="#view"
       } 
      });
      if ((width < 950)){
            $("#header").css("background","#fff");
            $("#header").css("color","#000");
            $("#header").css("box-shadow","0px 0px 20px rgba(0,0,0,0.09)");
            $("#header").css("padding","2vh 2vw");
            $("#navigation li a").hover(function(){
                $(this).css("border-bottom","2px solid rgb(21, 44, 90)");
            },function(){
                $(this).css("border-bottom","2px solid transparent");
            });
      }
  });