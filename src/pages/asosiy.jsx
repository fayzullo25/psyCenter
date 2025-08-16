import DarkMode from "../components/menu/DarkMode";
import Menu from "../components/menu/Menu";
import Container from "../components/Container";

const Index = () => {
  return (
    <div className="  w-[100%]">
      <div className="flex">
        <Menu />
        <div className="w-[100%] flex">
          <DarkMode />
          <Container />
        </div>
      </div>
    </div>
  );
};

export default Index;
