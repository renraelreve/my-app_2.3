// Fruits.js
import { useState } from "react";

function Fruit() {
  // const [count, setCount] = useState(0);
  const [product, setProduct] = useState({
    name: "Fruits",
    country: "Singapore",
    count: 0,
  });

  const handlerPlus = () => {
    setProduct((prevProduct) => {
      return {
        ...prevProduct,
        count: prevProduct.count + 1,
      };
    });
  };

  const handlerMinus = () => {
    setProduct((prevProduct) => {
      return {
        ...prevProduct,
        count: prevProduct.count - 1,
      };
    });
  };

  return (
    <>
      <h2>
        {product.name} from {product.country}
      </h2>
      <button onClick={handlerMinus}>-</button>
      <span>{product.count}</span>
      <button onClick={handlerPlus}>+</button>
    </>
  );
}
export default Fruit;
