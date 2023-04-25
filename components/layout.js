import Navbar from "./navbar";
import Footer from "./footer";
import Header from "./header";
import ModalSanPaolo from "./modalSanPaolo";
import ModalBinance from "./modalBinance";
import { useState } from "react";
const layout = ({ children }) => {
  const [modalSanPaolohandling, setModalSanPaolo] = useState(false);
  const [modalBinanceHandler, setModalBinanceHandler] = useState(false);
  const handleModalSanPaolo = () => {
    setModalSanPaolo(!modalSanPaolohandling);
  };

  const handleModalbinance = () => {
    setModalBinanceHandler(!modalBinanceHandler);
  };
  return (
    <>
      <Header />
      <Navbar />
      {modalSanPaolohandling && (
        <ModalSanPaolo handlerModalSetter={handleModalSanPaolo} />
      )}
      {modalBinanceHandler && (
        <ModalBinance handlerModalSetterBinance={handleModalbinance} />
      )}
      {children}
      <Footer
        handlerModalSetter={handleModalSanPaolo}
        handlerModalSetterBinance={handleModalbinance}
        togglingBinanceColor={modalBinanceHandler}
      />
    </>
  );
};

export default layout;
