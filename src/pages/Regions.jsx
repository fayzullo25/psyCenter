import React from "react";
import Table from "../components/Table";

const Regions = () => {
  return (
    <div className="text-xl text-center flex justify-center items-center   text-gray-800">
      <div className=" w-[100%] h-auto flex flex-col gap-7">
        <div className=" shadow-xl bg-white w-[100%] h-[20%] rounded-xl flex gap-6 p-12 justify-between items-center">
          <input
            className=" border text-xl border-gray-300 rounded shadow w-[60%]  outline-0 p-2 px-4"
            type="text"
          />
          <button className="w-48 hover:bg-blue-500 border py-2 active:scale-102 border-blue-300 bg-blue-600 text-white text-xl  rounded shadow ">
            Viloyat yaratish
          </button>
        </div>
        <div className=" shadow-xl bg-white w-[100%] h-[90%] rounded-xl">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Regions;
