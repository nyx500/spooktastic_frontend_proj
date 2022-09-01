// Attribution: https://www.w3schools.com/howto/howto_js_slideshow.asp

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
// Called when click on dot
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    // If n is bigger than the highest index of the slide, reset n to 1
    if (n > slides.length) { slideIndex = 1 }
    // If n is smaller than one, then reset the index to the last one
    if (n < 1) { slideIndex = slides.length }

    // Changes appearance of all slides to hidden
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // Changes appearance of circles, so that none of them are highlighted
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // Displays the selected slide: index is one less than the slideIndex because for user benefit begins at 1 not at 0
    slides[slideIndex - 1].style.display = "block";
    // Makes the circle responsible for the image active and therefore highlights in diff color
    dots[slideIndex - 1].className += " active";
}

// Replaces the inline event handlers in the original HTML code from W3 Schools with JS event listeners
document.getElementById('prev').addEventListener('click', function(){
    plusSlides(-1);
})

document.getElementById('next').addEventListener('click', function(){
    plusSlides(1);
})

// Add click event listeners instead of inline functions to navigate through slideshow with dots
let dots = document.getElementsByClassName('dot');
dots = Array.from(dots);
dots.forEach((dot) => {
    dot.addEventListener('click', function(){
        let index = dot.id[4];
        index = parseInt(index);
        currentSlide(index);
    })
})
