if($(window).width() >= 1280){
    $('.d-nav .drop').click (function(){
        $(this).toggleClass('open');   
    });
}
if ($(window).width() <= 1280){
    $('.m-nav .drop').click (function(){
        $(this).toggleClass('open');   
    });
    $('.m-nav .drop-first').click (function(){
        $(this).toggleClass('open');
    });
    $('footer .drop').click (function(){
        $(this).toggleClass('open');   
    });
}
new Date().getFullYear()
document.getElementById("year").innerHTML = new Date().getFullYear();