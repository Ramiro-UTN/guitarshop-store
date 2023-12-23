import qs from "query-string";

import { Producto } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/productos`;

interface Query {
  instrumentoId?: string;
  tipoId?: string;
  formatoId?: string;
  exhibir?: boolean;
}

const getProductos = async (query: Query): Promise<Producto[]> => {

  const url = qs.stringifyUrl({
    url: URL,
    query: {
      tipoId: query.tipoId,
      formatoId: query.formatoId,
      instrumentoId: query.instrumentoId,
      exhibir: query.exhibir,
    }
  });

  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set('Content-Type', 'application/json');

  const res = await fetch(url, {
    headers: requestHeaders,
    next: { revalidate: 0 },
    // cache: 'no-store',
  },);
  
  return res.json();
}

export default getProductos;