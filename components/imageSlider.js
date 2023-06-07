import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
function imageSlider() {
  return (
    <>
    <div className="flex justify-center">
      <Carousel className="py-9 w-[80%] min-[810px]:w-[40%] " autoFocus autoPlay infiniteLoop>
        <div>
          <Image
            src={require("../images/uru.jpg")}
            width={100}
            height={100}
            alt="Image 1"
          />
        </div>
        <div>
          <Image src={require("../images/provider.jpg")} width={100} height={100} alt="Image 2" />
        </div>
        <div>
          <Image src={require("../images/colegioDePsicologo.jpg")} width={100} height={600} alt="Image 3" />
        </div>
        <div>
          <Image src={require("../images/universita.jpg")} width={100} height={100} alt="Image 2" />
        </div>
      </Carousel>
      </div>
    </>
  );
}

export default imageSlider;
