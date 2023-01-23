const contactForm = document.querySelector('#contactForm');
const buttonMailTo = document.querySelector('#mailTo');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(contactForm);
    buttonMailTo.setAttribute("href", 
    `mailTo:funacommd@hotmail.com?subject=Contacto FUNACOMM&body=Hola soy ${ form.get('name') } Mi Email es: ${ form.get('email') } Mi Teléfono es: ${ form.get('phone') } Mi Mensaje: ${ form.get('message') }`);
    buttonMailTo.click();   
});

