document.getElementById("marketingTaskForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get form data
    let formData = new FormData(this);
    let data = {};
    formData.forEach(function(value, key){
        data[key] = value;
    });

    // Send form data via email
    sendFormDataByEmail(data);
});

function sendFormDataByEmail(formData) {
    // Get the email address from the form
    let toWhom = formData["toWhom"];
    
    // Construct email body
    let emailBody = "Marketing Task Details:\n\n";
    for (let key in formData) {
        emailBody += `${key}: ${formData[key]}\n`;
    }

    // Compose mailto link
    let mailtoLink = `mailto:${toWhom}?subject=Marketing Task&body=${encodeURIComponent(emailBody)}`;

    // Open default email client with pre-filled email
    window.location.href = mailtoLink;

    // Optionally, you can reload the page after a delay
    setTimeout(function() {
        window.location.reload();
    }, 3000); // 3000 milliseconds = 3 seconds
}
