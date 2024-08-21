// Function to copy script code to clipboard
function copyCode(scriptId) {
    // Get the code element by ID
    const codeElement = document.getElementById(scriptId);
    
    // Create a range and select the text within the code element
    const range = document.createRange();
    range.selectNodeContents(codeElement);
    
    // Clear any existing selections
    window.getSelection().removeAllRanges();
    
    // Add the range to the selection
    window.getSelection().addRange(range);
    
    // Copy the selected text to the clipboard
    try {
        document.execCommand('copy');
        alert('Code copied to clipboard!');
    } catch (err) {
        alert('Failed to copy code.');
    }
    
    // Clear the selection
    window.getSelection().removeAllRanges();
}

// Contact form submission handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Retrieve form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Basic validation
    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! We will get back to you soon.');
        
        // Here you can add code to actually handle the form submission,
        // such as sending the data to a server.
    } else {
        alert('Please fill out all fields.');
    }
});