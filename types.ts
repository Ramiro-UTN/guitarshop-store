
export interface Instrumento {
  id: string;
  name: string;
  tipos: Tipo[];
  formatos: Formato[];
  cartelera: Cartelera;
};

export interface Cartelera {
  id: string;
  label: string;
  imageUrl: string;
};


export interface Producto {
  id: string;
  instrumento: Instrumento;
  name: string;
  price: string;
  exhibir: boolean;
  tipo: Tipo;
  formato: Formato;
  images: Image[];
  fondo: string;
  tapa: string;
  aros: string;
  puente: string;
  diapason: string;
  mastil: string;
  audioUrl: string;
}

export interface Image {
  id: string;
  url: string;
}

export interface Tipo {
  id: string;
  name: string;
}

export interface Formato {
  id: string;
  name: string;
}

export interface Madera {
  id: string;
  name: string;
}