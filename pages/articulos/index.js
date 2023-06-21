import Articles from "../../components/articles";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
const articulos = () => {
  const [selectedDiv, setSelectedDiv] = useState(false);
  const route = useRouter();
  const handleSelection = (articles) => {
    setSelectedDiv(true);

    switch (articles) {
      case 1:
        setTimeout(() => {
          route.push("/articulos/la-psicologia-de-la-salud");
        }, 1000);
        break;
      case 2:
        setTimeout(() => {
          route.push("/articulos/lazo-afectivo-en-familia");
        }, 1000);
        break;
      case 3:
        setTimeout(() => {
          route.push("/articulos/crisis&afrontamiento");
        }, 1000);
        break;
      case 4:
        setTimeout(() => {
          route.push("/articulos/consumo-de-cannabis");
        }, 1000);
        break;
      case 5:
        setTimeout(() => {
          route.push("/articulos/las-emociones");
        }, 1000);
        break;
      default:
        setTimeout(() => {
          route.push("/articulos");
        }, 1000);
        break;
    }
  };

  const variants = [
    {
      initial: { x: 0 },
      animate: {
        x: "140%",
        transition: { duration: 1 },
      },
      exit: {
        x: "-100%",
        opacity: 0,
        transition: { duration: 1 },
      },
    },
    {
      initial: { x: 0 },
      animate: {
        x: "140%",
        transition: { duration: 1.2 },
      },
      exit: {
        x: "-100%",
        opacity: 0,
        transition: { duration: 2 },
      },
    },
    {
      initial: { x: 0 },
      animate: {
        x: "140%",
        transition: { duration: 1.4 },
      },
      exit: {
        x: "-100%",
        opacity: 0,
        transition: { duration: 2.5 },
      },
    },
    {
      initial: { x: 0 },
      animate: {
        x: "140%",
        transition: { duration: 1.6 },
      },
      exit: {
        x: "-100%",
        opacity: 0,
        transition: { duration: 3 },
      },
    },
    {
      initial: { x: 0 },
      animate: {
        x: "140%",
        transition: { duration: 1.8 },
      },
      exit: {
        x: "-100%",
        opacity: 0,
        transition: { duration: 3.5 },
      },
    },
  ];

  const cascadeVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    transition1: { duration: 0.5, delay: 0.2 },
    transition2: { duration: 0.5, delay: 0.4 },
    transition3: { duration: 0.5, delay: 0.6 },
    transition4: { duration: 0.5, delay: 0.8 },
    transition5: { duration: 0.5, delay: 1 }
  };
 
  
  const styleArticle =
    "flex flex-col w-3/4 items-center justify-center h-auto min-[974px]:block my-4  border border-solid border-dividers rounded-xl shadow-xl hover:bg-slate-100 hover:shadow-2xl";
  return (
    <div className="flex items-center flex-col justify-center bg-white bg-opacity-50 h-auto ">
      <motion.div
        className={`${styleArticle}`}
        variants={selectedDiv ? variants[0] : cascadeVariant}
        initial={selectedDiv ? "initial" : "hidden"}
        animate={selectedDiv ? "animate" : "visible"}
        exit="exit"
        transition="transition"
        onClick={() => {
          handleSelection(1);
        }}
      >
        <Articles
          title="La Psicología de la Salud"
          photo="psicologiaSalud"
          content="La Psicología de la Salud está dedicada al entendimiento de las influencias psicológicas en la salud de las personas, por qué se enferman y cómo responden cuando se enferman.Promueve además, intervenciones con el fin de ayudar a las personas a estar saludables o para reponerse de las enfermedades. Ésta disciplina científica está  interesada en los comportamientos relacionados con la salud, la prevención de las enfermedades, la seguridad del individuo y su rehabilitación.... "
        />
      </motion.div>
      <motion.div
        className={`${styleArticle}`}
        variants={selectedDiv ? variants[1] : cascadeVariant}
        initial={selectedDiv ? "initial" : "hidden"}
        animate={selectedDiv ? "animate" : "visible"}
        exit="exit"
        transition={selectedDiv ? "transition" : "transition2"}
        onClick={() => {
          handleSelection(2);
        }}
      >
        <Articles
          title="El lazo afectivo en la familia"
          photo="lazofamilia"
          content="El motivo real de los conflictos en las familias es la falla en la construcción del lazo afectivo 🎀 El vinculo afectivo se construye a medida que se van viviendo experiencias juntos, desde la infancia, por aceptación, unidad, vivencias, experiencias buenas y  malas, cariño,  momentos. Ahora bien ¿Porque se pelean las familias y el conflicto pareciera que no se puediera solucionar?.... - Lo que llamamos el interminable conflicto o la interminable pelea  familiar  La verdadera razón a la falta de solución en los conflictos familiares es el cobro... "
        />
      </motion.div>
      <motion.div
        className={`${styleArticle}`}
        variants={selectedDiv ? variants[2] : cascadeVariant}
        initial={selectedDiv ? "initial" : "hidden"}
        animate={selectedDiv ? "animate" : "visible"}
        exit="exit"
        transition={selectedDiv ? "transition" : "transition3"}
        onClick={() => {
          handleSelection(3);
        }}
      >
        <Articles
          title="CRISIS & AFRONTAMIENTO"
          photo="crisis"
          content="Una crisis es un estado temporal de trastorno y desorganización, caracterizado principalmente por la incapacidad del individuo para manejar situaciones particulares utilizando mètodos acostumbrados para la solución de problemas, y por el potencial para obtener un resultado radicalmente positivo o negativo. - Karls Slaikeu Las crisis aparecen para generar: C A M B I O S Es una circunstacia que nos envuelve en  Estrès, Pánico, Temor, Violencia,  Descontrol, Enojo, Inseguridad, Depresión, Falta de autoestima, Y las más importantes •Distracción y Estancamiento..."
        />
      </motion.div>
      <motion.div
        className={`${styleArticle}`}
        variants={selectedDiv ? variants[3] : cascadeVariant}
        initial={selectedDiv ? "initial" : "hidden"}
        animate={selectedDiv ? "animate" : "visible"}
        exit="exit"
        transition={selectedDiv ? "transition" : "transition4"}
        onClick={() => {
          handleSelection(4);
        }}
      >
        <Articles
          title="CONSUMO DE CANNABIS"
          photo="cannabis"
          content="
          Fácilmente juzgamos a las personas que consumen ciertas sustancias, ignorando lo que hay detrás de cada adicción, esos conflictos no resueltos que generan vacío, el  problema que lleva a la persona a utilizar métodos drásticos que más allá de darle solución a los problemas y detener el sufrimiento, lo adormece momentáneamente.
          La manifestación del daño interno la establecemos permitiéndonos consumir, obtener, y permanecer cerca de aquello que nos perjudica. Hay que recordar que nadie en su sano juicio desea hacerse daño voluntariamente...
          "
        />
      </motion.div>
      <motion.div
        className={`${styleArticle}`}
        variants={selectedDiv ? variants[4] : cascadeVariant}
        initial={selectedDiv ? "initial" : "hidden"}
        animate={selectedDiv ? "animate" : "visible"}
        exit="exit"
        transition={selectedDiv ? "transition" : "transition5"}
        onClick={() => {
          handleSelection(5);
        }}
      >
        <Articles
          title="LAS EMOCIONES"
          photo="emociones"
          content="
          Cumplen una función sumamente importante en el individuo, éstas nos brindan supervivencia, son esa alarma 🔔 que avisa al sistema sobre alguna situación que puede ser peligrosa☣, activando así todo nuestro sistema para afrontar la situación amenazante ó agradable para sentir plenitud y placer. 

Porque ciertamente existen emociones agradables y desagradables y toda emoción va anclada a un sentimiento.

Sin embargo no son lo mismo cuya principal diferencia entre emociones y sentimientos está en que las emociones se producen de manera inconsciente y los sentimientos son...


          "
        />
      </motion.div>
    </div>
  );
};

export default articulos;
