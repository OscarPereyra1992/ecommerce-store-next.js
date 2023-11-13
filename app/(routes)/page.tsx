import Navbar from "@/components/navbar";
import FloattingButtons from "@/components/ui/floating-buttons";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Link from "next/link";

export const revalidate = 0;

const HomePage = () => {
  return (
    <div className="relative w-screen h-screen">
      <div
        className="absolute w-screen h-screen sm:bg-white"
        style={{
          backgroundImage: "linear-gradient(to top left, black 50%, white 50%) ",
        }}
      ></div>
      <Container>
        <Navbar/>
        <FloattingButtons />
        <div className="relative z-20">
          <div className="flex flex-col gap-y-8 px-4 sm:px-4 lg:px-12 items-start ">
            <div className="text-start sm:text-6xl md:text-6xl lg:text-6xl xsm:my-auto xsm:text-3xl">
              <span className="text-black font-bold font-['DM Sans']">Un </span>
              <span className="text-red-500 font-bold font-['DM Sans']">
                placer
                <br />
              </span>
              <span className="text-black font-bold font-['DM Sans']">
                en cada bocado
              </span>
            </div>
            <img
              src="/assets/hoja-landing.png"
              alt="Imagen 1"
              className="w-24 h-22 sm:w-24 sm:h-22 lg:w-48 lg:h-44 absolute left-[52.84px] top-[190.86px] xsm:absolute xsm:left-[52.84px] xsm:top-[315.73px]"
            />
            <img
              src="/assets/hoja-landing-2.png"
              alt="Imagen 2"
              className="w-24 h-22 sm:w-24 sm:h-22 lg:w-48 lg:h-44 absolute left-[12.06px] top-[186.73px] xsm:absolute xsm:left-[12.06px] xsm:top-[310.73px]"
            />
            <img
              src="/assets/icono-la-reina.png"
              alt="Icono la reina"
              className="w-48 h-40 flex items-center justify-center mx-auto xsm:mt-28 lg:mt-auto"
            />
          </div>
        </div>

        <div className="flex items-center justify-center absolute inset-x-0 bottom-20">
          <Link href="/about">
            <Button className="w-48 h-16 relative bg-red-700 rounded-3xl xsm:mb-10">
              <div className="flex items-center justify-center absolute inset-0 text-stone-200 font-bold font-['DM Sans']">
                Conócenos
              </div>
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
