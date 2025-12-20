'use strict';
// ***==========*** ↓↓  Loading event! ↓↓  ***==========***
window.onload = function() {

    setTimeout(() => {

        // Get loading element
        const loading = document.getElementById("loading");
        const content = document.getElementById("content");
        loading.classList.add("hidden");
        content.classList.add("animate__animated");
        content.classList.add("animate__fadeIn");
        content.classList.remove("hidden");

        // When end the loading, remove loading element
        // There is [transition] in css so it need 1000
        window.setTimeout(function(){
            loading.remove();
        }, 10);
    }, 2000);
}


