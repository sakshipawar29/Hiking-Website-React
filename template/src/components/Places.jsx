function Places() {
  return (
    <section id="places" className="places">

      <div className="container">

        <h2>
          PLACES TO VISIT
          <br />
          IN AUTUMN
        </h2>

        <div className="places-wrapper">

          {/* Card 1 */}
          <div className="place-card">

            <img src="/images/hiking.jpg" alt="" />

            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <h3>Mountain Loop</h3>

            <p>
              Lorem ipsum sit amet,
              <br />
              consectetur adipisicing...
            </p>

            <div className="line"></div>

            <h4>
              Location <span>0.3 miles.</span>
            </h4>

          </div>

          {/* Card 2 */}

          <div className="place-card">

            <img src="/images/hiking2.jpg" alt="" />

            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <h3>National Park</h3>

            <p>
              Lorem ipsum dolor amet,
              <br />
              consectetur adipisicing...
            </p>

            <div className="line"></div>

            <h4>
              Location <span>0.2 miles.</span>
            </h4>

          </div>

          {/* Card 3 */}

          <div className="place-card">

            <img src="/images/hiking.jpg" alt="" />

            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <h3>Canyon Trail</h3>

            <p>
              Lorem ipsum dolor sit
              <br />
              consectetur adipisicing...
            </p>

            <div className="line"></div>

            <h4>
              Location <span>0.6 miles.</span>
            </h4>

          </div>

        </div>

        <a href="#" className="btn">
          see more
        </a>

      </div>

    </section>
  );
}

export default Places;