// Get references to form elements
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();

  // Perform client-side validation
  if (validateForm()) {
    // If the form is valid, you can send the form data to your server here
    // For this example, we'll just display an alert
    alert('Form submitted successfully!');
    contactForm.reset(); // Clear the form
  }
}

// Function to validate form inputs
function validateForm() {
  let isValid = true;

  // Reset previous error styles
  nameInput.classList.remove('error');
  emailInput.classList.remove('error');
  messageInput.classList.remove('error');

  // Validate name
  if (nameInput.value.trim() === '') {
    nameInput.classList.add('error');
    isValid = false;
  }

  // Validate email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailInput.classList.add('error');
    isValid = false;
  }

  // Validate message
  if (messageInput.value.trim() === '') {
    messageInput.classList.add('error');
    isValid = false;
  }

  return isValid;
}

// Event listener for form submission
contactForm.addEventListener('submit', handleSubmit);
