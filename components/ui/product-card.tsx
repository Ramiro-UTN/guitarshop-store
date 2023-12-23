"use client";

import { Producto } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Price from "@/components/ui/price";


interface ProductCard {
  data: Producto;
}

const ProductCard: React.FC<ProductCard> = ({
  data
}) => {


  const router = useRouter();

  const handleClick = () => {
    router.push(`/producto/${data?.id}`);
  }

  return (
    <div onClick={handleClick} className="mb-6 bg-white  cursor-pointer md:hover:scale-105 transition rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images?.[0]?.url}
          fill
          alt="Image"
          className="aspect-square object-cover rounded-md"
        />
        
      </div>
      <div>

        <p className="font-semibold text-lg">
          {data.name}
        </p>

        <p className="text-sm text-gray-500">
          {data.instrumento?.name}
        </p>
        

      </div>
      
      <div className="text-sm text-gray-500">
        <Price value={data.price} />
      </div>
      
    </div>
  );
}

export default ProductCard;