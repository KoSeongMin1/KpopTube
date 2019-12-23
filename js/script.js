$(".menu").mouseover(function(){
    $(this).children(".menubar").stop().slideDown();
})
$(".menu").mouseleave(function(){
    $(this).children(".menubar").stop().slideUp();
})