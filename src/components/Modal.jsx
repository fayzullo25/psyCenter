import axios from "axios";
import { useState } from "react";

const Modal = ({ setOnModal, onSelect, setOnSelect, selectCategory }) => {
  const [categoryName, setCategoryName] = useState("");

  const payload = {
    name: categoryName,
  };
  const addCategory = async () => {
    try {
      await axios.post("https://testpsyedu.limsa.uz/subcategories", payload);
      getUsers();
      setOnModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      onClick={() => {
        setOnModal(false), setOnSelect(null);
      }}
      className="bg-slate-600/20 w-[100%] h-[100vh] fixed top-0 left-0 flex border   justify-center items-center"
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        onClick={(e) => e.stopPropagation()}
        className="border-slate-900/90 bg-slate-500 rounded-2xl flex p-10 flex-col justify-center items-center  gap-y-3 text-white"
      >
        <h1 className="text-2xl text-white font-semibold">
          Kategoriya {onSelect ? "tahrirlash" : "qo'shish"}
        </h1>
        <input
          value={selectCategory.name}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Yangi kategoriyani kiriting"
          className="border placeholder:text-sm border-gray-400 text-xl bg-white text-black h-10 w-[400px]  rounded p-3 outline-0"
          type="text"
        />
        <div className="flex gap-4">
          <button
            onClick={addCategory}
            type="submit"
            className="border bg-slate-950 mt-4 w-[100%] m-auto py-3 px-10 rounded-xl cursor-pointer "
          >
            OK
          </button>
          <button
            onClick={() => setOnModal(false)}
            type="button"
            className="border bg-slate-950 mt-4 w-[100%] m-auto py-3 px-10 rounded-xl cursor-pointer "
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
