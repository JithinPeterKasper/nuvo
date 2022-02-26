import React, { useEffect, useState } from "react";
import Head from "./components/Head";
import Details from "./components/Details";
import API from "./API";

import Select from "./components/Select";

const api = new API();

const Main = () => {
  const [product, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);

  const limit = 3;
  useEffect(() => {
    api.fetchProduct({ limit }).then((response) => {
      setProducts(response.data);
      setSelected(response.data[0].id);
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      <Head />
      <div className="items">
        <div className="info">
          {product.map((products) => (
            // <div
            //   className="select"
            //   key={products.id}
            //   onClick={() => setSelected(products.id)}
            // >
            //   <img className="productImg" src={products.image} />
            //   <br />
            //   <p>{products.title}</p>
            //   {arrow ? <img src={ArrowLeft}/> : <img src={ArrowRight}/>}
            // </div>
            <Select
              key={products.id}
              products={products}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </div>
        <div className="details">
          {product.length > 0 && (
            <>
              {product.map((products) => (
                <Details
                  key={products.id}
                  products={products}
                  selected={selected}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
