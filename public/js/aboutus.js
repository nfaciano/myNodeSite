$(document).ready(function() {
    // Assuming you have an FAQ section with questions as clickable headers
    $(".faq-question").click(function() {
        // Toggle the visibility of the associated answer
        $(this).next(".faq-answer").slideToggle();
        
        // Optionally, toggle a class to change the appearance of the question when expanded/collapsed
        $(this).toggleClass("active");
    });
});
