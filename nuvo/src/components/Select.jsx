import React, {useState, useEffect} from "react";
import ArrowRight from "../assests/images/Arrow-Right.svg";
import ArrowLeft from "../assests/images/Arrow-Left.svg";

const Select = ({products, selected, setSelected}) => {

    const [arrow, setArrow] = useState(true);
    useEffect(() => {
        if(products.id === selected){
            setArrow(true);
        }
        else{
            setArrow(false);
        }
    },[selected]);

  return (
    <div
    className="select"
    // key={products.id}
    onClick={() => setSelected(products.id)}
  >
    <img className="productImg" src={products.image} />
    <br />
    <p>{products.title}</p>
    {arrow ? <img src={ArrowLeft}/> : <img src={ArrowRight}/>}
  </div>
  );
};

export default Select;
