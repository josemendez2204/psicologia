import Image from "next/image";
function sentSuccess() {
  return (
    <div className="z-50 fixed top-0 left-0 w-full h-full flex items-center bg-opacity-30 justify-center">
      <Image
        width={100}
        height={100}
        alt="form sent"
        src={require("../images/message.gif")}
      />
    </div>
  );
}

export default sentSuccess;
