import axios from "axios";
import { useEffect, useState } from "react";

const Card = () => {
  const [reklama, setReklama] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get("https://testpsyedu.limsa.uz/advertisement");
      const datas = await resp.data.data;
      setReklama(datas);
    };
    getData();
  }, []);

  return (
    <div>
      {reklama.map((item) => {
        return (
          <div
            key={item.id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <video src={item.video}></video>
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Reklama beruvchi:{item.title}
                </h5>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Boshlanish vaqti: <br /> {item.createdAt}
                </h5>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Tugash vaqti: <br /> {item.finishAt}
                </h5>
              </a>

              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </a>
                <a
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
