/* ACTIVE CLASS */
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.navbar__wrapper__item');

    const observerOptions = {
        root: null, // use the viewport as the container
        rootMargin: '0px',
        threshold: 0.7 // trigger when 50% of the section is visible
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove 'active' class from all nav links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add 'active' class to the corresponding nav link
                const id = entry.target.id;
                document.querySelector(`nav a[href="#${id}"]`).classList.add('active');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

/* PHONE NAVBAR */

let navbar = document.getElementById('nav_phone');
let navbarButton = document.getElementById('close_navbar_phone');
let navbarItems = document.querySelectorAll('.navbar__wrapper__item_phone');
navbarButton.addEventListener('click', () => {
    navbar.classList.toggle('showNavbar_phone');
    navbarButton.classList.toggle('openedClose_navbar_phone');
    for(let i = 0; i < 5 ;i++) {
        navbarItems[i].classList.toggle('showItems_phone');
    }
})
