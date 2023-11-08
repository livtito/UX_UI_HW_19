

function fade() {
$('.preloader').fadeOut("slow");

}
setTimeout(fade, 3000);


$(Document).ready(function(){
    $(window).scroll(function(){

        $(".slideup").each(function(){
            var x = $(this).offset().top;

            var y = $(window).scrollTop();
                if (x < y + 800){
                    $(this).addClass("slide");
                }

        });
    });
});