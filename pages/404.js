import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
const notFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);
  return (
    <>
    <div className=" flex items-center justify-center h-1/2 w-4/5">
        <Image src={require("../images/notFound.jpg")}/>
      </div>
    </>
  );
};

export default notFound;
