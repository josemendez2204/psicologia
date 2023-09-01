import Image from "next/image";
import ImageSlider from "../components/imageSlider";
import { motion } from "framer-motion";

const about = () => {
  const paragraphs = [
    {
    text: "Soy Psicóloga egresada de la Universidad Rafael Urdaneta (URU) - Escuela de Psicologia promoción XCII en año 2016.",
    delay: 0.2,
    },
    {
    text: "Con más de seis años de experiencia en el área de la psicología clínica y salud como terapeuta cognitivo conductual a nivel Individual, de Parejas y Familiar ó Grupal.",
    delay: 0.4,
    },
    {
    text: "Me he formado y preparado a nivel personal, académico, profesional y laboral para brindar un óptimo servicio que sea instrumento para reivindicar a todo individuo a su salud mental y sacar su mejor versión, de manera que aprenda del pasado, viva la visión en el presente y camine seguro hacia el futuro.",
    delay: 0.6,
    },
    {
    text: "Atravesé mis Pasantías con mención honorífica como Psicólogo Clínico en el Servicio de Psiquiatría del Hospital General del Sur Dr. Pedro Iturbe en la Ciudad de Maracaibo, Edo. Zulia Venezuela.",
    delay: 0.8,
    },
    {
    text: "Así mismo Colaboré en la aplicación de las Escalas Wechsler de inteligencia para adultos (WAIS), para El Taller Laboral Ciudad de Maracaibo en la evaluación, diagnóstico, actualización de informe y tratamiento de adolescentes y adultos con discapacidad.",
    delay: 1,
    },
    {
    text: "Mantengo constante actualización y formación. También estoy titulada como Experta en Mindfulness & Gestión Emotiva por el IEPP y la Universidad Polular de Milán - Genova Italia",
    delay: 1.2,
    },
    ];


  const list = [
  
    {
      text: "Sexualidad Sana y Responsable",
      delay: 2.4,
    },
    {
      text: "Dormir bien, para sentirse bien",
      delay: 2.8,
    },

    {
      text: "Intervención clínica a Parejas",
      delay: 3.2,
    },

    {
      text: "Abordaje al Paciente Oncológico",
      delay: 4.6,
    },

    {
      text: "Evaluación, Diagnóstico y Tratamiento en TEA",
      delay: 5,
    },
    {
      text: "Formación en Terapia Cognitivo-Conductual.",
      delay: 5.2,
    },
  ];
  return (
    <>
      <div className="overflow-auto bg-opacity-50  bg-[length:100%_100%]">
        <Image
          className="hidden w-[40%] h-[90%] float-left mt-5 min-[810px]:inline-block"
          src={require("../images/fondo.jpg")}
          s
        />
        <div className="flex items-center flex-col justify-start">
          <h1 className="mb-2 text-[30px] text-center font-medium ">Andrea Angelica Costantino</h1>
          <Image
            className="block w-[100%] h-[90%] float-left mb-3 min-[810px]:hidden"
            src={require("../images/acerca-de-mi.jpg")}
          />
          {paragraphs.map((p, index) => (
            <motion.p
              key={index}
              className="mb-2 text-justify"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: p.delay }}
            >
              {p.text}
            </motion.p>
          ))}
        </div>

        {list.map((p, index) => (
          <motion.ol
            className="text-center"
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: p.delay }}
          >
            {
              <li>
                -{p.text}
              </li>
            }
          </motion.ol>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5.3 }}
        >
          <ImageSlider />
        </motion.div>
      </div>
    </>
  );
};

export default about;
