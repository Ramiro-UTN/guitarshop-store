"use client";

import Image from "next/image";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";

import Button from "@/components/ui/button";
import Price from "@/components/ui/price";
import useCart from "@/hooks/use-cart";
import { Producto } from "@/types";

interface ItemCarritoProps {
  data: Producto;
}

const ItemCarrito: React.FC<ItemCarritoProps> = ({
  data
}) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  }
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 justify-between ">



        <div className="pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div>
            <div className="flex justify-between">
              <p className="text-lg font-semibold text-black">
                {data.name}
              </p>

            </div>
            <div className="mt-1 mb-2 flex text-sm">
              <p className="text-gray-500">{data.tipo.name}</p>
              <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">{data.formato.name}</p>
            </div>
            <Price value={data.price} />
          </div>
        </div>
        <div>
          <Button className="flex rounded-md h-8 w-2 items-center justify-center" onClick={onRemove}>
            X
          </Button>
        </div>
      </div>
    </li>
  );
}

export default ItemCarrito;