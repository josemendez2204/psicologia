import MobileMenu from "./mobileMenu";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const navbar = () => {
  const location = useRouter();
  const locationRoute= location.pathname
  const [toggleMenu, setToggleMenu] = useState(true);
  const [routeHandler, setRouteHandles]= useState (undefined)

  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
    toggleMenu ? console.log("positivo") : console.log("negativo");
  };

  useEffect(() => {
   setRouteHandles (locationRoute)
  }, [location]);

  return (
    <div className=" z-10 sticky top-0">
      <nav className=" bg-white bg-opacity-80 flex justify-end mt-2  py-3.5   ">
        <div className="text-4xl font-cursive mr-auto ">
          Psic. Andrea Costantino
        </div>
        <Link
          href="/"
          className={`mr-3 mt-2 transition duration-150 border-b-2 ${routeHandler === "/" ?"border-blueGray"  : "border-transparent"} hover:border-b-blueGray hidden tablet:block`}
        >
          Inicio
        </Link>
        <Link
          href="/acerca-de-mi"
          className={`mr-3 mt-2  transition duration-150 border-b-2 border-transparent ${routeHandler === "/acerca-de-mi" ?"border-blueGray"  : "border-transparent"} hover:border-b-blueGray  hidden tablet:block`}
        >
          Acerca de mi
        </Link>
        <Link
          href="/articulos"
          className={`mr-3 mt-2  transition duration-150 border-b-2 border-transparent ${routeHandler === "/articulos" ?"border-blueGray"  : "border-transparent"} hover:border-b-blueGray  hidden tablet:block`}
        >
          Articulos
        </Link>
        <Link
          href="/servicio"
          className={`mr-3 mt-2  transition duration-150 border-b-2 border-transparent ${routeHandler === "/servicio" ?"border-blueGray"  : "border-transparent"}  hover:border-b-blueGray  hidden tablet:block `}
        >
          Servicio
        </Link>
        <Link
          href="/contacto"
          className={`mr-3 mt-2  transition duration-150 border-b-2 border-transparent ${routeHandler === "/contacto" ?"border-blueGray"  : "border-transparent"}  hover:border-b-blueGray  hidden tablet:block `}
        >
          Contacto
        </Link>
        {toggleMenu ? (
          <Image
            onClick={handleMenu}
            className=" phone:w-15 h-10 mt-3 visible  tablet:hidden "
            src={require("../images/menu.png")}
            alt="menu"
          />
        ) : (
          <Image
            onClick={handleMenu}
            className="phone:w-15 h-10 mt-3 visible  tablet:hidden"
            src={require("../images/x.png")}
            alt="x"
          />
        )}
      </nav>
      <div className="border-t-2 border-solid border-[#286673] "></div>
      <div>{toggleMenu ? null : <MobileMenu toggle={handleMenu} />}</div>
    </div>
  );
};

export default navbar;
