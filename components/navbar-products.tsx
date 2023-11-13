import Link from 'next/link';
import Image from 'next/image';
import Container from './ui/container';

import getCategories from '@/actions/get-categories';
import MainNavProducts from './main-nav-products';

export const revalidate = 0;

const NavbarProducts = async () => {
  const categories = await getCategories();

  return (
    <div className="bg-black rounded-sm">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          
          <Link legacyBehavior href="/">
            <a className="ml-4 flex lg:ml-0 gap-x-2">
              <Image
                src="/assets/icono-la-reina.png"
                alt="Inicio"
                width={32} 
                height={32} 
              />
              <span className="hidden lg:inline-block text-white text-lg">Inicio</span>
            </a>
          </Link>
          <MainNavProducts data={categories} />
        </div>
      </Container>
    </div>
  );
};

export default NavbarProducts;