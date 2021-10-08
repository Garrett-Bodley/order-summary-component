import React from "react";
import "./attribution.css";
import { CursorClick } from "@styled-icons/fluentui-system-filled/CursorClick";
import { ArrowBarRight } from "@styled-icons/bootstrap/ArrowBarRight";

const Attribution = (props) => {
  const { isVisible, toggleVisibility } = props;

  const style = {
    right: isVisible ? 0 : "-25em",
    transition: isVisible
      ? `right 500ms cubic-bezier(0.75, 0, 1, 1);`
      : `right 500ms cubic-bezier(0.215, 0.61, 0.355, 1)`,
    // Using juiced up ease-in and ease-out curves from https://www.joshwcomeau.com/animation/css-transitions/#custom-curves
  };

  return (
    <>
      <div role="form" aria-labelledby="show-attribution" className="attribution-reveal" onClick={toggleVisibility}>
        <CursorClick width="100%" />
      </div>
      <div role="complementary" className="attribution" style={style}>
        <div className="attribution-text">
          <p role="contentinfo">
            Challenge by{" "}
            <a
              aria-label="Challenge source"
              role="navigation"
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Mentor
            </a>
          </p>
          <p role="contentinfo">
            Coded by{" "}
            <a role="navigation" aria-label="Developer site" href="https://github.com/Garrett-Bodley">Garrett Bodley</a>
          </p>
        </div>
        <div role="form" className="attribution-hide">
          <ArrowBarRight width="100%" onClick={toggleVisibility} />
        </div>
      </div>
    </>
  );
};

export default Attribution;
