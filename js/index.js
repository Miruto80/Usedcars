let currentImageIndex = 0;
const images = [
    "img last/last add (1).jpeg", 
    "img last/last add (2).jpeg", 
    "img last/last add (3).jpeg", 
    "img last/last add (4).jpeg"
];
const carouselBg = document.getElementById("carousel-bg");

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    carouselBg.src = images[currentImageIndex];
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    carouselBg.src = images[currentImageIndex];
}


document.getElementById('legal-button').addEventListener('click', function () {
    const legalContent = document.getElementById('legal-content');
    legalContent.classList.toggle('show');
});

