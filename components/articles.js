import Image from "next/image";

const articles = (props) => {
  const image = props.photo;
  return (
    <>
      <h1 className="text-center font-bold text-xl px-[10px]">{props.title}</h1>
      <Image
        className=" min-[974px]:bottom-[2px] min-[974px]:relative w-[175px] h-[145px] float-left mb-4 "
        src={require(`../images/${image}.jpg`)}
        alt="articulo"
      />
      <p className="text-justify mt-2">{props.content}</p>
    </>
  );
};

export default articles;
