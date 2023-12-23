import getCartelera from "@/actions/get-cartelera"
import getProductos from "@/actions/get-productos";
import Cartelera from "@/components/cartelera";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export default async function Home() {
  const cartelera = await getCartelera("6e5d2e72-7eba-4ef9-8ef8-c151277463e6");
  const productos = await getProductos({ exhibir: true });

  console.log("PRODUCTOS: ", productos);
  return (

    <Container>
      <div className="space-y-10 pb-10">
        <Cartelera data={cartelera} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
         <ProductList title="Productos" items={productos} />
        </div>
      </div>
    </Container>

  )
}
