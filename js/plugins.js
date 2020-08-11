// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function() {};
  var methods = [
    "assert",
    "clear",
    "count",
    "debug",
    "dir",
    "dirxml",
    "error",
    "exception",
    "group",
    "groupCollapsed",
    "groupEnd",
    "info",
    "log",
    "markTimeline",
    "profile",
    "profileEnd",
    "table",
    "time",
    "timeEnd",
    "timeline",
    "timelineEnd",
    "timeStamp",
    "trace",
    "warn"
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
})();


//pojawianie się elementów
window.sr = ScrollReveal();

sr.reveal("h1, h2, h3, h4, h5, h6 , .boxl, .boxr, .carousel", {
  reset: false,
  useDelay: 'onload',
  delay: 300,
  interval: 80
});
//karuzela
$(document).ready(function() {
  $(".karuzelaPortfolio").owlCarousel({
    autoPlay: 10000,
    items: 5,
    itemsDesktopSmall: [1199, 2],
    itemsTablet: [768, 1],
    pagination: false
  });
});



///// rozwijanie mobilnego menu

$(document).ready(function() {

  $("#hamburegrId").click(function(){

    if ($('.menuMobileRoz').is(":visible"))
    {
         $('.menuMobileRoz').animate({ height: "toggle" , width: "toggle" });   // Hide button
    } else
{
  $('.menuMobileRoz').animate({ height: "toggle", width: "toggle" });
}
});
});


///// scroll to DIV
$(document).ready(function() {
  $("#menuKontakt").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#footer").offset().top - $("#nav").height()
      },
      1000
    );
  });

  $("#menuPortfolio").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#portfolio").offset().top - $("#nav").height()
      },
      1000
    );
  });

  $("#menuOferta").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#oferta").offset().top - $("#nav").height()
      },
      1000
    );
  });

  $("#menuHome").click(function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      1000
    );
  });

  $("#menuKontakt2").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#footer").offset().top - $("#nav").height()
      },
      1000
    );
  });
  $("#menuPortfolio2").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#portfolio").offset().top - $("#nav").height()
      },
      1000
    );
  });
  $("#menuHome2").click(function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      1000
    );
  });
  $("#menuOferta2").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#oferta").offset().top - $("#nav").height()
      },
      1000
    );
  });


  $(".menuMobileRoz").click(function() {
    $('.menuMobileRoz').animate({ height: "toggle" , width: "toggle" });
  });

});

////tawk.to

var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5bf1da2d79ed6453cca9fc4f/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();




