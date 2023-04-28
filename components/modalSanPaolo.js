import Image from "next/image";
const modalSanPaolo = (props) => {
  console.log("modalSanPaolo");
  return (
    <div className=" z-50 fixed top-0 left-0 w-full h-full flex items-center bg-opacity-30 justify-center bg-gray-500">
      <div className="bg-white rounded p-8 max-w-xl">
        <div
          className="relative left-[267px] bottom-[20px] cursor-pointer"
          onClick={() => {
            props.handlerModalSetter();
          }}
        >
          <Image src={require("../images/close.png")} />
        </div>
        <p>IBAN: IT19L0306974772100000005474</p>
      </div>
    </div>
  );
};

export default modalSanPaolo;
