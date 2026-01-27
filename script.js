let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";
    if (dots.length > 0) {
        dots[slideIndex-1].className += " active";
    }
    
    setTimeout(showSlides, 4500); // Change image every 4.5 seconds
}

// Next/previous controls
function plusSlides(n) {
    slideIndex += n - 1;
    if (slideIndex < 0) {slideIndex = document.getElementsByClassName("mySlides").length - 1}
    if (slideIndex >= document.getElementsByClassName("mySlides").length) {slideIndex = 0}
    showSlides();
}

// Thumbnail image controls
function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}