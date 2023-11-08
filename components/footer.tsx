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
                <p className="text-center text-xs text-white">
                     Página elaborada por Oscar Pereyra. All rights reserved.
                </p>
            </div>
      </div>

        </footer>
    )
}

export default Footer;