
const form = document.getElementById("signupForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword =
        document.getElementById("confirmPassword").value;

    // Clear previous messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmError").textContent = "";
    document.getElementById("successMessage").textContent = "";

    let isValid = true;

    // Validate name
    if (name === "") {
        document.getElementById("nameError").textContent =
            "Name is required.";
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        document.getElementById("emailError").textContent =
            "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent =
            "Please enter a valid email address.";
        isValid = false;
    }

    // Validate password
    if (password.length < 8) {
        document.getElementById("passwordError").textContent =
            "Password must be at least 8 characters.";
        isValid = false;
    }

    // Confirm password
    if (confirmPassword === "") {
        document.getElementById("confirmError").textContent =
            "Please confirm your password.";
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById("confirmError").textContent =
            "Passwords do not match.";
        isValid = false;
    }

    // Display final result
    if (isValid) {
        document.getElementById("successMessage").textContent =
            "Signup successful! All fields are valid.";

        form.reset();
    }

});
