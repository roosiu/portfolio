

$(window).scroll(function() {
    if($(window).scrollTop() > 0) {
        document.getElementById("nav").style.opacity = "0.96";
    } else {
        document.getElementById("nav").style.opacity = "0.82";
    }
});