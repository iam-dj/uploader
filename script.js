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

    // Here you can implement your logic to send email using AJAX, fetch, or any other method
    // For demonstration purposes, we'll just log the email body to the console
    console.log("Sending email to:", toWhom);
    console.log("Email body:\n", emailBody);
    setTimeout(function() {
        window.location.reload();
    }, 3000); // 3000 milliseconds = 3 seconds
}
