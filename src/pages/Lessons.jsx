import React from "react";
import { Outlet } from "react-router-dom";

const Lessons = () => {
  return (
    <div className="text-4xl text-center text-gray-800">
      <Outlet />
    </div>
  );
};

export default Lessons;
