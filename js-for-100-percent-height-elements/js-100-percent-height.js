// Set 100 Percent Height with JS

var element = $('.your-element');
var height = $(document).height();

function setHeight(){
     element.height(height);
}
setHeight();
$(window).resize(setHeight);

