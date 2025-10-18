document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('form');
  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirm-password');
  
  const messageElement = document.querySelector('form p');
  
  form.addEventListener('submit', (event) => {
    
    // Prevent the page from refreshing (the default form behavior)
    event.preventDefault();

    // Get the values from the input fields and .trim() whitespace
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    // Validation Rule 1: Check if any field is empty
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
      // Show error
      messageElement.textContent = 'All fields are required.';
      messageElement.style.color = 'red';
      return; 
    }

    // Validation Rule 2: Check if passwords match
    if (password !== confirmPassword) {
      // Show error message in red
      messageElement.textContent = 'Passwords do not match.';
      messageElement.style.color = 'red';
      return;
    }

    // Success: If all checks pass
    messageElement.textContent = 'Account created successfully!';
    messageElement.style.color = 'green';

    form.reset();
  });

});