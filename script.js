// ==========================
// PART 1: EVENT HANDLING
// ==========================

// Light/Dark mode toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// ==========================
// PART 2: INTERACTIVE ELEMENTS
// ==========================

// FAQ collapse/expand
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

// ==========================
// PART 3: FORM VALIDATION
// ==========================

const form = document.getElementById("signup-form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop form from submitting
  let valid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("name-error").textContent =
      "Name must be at least 3 characters.";
    valid = false;
  } else {
    document.getElementById("name-error").textContent = "";
  }

  // Email validation (basic regex)
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("email-error").textContent =
      "Please enter a valid email.";
    valid = false;
  } else {
    document.getElementById("email-error").textContent = "";
  }

  // Password validation
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("password-error").textContent =
      "Password must be at least 6 characters.";
    valid = false;
  } else {
    document.getElementById("password-error").textContent = "";
  }

  // If everything is valid
  if (valid) {
    document.getElementById("form-success").textContent =
      "Form submitted successfully 🎉";
    form.reset();
  }
});
