import React, { useState } from "react";
import "./ordersummary.css";
import {
  BackgroundPatternDesktop,
  BackgroundPatternMobile,
  HeroIllustration,
} from "./Images/cardImages";
import SelectedPlan from "./SelectedPlan";
import Attribution from "./Attribution";
import { isBrowser } from "react-device-detect";

const OrderSummary = (props) => {
  const [attrVisible, setAttrVisible] = useState(false);

  const toggleAttrVis = () => {
    setAttrVisible(!attrVisible);
  };

  const style = {
    transform: attrVisible ? "translateY(-10em)" : null,
    transition: !attrVisible
      ? `transform 500ms cubic-bezier(0.75, 0, 1, 1);`
      : `transform 500ms cubic-bezier(0.215, 0.61, 0.355, 1)`,
    // Using juiced up ease-in and ease-out curves from https://www.joshwcomeau.com/animation/css-transitions/#custom-curves
  };

  return (
    <div className="container">
      <div className="background">
        {!isBrowser ? (
          <BackgroundPatternMobile className="background-pattern" />
        ) : (
          <BackgroundPatternDesktop className="background-pattern" />
        )}
      </div>
      <section
        role="main"
        className="card"
        style={!isBrowser ? style : null}
      >
        <div className="card-hero">
          <HeroIllustration />
        </div>
        <article className="card-content">
          <h2 role="banner" className="card-title">Order Summary</h2>
          <p className="card-description">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <SelectedPlan />
          <button role="form" aria-label="primary" className="btn btn-primary">Proceed to Payment</button>
          <button role="form" aria-label="secondary" className="btn btn-secondary">Cancel Order</button>
        </article>
      </section>
      <Attribution isVisible={attrVisible} toggleVisibility={toggleAttrVis} />
    </div>
  );
};

export default OrderSummary;
