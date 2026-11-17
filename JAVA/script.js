
// =====================================
// ELITE FITNESS - JAVASCRIPT
// =====================================


// MOBILE NAVIGATION

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";

        });

    });

}


// SCROLL REVEAL ANIMATIONS

const revealElements = document.querySelectorAll(
    ".about, .program-card, .membership-card, .contact"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            revealObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});


// CURRENT YEAR IN FOOTER

const footerText = document.querySelector(".footer p:last-child");

if (footerText) {
    footerText.textContent =
        `© ${new Date().getFullYear()} ELITE FITNESS. WEBSITE CONCEPT BY KHOVA DIGITAL TECHNOLOGIES.`;
}
