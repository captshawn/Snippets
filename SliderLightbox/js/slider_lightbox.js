/* Add Lightbox Funtionality to Sliders */
$('.slider-mode-slider .hs_cos_flex-slide-main img').each(function(i,el) {
    var imgURL = $(el).attr('src');
    $(el).wrap('<a href="' + imgURL + '" data-featherlight="image"></a>');
});