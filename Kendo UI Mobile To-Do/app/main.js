require.config({
    paths:{
        "text":"../lib/requirejs-text/text"
    }
});

define(['app'], function(app) {
   
    window.APP = window.APP || app;
    document.addEventListener('deviceready', function(){
        app.init();
        navigator.splashscreen.hide();
    }, false);
    
});