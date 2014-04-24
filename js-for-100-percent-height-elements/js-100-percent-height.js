$(document).ready(function(){

     // Set Your Variables
     var element = $('.your-element');
     var height = $(document).height();

     // Set 100% Height Function
     function setHeight(){
          element.height(height);
     }

     // Run the 100% HeightFunction on Document Ready
     setHeight();

     // Run the 100% Height Function on Browser Resize
     $(window).resize(setHeight);

});