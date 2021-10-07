import React from "react";
import "./ordersummary.css";
import {
  BackgroundPatternDesktop,
  HeroIllustration,
  MusicIcon,
} from "./Images/cardImages";
import SelectedPlan from "./SelectedPlan";

const OrderSummary = (props) => {
  return (
    <div className="container">
      <div className="background">
        <BackgroundPatternDesktop className="background-pattern" />
      </div>
      <article className="card">
        <div className="card-hero">
          <HeroIllustration/>
        </div>
        <section className="card-content">
          <p className="card-title">Order Summary</p>
          <p className="card-description">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <SelectedPlan />
          <button className="btn btn-primary">Proceed to Payment</button>
          <button className="btn btn-secondary">Cancel Order</button>
        </section>
      </article>
    </div>
  );
};

export default OrderSummary;
