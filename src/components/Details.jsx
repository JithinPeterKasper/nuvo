import React, { useState, useEffect } from "react";
import Ratings from "./Ratings";

const Details = ({ products, selected }) => {
  const [pDetails, sDetails] = useState("");
  useEffect(() => {
    if (products.id === selected) {
      sDetails("details");
    } else {
      sDetails("details close");
    }
  }, [selected]);

  return (
    <div>
      <div className={pDetails} key={products.id}>
        <h2>{products.price}</h2>
        <h4>{products.description}</h4>
        <Ratings key={products.id} rating={products.rating} />
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Details;
