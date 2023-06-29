import Image from "next/image";
const modalBinance = (props) => {
  console.log("modalBinance");
  return (
    <div className=" z-50 fixed top-0 left-0 w-full h-full flex items-center bg-opacity-30 justify-center bg-gray-500">
      <div className="bg-white rounded p-8 max-w-xl">
        <div
          className="relative left-[267px] bottom-[20px] cursor-pointer"
          onClick={() => {
            props.handlerModalSetterBinance();
          }}
        >
          <Image
            className="relative left-[57px]"
            src={require("../images/close.png")}
          />
        </div>
        <div className="flex items-center justify-center">
        <Image
          className=""
          src={require("../images/qr binance.png")}
        />
        </div>
        <p className="text-center">
          0x942c7f4b221714cf79aa7d057cb9cc4fbe3da8b8
        </p>
        <p className="text-center">psic.andreacstantino@gmail.com</p>
      </div>
    </div>
  );
};

export default modalBinance;
