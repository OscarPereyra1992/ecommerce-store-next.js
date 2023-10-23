import Navbar from "@/components/navbar";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = () => {
  return (
    <div className="relative w-screen h-screen">
      <div
        className="absolute w-screen h-screen sm:bg-white"
        style={{
          backgroundImage: "linear-gradient(to top left, black 50%, white 50%)"
        }}
      ></div>
      <Container>
        <Navbar />
        <div className="relative z-20">
          <div className="flex flex-col gap-y-8 px-4 sm:px-4 lg:px-6 items-center">
            <div className="text-center sm:text-6xl md:text-6xl lg:text-8xl">
           
              <span className="text-black font-bold font-['DM Sans']">
                Un{" "}
              </span>
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
              className="w-24 h-22 sm:w-24 sm:h-22 lg:w-48 lg:h-44 absolute left-[52.84px] top-[190.86px]"
            />
            <img
              src="/assets/hoja-landing-2.png"
              alt="Imagen 2"
              className="w-24 h-22 sm:w-24 sm:h-22 lg:w-48 lg:h-44 absolute left-[12.06px] top-[186.73px]"
            />
           
            <img
              src="/assets/icono-la-reina.png"
              alt="Icono la reina"
              className="w-48 h-40 absolute-top"
            />
            <div className="mx-auto">
              <Button className="w-96 h-20 sm:w-48 sm:h-16 relative bg-stone-900 rounded-3xl">
                <div className="flex items-center justify-center absolute inset-0 text-stone-200 font-bold font-['DM Sans']">
                  Conócenos
                </div>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;