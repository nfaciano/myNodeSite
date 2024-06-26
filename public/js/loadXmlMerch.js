function loadXmlMerchandise(callback) {
    $.ajax({
        type: "GET",
        url: "/data/merchandise.xml", // Local server URL
        dataType: "xml",
        success: function(xml) {
            const items = [];
            $(xml).find('item').each(function() {
                const item = {
                    id: $(this).attr('id'),
                    name: $(this).find('name').text(),
                    price: $(this).find('price').text(),
                    imgUrl: $(this).find('imgUrl').text(),
                    description: $(this).find('description').text()
                };
                items.push(item);
            });
            callback(items);
        },
        error: function() {
            console.log("There was an error loading the XML file");
            callback([]); // Call the callback with an empty array on error
        }
    });
}
