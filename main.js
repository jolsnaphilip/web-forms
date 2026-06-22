document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("successMsg").textContent =
        "Form submitted successfully!";

    this.reset();
});
