//Sticky Footer
function updateHeight(){
    var bodyHeight = $( window ).height() - $('.header-container-wrapper').height() - $('.footer-container-wrapper').height();
    $('.body-container-wrapper').css('min-height', bodyHeight + 'px');
}
updateHeight();
$(window).on("resize", updateHeight);