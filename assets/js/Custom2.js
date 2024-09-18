// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reveal Team Members on Scroll
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in-up');
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top + scrollTop;
        if (scrollTop + window.innerHeight > elementTop) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = "↑";
backToTopButton.className = "back-to-top";
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
