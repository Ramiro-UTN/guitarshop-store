"use client"

import { Producto } from "@/types";
import Price from "@/components/ui/price";
import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: Producto;
}

const Info: React.FC<InfoProps> = ({
  data
}) => {
  const cart = useCart();
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3">
        <p className="text-2xl text-gray-900">
          <Price value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Familia del instrumento:</h3>
          <div>
            {data?.instrumento?.name}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Tipo:</h3>
          <div>
            {data?.tipo?.name}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Formato:</h3>
          <div>
            {data?.formato?.name}
          </div>
        </div>

        <hr className="my-2" />
        <h3 className="font-semibold text-black">Maderas:</h3>
        <div className="grid grid-cols-2 gap-y-4">
          <div className="flex items-center gap-x-4">
            <h3 className="font-semibold text-black">Fondo:</h3>
            <div>
              {data?.fondo}
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <h3 className="font-semibold text-black">Tapa:</h3>
            <div>
              {data?.tapa}
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <h3 className="font-semibold text-black">Aros:</h3>
            <div>
              {data?.aros}
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <h3 className="font-semibold text-black">Diapasón:</h3>
            <div>
              {data?.diapason}
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <h3 className="font-semibold text-black">Mástil:</h3>
            <div>
              {data?.mastil}
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <h3 className="font-semibold text-black">Puente:</h3>
            <div>
              {data?.puente}
            </div>
          </div>
        </div>
        <hr className="my-2" />
        {data?.audioUrl && <div className="space-y-4">
          <h3 className="font-semibold text-black">Audio:</h3>
          <audio controls src={data?.audioUrl}></audio>
        </div>}
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={() => cart.addItem(data)} className="flex items-center gap-x-2">
          Agregar al carrito
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
}

export default Info;