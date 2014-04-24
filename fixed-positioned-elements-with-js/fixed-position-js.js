<script>

    $(document).ready(function(){

        // Fixed Menu
       
        var $body = $("body");
        var $fixedMenu = $(".side-bar");
        var offset = $fixedMenu.offset();

        function fixedMenu(){
            if($(window).scrollTop() >= offset.top){
                $body.addClass("fixed-menu")
            }
            else{
                $body.removeClass("fixed-menu");
            }
        }
        fixedMenu();
        $(window).scroll(fixedMenu);

    });

</script>