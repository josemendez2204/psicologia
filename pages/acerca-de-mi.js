import Image from "next/image";
import { motion } from "framer-motion";

const about = () => {
  const paragraphs = [
    {
      text: " De clase 1994, Nacida en la Ciudad de Maracaibo, Venezuela. Es una Psicóloga Egresada de la Universidad Rafael Urdaneta con más de seis años de experiencia en el área de la psicología clínica y salud como terapeuta cognitivo conductual a nivel Individual, de Pareja, Familiar y Grupal",
      delay: 0.2,
    },
    {
      text: " Por y para ello desde muy joven se ha dedicado, educado y formado bajo diversas instituciones tanto en cursos y formaciones a nivel académico, profesional, laboral, y personal.",
      delay: 0.4,
    },
    {
      text: "   Por y para ello desde muy joven se ha dedicado, educado y formado bajo diversas instituciones tanto en cursos y formaciones a nivel académico, profesional, laboral, y personal.",
      delay: 0.6,
    },
  ];

  const list = [
    {
      year: <b>2013</b>,
      text: "El Sueño (cómo dormir bien para vivir mejor) ",
      delay: 2,
    },
    {
      year: <b>2016</b>,
      text: "Aproximación a la Intervención Clínica de Parejas",
      delay: 2.4,
    },
    {
      year: <b>2016</b>,
      text: "Abordaje Psicológico al Paciente con Cáncer",
      delay: 2.8,
    },

    {
      year: <b>2017</b>,
      text: "Evaluación y Diagnostico en TEA",
      delay: 3.2,
    },

    {
      year: <b>2017</b>,
      text: "Formación en Terapias Cognitivo-Conductuales",
      delay: 4.6,
    },

    {
      year: <b>2022</b>,
      text: "Experta en Gestión Emotiva - Psicología Positiva & Mindfulness",
      delay: 5,
    },
  ];
  return (
    <div className="bg-white overflow-auto bg-opacity-50  h-[calc(75vh+35px)]  bg-[length:100%_100%]">
      <Image
        className="hidden w-[30%] h-[90%] float-left mt-5 min-[810px]:inline-block"
        src={require("../images/acerca-de-mi.jpg")}
      />
      <div className="flex items-center flex-col justify-start">
        <h1 className="mb-2 text-[30px] font-medium ">Andrea Costantino</h1>
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
            className="text-justify"
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: p.delay }}
          >
            {
              <li>
                {p.year}-{p.text}
              </li>
            }
          </motion.ol>
        ))}
    </div>
  );
};

export default about;
