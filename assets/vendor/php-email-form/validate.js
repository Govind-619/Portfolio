/**
* PHP Email Form Validation - v3.9
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
(function () {
  "use strict";

  document.querySelector(".php-email-form").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const formData = new FormData(form);

    const errorMessage = document.querySelector(".error-message");
    const sentMessage = document.querySelector(".sent-message");
    const loadingIndicator = document.querySelector(".loading");

    // Show loading indicator
    loadingIndicator.style.display = "block";
    errorMessage.style.display = "none";
    sentMessage.style.display = "none";

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                "Accept": "application/json",
            },
        });

        const result = await response.json();
        loadingIndicator.style.display = "none";

        if (response.ok) {
            sentMessage.style.display = "block";
            form.reset(); // Reset form after successful submission
        } else {
            errorMessage.textContent = result.message || "An error occurred. Please try again.";
            errorMessage.style.display = "block";
        }
    } catch (error) {
        loadingIndicator.style.display = "none";
        errorMessage.textContent = "Network error. Please check your connection and try again.";
        errorMessage.style.display = "block";
    }
});
