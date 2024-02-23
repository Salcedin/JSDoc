/**
 * Código JS para la funcionalidad de la página "About". 
 * Carga 3 imágenes y cambian al hacer clic en ellas.
 */

document.addEventListener('DOMContentLoaded', () => {
    /**
     * Lista de imágenes.
     * @type {string[]}
     */
    const images = [
        './images/imagen1.png',
        './images/imagen2.jpg',
        './images/imagen3.png'
    ];

    /**
     * Índice de la imagen actual.
     * @type {number}
     */
    let currentIndex = 0;

    /**
     * Carga la primera imagen.
     * @type {HTMLImageElement}
     */
    const imageElement = document.createElement('img');
    imageElement.src = images[currentIndex];

    /**
     * Añade la imagen al documento.
     */
    document.querySelector('.content').appendChild(imageElement);

    /**
     * Cambia la imagen al hacer clic.
     * @param {Event} event - El evento de clic.
     */
    imageElement.addEventListener('click', (event) => {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
    });
});
