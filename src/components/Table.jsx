import axios from "axios";
import { useEffect, useState } from "react";

const Table = () => {
  const [regions, setRegions] = useState([]);
  useEffect(() => {
    const getRegions = async () => {
      const resp = await axios.get("https://testpsyedu.limsa.uz/region");
      const dataRegions = resp.data.data;
      console.log(dataRegions);
      setRegions(dataRegions);
    };
    getRegions();
  }, []);

  return (
    <div>
      <table className="min-w-full text-center divide-y divide-gray-200">
        <thead className=" bg-gray-100">
          <tr>
            <th className=" px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              No
            </th>
            <th className=" px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Viloyat
            </th>
            <th className=" px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Boshqarish
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y  divide-gray-200">
          {regions.map((region, idx) => {
            return (
              <tr className="hover:bg-slate-100">
                <td className=" px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {idx + 1}
                </td>
                <td className=" px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {region.name}
                </td>
                <td className=" px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <div className="flex space-x-2 justify-center">
                    <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600">
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
  );
};

export default Table;
