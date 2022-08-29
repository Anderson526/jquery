
$(function() {
    
    $(".funcion").click(function(){
        var clon =  $("ol li:first").text();
        $("ol li:last").append("<li>" + clon + "</li>");
    });
    
    
 });
