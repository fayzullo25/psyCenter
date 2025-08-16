import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
const Category = () => {
  const [dataUsers, setDataUsers] = useState([]);
  const [onModal, setOnModal] = useState(false);
  const [onSelect, setOnSelect] = useState(null);
  const [selectCategory, setSelectCategory] = useState(null);

  const getUsers = async () => {
    try {
      const resp = await axios.get("https://testpsyedu.limsa.uz/subcategories");
      setDataUsers(resp?.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  const handleEdit = (id) => {
    setOnModal(true);
    let nat = dataUsers.filter((user) => {
      return user.id == id;
    });
    console.log(nat);
  };
  return (
    <div className="bg-slate-100 absolute right-0 top-17 z-0 p-2 w-[80%]">
      <div className="flex pt-6 px-2 pb-5 justify-between">
        <h1 className="text-2xl font-semibold">Kategoriya</h1>
        <div className="flex gap-3">
          <button
            onClick={() => setOnModal(true)}
            className="bg-slate-500 text-white hover:bg-slate-400 border-0 outline-0 px-5 py-2 rounded active:bg-slate-800"
          >
            Kategoriya qo'shish
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-center divide-y divide-gray-200">
          <thead className=" bg-gray-100">
            <tr>
              <th className=" px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ism
              </th>
              <th className=" px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Kategoriya
              </th>
              <th className=" px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amallar
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y  divide-gray-200">
            {dataUsers.map((cat, idx) => {
              return (
                <tr key={cat.id} className="hover:bg-slate-100">
                  <td className=" px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {idx + 1}
                  </td>
                  <td className=" px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {cat.name}
                  </td>
                  <td className=" px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex space-x-2 justify-center">
                      <button
                        onClick={() => {
                          handleEdit(cat.id),
                            setOnModal(true),
                            setOnSelect(cat.id),
                            setSelectCategory(cat);
                        }}
                        className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
                      >
                        Edit
                      </button>
                      <button className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {onModal && (
        <Modal
          setOnModal={setOnModal}
          onSelect={onSelect}
          setOnSelect={setOnSelect}
          selectCategory={selectCategory}
        />
      )}
    </div>
  );
};

export default Category;
