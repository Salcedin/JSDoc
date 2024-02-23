/**
 * Código JS para la funcionalidad del formulario de contacto.
 * Maneja el envío del formulario y valida los campos antes de enviarlos
 */


document.addEventListener('DOMContentLoaded', () => {
    /* Obtiene el formulario */
    const contactForm = document.getElementById('contactForm');

    /* Agrega un sumbit al formulario */
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Previene la recarga de la página

        // Obtiene los valores del formulario
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        // Verifica si el nombre y el mensaje no están vacíos
        if (name.trim() !== '' && message.trim() !== '') {
            alert(`¡Gracias por tu mensaje, ${name}!`);
            contactForm.reset(); // Resetea el formulario después del envío
        } else {
            /* Si el nombre o el mensaje están vacíos, muestra un alert */
            alert('Por favor, completa todos los campos.');
        }
    });
});
