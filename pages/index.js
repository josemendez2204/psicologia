import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Gift from "../components/gift";
import Image from "next/image";

export default function Home() {
  const [typing, setTyping] = useState(false);
  const [name, setName] = useState(false);
  const [showGift, setShowGift] = useState(false);

  useEffect(() => {
    const giftSession = sessionStorage.getItem("gift"); 

    if (!giftSession) {
      sessionStorage.setItem("gift", "regalo");
      setTimeout(() => {
        setShowGift(true);
      }, 24000);
    }

    setTimeout(() => {
      setTyping(true);
    }, 3000);
    setTimeout(() => {
      setName(true);
    }, 25000);
  }, []);

  return (
    <>
      {showGift ? <Gift /> : null}

      <div className="bg-white flex items-center  flex-col min-[450px]:block min-[450px]:bg-[url('../images/andrea-inicio.jpg')]  bg-opacity-50 h-auto min-[450px]:h-screen overflow-auto  bg-[length:100%_100%] ">
        <div className=" h-auto w-[100%] tablet:w-[70%] text-center mt-7 ">
          <motion.div
            className="text-[20px] mb-10  min-[450px]:text-[30px] "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            ¡Bienvenidos a Mi Consultorio Virtual!
          </motion.div>
          <div className="  visible mb-7 w-[80%] relative left-[5%] min-[450px]:hidden">
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
                  "En este espacio mi finalidad es compartir con todo aquel que busca una transformación en su estilo y calidad de vida. Desde la psicoeducación mi propósito es impartir mi experiencia dentro del campo de la salud mental como psicoterapeuta en el acompañamiento terapéutico con las herramientas necesarias, calificadas, probadas y aprobadas que te ayudaran a establecer el bienestar psicológico que todos los individuo anhelamos alcanzar frenéticamente ",
                  1000,
                ]}
                speed={60}
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
    </>
  );
}
