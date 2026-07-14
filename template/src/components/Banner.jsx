import Navbar from "./Navbar";

function Banner() {
  return (
    <section id="home" className="banner-section">
      <div className="wrapper">
        <div className="banner">

          <Navbar />

          <div className="banner-content">

            <h1>
              Discover your
              <br />
              next Hike
            </h1>

            <h3>
              DISCOVER YOUR
              <br />
              NEXT HIKE
            </h3>

            <p>
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipisicing elit,
              <br />
              sed do.
            </p>

          </div>

          <div className="image-box">
            <img src="/images/hero-img.jpeg" alt="Hiking" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Banner;