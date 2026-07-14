function RockClimbing() {
  return (
    <section id="rock" className="rock-climbing-section">

      <div className="container">

        <div className="left-section">

          <h1 className="main-title">
            ROCK
            <br />
            CLIMBING
          </h1>

          <h2 className="section-title">
            1. CLASSES & EVENTS
          </h2>

          <p className="description">
            Hatha is the most classic yoga.
            Its origin is in the Raya Yoga
            of Patanjali and other classical texts
            such as Bhagavad Gita and
            Hatha Yoga Pradipika.
          </p>

          <div className="blue-line"></div>

          <div className="modules">
            <p>10 modules</p>
            <p>divided into 7 weekends</p>
          </div>

          <div className="info">

            <div>
              <h3>Start</h3>
              <p>April 15</p>
              <p>20.00 hs</p>
            </div>

            <div>
              <h3>Price</h3>
              <p>$900</p>
            </div>

          </div>

        </div>

        <div className="right-section">

          <div className="circle-image">
            <img src="/images/hiking.jpg" alt="Hiking" />
          </div>

          <div className="orange-text">
            WALKING IN NATURE
            <br />
            AS A RECREATIONAL
            <br />
            ACTIVITY
          </div>

        </div>

        <div className="dots">⋮</div>

      </div>

    </section>
  );
}

export default RockClimbing;