function Quote() {
  return (
    <section id="quote" className="quote-section">

      <img
        className="bg-img"
        src="/images/hero-img.jpeg"
        alt="Hiking"
      />

      <div className="overlay"></div>

      <div className="quote-content">

        <p>
          THE ASANAS PURIFY OUR BODY AND
          <br />
          KEEP IT HEALTHY, MAKING IT A SUITA-
          <br />
          BLE VEHICLE FOR THE SOUL.
        </p>

        <div className="logo-area">

          <img
            src="/images/logo1.jpeg"
            alt="Logo"
          />

          <h4>HIKING LIFE</h4>

        </div>

        <a href="#" className="btn">
          see more
        </a>

      </div>

    </section>
  );
}

export default Quote;