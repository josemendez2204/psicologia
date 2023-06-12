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
    <div className="bg-white flex items-center  flex-col min-[450px]:block min-[450px]:bg-[url('../images/andrea-inicio.jpg')] overflow-auto bg-opacity-50  h-screen  bg-[length:100%_100%] ">
     <div className=" h-auto w-[70%] text-center mt-7 ">
      <motion.div
        className="text-[20px] mb-10  min-[450px]:text-[30px] "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3}}
      >
        ¡Bienvenidos a mi Consultorio Virtual!
      </motion.div>
      <div className="  visible mb-7 w-[80%] min-[450px]:hidden">
      <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 3 }}
      >
        <Image className=" ml-4" src={require("../images/index.jpg")} />
      </motion.div>
      </div>
      {typing && (
        <div className="text-[15px] text-justify min-[450px]:text-center  min-[450px]:text-[20px]">
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
          className=" text-[15px]  min-[450px]:text-[20px] mt-16 min-[450px]:mt-36  "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          - Andrea Costantino
        </motion.div>
      )}
    </div>
    </div>
  );
}