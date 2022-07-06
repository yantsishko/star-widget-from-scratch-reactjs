import React, { useContext } from "react";

import Star from "./Star";

import { StarRatingContext } from "../StarRating";

function StarsList() {
  const { maxValue } = useContext(StarRatingContext);

  return (
    <div className="star-rating">
      {[...Array(maxValue)].map((star, index) => {
        const value = index + 1;

        return (
          <Star
            key={index}
            value={value}
          />
        );
      })}
    </div>
  );
}

export default StarsList;
