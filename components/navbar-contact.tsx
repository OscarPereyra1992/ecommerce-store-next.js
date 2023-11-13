import Link from "next/link";
import Image from "next/image";
import Container from "./ui/container";

export const revalidate = 0;

const NavbarContact = () => {
  return (
    <div className="bg-black rounded-sm">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex gap-x-4">
            <Link legacyBehavior href="/category/2f390f21-72b6-4fcc-abf1-a2f789b5c192">
              <a className="flex gap-x-2 text-md hover:text-white text-neutral-500">
                <span>Productos  </span>
              </a>
            </Link>
            
          </div>
          <Link legacyBehavior href="/">
            <a className="ml-4 flex gap-x-2 items-center">
              <Image
                src="/assets/icono-la-reina.png"
                alt="Inicio"
                width={32}
                height={32}
              />
              <span className="hidden lg:inline-block text-white text-lg">
                Inicio
              </span>
            </a>
          </Link>
          
        </div>
      </Container>
    </div>
  );
};

export default NavbarContact;
