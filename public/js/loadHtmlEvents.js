function loadHtmlEvents() {
    $("#eventsList").load("https://nfaciano.rhody.dev/web_projects372/data/events-data.html", function(response, status, xhr) {
        if (status == "error") {
            var msg = "Sorry but there was an error: ";
            $("#eventsList").html(msg + xhr.status + " " + xhr.statusText);
        }
    });
}
