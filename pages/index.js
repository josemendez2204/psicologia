import { Inter } from "@next/font/google";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [typing, setTyping] = useState(false);
  const [name, setName] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTyping(true);
    }, 3000);
    setTimeout(() => {
      setName(true);
    }, 26000);
  }, []);

  return (
    <div className="bg-white flex items-center  flex-col min-[450px]:block min-[450px]:bg-[url('../images/andrea-inicio.jpg')] overflow-auto bg-opacity-50  h-[calc(75vh+35px)]  bg-[length:100%_100%] ">
      <motion.div
        className=" m-3  font-semibold  text-[18px] min-[588px]:max-[1156px]:ml-[-58px] min-[450px]:relative min-[450px]:font-medium  min-[450px]:text-[30px] min-[450px]:top-[5%] min-[450px]:left-[10%] h-auto min-[450px]:mt-5  "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3}}
      >
        ¡Bienvenidos a mi Consultorio Virtual!
      </motion.div>
      <div className="   visible w-[80%] min-[450px]:hidden">
      <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 3 }}
      >
        <Image className=" relative w-[75%] h-[240px] left-[9%]  min-[379px]:w-[74%] min-[379px]:h-[300px]" src={require("../images/index.jpg")} />
      </motion.div>
      </div>
      {typing && (
        <div className="   min-[450px]:relative min-[450px]:top-[10%] w-[80%] mt-3 text-[85%] min-[450px]:mt-8 min-[450px]:w-[50%] min-[450px]:text-[20px] min-[450px]:left-[6%] text-justify h-auto">
          <TypeAnimation
            sequence={[
              'Éste espacio ésta diseñado para generar en ti una Transformación bajo la premisa de  "Desaprender lo Aprendido para volver Aprender" por medio de la Psicoeducación teórico-práctico donde obtendrás las herramientas necesarias para aplicar en tu dinámica personal , de pareja y familiar las cuales te permitirán mejorar tu calidad de vida. .',
              1000,
            ]}
            speed={40}
            wrapper="p"
            repeat={1}
          />
        </div>
      )}

      {name && (
        <motion.div
          className=" min-[450px]:relative min-[450px]:left-[20%] min-[450px]:top-[35px] w-[50%] min-[450px]:w-[15%] h-auto min-[450px]:text-[20px] mt-12 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          - Andrea Costantino
        </motion.div>
      )}
    </div>
  );
}