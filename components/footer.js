import { useState, useEffect } from "react";
const footer = (props) => {
  const [icon, seticon] = useState(false);
  const [iconSrc, seticonSrc] = useState(undefined);
  const [iconNumber, seticonNumber] = useState(false);
  const changeIcon = (icons) => {
    seticon(true);
    switch (icons) {
      case 1:
        seticonNumber(icons);
        seticonSrc("/instagram.png");
        break;
      case 2:
        seticonNumber(icons);
        seticonSrc("/linkedin.png");
        break;
      case 3:
        seticonNumber(icons);
        seticonSrc("/twitter.png");
        break;
      case 4:
        seticonNumber(icons);
        seticonSrc("/youtube.png");
        break;
      case 5:
        seticonNumber(icons);
        seticonSrc("/paypal.png");

      case 6:
        seticonNumber(icons);
        break;
    }
  };

  const propModal = () => {
    props.handlerModalSetterBinance();
    changeIcon(6);
    seticon(false);
  };

  useEffect(() => {
   if (props.togglingBinanceColor === false) {
    seticonNumber(false)

   }
  }, [iconNumber]);


  return (
    <footer className=" flex flex-row bg-bluePastel  ">
      <div className="mr-auto">
        <h3 className="font-bold  underline mb-2 mt-5">Redes sociales</h3>
        <div className="inline-block w-15 mt-2">
          <img
            className="w-full cursor-pointer"
            src={icon && iconNumber === 1 ? iconSrc : "/instagram(3).png"}
            alt="instagram"
            title="instagram"
            onClick={() => {
              changeIcon(1);
              window.open(
                "https://www.instagram.com/psic.andreacostantino/?igshid=YmMyMTA2M2Y%3D",
                "_blank"
              );
            }}
            onMouseEnter={() => changeIcon(1)}
            onMouseLeave={() => seticon(false)}
          />
        </div>
        <div className="inline-block w-15 mt-2 cursor-pointer">
          <img
            className="w-full"
            src={icon && iconNumber === 2 ? iconSrc : "/linkedin(5).png"}
            alt="linkedin"
            title="linkedin"
            onClick={() => {
              changeIcon(2);
              window.open(
                "https://www.linkedin.com/in/andrea-angelica-costantino-67920b173",
                "_blank"
              );
            }}
            onMouseEnter={() => changeIcon(2)}
            onMouseLeave={() => seticon(false)}
          />
        </div>
        <div className="inline-block w-15 mt-2 cursor-pointer">
          <img
            className="w-full"
            src={icon && iconNumber === 3 ? iconSrc : "/twitter(1).png"}
            alt="twitter"
            title="twitter"
            onClick={() => {
              changeIcon(3);
              window.open("https://twitter.com/hablapsicologa", "_blank");
            }}
            onMouseEnter={() => changeIcon(3)}
            onMouseLeave={() => seticon(false)}
          />
        </div>
        <div className="inline-block w-15 mt-2 cursor-pointer">
          <img
            className="w-full"
            src={icon && iconNumber === 4 ? iconSrc : "/youtube(1).png"}
            alt="youtube"
            title="youtube"
            onClick={() => {
              changeIcon(4);
              window.open(
                "https://www.youtube.com/@psic.andreacostantino",
                "_blank"
              );
            }}
            onMouseEnter={() => changeIcon(4)}
            onMouseLeave={() => seticon(false)}
          />
        </div>
      </div>
      <div>
        <h3 className="font-bold underline mb-2 mt-5 ">Pagos</h3>
        <div>
          <img
            className="cursor-pointer inline-block w-auto min-[430px]:relative bottom-5 smallest-phone:max-tablet: mt-8 mb-10 "
            src={icon && iconNumber === 5 ? iconSrc : "/paypal(1).png"}
            alt="paypal"
            title="Paypal"
            onClick={() => {
              changeIcon(5);
              window.open(
                "https://paypal.me/psicandreacostantino?country.x=IT&locale.x=it_IT",
                "_blank"
              );
            }}
            onMouseEnter={() => changeIcon(5)}
            onMouseLeave={() => seticon(false)}
          />
          <img
            className="  hover:grayscale-0  grayscale  inline-block w-30 h-5 min-[430px]:max[634px]:relative bottom-5 smallest-phone:max-tablet: mb-10 cursor-pointer"
            src="/sanpaolo.png"
            alt="intesa san paolo"
            onClick={props.handlerModalSetter}
            title="Banco (Intesa San Paolo)"
          />
          <img
            className={`${
              iconNumber === 6
                ? ""
                : "hover:grayscale-0 hover:invert-0 hover:brightness-100 brightness-0"
            }   inline-block w-30 h-7 min-[634px]:relative cursor-pointer  min-[885px]:relative bottom-[20px]`}
            src="/binance.png"
            alt="binance"
            onClick={propModal}
            title="Binance"
          />
        </div>
      </div>
    </footer>
  );
};

export default footer;
