var phonegapReady = function(){
    new $.nd2Toast(
        {message: "we are in phonegap",
        ttl: 10000}
    );
};

// document.addEventListener("deviceready", phonegapReady, false);
$(document).ready(
    function (){
        document.addEventListener("deviceready", phonegapReady, false);
    }
);
