// Initialize Email.js with your user ID
emailjs.init("KBOaRZFXSPvNz2ahv");

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("emailForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Log form values for debugging
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    // Validate form fields
    if (!email || !subject || !message) {
      alert("Please fill in all the fields.");
      return;
    }

    // Validate email format (you can enhance this validation)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Your Email.js template parameters
    var templateParams = {
      from_email: email,
      subject: subject,
      message_html: message // Use triple curly braces for HTML content
    };

    // Send email using your Email.js service ID and template ID
    emailjs.send("service_4f6aaat", "template_x9vos5j", templateParams)
      .then(function (response) {
        // Log success response for debugging
        console.log("Email sent successfully", response);
        handleSuccess();
      })
      .catch(function (error) {
        // Log error response for debugging
        console.log("Failed to send email", error);
        // Add your error handling code here
        alert("Failed to send email. Please try again.");
      });
  });

  function handleSuccess() {
    // Add your code to handle success
    alert("Email sent successfully!");
    // You can redirect to a thank you page, show a success message, etc.
  }
});
