/*** this provides an iframe that retrieves contents from the nova server ***/
(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", init);

    function init() {
        // where the iframe and other elements will get embedded
        var mountPoint = document.getElementById("novaIntegrationMount");
        var messageElement = document.getElementById("novaMessage");

        var iframe          = document.createElement('iframe');
        //iframe.src          = "http://localhost:5000/";
        iframe.src          = "https://nova-server.herokuapp.com/";
        iframe.width        = "700";
        iframe.height       = "300";
        iframe.style.zIndex = "99999"; // move it to the front

        mountPoint.appendChild(iframe);

        function receiveMessage(event)
        {
            // Do we trust the sender of this message?
            if (event.origin !== "https://nova-server.herokuapp.com"){
                console.log("unexpected sender");
                return;
            }

            messageElement.textContent = event.data;
        }

        // this will listen for messages being sent from the nova-server
        window.addEventListener("message", receiveMessage, false);
    }
}());







