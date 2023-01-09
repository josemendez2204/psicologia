const mobileMenu = (props) => {
  return (
    <>
      <div className=" flex flex-col  items-center  h-auto w-[140px] bg-blueGray bg-opacity-75 z-10  absolute left-[60%] rounded-lg tablet:hidden ">
        <a className="mb-1 hover:text-slate-800" href="#" onClick={props.toggle}>
          Inicio
        </a>
        <a className="mb-1 hover:text-slate-800" href="#" onClick={props.toggle}>
          Acerca de mi
        </a>
        <a className="mb-1 hover:text-slate-800" href="#" onClick={props.toggle}>
          Especializacion
        </a>
        <a className="mb-1 hover:text-slate-800" href="#" onClick={props.toggle}>
          Servicio
        </a>
        <a className="mb-1 hover:text-slate-800" href="#" onClick={props.toggle}>
          Contactos
        </a>
      </div>
    </>
  );
};

export default mobileMenu;
