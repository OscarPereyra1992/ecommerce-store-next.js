import Image from "next/image";
import Link from "next/link";

export const revalidate = 0;

const FloattingButtons = () => {
  return (
    <div
      className="group fixed bottom-0 right-0 p-10  flex items-end justify-end w-24 h-24 "
      style={{ zIndex: 9999 }}
    >
      {/*<!-- main -->*/}
      <div className="shadow-xl flex items-center justify-center  rounded-full  z-50 absolute  ">
        <Image
          src="/assets/tel.svg"
          width="60"
          height="60"
          alt="Main button"
        />
      </div>
      {/*<!-- icono izquierda -->*/}
      <div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-16   flex  p-2 hover:p-3 border border-white bg-black scale-100 hover:bg-black text-white">
      <Link href="https://www.pedidosya.com.ar/restaurantes/parana/la-reina-parana-03d47d19-444d-4ed2-bb48-d8c304e4a598-menu?search=reina"
        target="_blank">
        <Image
          src="/assets/pedidosya-icon.png"
          width="20"
          height="20"
          alt="Pedidos ya logo"
        />
        </Link>
      </div>
      {/*<!-- icono arriba -->*/}
      <div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-16  flex  p-2 hover:p-3 border border-white bg-black hover:bg-black   text-white"
      >
        <Link href="https://wa.me/message/FCWLWQADLFU3L1"
        target="_blank">
        <Image
          src="/assets/wsp-logo.png"
          width="20"
          height="20"
          alt="Wsp-logo"
        />
        </Link>
      </div>
      {/*<!-- icono medio -->*/}
      <div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-14 group-hover:-translate-x-14   flex  p-2 hover:p-3 border border-white bg-black hover:bg-black text-white">
        <Link href="https://www.instagram.com/lareina.pna/" target="_blank">
        <Image
          src="/assets/instagram-icon.png"
          width="20"
          height="20"
          alt="Instagram-logo"
        />
        </Link>
      </div>
    </div>
  );
};

export default FloattingButtons;
