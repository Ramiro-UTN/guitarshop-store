import Container from "@/components/ui/container";
import Link from "next/link";
import MainNav from "./main-nav";
import getInstrumentos from "@/actions/get-instrumentos";


const Navbar = async () => {
  const instrumentos = await getInstrumentos();

  

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">Guitarras Lonatti</p>
          </Link>
          <MainNav data={instrumentos} />
        </div>
      </Container>
    </div>
  )
}


export default Navbar;