let currentImageIndex = 0;
const images = [
    "img last/last add (1).jpeg", 
    "img last/2019 Toyota tundra  (4).jpeg", 
    "img last/2021 GMC Yukon  (4).jpeg", 
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

