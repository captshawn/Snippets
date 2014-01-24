<script type="text/javascript">
    $(document).ready(function(){
        // Accordion Script
        var $accordion = $('.accordion');

        // Initially hide all accordion content
        $accordion.find('.content').hide();

        $accordion.find('h4').click(function(){

            // Hide the displayed sibling accordion content so only one appears at a time
               $(this).parent().siblings().children('h4').removeClass('expanded').next('.content').stop(true,true).slideUp();

            if($(this).next('.content').is(':hidden')){
                // Display the accordion content if it is not displayed
                $(this).addClass('expanded').next('.content').stop(true,true).slideDown();
            }
            else{
                // Hide the accordion content if it is displayed
                $(this).removeClass('expanded').next('.content').stop(true,true).slideUp();
            }
        });
    });
</script>