var scrollTopButton = document.getElementById("scroll-top")

window.addEventListener('scroll', _ => {
    if (window.scrollY > 100) {
        scrollTopButton.style.bottom = "20px"
    } else {
        scrollTopButton.style.bottom = "-100px"
    }
})

function scrollToTop () {
    window.scrollTo(0, 0);
}
