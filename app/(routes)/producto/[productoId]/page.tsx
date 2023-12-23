import Container from "@/components/ui/container";
import getProducto from "@/actions/get-producto";
import Info from "@/components/info";
import Gallery from "@/components/gallery";
import getProductos from "@/actions/get-productos";
import ProductList from "@/components/product-list";
import { getSuggested } from "@/actions/get-suggested";

interface ProductoPageProps {
  params: {
    productoId: string
  }

}


const ProductoPage: React.FC<ProductoPageProps> = async ({
  params
}) => {
  const producto = await getProducto(params.productoId);
  const suggested = await getSuggested(producto);

  console.log("PROD_FROM_ID", producto);
  return (

    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={producto.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={producto} />
            </div>
          </div>
          <hr className="my-10" />

          {suggested.length > 0 && <ProductList title="Te pueden interesar" items={suggested} />}
        </div>
      </Container>
    </div>

  );
}

export default ProductoPage;