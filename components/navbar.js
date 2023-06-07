import MobileMenu from "./mobileMenu";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const location = useRouter();
  const locationRoute = location.pathname;
  const [toggleMenu, setToggleMenu] = useState(true);
  const [routeHandler, setRouteHandles] = useState(undefined);

  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
    toggleMenu ? console.log("positivo") : console.log("negativo");
  };

  useEffect(() => {
    setRouteHandles(locationRoute);
  }, [location]);

  const menuItems = [
    { href: "/", label: "Inicio" },
    { href: "/acerca-de-mi", label: "Acerca de mi" },
    { href: "/articulos", label: "Articulos" },
    { href: "/servicio", label: "Servicio" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <div className="z-10 sticky top-0">
      <nav className="bg-white bg-opacity-80 flex justify-end mt-2 py-3.5">
        <div className="text-4xl font-cursive mr-auto">Psic. Andrea Costantino</div>
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`mr-3 mt-2 transition duration-150 border-b-2 ${
              routeHandler === item.href ? "border-[#cd93b6]" : "border-transparent"
            } hover:border-b-[#cd93b6] hidden tablet:block`}
          >
            {item.label}
          </Link>
        ))}
        <Image
          onClick={handleMenu}
          className="phone:w-15 h-10 mt-3 visible tablet:hidden"
          src={toggleMenu ? require("../images/menu.png") : require("../images/x.png")}
          alt={toggleMenu ? "menu" : "x"}
        />
      </nav>
      <div className="border-t-2 border-solid border-[#cfcdcb] "></div>
      {toggleMenu ? null : <MobileMenu toggle={handleMenu} />}
    </div>
  );
};

export default Navbar;
