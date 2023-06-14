import Image from "next/image";
import { useRouter } from 'next/navigation'
function goBack() {
    const {push}= useRouter()
    const goToArticles= () => {
        push('/articulos');
    }
  return (
    <Image
    className="cursor-pointer"
      src={require("../images/goBack.png")}
      width={45}
      height={45}
      alt="ir atras"
      title="ir atras"
      onClick={goToArticles}
    />
  );
}

export default goBack;
