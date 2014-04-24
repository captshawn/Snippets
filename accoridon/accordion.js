<script type="text/javascript">
    $(document).ready(function(){
        // Accordion Script
        var $accordion = $('.accordion');

        // Initially hide all accordion content
        $accordion.find('.accordion_content').hide();

        $accordion.find('.accordion_header').click(function(){

            // Hide the displayed sibling accordion content so only one appears at a time
               $(this).parent().siblings().children('accordion_header').removeClass('expanded').next('.accordion_content').stop(true,true).slideUp();

            if($(this).next('.accordion_content').is(':hidden')){
                // Display the accordion content if it is not displayed
                $(this).addClass('expanded').next('.accordion_content').stop(true,true).slideDown();
            }
            else{
                // Hide the accordion content if it is displayed
                $(this).removeClass('expanded').next('.accordion_content').stop(true,true).slideUp();
            }
        });
    });
</script>