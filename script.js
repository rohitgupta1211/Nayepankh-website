// ==========================
// Dark Mode Toggle
// ==========================

const themeBtn = document.querySelector('.theme-btn');
const body = document.body;

// Load saved theme
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

// Toggle dark mode
themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem('darkMode', 'disabled');
    }
});


// ==========================
// AOS Animation Init
// ==========================

AOS.init({
    duration: 800,
    once: true,
    offset: 80
});


// ==========================
// Navbar Scroll Effect FIXED
// ==========================

const navbar = document.querySelector('.custom-navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// ==========================
// Navbar Active Link (optional but useful)
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// ==========================
// Join Us Modal Control
// ==========================

const joinBtn = document.querySelector('.join-btn');
const modal = document.getElementById('joinModal');
const closeBtn = document.querySelector('.close-btn');

// Open modal
joinBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
});

// Close modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close when clicking outside box
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// ==========================
// Donate Modal Control
// ==========================

const donateBtn = document.querySelector('.donate-btn');
const donateModal = document.getElementById('donateModal');
const closeDonate = document.querySelector('.close-donate');

// Open donate modal
donateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    donateModal.style.display = 'flex';
});

// Close donate modal
closeDonate.addEventListener('click', () => {
    donateModal.style.display = 'none';
});

// Close outside click
window.addEventListener('click', (e) => {
    if (e.target === donateModal) {
        donateModal.style.display = 'none';
    }
});

