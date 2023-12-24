"use client";

import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import { useEffect, useState } from "react";
import ItemCarrito from "./components/item-carrito";
import ResumenCompra from "./components/resumen-compra";


const CartPage = () => {
  const cart = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [])

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Carrito</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && <p className="text-neutral-500">El carrito está vacío</p>}
              {cart.items.map(item => (
                <ItemCarrito key={item.id} data={item} />
              ))}
            </div>
            <ResumenCompra />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CartPage;