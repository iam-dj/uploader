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

document.getElementById("boostingNeeded").addEventListener("change", function() {
    var boostingFields = document.getElementById("boostingFields");
    if (this.value === "Yes") {
        boostingFields.style.display = "block";
    } else {
        boostingFields.style.display = "none";
    }
});

function getSelectedPlatforms() {
    let selectedPlatforms = [];
    document.querySelectorAll('input[name="platform"]:checked').forEach(function(checkbox) {
        selectedPlatforms.push(checkbox.value);
    });
    return selectedPlatforms.join(", ");
}


function sendFormDataByEmail(formData) {
    // Get the email address from the form
    let toWhom = formData["toWhom"];
    
    // Construct email body
    let emailBody = "Marketing Task Details:\n\n";
    for (let key in formData) {
        emailBody += `${key}: ${formData[key]}\n`;
    }
    
    // Get selected platforms
    let selectedPlatforms = getSelectedPlatforms();
    emailBody += `Platforms: ${selectedPlatforms}\n`;

    // Compose mailto link
    let mailtoLink = `mailto:${toWhom}?subject=Marketing Task&body=${encodeURIComponent(emailBody)}`;

    // Open default email client with pre-filled email
    window.location.href = mailtoLink;

    // Optionally, you can reload the page after a delay
    setTimeout(function() {
        window.location.reload();
    }, 3000); // 3000 milliseconds = 3 seconds
}


