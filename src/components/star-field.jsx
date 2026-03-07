"use client"

import { WindowSizeStarField } from "starfield-react"

const props = {
  count: 939,
  speed: 2.8,
  starRatio: 81,
  starSize: 2,
  starStyle: "#fff",
  starShape: "round",
  clear: true,
  bgStyle: "#000",
  noBackground: false,
  fps: 60,
};

const StarField = () => {
  return (
    <div>
      <WindowSizeStarField {...props} />
    </div>
  );
};

export default StarField;
