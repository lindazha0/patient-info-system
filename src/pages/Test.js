import React from "react";
import * as d3 from "d3";

const Test = ({ patients }) => {
  const changeStroke = () => {
    d3.select(".target").style("stroke-width", 5);
  };

  return (
    <div className="App">
      <button onClick={changeStroke}>change stroke</button>
      <svg
        class="target"
        width="1512"
        height="982"
        viewBox="0 0 1512 982"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="1512" height="982" fill="url(#paint0_angular_5_15)" />
        <defs>
          <radialGradient
            id="paint0_angular_5_15"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(453.5 522) rotate(111.126) scale(582.66 1408.66)"
          >
            <stop offset="0.0855053" stop-color="#717FCA" />
            <stop offset="0.30855" stop-color="#6984CA" />
            <stop offset="0.435783" stop-color="#939BA7" />
            <stop offset="0.495516" stop-color="#CAB777" />
            <stop offset="0.608179" stop-color="#B8B792" />
            <stop offset="0.884942" stop-color="#9469CA" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Test;
