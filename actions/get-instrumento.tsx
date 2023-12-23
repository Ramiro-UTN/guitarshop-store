import { Instrumento } from "@/types";


const URL = `${process.env.NEXT_PUBLIC_API_URL}/instrumentos`;

const getInstrumento = async (id: string): Promise<Instrumento> => {

  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set('Content-Type', 'application/json');

  const res = await fetch(`${URL}/${id}`, {
    headers: requestHeaders,
    next: { revalidate: 0 },
    // cache: 'no-store',
  },);

  return res.json();
}

export default getInstrumento;