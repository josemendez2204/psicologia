import MobileMenu from "./mobileMenu";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
const navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
    toggleMenu ? console.log("positivo") : console.log("negativo");
  };

  return (
    <div className="sticky">
      <nav className="flex justify-end mt-2  py-3.5   ">
        <div className="text-4xl font-sevillana mr-auto ">
          Psic. Andrea Costantino
        </div>
        <Link
          href="/"
          className="mr-3 mt-2  transition duration-150 border-b-2 border-transparent hover:border-b-blueGray hidden tablet:block "
        >
          Inicio
        </Link>
        <Link
          href="acerca-de-mi"
          className="mr-3 mt-2  transition duration-150 border-b-2 border-transparent hover:border-b-blueGray  hidden tablet:block"
        >
          Acerca de mi
        </Link>
        <Link
          href="especializacion"
          className="mr-3 mt-2  transition duration-150 border-b-2 border-transparent hover:border-b-blueGray  hidden tablet:block "
        >
          Especializacion
        </Link>
        <Link
          href="servicio"
          className="mr-3 mt-2  transition duration-150 border-b-2 border-transparent hover:border-b-blueGray  hidden tablet:block "
        >
          Servicio
        </Link>
        <Link
          href="contacto"
          className="mr-3 mt-2  transition duration-150 border-b-2 border-transparent hover:border-b-blueGray  hidden tablet:block"
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
      <div className="border-t-2 border-solid border-dividers "></div>
      <div>{toggleMenu ? null : <MobileMenu toggle={handleMenu} />}</div>
    </div>
    
  );
};

export default navbar;
