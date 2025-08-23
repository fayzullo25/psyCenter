import axios from "axios";
import { useEffect, useState } from "react";

const index = () => {
  const [getData, setGetData] = useState([]);
  const fetchaData = async () => {
    const data = await axios.get(
      "https://testpsyedu.limsa.uz/user-module-progress/22"
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
      <div className="flex flex-wrap gap-3 ">
        {getData.data?.data?.map((item) => {
          return (
            <div className="border w-[24%] h-[300px]">
              <iframe
                key={item.id}
                className="w-[100%] h-[100%]"
                src={item.videoUrl}
              ></iframe>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;
