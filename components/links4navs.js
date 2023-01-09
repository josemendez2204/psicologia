import Link from "next/link";
const links4navs = () => {
    return ( 
        <>
        <Link href="/" className="mr-3 mt-2  transition duration-150 border-b-2 border-transparent hover:border-b-rose-900">Inicio</Link>
        <Link href="acerca-de-mi" className="mr-3 mt-2  transition duration-150 border-b-2 border-transparent hover:border-b-rose-900">Acerca de mi</Link>
        <Link href="especializacion" className="mr-3 mt-2  transition duration-150 border-b-2 border-transparent hover:border-b-rose-900">Especializacion</Link>
        <Link href="servicio" className="mr-3 mt-2  transition duration-150 border-b-2 border-transparent hover:border-b-rose-900">Servicio</Link>
        <Link href="contacto" className="mr-3 mt-2  transition duration-150 border-b-2 border-transparent hover:border-b-rose-900">Contacto</Link>
        </>
     );
}
 
export default links4navs;