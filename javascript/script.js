document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact');
    const errorMessage = document.getElementById('error-message');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Blockera sumbit
        
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Rätt Format på email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            errorMessage.textContent = 'Fel format på mail.';
            return;
        }

        // Kolla om meddelant är tomt
        if (message.trim() === '') {
            errorMessage.textContent = 'Tomt meddelande.';
            return;
        }

        // Om båda villkor är uppfyllda så skicka formuläret
        errorMessage.textContent = ''; // Cleara meddelandet efter man skickat
        contactForm.submit();
    });
});