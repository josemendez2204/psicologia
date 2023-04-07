import Image from "next/image";
const ImagesOfArticles = (props) => {
    const images= props.images
  return (
    <div className="bg-white flex items-center justify-center flex-col ">
      <Image
        className="w-[50%] mb-3.5"
        src={require(`../images/${images}.jpg`)}
        alt="psicologia de la salud"
      />
    </div>
  );
};

export default ImagesOfArticles;
