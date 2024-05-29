document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('#navbar ul');
    const header = document.getElementById('header');

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('open');
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 70) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
