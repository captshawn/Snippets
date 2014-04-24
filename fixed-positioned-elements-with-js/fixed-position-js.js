// Fixed Menu

var $body = $("body");
var $fixedElement = $(".fixed-element");
var offset = $fixedElement.offset();

function fixedElement(){
    if($(window).scrollTop() >= offset.top){
        $body.addClass("fixed")
    }
    else{
        $body.removeClass("fixed");
    }
}
fixedElement();
$(window).scroll(fixedElement);
