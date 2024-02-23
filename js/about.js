/**
 * Código JS para la funcionalidad de la página "About". 
 * Carga 3 imágenes y cambian al hacer clic en ellas.
 */

/**
 * Función que carga la primera imagen y la añade al documento.
 * @param {string[]} images - Lista de imágenes.
 * @param {number} currentIndex - Índice de la imagen actual.
 * @returns {HTMLImageElement} - La imagen creada y añadida al documento.
 */
function loadAndAppendFirstImage(images, currentIndex) {
    const imageElement = document.createElement('img');
    imageElement.src = images[currentIndex];
    document.querySelector('.content').appendChild(imageElement);
    return imageElement;
}

/**
 * Función que cambia la imagen al hacer clic.
 * @param {HTMLImageElement} imageElement - La imagen a la que se le aplicará el cambio.
 * @param {string[]} images - Lista de imágenes.
 * @param {number} currentIndex - Índice de la imagen actual.
 */
function changeImageOnClick(imageElement, images, currentIndex) {
    imageElement.addEventListener('click', (event) => {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const images = [
        './images/imagen1.png',
        './images/imagen2.jpg',
        './images/imagen3.png'
    ];
    let currentIndex = 0;

    const imageElement = loadAndAppendFirstImage(images, currentIndex);

    changeImageOnClick(imageElement, images, currentIndex);
});