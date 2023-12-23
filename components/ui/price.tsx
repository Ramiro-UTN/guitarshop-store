"use client";

import { useEffect, useState } from "react";

export const formatter = new Intl.NumberFormat("es-AR", {
  style: 'currency',
  currency: 'ARS'
});

interface PriceProps {
  value?: string | number;
}

const Price: React.FC<PriceProps> = ({
  value
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return ( 
    <div className="font-semibold">
      {formatter.format(Number(value))}
    </div>
   );
}
export default Price;