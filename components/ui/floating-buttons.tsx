
import Link from "next/link";

export const revalidate = 0;

const FloattingButtons = () => {
  return (
    <div className = "group fixed bottom-20 right-10 p-1  flex items-end justify-end w-24 h-24" style={{ zIndex: 9999 }}>

    <div className = "text-white shadow-xl flex items-center justify-center p-0 rounded-full bg-black z-100 absolute  ">
    <svg width="50" height="50" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M92.888 73.1857L78.0232 58.7733L64.0183 68.0497C60.7953 65.7672 54.7735 61.077 51.4998 57.9037C48.295 54.7966 44.0152 49.5273 41.8727 46.6111L51.5611 33.1089L35.0703 17.125C33.6313 15.7349 31.8434 15 29.8996 15C26.9847 15 23.8076 16.6474 20.4566 19.8963C18.214 22.0709 14.5292 26.9178 15.0498 34.9466C15.7145 45.1996 22.9811 57.1174 36.6481 70.3688C52.3987 85.6401 62.6332 95 74.0781 95C74.5177 95 74.9637 94.9855 75.4032 94.957C77.0543 94.8504 78.7678 94.4438 80.9593 93.6384L80.9827 93.6295C83.0247 92.8545 86.8862 90.3906 90.021 87.3511C93.3269 84.1456 95.0021 81.0418 95 78.1254C94.9986 76.2283 94.2675 74.5195 92.888 73.1857ZM86.7747 84.2037C83.9525 86.94 80.6636 88.9667 79.319 89.481C77.5763 90.1206 76.2741 90.4398 75.0982 90.5157C65.115 91.1611 55.335 82.192 39.8943 67.2211C11.2438 39.4418 20.2578 26.3841 23.703 23.0437C26.0923 20.7271 28.2929 19.4512 29.8996 19.4512C30.6326 19.4512 31.2459 19.714 31.8271 20.2755L45.5988 33.6244L36.3167 46.5604L37.1579 47.8154C39.0466 50.6332 44.4353 57.3496 48.2537 61.0518C52.0973 64.7772 59.6783 70.6303 62.7184 72.6075L64.0089 73.4468L77.4691 64.5311L89.6441 76.3356C90.1583 76.833 90.4087 77.4194 90.4092 78.1287C90.4099 79.0806 89.9386 81.1362 86.7747 84.2037Z" fill="#B91C1C"/>
<circle cx="55" cy="55" r="53" stroke="#B91C1C" strokeWidth="4"/>
</svg>

    </div>
   
    <div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-16   flex  p-2 hover:p-3 bg-black z-100 text-white">
    <a
            href="https://wa.me/message/FCWLWQADLFU3L1"
            target="_blank"
            rel="noopener noreferrer"
            className="transform scale-50 md:scale-100"
          >
    <img src="/assets/wsp-logo.png" width={30} height={30}/>
    </a>
    </div>

    <div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-16  flex  p-2 hover:p-3 bg-black z-100  text-white">
    <a
            href="https://www.instagram.com/lareina.pna/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform scale-50 xsm:scale-10 md:scale-100"
          >
        <img  src="/assets/instagram-icon.png" width={30} height={30}/>
        </a>
    </div>
    
    <div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-14 group-hover:-translate-x-14   flex  p-2 hover:p-3 bg-black z-100 text-white">
    <a
            href="https://www.pedidosya.com.ar/restaurantes/parana/la-reina-parana-03d47d19-444d-4ed2-bb48-d8c304e4a598-menu?search=reina"
            target="_blank"
            rel="noopener noreferrer"
            className="transform scale-50 md:scale-100"
          >
        <img src="/assets/pedidosya-icon.png" width={30} height={30} alt="" />
        </a>
    </div>
</div>
  );
};

export default FloattingButtons;
