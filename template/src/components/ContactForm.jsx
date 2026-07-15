
function ContactForm({ onClose }) {
    return (
        <div className="modal-overlay">
            <div className="contact-card">

                <span className="close-btn" onClick={onClose}>
                    ✕
                </span>

                <h2>Contact Us</h2>
                <p>We'd love to hear from you!</p>

                <form>
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="tel" placeholder="Phone Number" />
                    <textarea rows="5" placeholder="Your Message"></textarea>

                    <button type="submit">Send Message</button>
                </form>

            </div>
        </div>
    );
}

export default ContactForm;
