import getProductos from "@/actions/get-productos";
import getInstrumento from "@/actions/get-instrumento";
import Cartelera from "@/components/cartelera";
import Container from "@/components/ui/container";
import ProductCard from "@/components/ui/product-card";

import NoResults from "@/components/ui/no-results";
import Filter from "./components/filter";

interface InstrumentoPageProps {
  params: {
    instrumentoId: string;
  },
  searchParams: {
    tipoId: string;
    formatoId: string;
  }
}

const InstrumentoPage: React.FC<InstrumentoPageProps> = async ({
  params,
  searchParams
}) => {
  const productos = await getProductos({ 
    instrumentoId: params.instrumentoId,
    tipoId: searchParams.tipoId,
    formatoId: searchParams.formatoId,
  });
  const instrumento = await getInstrumento(params.instrumentoId);
  //get tipos y formatos

  // console.log("INSTRUMENTO_PAGE: ", instrumento);
  return (
    <div className="bg-white">
      <Container>
        <Cartelera data={instrumento.cartelera} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            {/* <MobileFilters sizes={sizes} colors={colors} /> */}
            <div className="hidden lg:block">
              <Filter
                valueKey="tipoId"
                name="Tipos"
                data={instrumento.tipos}
              />
              <Filter
                valueKey="formatoId"
                name="Formatos"
                data={instrumento.formatos}
              />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0 ">
              {productos.length === 0 && <NoResults />}

              <div className="grid grid-cols-1 sm:grid-cols-2
              md:grid-cols-3 gap-4">
                {productos.map((item) => (
                  <ProductCard
                    key={item.id}
                    data={item}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default InstrumentoPage;