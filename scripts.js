/* Add your JavaScript to this file */
// Wait until the page fully loads
document.addEventListener("DOMContentLoaded", () => {
  // Get the newsletter form and message elements
  const form = document.querySelector(".newsletter form");
  const emailInput = document.querySelector("#email");
  const messageDiv = document.querySelector(".message");

  // Handle the form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // stop the page from refreshing

    const email = emailInput.value.trim(); // remove extra spaces

    // Check if email field is empty
    if (email === "") {
      messageDiv.textContent = "Please enter a valid email address.";
      messageDiv.style.color = "white";
    } else {
      messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
      messageDiv.style.color = "white";
    }

    // Optionally clear the input for a fresh entry next time
    emailInput.value = "";
  });
});