const nav = document.querySelector('.nav-top');

window.onscroll = () => {
    if (window.pageYOffset >= 10) {
        nav.classList.add('fixed-nav');
    } else {
        nav.classList.remove('fixed-nav');
    }
}