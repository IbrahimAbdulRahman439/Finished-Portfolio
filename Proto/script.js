
const hamburgerIcon = document.querySelector('.hamburger-icon');
const nav = document.querySelector('nav');

hamburgerIcon.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('active');
    nav.classList.toggle('active');
    

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburgerIcon.classList.remove('active');
            nav.classList.remove('active');
        });
    });
});


document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !hamburgerIcon.contains(e.target)) {
        hamburgerIcon.classList.remove('active');
        nav.classList.remove('active');
    }
});


const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);


document.getElementById('year').textContent = new Date().getFullYear();


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));