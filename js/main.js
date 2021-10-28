/** landing scroll */
let btnNavToggle = document.getElementById('btn-nav-toggle');
btnNavToggle.addEventListener('click', function () {
    document.getElementById(this.dataset.toggle).classList.toggle('active');
});
/** landing scroll */


/** scroll to top */
let scrollToTop = document.getElementById('scroll-to-top');
scrollToTop.addEventListener('click', function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
window.onscroll = function () {
    if (window.scrollY >= 500)
        scrollToTop.style.right = 0;
    else
        scrollToTop.style.right = '-60px';
}
/** scroll to top */