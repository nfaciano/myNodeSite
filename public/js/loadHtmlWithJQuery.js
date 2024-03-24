$(document).ready(function() {
    $("#aboutus-content").load("/data/aboutus-content.html", function(response, status, xhr) {
        if (status == "error") {
            var msg = "Sorry but there was an error: ";
            $("#aboutus-content").html(msg + xhr.status + " " + xhr.statusText);
        }
    });
});
