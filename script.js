// Set active nav link based on current page
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'home.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Animate progress bars on page load
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach((bar, index) => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100 * (index + 1));
    });
}

// Handle contact form submission
function handleContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const successMessage = document.getElementById('successMessage');

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Create mailto link
            const mailtoLink = `mailto:Jelaxamana008@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

            // Open email client
            window.location.href = mailtoLink;

            // Show success message
            successMessage.classList.add('show');

            // Reset form
            contactForm.reset();

            // Hide success message after 3 seconds
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 3000);
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    setActiveNav();
    animateProgressBars();
    handleContactForm();
});

console.log("Portfolio loaded successfully!");
