// script.js

let currentIndex = 0;
const images = document.querySelectorAll('.banner-image');
const totalImages = images.length;

function showNextImage() {
    images[currentIndex].classList.remove('active'); // Remove a classe 'active' da imagem atual
    currentIndex = (currentIndex + 1) % totalImages; // Avança para a próxima imagem
    images[currentIndex].classList.add('active'); // Adiciona a classe 'active' à nova imagem
}

// Muda a imagem a cada 5 segundos
setInterval(showNextImage, 5000);