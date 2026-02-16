// Simple interaction: Button click animation
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(0.95)';
    });
    button.addEventListener('mouseup', () => {
        button.style.transform = 'scale(1)';
    });
});

// Fade-in effect on scroll
window.addEventListener('scroll', () => {
    const about = document.querySelector('.about-section');
    const position = about.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
        about.style.opacity = '1';
        about.style.transform = 'translateY(0)';
    }
});

// Add a slight stagger animation to skills
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 50); 
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-pill').forEach(pill => {
    pill.style.opacity = '0';
    pill.style.transform = 'translateY(10px)';
    pill.style.transition = 'all 0.4s ease-out';
    observer.observe(pill);
});