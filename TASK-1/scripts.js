// JavaScript for form validation

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
      // Prevent form submission
      event.preventDefault();

      // Get form values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Validate form fields
      if (!name || !email || !message) {
          alert("Please fill out all fields.");
          return;
      }

      if (!validateEmail(email)) {
          alert("Please enter a valid email address.");
          return;
      }

      // Submit the form if validation is successful
      alert("Form submitted successfully!");
      form.submit();
  });
});

function validateEmail(email) {
  // Basic email validation regex
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
