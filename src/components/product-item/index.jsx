import React from "react";

import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";

import { addProduct } from "../../redux/cart/slice";

import CustomButton from "../custom-button/index";

import * as Styles from "./styles";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const handleProductClick = () => {
    dispatch(addProduct(product));
  };

  return (
    <Styles.ProductContainer>
      <Styles.ProductImage imageUrl={product.imageUrl}>
        <CustomButton startIcon={<BsCartPlus />} onClick={handleProductClick}>
          Add to Controlz cart
        </CustomButton>
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <p>{product.name}</p>
        <p>₹{product.price + ",00"}</p>
      </Styles.ProductInfo>
    </Styles.ProductContainer>
  );
};

export default ProductItem;
