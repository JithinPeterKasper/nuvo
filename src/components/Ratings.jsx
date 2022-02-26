import React from "react";
import Staron from "../assests/images/Starton.svg";
import Staroff from "../assests/images/Staroff.svg";

const Ratings = ({ rating }) => {
  const showStars = (rate) => {
    let out = [];
    for (let j = 1; j <= 5; j++) {
      if (Math.round(rate) >= j) {
        out.push(<img key={j} src={Staron} />);
      } else {
        out.push(<img key={j} src={Staroff} />);
      }
    }
    return out;
  };
  return (
    <div className="star">
      {showStars(rating.rate)}
      {rating.count}
    </div>
  );
};

export default Ratings;
