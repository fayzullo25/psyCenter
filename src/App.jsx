import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPanel from "./components/AdminPanel";

import Results from "./pages/Results";
import Ads from "./pages/Ads";
import Category from "./pages/Category";
import Lessons from "./pages/Lessons";
import Regions from "./pages/Regions";
import Tests from "./pages/Tests";
import SignOut from "./pages/SignOut";
import Sidebar from "./Layout";
import BoshTestNat from "./pages/innerPages/boshTestNat";
import DarsTestNat from "./pages/innerPages/darsTestNat";
import CategoryTestNat from "./pages/innerPages/kategoryTestNat";
import YakuniyTestNat from "./pages/innerPages/yakuniyTestNat";
import BoshlangichTest from "./pages/TestsInnerPages/boshlangichTest";
import DoimiyTest from "./pages/TestsInnerPages/doimiyTest";
import YakuniyTest from "./pages/TestsInnerPages/yakuniyTest";
import DarsQoshish from "./pages/LessonsInnerPages/darsQoshish";
import ModuleQoshish from "./pages/LessonsInnerPages/modulQoshish";
import TestQoshish from "./pages/LessonsInnerPages/testQo'shish";

function App() {
  return (
    // <Sidebar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminPanel />} />
        <Route path="/index" element={<Sidebar />}>
          <Route path="ads" element={<Ads />} />
          <Route path="signout" element={<SignOut />} />
          <Route path="kategories" element={<Category />} />

          <Route path="results" element={<Results />}>
            <Route path="bosh-test-nat" element={<BoshTestNat />} />
            <Route path="dars-test-nat" element={<DarsTestNat />} />
            <Route path="kategory-test-nat" element={<CategoryTestNat />} />
            <Route path="yak-test-nat" element={<YakuniyTestNat />} />
          </Route>

          <Route path="tests" element={<Tests />}>
            <Route path="boshlangich-test" element={<BoshlangichTest />} />
            <Route path="doimiy-test" element={<DoimiyTest />} />
            <Route path="yakuniy-test" element={<YakuniyTest />} />
          </Route>

          <Route path="lessons" element={<Lessons />}>
            <Route path="dars-qoshish" element={<DarsQoshish />} />
            <Route path="module-qoshish" element={<ModuleQoshish />} />
            <Route path="test-qoshish" element={<TestQoshish />} />
          </Route>

          <Route path="regions" element={<Regions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
