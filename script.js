// Mobile navigation menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    const menuIsOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", menuIsOpen);
    menuToggle.setAttribute(
        "aria-label",
        menuIsOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

// Close the mobile menu after selecting a section
const navigationLinks = navLinks.querySelectorAll("a");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});

// Dark and light theme toggle
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
    const darkModeIsOn = document.body.classList.toggle("dark-theme");

    themeToggle.textContent = darkModeIsOn ? "☀" : "☾";
    themeToggle.setAttribute(
        "aria-label",
        darkModeIsOn ? "Switch to light theme" : "Switch to dark theme"
    );
});

// Display the current year automatically
document.getElementById("current-year").textContent = new Date().getFullYear();

// Validate the contact form and open the visitor's email app
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const visitorName = document.getElementById("visitor-name").value.trim();
    const visitorEmail = document.getElementById("visitor-email").value.trim();
    const visitorMessage = document.getElementById("visitor-message").value.trim();

    if (!visitorName || !visitorEmail || !visitorMessage) {
        formMessage.textContent = "Please complete all fields before preparing your message.";
        return;
    }

    // Replace the example address below with your own email address.
    const portfolioEmail = "25it062@charusat.edu.in";
    const subject = encodeURIComponent("Portfolio message from " + visitorName);
    const body = encodeURIComponent(
        "From: " + visitorName + "\nReply to: " + visitorEmail + "\n\n" + visitorMessage
    );

    formMessage.textContent = "Opening your email app. Replace the example email address in script.js with your own first.";
    window.location.href = "mailto:" + portfolioEmail + "?subject=" + subject + "&body=" + body;
});
