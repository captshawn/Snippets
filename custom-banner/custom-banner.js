// Custom Banner
var bannerImage = $('.banner-image img').attr('src');
$('.custom-banner').css('background-image', 'url(' + bannerImage + ')');
$('.banner-image').closest('.row-fluid-wrapper').remove();