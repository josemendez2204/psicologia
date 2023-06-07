import Image from "next/image";
import ImageSlider from "../components/imageSlider";
import { motion } from "framer-motion";

const about = () => {
  const paragraphs = [
    {
      text: "De clase 1994 nací en la Ciudad de Maracaibo, Venezuela. Soy Psicóloga egresada de la Universidad Rafael Urdaneta (URU) - Escuela de Psicologia promoción  XCII. ",
      delay: 0.2,
    },
    {
      text: "Con más de seis años de experiencia en el área de la psicología clínica y salud como terapeuta  cognitivo conductual a nivel Individual, de Parejas y Familiar ó Grupal. ",
      delay: 0.4,
    },
    {
      text: "Me he formado y preparado a nivel personal, académico, profesional y laboral para brindar un óptimo servicio que  sea de instrumento para reivindicar a todo individuo en salud mental y sacar su mejor versión, de manera que aprendas del pasado, vivas la visión en el presente y camines seguro hacia el futuro. ",
      delay: 0.6,
    },
    {
      text: " Por lo cual  mantengo constante actualización y formación. También soy titulada como Experta en Mindfulness & Gestión Emotiva por el IEPP y la Universidad Popular de Milán -  Genova Italia   ",
      delay: 0.8,
    },
    {
      text: "A su vez cuento con formación en:",
      delay: 1,
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
          <h1 className="mb-2 text-[30px] font-medium ">Andrea Angelica Costantino</h1>
          <Image
            className="block w-[60%] h-[90%] float-left mb-3 min-[810px]:hidden"
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
