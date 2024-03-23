$(document).ready(function() {
    // Load contact information from JSON
    $.ajax({
        url: 'https://nfaciano.rhody.dev/web_projects372/data/contactInfo.json', // Ensure the URL is correct
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // Update the DOM with the loaded contact information
            $('#contact-message').text(data.contact.messagePrompt);
            $('#contact-email').attr('href', 'mailto:' + data.contact.email).text(data.contact.email);
        },
        error: function() {
            console.log('Error loading contact information');
            // Handle errors, perhaps display a default message or hide elements
        }
    });

    // Form submission logic here 
    $('#contact-form').submit(function(e) {
        e.preventDefault(); // Prevent default form submission
        
        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var message = $('#message').val().trim();
        
    });
});
