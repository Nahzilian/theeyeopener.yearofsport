let carousel = document.getElementById("slide-container")
let slideContents = carousel.children
let activeSlide = 0

let measure = carousel.offsetWidth / 3
let offSet = 0
for (let slide of slideContents) {
    slide.style.width = `${measure}px`
    slide.style.height = `${measure}px`

    slide.children[0].style.width = `${measure}px`
    slide.children[0].style.height = `${measure}px`
}


function slideLeft() {
    if (activeSlide > 0) {
        offSet = offSet + measure
        carousel.style.left = `${offSet}px`;
        activeSlide -= 1

    }
}

function slideRight() {
    if (activeSlide + 3 < slideContents.length) {
        offSet = offSet - measure
        carousel.style.left = `${offSet}px`;
        activeSlide += 1
    }
}