import { Cartelera as CarteleraType } from "@/types";

interface CarteleraProps {
  data: CarteleraType
}

const Cartelera: React.FC<CarteleraProps> = ({
  data
}) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[3.1/1] bg-contain overflow-hidden"
        style={{backgroundImage: `url(${data?.imageUrl})`}}>
          <div className="mx-auto mt-5 rounded-xl h-[90%] w-[80%] bg-black bg-opacity-40 flex flex-col justify-center items-center text-center ">
            <div className="text-neutral-100 text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
              {data.label}
            </div>
          </div>

      </div>
      
    </div>
  )
}

export default Cartelera;