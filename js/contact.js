/**
 * Código JS para la funcionalidad del formulario de contacto.
 * Maneja el envío del formulario y valida los campos antes de enviarlos.
 */

/**
 * Función que maneja el evento de envío del formulario de contacto.
 * @param {Event} e - El evento de envío del formulario.
 * @param {HTMLFormElement} contactForm - El formulario de contacto.
 */
function handleSubmit(e, contactForm) {
    e.preventDefault(); // Previene la recarga de la página

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (name.trim() !== '' && message.trim() !== '') {
        alert(`¡Gracias por tu mensaje, ${name}!`);
        contactForm.reset(); // Resetea el formulario después del envío
    } else {
        const errorMessage = 'Por favor, completa todos los campos.';
        alert(errorMessage);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => handleSubmit(e, contactForm));
});