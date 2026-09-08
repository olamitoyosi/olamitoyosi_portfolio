/* =========================
   INITIALIZE LUCIDE ICONS
========================= */

lucide.createIcons();


/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle =
    document.getElementById("menu-toggle");

const navLinks =
    document.getElementById("nav-links");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* Close menu when navigation link is clicked */

document.querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });


/* =========================
   DARK MODE
========================= */

const themeToggle =
    document.getElementById("theme-toggle");


/* Load saved theme */

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

}


/* Toggle theme */

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");


    const isDark =
        document.body.classList.contains("dark-mode");


    localStorage.setItem(
        "theme",
        isDark ? "dark" : "light"
    );

});


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contact-form");

const formMessage =
    document.getElementById("form-message");


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const message =
            document.getElementById("message").value;


        const subject =
            `Portfolio Contact from ${name}`;


        const body =
            `Name: ${name}\n\n` +
            `Email: ${email}\n\n` +
            `Message:\n${message}`;


        const mailtoLink =
            `mailto:olamitoyosirokeeb@gmail.com` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;


        window.location.href =
            mailtoLink;


        formMessage.textContent =
            "Opening your email application...";

    }
);