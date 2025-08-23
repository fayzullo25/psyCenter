import axios from "axios";
import { useEffect, useState } from "react";

const index = () => {
  const [getData, setGetData] = useState([]);
  const fetchaData = async () => {
    const data = await axios.get(
      "https://testpsyedu.limsa.uz/tests/random-questions/category-type?category=first"
    );
    setGetData(data.data);
  };

  useEffect(() => {
    fetchaData();
  }, []);
  console.log(getData);

  return (
    <div>
      <div className="p-6 shadow-2xl my-2 flex justify-between gap-2 rounded">
        <input
          type="text"
          className="border text-xl p-2 rounded flex-4 outline-0"
        />
        <button className="flex-1 text-xl p-2 bg-emerald-500 text-white border rounded">
          OK
        </button>
      </div>
      <div className="flex flex-wrap text-xl gap-3 ">
        <table className="border w-full">
          <thead>
            <tr>
              <th className="border">No</th>
              <th className="border">Savol</th>
              <th className="border">A javob</th>
              <th className="border">B javob</th>
              <th className="border">C javob</th>
              <th className="border">D javob</th>
              <th className="border">To'g'ri javob</th>
              <th className="border">Mavzu</th>
              <th className="border">Boshqarish</th>
            </tr>
          </thead>
          <tbody>
            {getData?.data?.reverse().map((elem, idx) => {
              return (
                <tr>
                  <td className="border">{idx + 1}</td>
                  <td className="border">{elem.text}</td>
                  <td className="border">{elem.answers[0].text}</td>
                  <td className="border">{elem.answers[1].text}</td>
                  <td className="border">{elem.answers[2].text}</td>
                  <td className="border">{elem.answers[3].text}</td>

                  <td className="border">{elem.subcategory.name}</td>
                  <td className="border">{elem.subcategory?.name}</td>
                  <td className="border">1</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default index;
