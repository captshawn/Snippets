$('.footer-container-wrapper').after('<a id="back-to-top" href="#top"><span></span>Back To Top</a>');
$("#back-to-top").hide();

$(window).scroll(function(){
if ($(window).scrollTop()>100){
    $("#back-to-top").fadeIn(500);
}
else
{
    $("#back-to-top").fadeOut(500);
}
});
//back to top
$("#back-to-top").click(function(){
    $('body,html').animate({scrollTop:0},500);
    return false;
});