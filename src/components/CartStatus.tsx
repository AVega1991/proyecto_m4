"use client";

import { useCart } from "@/contexts/CartContext";

export default function CartStatus() {
  const { items } = useCart();
  return <p>Products: {items.length}</p>;
}
