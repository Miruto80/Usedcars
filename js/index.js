let currentImageIndex = 0;
const images = [
    "img last/Last (1).jpeg", 
    "img last/Last (2).jpeg", 
    "img last/Last (3).jpeg", 
    "img last/Last (4).jpeg",
    "img last/Last (5).jpeg"
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

