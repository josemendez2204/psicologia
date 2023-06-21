import PriceTable from "../components/priceTable";
import { motion } from "framer-motion";
import Image from "next/image";
const servicio = () => {
  const individual = [
    { id: 1, title: "PRIMERA SESION INDIVIDUAL", price: "€50" },
    { id: 2, title: "SESION SUCESIVA INDIVIDUAL", price: "€30" },
    { id: 3, title: "PACK SUCESIVO 4 SESIONES INDIVIDUALES", price: "€100" },
  ];

  const parejas = [
    { id: 4, title: `SESION EN PAREJA\n\n`, price: "€50" },
    { id: 5, title: "PACK PAREJAS 4 SESIONES SUCESIVAS", price: "€155" },
  ];

  return (
    <div className="bg-white bg-opacity-50 h-auto ">
      <div className="flex justify-center flex-col items-center">
        <div className="mt-2 text-4xl font-cursive  text-center  ">
          En Que y Como Puedo Ayudarte
        </div>
        <p className=" mt-4 mb-3 w-[80%] text-justify">
          {" "}
          Una Asesoría personalizada es un Espacio Exclusivo en el cual vas a
          descubrir y trabajar aquellas áreas, creencias y hábitos que
          interfieren en la dinámica personal, estilo y calidad de vida. Además,
          obtendrás las herramientas y estrategias terapéuticas que se ajustan a
          tu esencia para modificar los pensamientos, emociones y
          comportamientos no deseados, así como lo anteriormente mencionado.{" "}
        </p>
        <p className=" mb-3 w-[80%] text-justify">
          En este espacio iniciaras un proceso de sanación en tu historia de
          vida, crecimiento personal y amor propio, cierre de ciclos cuyo
          objetivo es desaprender y romper los viejos moldes y estilos de vida,
          eliminando el sufrimiento subjetivo, reconstruyendo nuevos estilos de
          afrontamiento y trabajar los comportamientos aprendidos y automáticos
          que generalmente aquejan y dificultan la relación y comunicación
          interpersonal.
        </p>
        <p className=" mb-3 w-[80%] text-justify">
          La Modalidad Online se lleva a cabo a través de una videollamada (Zoom
          – GogleeMeet) la cual se ajusta a toda persona que requiera de
          orientación o asesoría de un profesional de la Salud Mental calificado
          para el abordaje psicoterapéutico de los problemas del individuo desde
          cualquier parte del mundo.
        </p>
        <h1 className=" font-bold text-center ">
          LAS ASESORIAS PERSONALIZADAS PUEDEN SER
        </h1>
        <div className="mt-3 flex flex-row">
          <a href="#individual">
            <h2 className="font-semibold text-slate-700">INDIVIDUAL</h2>
          </a>{" "}
          <p>-</p>{" "}
          <a href="#parejas">
            <h2 className="font-semibold text-red-900">PAREJA</h2>
          </a>{" "}
          <p>-</p>{" "}
          <a href="#familiar">
            <h2 className="font-semibold text-lime-800">FAMILIAR</h2>
          </a>
        </div>
        <h1 className="font-cursive mt-3 text-4xl text-center">
          Nos vemos en la consulta
        </h1>
        <p className="mt-4 mb-3 w-[80%] text-center">
          Las sesiones son PRE PAGADAS. Es decir, una vez que usted realiza el
          pago total se le asigna el día y la hora en acuerdo entre el
          interesado y el profesional.
        </p>
        <p id="individual" className="mb-3 w-[80%] text-center">
          Las consultas privadas son No-Reembolsables. Es decir que usted podrá
          reagendar su cita 1 sola vez, siempre y cuando notifique el cambio 24
          horas antes de su fecha y hora pautada.
        </p>
        <p className="mb-3 w-[80%] text-center">
          Atención al cliente para reportar su pago y agendar su cita.
        </p>
      </div>
      <div className="border-t-2 border-solid border-dividers "></div>
      <div className="flex justify-center flex-col items-center">
        <h1 className="mt-2 text-3xl bold text-center ">
          LAS ASESORIA PERSONALIZADA
        </h1>
        <h1 className="mt-2 text-4xl font-cursive">Individual</h1>
        <p>
          <b>Tiempo Sesión:</b> 60 minutos
        </p>
        <p>
          <b>Plataforma:</b> GoogleMeet - Zoom
        </p>
      </div>
      <div className="flex flex-col min-[450px]:flex-row gap-0.5 items-center justify-center">
        <p id="parejas"></p>
        {individual.map((individual) => (
          <motion.div
            whileHover={{ y: -10 }} // Mueve el div 10 píxeles hacia arriba al hacer hover
            transition={{ duration: 0.3 }} // Duración de la animación
          >
            <PriceTable
              title={individual.title}
              price={individual.price}
              onClick={() => {
                window.open(
                  `https://wa.me/393270717765?text=Hola, estoy interesado en ${individual.title}`,
                  "_blank"
                );
              }}
            />
          </motion.div>
        ))}
      </div>
      <div className="border-t-2 border-solid border-dividers "></div>
      <div className="flex justify-center flex-col items-center">
        <h1 className="mt-2 text-4xl font-cursive">Parejas</h1>
        <p>
          <b>Tiempo Sesión:</b> 1h 45 minutos
        </p>
        <p>
          <b>Plataforma:</b> GoogleMeet - Zoom
        </p>
      </div>
      <div className="flex flex-col min-[450px]:flex-row gap-0.5 items-center justify-center">
        {parejas.map((parejas) => (
          <motion.div
            whileHover={{ y: -10 }} // Mueve el div 10 píxeles hacia arriba al hacer hover
            transition={{ duration: 0.3 }} // Duración de la animación
          >
            <PriceTable
              title={parejas.title}
              price={parejas.price}
              onClick={() => {
                window.open(
                  `https://wa.me/393270717765?text=Hola, estoy interesado en ${parejas.title}`,
                  "_blank"
                );
              }}
            />
          </motion.div>
        ))}
        <p id="familiar"></p>
      </div>
      <div className="border-t-2 border-solid border-dividers "></div>
      <div className="flex justify-center flex-col items-center">
        <h1 className="mt-2 text-4xl font-cursive">Familiar</h1>
        <p>
          <b>Tiempo Sesión:</b> 1h 45 minutos
        </p>
        <p>
          <b>Plataforma:</b> GoogleMeet - Zoom
        </p>
      </div>
      <div className="flex flex-row gap-0.5 items-center justify-center">
        <motion.div
          whileHover={{ y: -10 }} // Mueve el div 10 píxeles hacia arriba al hacer hover
          transition={{ duration: 0.3 }} // Duración de la animación
        >
          <PriceTable
            title={"SESION FAMILIAR \n \n "}
            price="$55"
            onClick={() => {
              window.open(
                `https://wa.me/393270717765?text=Hola, estoy interesado en SESION FAMILIAR`,
                "_blank"
              );
            }}
          />
        </motion.div>
      </div>
      <div className="border-t-2 border-solid border-dividers "></div>
      <div className="flex justify-center flex-col items-center">
        <h1 className="mt-2 text-4xl text-center font-cursive">
          Apoyo emocional de mascota
        </h1>
        <p className="text-center mt-2">
          El Certificado de Apoyo Emocional para viajar con animales te permite
          llevar a tu mascota en cabina de avión.
        </p>
        <div
          className=" my-3 w-[330px] min-max[838px]:w-[40%] rounded-2xl cursor-pointer"
          onClick={() => {
            window.open(
              `https://wa.me/393270717765?text=Hola, estoy interesado en VIAJAR CON MI MASCOTA`,
              "_blank"
            );
          }}
        >
          <Image
            className="w-full rounded-3xl"
            src={require("../images/gato.gif")}
            alt="viaja con tu mascota "
          />
        </div>
      </div>
    </div>
  );
};

export default servicio;
