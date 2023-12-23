import { Producto } from "@/types";


const URL = `${process.env.NEXT_PUBLIC_API_URL}/productos`;

const getProducto = async (id: string): Promise<Producto> => {

  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set('Content-Type', 'application/json');

  const res = await fetch(`${URL}/${id}`, {
    headers: requestHeaders,
    next: { revalidate: 0 },
    // cache: 'no-store',
  },);

  return res.json();
}

export default getProducto;