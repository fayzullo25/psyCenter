import { Outlet } from "react-router-dom";

const Results = () => {
  return (
    <div className="text-4xl text-center  text-gray-800">
      <Outlet />
    </div>
  );
};

export default Results;
