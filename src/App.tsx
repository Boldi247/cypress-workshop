import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import LocatorsPage from "./pages/LocatorsPage";
import FormsPage from "./pages/FormsPage";
import AdvancedInputTypes from "./pages/AdvancedInputTypes";
import LocalStoragePage from "./pages/LocalStoragePage";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-[62px] px-4">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/locators" element={<LocatorsPage />} />
            <Route path="/forms" element={<FormsPage />} />
            <Route
              path="/advanced-input-types"
              element={<AdvancedInputTypes />}
            />
            <Route path="/localstorage" element={<LocalStoragePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
