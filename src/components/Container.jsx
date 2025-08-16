import { Outlet } from "react-router-dom";

const Container = () => {
  return (
    <div className="w-[100%] ml-70 mt-18 h-auto">
      <Outlet />
    </div>
  );
};

export default Container;
