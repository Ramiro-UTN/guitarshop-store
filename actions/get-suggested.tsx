import { Producto } from "@/types";
import getProductos from "./get-productos"

export const getSuggested = async (producto: Producto) => {
  const suggested = await getProductos({
    instrumentoId: producto.instrumento.id,
  });

  return  suggested.filter(item => item.id !== producto.id);

}