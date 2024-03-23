$(document).ready(function() {
    // Check if jQuery loaded
    if (window.jQuery) {
        console.log('jQuery is loaded');
    } else {
        console.log('jQuery is not loaded');
    }

    // jQuery Selection and caching
    var $donationForm = $('#donate-section form');
    var $donationAmount = $('#donation-amount');
    var $donorName = $('#donor-name');
    var $donorEmail = $('#donor-email');

    // Update element content
    $('h1').text('Support Lambda Chi Alpha with Your Donation');

    // Insert new elements - example showing a thank you message after form submission
    $donationForm.submit(function(e) {
        e.preventDefault(); // Prevent the actual form submission

        // Use jQuery methods to get form values
        var donationAmount = $donationAmount.val();
        var donorName = $donorName.val();

        // Inserting a thank you message after the form
        $donationForm.after('<p>Thank you, ' + donorName + ', for your generous donation of $' + donationAmount + '!</p>');

        // Apply CSS properties dynamically
        $('p').last().css({
            'font-weight': 'bold',
            'color': 'green'
        });

        // jQuery Events & Effects
        $('p').last().hide().fadeIn(2000, function() {
            // This callback function runs after the fadeIn effect completes
            alert('Your donation has been processed!');
        });
    });

    // Set CSS properties of elements
    $donationForm.find('input[type=submit]').css('background-color', '#4CAF50');

    // Update all elements in a matched set without a loop
    $('nav a').css('font-weight', 'bold');

    // Handling and delegating events with a more complex example could involve
    // listening for changes on form inputs to dynamically validate or modify UI
    $donationAmount.change(function() {
        if ($(this).val() < 5) {
            alert('Minimum donation amount is $5');
            $(this).val(5);
        }
    });
});

