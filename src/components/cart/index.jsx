import React from "react";

import { useSelector } from "react-redux";
import { selectProductsTotalPrice } from "../../redux/cart/cart.selector";

import CartItem from "../cart-item/index";
import * as Styles from "./styles";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  const productsTotalPrice = useSelector(selectProductsTotalPrice);

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Controlz cart</Styles.CartTitle>
        {products.map((product) => (
          <CartItem product={product} />
        ))}
        <Styles.CartTotal>₹ {productsTotalPrice + ",00"}</Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
