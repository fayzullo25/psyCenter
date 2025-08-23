import React from "react";
import Reklama from "../components/Reklama";

const Ads = () => {
  return (
    <div className="text-4xl text-center  text-gray-800">
      <div className="text-4xl text-center flex justify-center items-center mt-10  text-gray-800">
        <div className=" w-[100%] h-[80vh] flex flex-col gap-7">
          <div className=" shadow-2xl bg-white w-[100%] h-[20%] rounded-xl flex gap-6 p-12 justify-between items-center">
            <input
              className=" border text-xl border-gray-300 rounded shadow w-[60%]  outline-0 p-2 px-4"
              type="text"
            />
            <button className="w-48 hover:bg-blue-500 border py-2 active:scale-102 border-blue-300 bg-blue-600 text-white text-xl  rounded shadow ">
              Reklama yaratish
            </button>
          </div>
          <div className=" shadow-2xl bg-white w-[100%] h-[90%] rounded-xl">
            <Reklama />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
