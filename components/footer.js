const footer = () => {
  return (
    <footer className=" flex flex-row bg-bluePastel py-2 ">
      <div className="mr-auto">
        <h3 className="font-bold  underline  ">Redes sociales</h3>
        <div className="inline-block w-15 mt-2">
          <img className="w-full" src="instagram.png" alt="instagram" />
        </div>
        <div className="inline-block w-15 mt-2">
          <img className="w-full" src="linkedin.png" alt="linkedin" />
        </div>
        <div className="inline-block w-15 mt-2">
          <img className="w-full" src="twitter.png" alt="twitter" />
        </div>
      </div>

      <div>
        <h3 className="font-bold underline ">Pagos</h3>
        <div>
          <img
            className="inline-block w-auto min-[430px]:relative bottom-5 smallest-phone:max-tablet: mt-8 mb-10 "
            src="paypal.png"
            alt="paypal"
          />
          <img
            className="inline-block w-30 h-5 min-[430px]:max[634px]:relative bottom-5 smallest-phone:max-tablet: mb-10 min-[883px]: bottom-3"
            src="sanpaolo.png"
            alt="intesa san paolo"
          />
          <img
            className="inline-block w-30 h-7 min- min-[634px]:relative bottom-7  min-[885px]:relative bottom-4 "
            src="binance.png"
            alt="binance"
          />
        </div>
      </div>
    </footer>
  );
};

export default footer;
