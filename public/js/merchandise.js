// merchandise.js
$(document).ready(function() {
    loadXmlMerchandise(function(items) {
        $.each(items, function(index, item) {
            const itemDiv = $('<div>').addClass('merchandise-item');
            const img = $('<img>').attr('src', item.imgUrl).attr('alt', item.name).addClass('merchandise-img');
            const overlayInfo = $('<div>').addClass('overlay-info');
            const nameSpan = $('<span>').addClass('merchandise-name').text(item.name);
            const priceSpan = $('<span>').addClass('price-tag').text(item.price);

            overlayInfo.append(nameSpan, priceSpan);
            itemDiv.append(img, overlayInfo).appendTo('#merchandise-container');

            itemDiv.click(function() {
                showModal(item);
            });
        });
    });

    function showModal(item) {
        $('.details-modal').remove(); // Remove existing modal to prevent duplicates

        const modalOverlay = $('<div>').addClass('details-modal').css('display', 'block');
        const modalContent = $('<div>').addClass('modal-content');
        const closeButton = $('<span>').addClass('close-button').text('×');

        modalContent.append(
            closeButton,
            $('<h2>').text(item.name),
            $('<p>').addClass('price-tag').text(`Price: ${item.price}`),
            $('<p>').addClass('item-description').text(item.description)
        );

        modalOverlay.append(modalContent).appendTo('body');

        closeButton.click(function() {
            modalOverlay.remove();
        });

        modalOverlay.click(function(event) {
            if (event.target === modalOverlay[0]) {
                modalOverlay.remove();
            }
        });
    }
});
