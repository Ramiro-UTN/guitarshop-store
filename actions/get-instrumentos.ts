import { Instrumento } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/instrumentos`;

const getInstrumentos = async (): Promise<Instrumento[]> => {

  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set('Content-Type', 'application/json');

  const res = await fetch(URL, {
    headers: requestHeaders,
    next: { revalidate: 0 },
    // cache: 'no-store',
  });

  const instrumentos = await res.json();
  return formatArray(instrumentos);

}

export default getInstrumentos;


const formatArray = (instrumentos: Instrumento[]) => {
  const arrayWithoutGuitar: Instrumento[] = [];
  const filterGuitarra = instrumentos.filter((item: Instrumento) => {
    if (item.name === ("Guitarras" || "Guitarra")) {
      return item;
    } else {
      arrayWithoutGuitar.push(item)
    }
  });

  return [...filterGuitarra, ...arrayWithoutGuitar];
}
