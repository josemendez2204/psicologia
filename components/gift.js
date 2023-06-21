import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
function gift() {
  const [closeGift, setCloseGift] = useState(true);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const ballVariants = {
    hidden:{ y: -100 },
    visible: {
      y: 280,
      transition: { duration: 1, ease: "easeOut" },
      yoyo: Infinity,
    },
  };

  const closedGift = () => {
    setCloseGift(false);
    window.open('https://drive.google.com/file/d/1Q7psxoiz5xk7LxMYa9OeThFJAo4-DgBc/view?usp=drive_link', '_blank', 'width=500,height=500');
  };

  return (
    <div
      className={`absolute left-[28%] z-40 cursor-pointer ${closeGift ? "" : "hidden"}`}
      title="presiona esta caja para recibir tu regalo"
      onClick={() => {closedGift()}}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={ballVariants} whileHover={{ scale: 1.2 }}>
          <Image src={require("../images/gift.png")} alt="gift" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default gift;
