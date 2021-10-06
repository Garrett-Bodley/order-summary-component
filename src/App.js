import "./App.css";
import styled from "styled-components";
import { layout, space, color } from "styled-system";

function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <div className="container">
        <article className="card">
          <section className="card card-hero">
            <img src="starter-files/design/mobile-design.jpg" alt="" className="card-hero-image" />
          </section>
          <section className="card card-content">
            <span className="card card-title"></span>
            <span className="card card-description"></span>
            <div className="card plan-selection"></div>
            <button className="primary"></button>
            <button className="secondary"></button>
          </section>
        </article>
      </div>
      Order Summary You can now listen to millions of songs, audiobooks, and
      podcasts on any device anywhere you like! Annual Plan $59.99/year Change
      Proceed to Payment Cancel Order
      <div class="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
}

export default App;
