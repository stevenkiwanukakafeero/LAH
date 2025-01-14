function sendToWhatsApp() {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    const phoneNumber = "256779668768"; // Replace with your WhatsApp number
    const whatsappURL = `https://wa.me/${phoneNumber}?text=Hello,%20my%20name%20is%20${encodeURIComponent(name)}.%20Email:%20${encodeURIComponent(email)}.%20Message:%20${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
}