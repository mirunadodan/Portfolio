function validateEmailInput() {
    const emailInput = document.getElementById('form_email').value;
    const feedbackElement = document.getElementById('emailFeedback');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (emailRegex.test(emailInput)) {
      feedbackElement.textContent = ""; // Email is valid
    } else {
      feedbackElement.textContent = "Please enter a valid email address.";
    }
  }