import { useState } from "react";
import ContactForm from "./ContactForm";

function Navbar() {

  const [showContactForm, setShowContactForm] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <>
      <nav>

        <div className="logo">
          <img src="/images/logo1.jpeg" alt="Logo" />
        </div>

        <ul>

          <li className="logo-text">
            Hiking <b>Life</b>
          </li>

          <li>
            <button onClick={() => scrollToSection("home")}>
              Home
            </button>
          </li>

          <li>
            <button onClick={() => scrollToSection("camping")}>
              Class
            </button>
          </li>

          <li>
            <button onClick={() => scrollToSection("rock")}>
              Promo
            </button>
          </li>

          <li>
            <button onClick={() => scrollToSection("hero")}>
              Online Class
            </button>
          </li>

          <li>
            <button onClick={() => setShowContactForm(true)}>
              Contact
            </button>
          </li>

        </ul>

      </nav>

      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}
    </>
  );
}

export default Navbar;