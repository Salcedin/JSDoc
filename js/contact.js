/**
 * Código JS para la funcionalidad del formulario de contacto.
 * Maneja el envío del formulario y valida los campos antes de enviarlos.
 */

document.addEventListener('DOMContentLoaded', () => {
    /**
     * Elemento del formulario de contacto.
     * @type {HTMLFormElement}
     */
    const contactForm = document.getElementById('contactForm');

    /**
     * Maneja el evento de envío del formulario.
     * @param {Event} e - El evento de envío del formulario.
     */
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Previene la recarga de la página

        /**
         * Valor del campo del nombre obtenido del formulario.
         * @type {string}
         */
        const name = document.getElementById('name').value;

        /**
         * Valor del campo del mensaje obtenido del formulario.
         * @type {string}
         */
        const message = document.getElementById('message').value;

        // Verifica si el nombre y el mensaje no están vacíos
        if (name.trim() !== '' && message.trim() !== '') {
            alert(`¡Gracias por tu mensaje, ${name}!`);
            contactForm.reset(); // Resetea el formulario después del envío
        } else {
            /**
             * Mensaje de alerta si el nombre o el mensaje están vacíos.
             * @type {string}
             */
            const errorMessage = 'Por favor, completa todos los campos.';
            alert(errorMessage);
        }
    });
});
