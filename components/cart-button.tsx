"use client";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const CartButton = () => {
  const [isMounted, setIsMounted] = useState(false);
 

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  

  if(!isMounted) return null;

  
  
  return ( 
    <div className="ml-auto">
      <Button onClick={() => router.push("/carrito")} className="flex items-center rounded-md bg-black px-4 py-2">
        <ShoppingCart size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
   );
}
 
export default CartButton;