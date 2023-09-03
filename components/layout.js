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
      />
      <p>
        &copy; 2023 <a href="mailto:mendezhernandezjosehumberto@gmail.com" className="text-teal-950">Jose Mendez</a>. Todos
        los derechos reservados.
      </p>
    </>
  );
};

export default layout;
