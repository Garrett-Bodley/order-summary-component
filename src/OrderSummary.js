import React from "react";
import "./ordersummary.css";
import {
  BackgroundPatternDesktop,
  HeroIllustration,
} from "./Images/cardImages";

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
            any device anywhere you like! Annual Plan $59.99/year Change Proceed
            to Payment Cancel Order
          </p>
          <div className="selected-plan">
            <b>Annual Plan</b>
            <span>$59.99/year</span>
            <a href="#">Change</a>
          </div>
          <button className="btn btn-primary">Proceed to Payment</button>
          <button className="btn btn-secondary">Cancel Order</button>
        </section>
      </article>
    </div>
  );
};

export default OrderSummary;
