import Image from "next/image";
import Link from "next/link";

const Footer = () =>{
    return(
        <footer >
            <div className="flex flex-col gap-y-8 px-4 sm:px-4 lg:px-6 bg-black items-center">
        <img
          src="/assets/icono-la-reina.png"
          alt="Icono la reina"
          className="w-24 h-20 flex items-center justify-center"
        />
            <div className="mx-auto py-10">
                
                <p className="text-center text-xs text-white">
                    &copy; 2023 La Reina- Paraná.
                </p>
                <p className="text-center text-xs text-white items-center">
                     Página elaborada por Oscar Pereyra. All rights reserved.
                </p>
                <Link href="https://www.linkedin.com/in/oscar-pereyra-898baa128/"
                target="_blank">
            <Image className="flex mx-auto justify-center text-center items-center" src="/assets/linkedin-logo.png" alt="linkedin logo" width={20} height={20}/>
                </Link>
            
            </div>
      </div>

        </footer>
    )
}

export default Footer;