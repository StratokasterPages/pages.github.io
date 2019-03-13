window.onload = function() 
{
    //elements
    var showMore     = document.getElementById("show-more-button");
    
    var costdiv1 = document.getElementById("cost-div1");
    var costdiv2 = document.getElementById("cost-div2");
    var costdiv3 = document.getElementById("cost-div3");
    var costdiv4 = document.getElementById("cost-div4");

    var buyNow1 = document.getElementById("buy-now1");
    var buyNow2 = document.getElementById("buy-now2");
    var buyNow3 = document.getElementById("buy-now3");
    var buyNow4 = document.getElementById("buy-now4");
    
    var point = 710;
    var fps = 60;
    
    
    // events
    showMore.onclick =  function(event) {
        event.preventDefault();
        var timer = setInterval(function() {
            if (window.pageYOffset < point)
                window.scrollTo(0,window.pageYOffset + 100);
            else {
                clearInterval(timer);
            }
        },point / fps);
    };

    
    buyNow1.onmouseover = function() {
        costdiv1.id = "over";
    };

    buyNow1.onmouseout = function() {
        costdiv1.id = "";
    };

    buyNow2.onmouseover = function() {
        costdiv2.id = "over";
    };
    
    buyNow2.onmouseout = function() {
        costdiv2.id = "";
    };

    buyNow3.onmouseover = function() {
        costdiv3.id = "over";
    };
    
    buyNow3.onmouseout = function() {
        costdiv3.id = "";
    };

    buyNow4.onmouseover = function() {
        costdiv4.id = "over";
    };
    
    buyNow4.onmouseout = function() {
        costdiv4.id = "";
    };

    //slider 
    var arrow1       = document.getElementById("arrow1");
    var arrow2       = document.getElementById("arrow2");
    var quotes = {
         quote1       : document.getElementById("quote1"),
         quote2       : document.getElementById("quote2"),
         quote3       : document.getElementById("quote3"),
    };

    function slider() {
        
    }

};
