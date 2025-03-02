document.addEventListener("DOMContentLoaded", function() {
    const typingText = "I create beautiful and functional websites.";
    const typingElement = document.getElementById("typing-animation");
    
    let index = 0;

    function type() {
        if (index < typingText.length) {
            typingElement.textContent += typingText.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust typing speed here (100ms)
        }
    }

    type();

    // Handle form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        document.getElementById('thank-you-message').style.display = 'block'; // Show thank you message
        this.reset(); // Reset the form fields after submission
    });
});