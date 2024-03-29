const priceTable = (props) => {
  return (
    <button onClick={props.onClick} title="haz click para comunicarte">
    <div  className="flex items-center flex-col h-[300px] w-[230px] rounded-t-[10px] rounded-r-[50px]  mr-4 mt-4 mb-4 border-solid border-gray-900 shadow-sm shadow-black">
      <h5 style={{ whiteSpace: "pre-line" }} className="mt-3 text-center font-medium">
        {props.title}
      </h5>
      <div className=" mt-7 rounded-full w-[60%] h-[43%]  bg-gradient-to-r from-[#cfcdcb] via-[#cd93b6] to-[#cfcdcb]">
        <p className="text-center mt-[45px] text-3xl text-[#2d2c2c]"> {props.price} </p>
      </div>
    </div>
    </button>
  );
};

export default priceTable;
