import { useState } from "react";

function Discount() {
  const initialValues = {
    name: "Fruits",
    count: 0,
    price: 2.99,
    discount: 0,
  };

  const [product, setProduct] = useState(initialValues);

  // if (product.count >= 5) {
  //   const [discount, setDiscount] = useState(20);
  // }

  const handlerPlus = () => {
    setProduct((prevState) => {
      const newCount = prevState.count + 1;
      const discount = newCount >= 5 ? 20 : 0;
      return {
        ...prevState,
        count: newCount,
        discount: discount,
      };
    });
  };

  const handlerMinus = () => {
    setProduct((prevState) => {
      const newCount =
        prevState.count > 0 ? prevState.count - 1 : prevState.count;
      const discount = newCount >= 5 ? 20 : 0;
      return {
        ...prevState,
        count: newCount,
        discount: discount,
      };
    });
  };

  const handlerReset = function () {
    setProduct(initialValues);
  };

  return (
    <>
      <h2>{product.name}</h2>
      <button onClick={handlerMinus}>-</button>
      <span>{product.count}</span>
      <button onClick={handlerPlus}>+</button>
      <h2>{`$ ${product.price}`}</h2>
      <h3>{`Discount: ${product.discount}%`}</h3>
      <button onClick={handlerReset}>Reset</button>
    </>
  );
}
export default Discount;
