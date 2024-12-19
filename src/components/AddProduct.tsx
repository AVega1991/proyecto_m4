"use client";

import { useCart } from "@/contexts/CartContext";
import { IProduct } from "@/interfaces/IProduct";
import { useEffect, useState } from "react";

export default function AddProduct({ product }: { product: IProduct }) {
  const { addItemToCart, items, countItems } = useCart();
  const [disabled, setDisabled] = useState(false);

  const clickHandler = () => {
    addItemToCart(product);
  };

  useEffect(() => {
    // countItems(product.id) >= product.stock && setDisabled(true);
    countItems(product.id) >= 1 && setDisabled(true);
  }, [items]);

  return (
    <button
      className="bg-tertiary text-white p-4 font-bold rounded-lg"
      onClick={clickHandler}
      disabled={disabled}
    >
      ADD PRODUCT TO CART
    </button>
  );
}
