import React from "react";

function HomeScreen(props) {
  return (
    <>
      <section id="about" class="section">
        <div class="title">
          <h2>
            about <span>us</span>
          </h2>
        </div>
      </section>
      <section id="services" class="section">
        <div class="title">
          <h2>
            our <span>services</span>
          </h2>
        </div>
      </section>
      <section id="tours" class="section">
        <div class="title">
          <h2>
            featured <span>tours</span>
          </h2>
        </div>
      </section>
    </>
  );
}

export default HomeScreen;
