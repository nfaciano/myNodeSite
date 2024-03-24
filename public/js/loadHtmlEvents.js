function loadHtmlEvents() {
    $("#eventsList").load("https://github.com/nfaciano/myNodeSite/blob/main/public/data/aboutus-content.html", function(response, status, xhr) {
        if (status == "error") {
            var msg = "Sorry but there was an error: ";
            $("#eventsList").html(msg + xhr.status + " " + xhr.statusText);
        }
    });
}
