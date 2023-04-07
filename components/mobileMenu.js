import { motion } from "framer-motion";
const mobileMenu = (props) => {
  return (
    <>
      <motion.div
        initial={{ x: 200 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.35 }}
      >
        <div className="flex flex-col  items-center  h-auto w-[140px] bg-blueGray bg-opacity-90 z-10  absolute left-[60%] rounded-lg tablet:hidden ">
          <a
            className="mb-1 hover:text-slate-800"
            href="/"
            onClick={props.toggle}
          >
            Inicio
          </a>
          <a
            className="mb-1 hover:text-slate-800"
            href="/acerca-de-mi"
            onClick={props.toggle}
          >
            Acerca de mi
          </a>
          <a
            className="mb-1 hover:text-slate-800"
            href="/articulos"
            onClick={props.toggle}
          >
            Articulos
          </a>
          <a
            className="mb-1 hover:text-slate-800"
            href="/servicio"
            onClick={props.toggle}
          >
            Servicio
          </a>
          <a
            className="mb-1 hover:text-slate-800"
            href="/contactos"
            onClick={props.toggle}
          >
            Contactos
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default mobileMenu;
