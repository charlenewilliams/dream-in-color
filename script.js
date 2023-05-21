const navE1 = document.querySelector('.nav')

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navE1.classList.add('nav-scrolled');
    } else if (window.scrollY <= 100) {
        navE1.classList.remove('nav-scrolled');
    }
});