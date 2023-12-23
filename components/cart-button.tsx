"use client";

import Button from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";

const CartButton = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return ( 
    <div className="ml-auto">
      <Button onClick={() => {}} className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          0
        </span>
      </Button>
    </div>
   );
}
 
export default CartButton;