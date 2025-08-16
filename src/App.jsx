import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPanel from "./components/AdminPanel";
import Index from "./pages/asosiy";
import Statistics from "./pages/Statistics";
import Ads from "./pages/Ads";
import Category from "./pages/Category";
import Lessons from "./pages/Lessons";
import Regions from "./pages/Regions";
import Tests from "./pages/Tests";
import SignOut from "./pages/SignOut";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminPanel />} />
        <Route path="/index" element={<Index />}>
          <Route path="ads" element={<Ads />} />
          <Route path="signout" element={<SignOut />} />
          <Route path="category" element={<Category />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="lessons" element={<Lessons />} />
          <Route path="regions" element={<Regions />} />
          <Route path="tests" element={<Tests />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
