import Link from "next/link";
import Container from "./ui/container";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";



export const revalidate = 0;
const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="border-b rounded-b-full">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-center">
            
            <MainNav data={...categories}/>
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
          </Link>
          
          
        </div>
        {/* Poner o no poner categorías al principio
          <MainNav data={categories} />
          */ }
      </Container>
    </div>
  );
};

export default Navbar;
