function loadHtmlEvents() {
    $("#eventsList").load("/data/aboutus-content.html", function(response, status, xhr) {
        if (status == "error") {
            var msg = "Sorry but there was an error: ";
            $("#eventsList").html(msg + xhr.status + " " + xhr.statusText);
        }
    });
}
