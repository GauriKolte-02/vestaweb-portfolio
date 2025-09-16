// When the page loads, set portfolio title
document.addEventListener("DOMContentLoaded", () => {
  const portfolioTitle = document.getElementById("portfolioTitle");

  // Get name from localStorage (default: "Gauri Kolte")
  let name = localStorage.getItem("portfolioName") || "Gauri Kolte";

  if (portfolioTitle) {
    portfolioTitle.textContent = `${name} Portfolio`;
  }

  // Handle contact form submission
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const enteredName = document.getElementById("name").value.trim();

      if (enteredName) {
        localStorage.setItem("portfolioName", enteredName);
        alert(`Name saved! Go back to Home page to see "${enteredName} Portfolio"`);
        form.reset();
      }
    });
  }
});
