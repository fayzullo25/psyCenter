import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const [phone, setPhone] = useState("+998991002225");
  const [password, setPassword] = useState("password");
  const payload = { phone, password };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(payload);

    try {
      const resp = await axios.post(
        "https://testpsyedu.limsa.uz/auth/login",
        payload
      );
      navigate("/index");
      localStorage.setItem("token", resp.data.access_token);
      console.log(resp.data.access_token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="bg-gradient-to-bl from-cyan-300 to-blue-400 h-screen w-screen">
        <div className=" w-[100%] h-[98vh] flex flex-col sm:flex-row justify-center sm:justify-between items-center">
          <div className="h-[95vh] hidden flex-1 justify-center items-center sm:block">
            <img className="w-[90%]" src="ai.png" alt="" />
          </div>
          <form
            onSubmit={handleSubmit}
            className=" border-amber-600 flex  flex-col justify-center items-center w-[50%] gap-y-3 text-white"
          >
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border bg-gradient-to-br from-cyan-400 to-blue-500 h-10 w-[100%] sm:w-[50%] rounded p-3 outline-0"
              type="text"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border bg-gradient-to-br from-cyan-400 to-blue-500 h-10 w-[100%] sm:w-[50%] rounded p-3 outline-0"
              type="text"
            />
            <button
              type="submit"
              className="border bg-cyan-950 h-10 mt-4 w-[50%] m-auto rounded-xl cursor-pointer  bg-gradient-to-br from-cyan-700 to-blue-700"
            >
              Kirish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
